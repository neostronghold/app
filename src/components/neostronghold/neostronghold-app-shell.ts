import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators";
import type { HomeAssistant, Route } from "../../types";
import { mountReact, unmountReact } from "./react-root";
import { AppSidebar } from "./app-sidebar";
import { SiteHeader } from "./site-header";

@customElement("neostronghold-app-shell")
export class NeostrongholdAppShell extends LitElement {
  @property({ attribute: false })
  public hass!: HomeAssistant;

  @property({ attribute: false })
  public route?: Route;

  @property({ type: Boolean })
  public narrow = false;

  private _sidebarContainer!: HTMLDivElement;
  private _headerContainer!: HTMLDivElement;

  firstUpdated() {
    this._sidebarContainer =
      this.renderRoot.querySelector("#sidebar-root")!;
    this._headerContainer =
      this.renderRoot.querySelector("#header-root")!;

    mountReact(this._sidebarContainer, AppSidebar);
    mountReact(this._headerContainer, SiteHeader);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._sidebarContainer) {
      unmountReact(this._sidebarContainer);
    }
    if (this._headerContainer) {
      unmountReact(this._headerContainer);
    }
  }

  render() {
    return html`
      <div id="sidebar-root"></div>
      <div id="app-content">
        <div id="header-root"></div>
        <main id="panel-content">
          <partial-panel-resolver
            .narrow=${this.narrow}
            .hass=${this.hass}
            .route=${this.route}
          ></partial-panel-resolver>
        </main>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      height: 100vh;
      width: 100vw;
      background-color: hsl(228 30% 6%);
      color: hsl(210 20% 93%);
    }

    #app-content {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-width: 0;
    }

    #sidebar-root {
      flex-shrink: 0;
    }

    #panel-content {
      flex: 1;
      overflow: auto;
      position: relative;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "neostronghold-app-shell": NeostrongholdAppShell;
  }
}
