"use client";

import { useRouter } from "next/navigation";
import { characters, getCharacter } from "@/lib/storyData";
import { getAnyProgress } from "@/lib/progress";
import { addItem, addSkill } from "@/lib/inventory";
import { saveProgress } from "@/lib/progress";
import CharacterCard from "@/components/CharacterCard";
import { useEffect, useState } from "react";

export default function HomePage() {
  const router = useRouter();
  const [savedProgress, setSavedProgress] = useState<{
    character: string;
    currentNodeId: string;
  } | null>(null);

  useEffect(() => {
    setSavedProgress(getAnyProgress());
  }, []);

  function startAdventure(characterId: string) {
    const character = getCharacter(characterId);
    if (!character) return;
    addItem(characterId, character.startingItem);
    addSkill(characterId, character.startingSkill);
    saveProgress(characterId, character.startNodeId);
    router.push(`/story/${characterId}/${character.startNodeId}`);
  }

  function continueAdventure() {
    if (savedProgress) {
      router.push(
        `/story/${savedProgress.character}/${savedProgress.currentNodeId}`
      );
    }
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-2 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400">
          The Wonky Wizard
        </h1>
        <p className="text-2xl text-gray-400">
          Pick your hero and start your bedtime story!
        </p>
        <div className="mt-2 text-4xl">
          <span className="animate-sparkle inline-block">✨</span>
          <span className="animate-sparkle inline-block" style={{ animationDelay: "0.3s" }}>🌟</span>
          <span className="animate-sparkle inline-block" style={{ animationDelay: "0.6s" }}>✨</span>
        </div>
      </div>

      {savedProgress && (
        <div className="mb-8 text-center">
          <button
            onClick={continueAdventure}
            className="rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 px-8 py-3 text-xl font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Continue Your Story!
          </button>
        </div>
      )}

      <div className="grid gap-8 md:grid-cols-3">
        {characters.map((char) => (
          <CharacterCard
            key={char.id}
            character={char}
            onClick={() => startAdventure(char.id)}
          />
        ))}
      </div>

      <footer className="mt-16 text-center text-sm text-gray-600">
        A bedtime story adventure 🌙
      </footer>
    </main>
  );
}
