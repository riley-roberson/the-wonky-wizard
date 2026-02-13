"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getStoryNode, getCharacter } from "@/lib/storyData";
import { getItems, getSkills, addItem, addSkill, hasItem, hasSkill, resetInventory } from "@/lib/inventory";
import { saveProgress, clearProgress } from "@/lib/progress";
import { Item, Skill } from "@/lib/types";
import SillyMomentBox from "@/components/SillyMomentBox";
import ChoiceButton from "@/components/ChoiceButton";
import InventoryBar from "@/components/InventoryBar";
import ItemEarnedPopup from "@/components/ItemEarnedPopup";
import EndingCelebration from "@/components/EndingCelebration";

interface StoryPageClientProps {
  character: string;
  nodeId: string;
}

export default function StoryPageClient({ character, nodeId }: StoryPageClientProps) {
  const router = useRouter();

  const [items, setItems] = useState<Item[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [showItemPopup, setShowItemPopup] = useState<Item | undefined>();
  const [showSkillPopup, setShowSkillPopup] = useState<Skill | undefined>();
  const [mounted, setMounted] = useState(false);

  const node = getStoryNode(character, nodeId);
  const charInfo = getCharacter(character);

  useEffect(() => {
    setMounted(true);
    setItems(getItems(character));
    setSkills(getSkills(character));
    saveProgress(character, nodeId);

    if (node?.itemEarned) {
      const alreadyHas = hasItem(character, node.itemEarned.name);
      addItem(character, node.itemEarned);
      if (!alreadyHas) {
        setShowItemPopup(node.itemEarned);
      }
      setItems(getItems(character));
    }
    if (node?.skillEarned) {
      const alreadyHas = hasSkill(character, node.skillEarned.name);
      addSkill(character, node.skillEarned);
      if (!alreadyHas) {
        setShowSkillPopup(node.skillEarned);
      }
      setSkills(getSkills(character));
    }
  }, [character, nodeId, node?.itemEarned, node?.skillEarned]);

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-4xl animate-sparkle">✨</div>
      </div>
    );
  }

  if (!node || !charInfo) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">
          Oops! Story not found!
        </h1>
        <p className="mb-8 text-xl text-gray-600">
          This page of the story seems to have wandered off...
        </p>
        <button
          onClick={() => router.push("/")}
          className="rounded-2xl bg-gradient-to-r from-purple-400 to-pink-500 px-8 py-3 text-xl font-bold text-white shadow-lg"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  if (node.isEnding) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-8">
        <div className="mb-8 rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-3xl font-bold text-amber-600">
            {node.title}
          </h2>
          <p className="text-xl leading-relaxed text-gray-700 whitespace-pre-line">
            {node.narrative}
          </p>
          <SillyMomentBox text={node.sillyMoment} />
        </div>
        <EndingCelebration
          characterName={charInfo.name}
          items={items}
          skills={skills}
          onPlayAgain={() => {
            resetInventory(character);
            clearProgress(character);
            router.push("/");
          }}
        />
      </main>
    );
  }

  function handleChoice(nextNodeId: string) {
    router.push(`/story/${character}/${nextNodeId}`);
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <ItemEarnedPopup item={showItemPopup} />
      <ItemEarnedPopup skill={showSkillPopup} />

      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-3xl">{charInfo.emoji}</span>
          <span className="text-lg font-bold text-gray-600">
            {charInfo.name}
          </span>
        </div>
        <button
          onClick={() => {
            resetInventory(character);
            clearProgress(character);
            router.push("/");
          }}
          className="rounded-lg px-3 py-1 text-sm text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
        >
          Start Over
        </button>
      </div>

      <div className="rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
          {node.title}
        </h2>

        <p className="text-xl leading-relaxed text-gray-700 whitespace-pre-line">
          {node.narrative}
        </p>

        <SillyMomentBox text={node.sillyMoment} />

        <div className="mt-8">
          <h3 className="mb-4 text-xl font-bold text-gray-700">
            What do you do?
          </h3>
          <div className="flex flex-col gap-4">
            {node.choices.map((choice, i) => {
              const locked =
                (choice.requiresItem &&
                  !items.find((it) => it.name === choice.requiresItem)) ||
                (choice.requiresSkill &&
                  !skills.find((sk) => sk.name === choice.requiresSkill));
              return (
                <ChoiceButton
                  key={choice.nextNodeId}
                  choice={choice}
                  index={i}
                  disabled={!!locked}
                  onClick={() => handleChoice(choice.nextNodeId)}
                />
              );
            })}
          </div>
        </div>
      </div>

      <InventoryBar items={items} skills={skills} />
    </main>
  );
}
