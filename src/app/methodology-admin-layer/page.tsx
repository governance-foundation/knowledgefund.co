import type { Metadata } from "next";
import StitchHtmlPage from "@/lib/stitch-html";

export const metadata: Metadata = {
  title: "Methodology Admin Layer | KnowledgeFund",
  description:
    "KnowledgeFund methodology for turning scattered knowledge into governed capability across the administrative layer of the business.",
};

export default function MethodologyAdminLayerPage() {
  return <StitchHtmlPage page="methodology_admin_layer" />;
}
