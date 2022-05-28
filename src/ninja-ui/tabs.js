import "./styles/tabs.css";

class Tabs {
  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll(".trigger");
  }

  init() {
    this.tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        this.toggleTabs(e);
        this.toggleContent();
      });
    });
  }

  toggleTabs(e) {
    // Remove Current Active Classes
    this.tabs.forEach((tab) => tab.classList.remove("active"));
    // Add New Active Class To Clicked Tab
    e.target.classList.add("active");
  }
  toggleContent(e) {
    // Remove Current Active Classses
    this.container.querySelectorAll(".content").forEach((item) => {
      item.classList.remove(".active");
    });
    // Add New Active Class To Content
    const selector = e.target.getAttribute("data-target");
    const content = this.container.querySelector(selector);
    content.classList.add("active");
  }
}

export { Tabs as default };
