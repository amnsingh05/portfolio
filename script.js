document.addEventListener("DOMContentLoaded", () => {
  // Load animation config from JSON file
  fetch("animationConfig.json")
    .then(response => response.json())
    .then(config => {
      const anim = config.photoAnimation;
      const element = document.querySelector(anim.selector);

      if (element) {
        element.style.animation = `${anim.animationName} ${anim.duration} ${anim.timingFunction} ${anim.delay}`;
      }
    })
    .catch(err => console.error("Error loading animationConfig.json:", err));
});
