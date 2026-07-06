// Small, dependency-free script for the DemoSite page.
// Edit this file to change the page's behavior.

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const button = document.getElementById("greet-button");
  const output = document.getElementById("greet-output");

  if (button && output) {
    button.addEventListener("click", () => {
      output.textContent = "Hello! You just edited/ran DemoSite successfully.";
    });
  }
});
