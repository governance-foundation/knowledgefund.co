import type { Metadata } from "next";
import StitchHtmlPage from "@/lib/stitch-html";

export const metadata: Metadata = {
  title: "Methodology | Knowledge Fund",
  description: "Knowledge Fund methodology for governed AI adoption and institutional readiness.",
};

export default function MethodologyPage() {
  return (
    <StitchHtmlPage
      activePage="methodology"
      localImages={["/stitch-redesign/knowledgefund.png"]}
      page="methodology"
      tintedImageIndexes={[0]}
    />
  );
}
