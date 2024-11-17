import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QuestaoProvider } from "./context/QuestaoContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QuestaoProvider>
      <App />
    </QuestaoProvider>
  </StrictMode>
);
