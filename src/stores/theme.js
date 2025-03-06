import { atom } from "nanostores";
import { useEffect } from "react";

// Default theme (no tocar DOM en SSR)
export const $theme = atom("light");

if (typeof window !== "undefined") {
  // Se ejecuta solo en el cliente
  const savedTheme = localStorage.getItem("theme") || "light";
  $theme.set(savedTheme);
  document.documentElement.setAttribute("data-theme", savedTheme);
}

// Asegurar que la suscripción solo corre en el cliente
export function useTheme() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "light";
      $theme.set(savedTheme);

      // Sincronizar cambios con el DOM
      const unsubscribe = $theme.subscribe((newTheme) => {
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
      });

      return () => unsubscribe(); // Cleanup al desmontar
    }
  }, []);
}

// Función para cambiar el tema
export function toggleTheme() {
  if (typeof window !== "undefined") {
    $theme.set($theme.get() === "light" ? "dark" : "light");
  }
}
