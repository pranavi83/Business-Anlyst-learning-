import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserProgress {
  name: string;
  streak: number;
  lastActive: string | null;
  completedModules: string[];
}

interface AppState {
  progress: UserProgress;
  setName: (name: string) => void;
  completeModule: (moduleId: string) => void;
  updateStreak: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      progress: {
        name: "",
        streak: 0,
        lastActive: null,
        completedModules: [],
      },
      setName: (name) =>
        set((state) => ({
          progress: { ...state.progress, name },
        })),
      completeModule: (moduleId) =>
        set((state) => ({
          progress: {
            ...state.progress,
            completedModules: state.progress.completedModules.includes(moduleId)
              ? state.progress.completedModules
              : [...state.progress.completedModules, moduleId],
          },
        })),
      updateStreak: () =>
        set((state) => {
          const today = new Date().toISOString().split("T")[0];
          const lastActive = state.progress.lastActive;
          let streak = state.progress.streak;

          if (lastActive) {
            const lastDate = new Date(lastActive);
            const currentDate = new Date(today);
            const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays === 1) {
              streak += 1;
            } else if (diffDays > 1) {
              streak = 1; // reset streak
            }
          } else {
            streak = 1;
          }

          return {
            progress: {
              ...state.progress,
              streak,
              lastActive: today,
            },
          };
        }),
    }),
    {
      name: "pranavi-ba-lab-storage",
    }
  )
);
