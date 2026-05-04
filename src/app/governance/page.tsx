import type { Metadata } from "next";
import StitchHtmlPage from "@/lib/stitch-html";

export const metadata: Metadata = {
  title: "Governance & AI Safety | Knowledge Fund",
  description: "Institutional AI governance, auditability, and trust architecture for safe adoption.",
};

export default function GovernancePage() {
  return <StitchHtmlPage activePage="governance" page="ai_governance_trust_architecture" />;
}
