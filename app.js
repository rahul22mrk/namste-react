import React from "react";
import ReactDOM from "react-dom/client"; // React 18+ import

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "This is h1 tag"),
      React.createElement("h2", {}, "I'm a sibling of h1"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h3", {}, "I'm a H3 tag"),
      React.createElement("h4", {}, "I'm a sibling of h3"),
    ]),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root")); // Correct usage
root.render(parent);
