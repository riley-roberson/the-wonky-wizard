"use client";

import { CharacterInfo } from "@/lib/types";

interface CharacterCardProps {
  character: CharacterInfo;
  onClick: () => void;
}

export default function CharacterCard({ character, onClick }: CharacterCardProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative w-full max-w-sm rounded-3xl bg-gradient-to-br ${character.color} p-1 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95`}
    >
      <div className="rounded-[1.3rem] bg-gray-900/95 p-6 text-center">
        <div className="mb-3 text-7xl animate-float">{character.emoji}</div>
        <h2 className="mb-2 text-2xl font-bold text-gray-100">
          {character.name}
        </h2>
        <p className="mb-4 text-base text-gray-400">{character.tagline}</p>
        <div className="flex items-center justify-center gap-3 text-sm text-gray-300">
          <span className="rounded-full bg-amber-900/50 px-3 py-1">
            {character.startingItem.emoji} {character.startingItem.name}
          </span>
          <span className="rounded-full bg-blue-900/50 px-3 py-1">
            {character.startingSkill.emoji} {character.startingSkill.name}
          </span>
        </div>
        <div className="mt-4 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 py-2 text-lg font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
          Start Adventure!
        </div>
      </div>
    </button>
  );
}
