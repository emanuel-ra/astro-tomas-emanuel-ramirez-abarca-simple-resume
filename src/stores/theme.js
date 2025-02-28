import { atom } from "nanostores";

// Default theme (temporary value before client-side check)
export const $theme = atom("light");

// Run only in the browser
if (typeof window !== "undefined") {
  const savedTheme = localStorage.getItem("theme") || "light";
  $theme.set(savedTheme);
  document.documentElement.setAttribute("data-theme", savedTheme);

  // Watch for theme changes and update localStorage + HTML attribute
  $theme.subscribe((newTheme) => {
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  });
}

// Function to toggle theme
export function toggleTheme() {
  if (typeof window !== "undefined") {
    $theme.set($theme.get() === "light" ? "dark" : "light");
  }
}
