import Tooltip from "./ninja-ui/tooltip";
import Dropdown from "./ninja-ui/dropdown";
import Tabs from "./ninja-ui/tabs";
import Snackbar from "./ninja-ui/snackbar";

// Create Tooltip
const tooltip = new Tooltip(document.querySelector(".tooltip"));
tooltip.init();

// Create Dropdown
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

// Create Tabs
const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();

// Create Snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector("button");
button.addEventListener("click", () => {
  snackbar.show("you clicked me :)");
});
