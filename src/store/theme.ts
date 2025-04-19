import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
    persist(
        (set) => ({
            theme: "light",
            setTheme: (newTheme: "light" | "dark") => set({ theme: newTheme }),
        }),
        {
            name: "theme-storage",
        }
    )
);
