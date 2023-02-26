import React from "react";
import { createRoot } from "react-dom/client";
import Calculator from "./Calculator";

function Widget(config: any) {
  console.log("Widget config loaded: ", config);

  const root = createRoot(document.getElementById("calculator-widget"));
  root.render(<Calculator />);
}

class WidgetWebComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log("called when the component is added to the DOM");
    const shadowRoot = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = `
      .calculator {
        background-color: #fff;
        border: 1px solid #ccc;
        color: purple;
      }
    `;

    shadowRoot.appendChild(style);

    const mountPoint = document.createElement("div");
    shadowRoot.appendChild(mountPoint);

    const root = createRoot(mountPoint);

    root.render(<Calculator />);
  }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.Widget = Widget;

customElements.define("calculator-widget", WidgetWebComponent);
