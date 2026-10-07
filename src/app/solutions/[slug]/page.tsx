import { SolutionPage } from "@/components/pages/SolutionPage";
import { SOLUTION_SLUGS, type SolutionSlug } from "@/lib/routes";

export function generateStaticParams() {
  return SOLUTION_SLUGS.map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <SolutionPage slug={slug as SolutionSlug} />;
}
