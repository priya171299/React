import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

function MyApp() {
  return (
    <div>
      <h1>Custom React App</h1>
    </div>
  );
}

const AnotherElement = (
  <a href="https://google.com" target="_blank">
    Visit the Website
  </a>
);

const areactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click to Visit"
);

/*createRoot(document.getElementById("root")).render(areactElement);*/

// createRoot(document.getElementById("root")).render(AnotherElement);

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <MyApp />
  </>
);
