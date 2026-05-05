import type { Metadata } from "next";
import StitchHtmlPage from "@/lib/stitch-html";

export const metadata: Metadata = {
  title: "Use Cases | Knowledge Fund",
  description:
    "Practical use cases for governed AI work across proposals, operations, support, marketing, reporting, and systems.",
};

export default function UseCasesPage() {
  return <StitchHtmlPage activePage="methodology" page="methodology" />;
}
