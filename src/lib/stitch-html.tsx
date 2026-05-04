import { readFileSync } from "node:fs";
import path from "node:path";

type StitchHtmlPageProps = {
  page: string;
  localImages?: string[];
  activePage?: StitchNavKey;
  tintedImageIndexes?: number[];
};

type StitchNavKey = "platform" | "governance" | "trust" | "methodology";

const stitchNavItems: Array<{ href: string; key: StitchNavKey; label: string }> = [
  { href: "/", key: "platform", label: "Platform" },
  { href: "/governance", key: "governance", label: "Governance" },
  { href: "/trust", key: "trust", label: "Trust" },
  { href: "/methodology", key: "methodology", label: "Methodology" },
];

const footerLinks = [
  { href: "/", label: "Platform" },
  { href: "/governance", label: "Governance Framework" },
  { href: "/trust", label: "Trust Architecture" },
  { href: "/methodology", label: "Methodology" },
  { href: "/trust", label: "Security Architecture" },
  { href: "/trust", label: "SOC 2 Trust" },
  { href: "/trust", label: "ISO 27001" },
  { href: "/methodology", label: "API Docs" },
  { href: "mailto:knowledgefund@gmail.com", label: "Contact" },
];

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function splitUrlSuffix(value: string) {
  const hashIndex = value.indexOf("#");
  const hash = hashIndex === -1 ? "" : value.slice(hashIndex);
  const beforeHash = hashIndex === -1 ? value : value.slice(0, hashIndex);
  const queryIndex = beforeHash.indexOf("?");
  const query = queryIndex === -1 ? "" : beforeHash.slice(queryIndex);
  const pathName = queryIndex === -1 ? beforeHash : beforeHash.slice(0, queryIndex);

  return { hash, pathName, query };
}

function getRelativePrefix(page: string) {
  return page === "platform" ? "" : "../";
}

function toPageRelativeUrl(value: string, attributeName: string, page: string) {
  if (!value.startsWith("/") || value.startsWith("//")) {
    return value;
  }

  const relativePrefix = getRelativePrefix(page);

  if (attributeName !== "href") {
    return `${relativePrefix}${value.slice(1)}`;
  }

  const { hash, pathName, query } = splitUrlSuffix(value);
  const hasFileExtension = /\.[a-z0-9]+$/i.test(pathName);

  if (pathName === "/") {
    return `${relativePrefix || "./"}${query}${hash}`;
  }

  const relativePath = `${relativePrefix}${pathName.slice(1)}`;
  const normalizedRoutePath = hasFileExtension || relativePath.endsWith("/") ? relativePath : `${relativePath}/`;

  return `${normalizedRoutePath}${query}${hash}`;
}

function makeRootUrlsRelative(body: string, page: string) {
  return body.replace(/\b(href|src)="(\/[^"]*)"/g, (_match, attributeName: string, value: string) => {
    return `${attributeName}="${toPageRelativeUrl(value, attributeName, page)}"`;
  });
}

function getSharedHeader(activePage?: StitchNavKey) {
  const activeClass = "text-[#2E62FF] font-semibold transition-colors";
  const inactiveClass = "text-slate-400 hover:text-white transition-colors";
  const navMarkup = stitchNavItems
    .map((item) => {
      const className = item.key === activePage ? activeClass : inactiveClass;

      return `<a class="${className}" href="${item.href}">${item.label}</a>`;
    })
    .join("\n");

  return `<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-[#09090B]/80 backdrop-blur-xl border-b border-white/10 flex justify-between items-center px-8 h-16 max-w-full font-manrope text-sm tracking-tight">
<div class="flex items-center gap-8">
<span class="text-xl font-bold tracking-tighter text-slate-50 uppercase">Knowledge Fund</span>
<div class="hidden md:flex gap-6">
${navMarkup}
</div>
</div>
<div class="flex items-center gap-4">
<a class="bg-primary-container text-on-primary-container px-5 py-2 rounded-lg font-semibold scale-95 active:scale-90 transition-transform" href="mailto:knowledgefund@gmail.com">Connect</a>
</div>
</nav>`;
}

function normalizeHeader(body: string, activePage?: StitchNavKey) {
  return body.replace(/(?:<!--\s*Top\s*Nav(?:igation)?\s*Bar\s*-->\s*)?<nav\b[\s\S]*?<\/nav>/i, getSharedHeader(activePage));
}

function normalizeFooterLinks(body: string) {
  return footerLinks.reduce((markup, link) => {
    const labelPattern = escapeRegExp(link.label);
    const linkPattern = new RegExp(`(<a\\b[^>]*?href=")[^"]*("[^>]*>\\s*${labelPattern}\\s*</a>)`, "g");

    return markup.replace(linkPattern, `$1${link.href}$2`);
  }, body);
}

function replaceImages(body: string, localImages: string[], tintedImageIndexes: number[]) {
  if (localImages.length === 0) {
    return body;
  }

  let imageIndex = 0;

  return body.replace(/<img\b[^>]*>/g, (tag) => {
    const localImage = localImages[imageIndex];
    const shouldTint = tintedImageIndexes.includes(imageIndex);
    imageIndex += 1;

    if (!localImage) {
      return tag;
    }

    const nextTag = tag.replace(/\bsrc="[^"]*"/, `src="${localImage}"`);

    if (!shouldTint) {
      return nextTag;
    }

    if (/\bclass="[^"]*"/.test(nextTag)) {
      return nextTag.replace(
        /\bclass="([^"]*)"/,
        (_classMatch, className: string) =>
          `class="${className} grayscale opacity-80 brightness-[0.55] contrast-[0.95]"`,
      );
    }

    return nextTag.replace("<img", '<img class="grayscale opacity-80 brightness-[0.55] contrast-[0.95]"');
  });
}

function getPageStyles(html: string) {
  return Array.from(html.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/gi))
    .map((styleMatch) => styleMatch[0])
    .join("\n");
}

function getStitchBody(
  page: string,
  localImages: string[],
  activePage?: StitchNavKey,
  tintedImageIndexes: number[] = [],
) {
  const htmlPath = path.join(process.cwd(), "src", "stitch-source", page, "code.html");
  const html = readFileSync(htmlPath, "utf8");
  const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1];

  if (!body) {
    throw new Error(`Unable to extract <body> from Stitch source: ${htmlPath}`);
  }

  const pageStyles = getPageStyles(html);
  const bodyMarkup = normalizeFooterLinks(normalizeHeader(replaceImages(body, localImages, tintedImageIndexes), activePage));

  return makeRootUrlsRelative(`${pageStyles}\n${bodyMarkup}`, page);
}

export default function StitchHtmlPage({ activePage, localImages, page, tintedImageIndexes }: StitchHtmlPageProps) {
  const markup = getStitchBody(page, localImages ?? [], activePage, tintedImageIndexes);

  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
