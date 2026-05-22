import { LitElement, css } from "lit";
import { customElement } from "lit/decorators";
import { fireEvent } from "../../common/dom/fire_event";
import type { HomeAssistant } from "../../types";

@customElement("ha-pick-theme-row")
export class HaPickThemeRow extends LitElement {
  public hass!: HomeAssistant;

  protected render() {
    return null;
  }

  static get styles() {
    return css``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ha-pick-theme-row": HaPickThemeRow;
  }
}
