import type { Metadata } from "next";
import StitchHtmlPage from "@/lib/stitch-html";

export const metadata: Metadata = {
  title: "Mission Alignment | KnowledgeFund",
  description: "Help your organisation understand, agree, and move in one direction.",
};

export default function CoordinationPage() {
  return <StitchHtmlPage page="mission_alignment_strategic_action" />;
}
