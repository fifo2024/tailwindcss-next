import React, { useEffect } from "react";
import { useThemeStore } from "@/store/theme";

export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const { theme } = useThemeStore();

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return <>{children}</>;
}
