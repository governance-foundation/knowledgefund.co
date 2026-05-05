import type { Metadata } from "next";
import StitchHtmlPage from "@/lib/stitch-html";

export const metadata: Metadata = {
  title: "Trust | Knowledge Fund",
  description:
    "How KnowledgeFund supports responsible, controlled, reviewable, and evidence-backed AI adoption.",
};

export default function TrustPage() {
  return (
    <StitchHtmlPage
      activePage="trust"
      page="trust_governance"
    />
  );
}
