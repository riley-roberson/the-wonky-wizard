import { Item, Skill } from "./types";

const ITEMS_KEY = "wonky-wizard-items";
const SKILLS_KEY = "wonky-wizard-skills";

export function getItems(character: string): Item[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(`${ITEMS_KEY}-${character}`);
  return data ? JSON.parse(data) : [];
}

export function addItem(character: string, item: Item): void {
  const items = getItems(character);
  if (!items.find((i) => i.name === item.name)) {
    items.push(item);
    localStorage.setItem(`${ITEMS_KEY}-${character}`, JSON.stringify(items));
  }
}

export function getSkills(character: string): Skill[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(`${SKILLS_KEY}-${character}`);
  return data ? JSON.parse(data) : [];
}

export function addSkill(character: string, skill: Skill): void {
  const skills = getSkills(character);
  if (!skills.find((s) => s.name === skill.name)) {
    skills.push(skill);
    localStorage.setItem(`${SKILLS_KEY}-${character}`, JSON.stringify(skills));
  }
}

export function hasItem(character: string, itemName: string): boolean {
  return getItems(character).some((i) => i.name === itemName);
}

export function hasSkill(character: string, skillName: string): boolean {
  return getSkills(character).some((s) => s.name === skillName);
}

export function resetInventory(character: string): void {
  localStorage.removeItem(`${ITEMS_KEY}-${character}`);
  localStorage.removeItem(`${SKILLS_KEY}-${character}`);
}
