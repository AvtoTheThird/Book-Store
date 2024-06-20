import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { BookProvider } from "./components/Context.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BookProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </BookProvider>
);
