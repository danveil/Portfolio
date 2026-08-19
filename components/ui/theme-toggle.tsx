"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function toggleTheme() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("afiq-theme", next ? "dark" : "light");
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", next ? "#07111f" : "#f7f3eb");
  }

  return (
    <button className="icon-button theme-button" type="button" onClick={toggleTheme} aria-label="Toggle color theme">
      <Sun className="theme-sun" size={17} aria-hidden="true" />
      <Moon className="theme-moon" size={17} aria-hidden="true" />
    </button>
  );
}
