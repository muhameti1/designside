document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(CustomEase);
  CustomEase.create(
    "hop",
    "M0,0 C0.354,0 0.464,0.133 0.498,0.505 0.532,0.872 0.651,1 1,1"
  );

  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  const links = document.querySelectorAll(".link");
  const socialLinks = document.querySelectorAll(".socials p");
  let isAnimating = false;

  const splitTextIntoSpans = (selector) => {
    let elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      let text = element.innerText;
      let splitText = text
        .split("")
        .map(function (char) {
          return `<span>${char === " " ? "&nbsp;nbsp" : char}</span>`;
        })
        .join("");
      element.innerHTML = splitText;
    });
  };
  splitTextIntoSpans(".header h1");

  menuToggle?.addEventListener("click", () => {
    if (isAnimating) return;

    if (menuToggle.classList.contains("closed")) {
      menuToggle.classList.remove("closed");
      menuToggle.classList.add("opened");

      isAnimating = true;

      gsap.to(menu, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "hop",
        duration: 1.5,
        onStart: () => {
          menu.computedStyleMap.pointerEvents = "all";
        },
        onComplete: () => {
          isAnimating = false;
        },
      });
    } else {
      menuToggle.classList.remove("opened");
      menuToggle.classList.add("closed");

      isAnimating = true;
    }
  });
});
