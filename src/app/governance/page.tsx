import type { Metadata } from "next";
import StitchHtmlPage from "@/lib/stitch-html";

export const metadata: Metadata = {
  title: "Governance | KnowledgeFund",
  description: "How KnowledgeFund keeps AI-supported work controlled, approved, accountable, and evidence-backed.",
};

export default function GovernancePage() {
  return (
    <StitchHtmlPage
      activePage="governance"
      page="ai_governance_trust_architecture"
    />
  );
}
