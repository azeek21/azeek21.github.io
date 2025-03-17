const THEME_SLUG = "data-theme";
(function init() {
  //initFollower("#uwu");
  initpopcat();
})();

function checkIsReduced() {
  return (
    window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
    window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true
  );
}

function initFollower(target) {
  if (checkIsReduced()) {
    return;
  }

  const targetElement = document.querySelector(target);
  let x = 0;
  let y = 0;

  const animateBall = () => {
    targetElement.style.transform = `translate(${x}px, ${y}px)`;
  };

  document.onmousemove = function (e) {
    x = e.clientX - 30;
    y = e.clientY - 30;
    requestAnimationFrame(animateBall);
  };
}

function initpopcat() {
  if (checkIsReduced()) {
    return;
  }

  const target = document.body;
  const pop = () => {
    target.style.cursor = "var(--cursor-pop), auto";
  };
  const unpop = () => {
    target.style.cursor = "var(--cursor-not-pop), auto";
  };

  window.addEventListener("mousedown", pop);
  window.addEventListener("mouseup", unpop);
}

function setTheme(theme) {
  localStorage.setItem(THEME_SLUG, theme);
  document.querySelector("html").setAttribute(THEME_SLUG, theme);
  window.location.reload(); // safari mobile fix
}

function initThemeChangeWatcher() {
  if (localStorage.getItem(THEME_SLUG) !== "system") {
    return;
  }

  try {
    const target = document.querySelector("html");
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener((e) => {
      target.setAttribute(THEME_SLUG, e.matches ? "macchaito" : "latte");
    });
  } catch (e) {}
}
