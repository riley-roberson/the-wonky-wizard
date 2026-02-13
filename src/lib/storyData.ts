import { CharacterInfo, StoryNode } from "./types";
import { wonkyWizardStory } from "./stories/wonky-wizard";
import { nobleKnightStory } from "./stories/noble-knight";
import { prettyPrincessStory } from "./stories/pretty-princess";

export const characters: CharacterInfo[] = [
  {
    id: "wonky-wizard",
    name: "The Wonky Wizard",
    tagline: "A silly wizard whose spells never go quite right!",
    emoji: "🧙",
    color: "from-purple-500 to-indigo-600",
    startingItem: {
      name: "Mighty Wand",
      description: "A powerful wand that crackles with magical energy!",
      emoji: "🪄",
    },
    startingSkill: {
      name: "Silly Spell",
      description: "Makes things turn rainbow colored! Mostly...",
      emoji: "🔮",
    },
    startNodeId: "wz-01",
  },
  {
    id: "noble-knight",
    name: "The Noble Knight",
    tagline: "A brave knight with a horse that won't stop talking!",
    emoji: "🗡️",
    color: "from-amber-500 to-red-600",
    startingItem: {
      name: "Wooden Sword",
      description: "A trusty sword for a trusty knight!",
      emoji: "⚔️",
    },
    startingSkill: {
      name: "Brave Charge",
      description: "Run really fast with a funny battle cry! CHAAARGE!",
      emoji: "🏃",
    },
    startNodeId: "kn-01",
  },
  {
    id: "pretty-princess",
    name: "The Pretty Princess",
    tagline: "A princess whose animal friends will do anything to help!",
    emoji: "👸",
    color: "from-pink-500 to-rose-600",
    startingItem: {
      name: "Glowing Tiara",
      description: "A beautiful tiara that glows when adventure is near!",
      emoji: "👑",
    },
    startingSkill: {
      name: "Royal Command",
      description: "Animals listen to you and come to help!",
      emoji: "🐾",
    },
    startNodeId: "pr-01",
  },
];

const allStories: Record<string, StoryNode[]> = {
  "wonky-wizard": wonkyWizardStory,
  "noble-knight": nobleKnightStory,
  "pretty-princess": prettyPrincessStory,
};

export function getStoryNode(
  character: string,
  nodeId: string
): StoryNode | undefined {
  const story = allStories[character];
  if (!story) return undefined;
  return story.find((node) => node.id === nodeId);
}

export function getCharacter(id: string): CharacterInfo | undefined {
  return characters.find((c) => c.id === id);
}

export function getAllNodeIds(): { character: string; nodeId: string }[] {
  const ids: { character: string; nodeId: string }[] = [];
  for (const [character, nodes] of Object.entries(allStories)) {
    for (const node of nodes) {
      ids.push({ character, nodeId: node.id });
    }
  }
  return ids;
}
