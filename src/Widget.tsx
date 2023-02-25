import React from "react";
import { createRoot } from "react-dom/client";
import Calculator from "./Calculator";

export default function Widget(config: any) {
  console.log("Widget config loaded: ", config);

  const root = createRoot(document.getElementById("calculator-widget"));
  root.render(<Calculator />);
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.Widget = Widget;
