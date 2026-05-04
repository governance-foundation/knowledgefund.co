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

function getActiveNavClass(linkMarkup: string, inactiveClass: string) {
  const classMatches = Array.from(linkMarkup.matchAll(/<a\s+class="([^"]*)"[^>]*>/g));
  const activeClass = classMatches.find((match) => {
    const className = match[1];

    return className.includes("border-b-2") || className.includes("text-[#2E62FF]");
  })?.[1];

  if (activeClass) {
    return activeClass;
  }

  const promotedClass = inactiveClass
    .replace("text-slate-400 hover:text-white", "text-[#2E62FF]")
    .replace("text-slate-400", "text-[#2E62FF]");

  return promotedClass.includes("font-semibold") ? promotedClass : `${promotedClass} font-semibold`;
}

function normalizeNav(body: string, activePage?: StitchNavKey) {
  if (!activePage) {
    return body;
  }

  return body.replace(
    /(<nav\b[\s\S]*?<div class="hidden md:flex[^"]*">)([\s\S]*?)(<\/div>[\s\S]*?<\/nav>)/i,
    (_match: string, before: string, linkMarkup: string, after: string) => {
      const inactiveClass =
        Array.from(linkMarkup.matchAll(/<a\s+class="([^"]*)"[^>]*>/g)).find((classMatch) =>
          classMatch[1].includes("text-slate-400"),
        )?.[1] ?? "text-slate-400 hover:text-white transition-colors";
      const activeClass = getActiveNavClass(linkMarkup, inactiveClass);
      const navMarkup = stitchNavItems
        .map((item) => {
          const className = item.key === activePage ? activeClass : inactiveClass;

          return `<a class="${className}" href="${item.href}">${item.label}</a>`;
        })
        .join("\n");

      return `${before}\n${navMarkup}\n${after}`;
    },
  );
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
  const bodyMarkup = normalizeFooterLinks(normalizeNav(replaceImages(body, localImages, tintedImageIndexes), activePage));

  return `${pageStyles}\n${bodyMarkup}`;
}

export default function StitchHtmlPage({ activePage, localImages, page, tintedImageIndexes }: StitchHtmlPageProps) {
  const markup = getStitchBody(page, localImages ?? [], activePage, tintedImageIndexes);

  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
