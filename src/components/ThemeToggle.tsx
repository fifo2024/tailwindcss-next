import { useEffect } from "react";
import { useThemeStore } from "@/store/theme";

export default function ThemeToggle() {
    const { theme, setTheme } = useThemeStore();

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <button
            className="px-4 py-2 rounded-lg transition-all"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            {theme === "light" ? "☀️ 亮色模式" : "🌙 深色模式"}
        </button>
    );
}
