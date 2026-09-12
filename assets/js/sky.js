(() => {
  const orb = document.querySelector("[data-reading]");
  if (!orb) return;

  const readout = orb.querySelector("[data-reading-left]");
  const button = orb.querySelector("button");
  let hideTimer;

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const left = max > 0 ? 100 - (window.scrollY / max) * 100 : 0;
    readout.textContent = `${Math.round(Math.min(100, Math.max(0, left)))}% left`;
  };

  window.addEventListener(
    "scroll",
    () => {
      update();
      orb.classList.add("is-scrolling");
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => orb.classList.remove("is-scrolling"), 900);
    },
    { passive: true },
  );

  button.addEventListener("click", () => {
    const open = orb.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(open));
  });

  update();
})();
