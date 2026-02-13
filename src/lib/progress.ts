const PROGRESS_KEY = "wonky-wizard-progress";

interface Progress {
  character: string;
  currentNodeId: string;
}

export function saveProgress(character: string, nodeId: string): void {
  if (typeof window === "undefined") return;
  const progress: Progress = { character, currentNodeId: nodeId };
  localStorage.setItem(`${PROGRESS_KEY}-${character}`, JSON.stringify(progress));
}

export function getProgress(character: string): Progress | null {
  if (typeof window === "undefined") return null;
  const data = localStorage.getItem(`${PROGRESS_KEY}-${character}`);
  return data ? JSON.parse(data) : null;
}

export function getAnyProgress(): Progress | null {
  if (typeof window === "undefined") return null;
  for (const char of ["wonky-wizard", "noble-knight", "pretty-princess"]) {
    const progress = getProgress(char);
    if (progress) return progress;
  }
  return null;
}

export function clearProgress(character: string): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(`${PROGRESS_KEY}-${character}`);
}

export function clearAllProgress(): void {
  if (typeof window === "undefined") return;
  for (const char of ["wonky-wizard", "noble-knight", "pretty-princess"]) {
    localStorage.removeItem(`${PROGRESS_KEY}-${char}`);
  }
}
