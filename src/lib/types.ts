export interface Item {
  name: string;
  description: string;
  emoji: string;
}

export interface Skill {
  name: string;
  description: string;
  emoji: string;
}

export interface Choice {
  text: string;
  requiresItem?: string;
  requiresSkill?: string;
  nextNodeId: string;
  preview: string;
}

export interface StoryNode {
  id: string;
  character: "wonky-wizard" | "noble-knight" | "pretty-princess";
  title: string;
  narrative: string;
  sillyMoment: string;
  itemEarned?: Item;
  skillEarned?: Skill;
  choices: [Choice, Choice] | [];
  isEnding?: boolean;
}

export interface CharacterInfo {
  id: "wonky-wizard" | "noble-knight" | "pretty-princess";
  name: string;
  tagline: string;
  emoji: string;
  color: string;
  startingItem: Item;
  startingSkill: Skill;
  startNodeId: string;
}

export interface GameState {
  character: string;
  currentNodeId: string;
  items: Item[];
  skills: Skill[];
}
