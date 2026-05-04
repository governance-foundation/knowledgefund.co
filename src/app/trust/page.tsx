import type { Metadata } from "next";
import StitchHtmlPage from "@/lib/stitch-html";

export const metadata: Metadata = {
  title: "Trust Architecture | Knowledge Fund",
  description: "Governance and trust architecture for sovereign, auditable enterprise intelligence.",
};

export default function TrustPage() {
  return (
    <StitchHtmlPage
      activePage="trust"
      localImages={["/stitch-redesign/knowledgefund.png"]}
      page="trust_governance"
      tintedImageIndexes={[0]}
    />
  );
}
