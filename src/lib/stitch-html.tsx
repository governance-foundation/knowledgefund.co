import { readFileSync } from "node:fs";
import path from "node:path";

type StitchHtmlPageProps = {
  page: string;
  localImages?: string[];
};

const remoteImagePattern = /src="https:\/\/lh3\.googleusercontent\.com\/[^"]+"/g;

function getStitchBody(page: string, localImages: string[]) {
  const htmlPath = path.join(process.cwd(), "src", "stitch-source", page, "code.html");
  const html = readFileSync(htmlPath, "utf8");
  const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1];

  if (!body) {
    throw new Error(`Unable to extract <body> from Stitch source: ${htmlPath}`);
  }

  if (localImages.length === 0) {
    return body;
  }

  let imageIndex = 0;
  return body.replace(remoteImagePattern, () => {
    const localImage = localImages[imageIndex];
    imageIndex += 1;

    if (!localImage) {
      throw new Error(`Missing local image mapping for Stitch source: ${htmlPath}`);
    }

    return `src="${localImage}"`;
  });
}

export default function StitchHtmlPage({ page, localImages }: StitchHtmlPageProps) {
  const markup = getStitchBody(page, localImages ?? []);

  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
