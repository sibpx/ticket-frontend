import ReactDOM from "react-dom/client";
import { ColorModeScript } from "@chakra-ui/react";
import { App, theme } from "app";

import "shared/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </>,
);
