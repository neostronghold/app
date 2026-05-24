import type { PropertyValues } from "lit";
import {
  applyThemesOnElement,
} from "../common/dom/apply_themes_on_element";
import { subscribeThemes } from "../data/ws-themes";
import type { Constructor } from "../types";
import type { HassBaseEl } from "./hass-base-mixin";

export default <T extends Constructor<HassBaseEl>>(superClass: T) =>
  class extends superClass {
    private _themeApplied = false;

    protected firstUpdated(changedProps: PropertyValues<this>) {
      super.firstUpdated(changedProps);
      console.warn("NS: themes-mixin firstUpdated", { themeApplied: this._themeApplied });
      if (!this._themeApplied) {
        applyThemesOnElement(
          document.documentElement,
          undefined,
          undefined,
          undefined,
          true
        );
        document.documentElement.style.backgroundColor = "#0b0d17";
        this._themeApplied = true;
        console.warn("NS: theme applied");
      }
    }

    protected hassConnected() {
      super.hassConnected();
      console.warn("NS: themes-mixin hassConnected");
      subscribeThemes(this.hass!.connection, (themes) => {
        console.warn("NS: themes received", themes);
        this._updateHass({ themes: { ...themes, darkMode: true, theme: themes.default_theme || "default" } });
      });
    }
  };
