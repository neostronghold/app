import { LitElement, css, nothing } from "lit";
import { customElement } from "lit/decorators";
import type { HomeAssistant } from "../../types";

@customElement("ha-pick-theme-row")
export class HaPickThemeRow extends LitElement {
  public hass!: HomeAssistant;

  protected render() {
    return nothing;
  }

  static readonly styles = css`
    :host {
      display: none;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "ha-pick-theme-row": HaPickThemeRow;
  }
}
