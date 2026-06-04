"use client";

import { useEffect, useRef } from "react";

// Vendasta "custom form widget". The script reads its config from the base64
// `data` attribute and renders the form (in a shadow DOM) directly after its
// own <script> tag. React strips inline <script> tags from JSX, so we inject
// the tag into a container ref on mount instead.
const WIDGET_SRC =
  "https://www.cdnstyles.com/static/custom_form_widget/v1/custom_form.widget.js";

const FORM_CONFIG =
  "eyJiYWNrZ3JvdW5kQ29sb3IiOiIjZmZmZmZmIiwiYmFzZVVSTCI6Imh0dHBzOi8vZm9ybXMtcHJvZC5hcGlnYXRld2F5LmNvIiwiYm9yZGVyQ29sb3IiOiIjZTFlNWU5IiwiYm9yZGVyUmFkaXVzIjoiOHB4IiwiYm9yZGVyU3R5bGUiOiJzb2xpZCIsImJvcmRlcldpZHRoIjoiMXB4IiwiZm9ybUlkIjoiRm9ybUNvbmZpZ0lELWQ3ZmY3YmM4LTRmZjItNDA5Yy05YzUyLTU2NmYzYTM0OWE5ZCIsInBhZGRpbmciOiIyNHB4IiwicHJpbWFyeUNvbG9yIjoiIzIwYzk5NyIsInByaW1hcnlGb250Q29sb3IiOiIjMzMzMzMzIiwid2lkdGgiOiIxMDAlIn0=";

export default function VendastaForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Guard against double injection (React StrictMode double-mount / re-renders).
    if (container.querySelector("script#__custom_form_widget")) return;

    const script = document.createElement("script");
    script.id = "__custom_form_widget";
    script.src = WIDGET_SRC;
    script.async = true;
    script.setAttribute("data", FORM_CONFIG);
    container.appendChild(script);
  }, []);

  return <div ref={containerRef} className="w-full" />;
}
