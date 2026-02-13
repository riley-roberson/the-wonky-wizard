import { getAllNodeIds } from "@/lib/storyData";
import StoryPageClient from "@/components/StoryPageClient";

export function generateStaticParams() {
  return getAllNodeIds();
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ character: string; nodeId: string }>;
}) {
  const { character, nodeId } = await params;
  return <StoryPageClient character={character} nodeId={nodeId} />;
}
