import type { Metadata } from "next";
import StitchHtmlPage from "@/lib/stitch-html";

export const metadata: Metadata = {
  title: "Platform | Knowledge Fund",
  description:
    "How KnowledgeFund connects approved business knowledge, governance rules, and AI-supported execution.",
};

export default function PlatformPage() {
  return (
    <StitchHtmlPage
      activePage="platform"
      localImages={["/stitch-redesign/knowledgefund-display.jpg"]}
      page="platform_product"
    />
  );
}
