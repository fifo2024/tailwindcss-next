import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ThemeState {
    theme: "light" | "dark";
    setTheme: (newTheme: "light" | "dark") => void;
}

export const useThemeStore = create<ThemeState>()(
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
