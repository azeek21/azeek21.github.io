function initTheme() {
  const storageSlug = "data-theme";
  let theme = localStorage.getItem(storageSlug);
  if (!theme) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "macchiato";
    } else {
      theme = "latte";
    }
  }
  document.querySelector("html").setAttribute("data-theme", theme);
}
