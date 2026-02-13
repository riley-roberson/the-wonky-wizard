"use client";

import { Item, Skill } from "@/lib/types";

interface InventoryBarProps {
  items: Item[];
  skills: Skill[];
}

export default function InventoryBar({ items, skills }: InventoryBarProps) {
  if (items.length === 0 && skills.length === 0) return null;

  return (
    <div className="mt-6 rounded-2xl border-2 border-purple-700/50 bg-purple-900/30 p-4">
      <h3 className="mb-3 text-lg font-bold text-purple-300">Your Adventure Bag</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <div
            key={item.name}
            className="group relative rounded-xl bg-gray-800 px-3 py-2 shadow-sm transition-all hover:shadow-md"
          >
            <span className="text-xl">{item.emoji}</span>
            <span className="ml-1 text-sm font-medium text-gray-200">{item.name}</span>
            <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 rounded-lg bg-gray-700 px-3 py-2 text-sm text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 whitespace-nowrap">
              {item.description}
            </div>
          </div>
        ))}
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group relative rounded-xl bg-gray-800 px-3 py-2 shadow-sm transition-all hover:shadow-md"
          >
            <span className="text-xl">{skill.emoji}</span>
            <span className="ml-1 text-sm font-medium text-gray-200">{skill.name}</span>
            <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 rounded-lg bg-gray-700 px-3 py-2 text-sm text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 whitespace-nowrap">
              {skill.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
