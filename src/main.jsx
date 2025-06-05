import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StyleSheetManager } from "styled-components";
import { ErrorBoundary } from "react-error-boundary";
import isPropValid from "@emotion/is-prop-valid";
import ErrorFallback from "./ui/ErrorFallback";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.replace("/")}>
        <App />
      </ErrorBoundary>
    </StyleSheetManager>
  </StrictMode>
);
