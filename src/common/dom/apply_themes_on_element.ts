import { darkColorVariables } from "../../resources/theme/color";
import { darkSemanticVariables } from "../../resources/theme/semantic.globals";

interface ProcessedTheme {
  keys: Record<string, "">;
  styles: Record<string, string>;
}

/**
 * Apply the neostronghold cosmic dark theme to an element.
 * Theme name, settings, and light/dark toggling are ignored —
 * always applies the single cosmic dark mode.
 */
export const applyThemesOnElement = (
  element,
  _themes?,
  _selectedTheme?: string,
  _themeSettings?: unknown,
  _main?: boolean
) => {
  const cacheKey = "neostronghold-cosmic";

  if (element.__themes?.cacheKey === cacheKey) {
    return;
  }

  const themeRules = { ...darkSemanticVariables, ...darkColorVariables };

  const newTheme = processTheme(cacheKey, themeRules);

  const styles = { ...element.__themes?.keys, ...newTheme?.styles };
  element.__themes = { cacheKey, keys: newTheme?.keys };

  if (window.ShadyCSS) {
    window.ShadyCSS.styleSubtree(element, styles);
  } else {
    for (const s in styles) {
      element.style.setProperty(s, styles[s] || "");
    }
  }
};

const processTheme = (
  _cacheKey: string,
  theme: Record<string, string>
): ProcessedTheme | undefined => {
  if (!theme || !Object.keys(theme).length) {
    return undefined;
  }
  const styles: Record<string, string> = {};
  const keys: Record<string, ""> = {};
  for (const key of Object.keys(theme)) {
    const prefixedKey = `--${key}`;
    styles[prefixedKey] = String(theme[key]);
    keys[prefixedKey] = "";
  }
  return { styles, keys };
};

export const invalidateThemeCache = () => {
  // No-op: cache is no longer used
};
