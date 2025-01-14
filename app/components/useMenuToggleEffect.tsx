import React, { useEffect } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

const useMenuToggleEffect = () => {
  useEffect(() => {
    // Define the custom ease
    CustomEase.create(
      "hop",
      "M0,0 C0.354,0 0.464,0.133 0.498,0.505 0.532,0.872 0.651,1 1,1"
    );

    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const headerTitle = document.querySelector(".header h1");
    const links = document.querySelectorAll(".links .link");
    const socialLinks = document.querySelectorAll(".socials .sub-col p");
    const videoWrapper = document.querySelector(".video-wrapper");
    const headerTitleSpans = document.querySelectorAll(".header h1 span");

    // Split text into spans
    const splitTextIntoSpans = (element) => {
      if (element) {
        const text = element.innerText;
        element.innerHTML = text
          .split("")
          .map((char) => `<span>${char === " " ? "&nbsp;" : char}</span>`)
          .join("");
      }
    };
    splitTextIntoSpans(headerTitle);

    let isAnimating = false;

    const openMenu = () => {
      if (isAnimating) return;
      isAnimating = true;

      menuToggle.classList.replace("closed", "opened");

      gsap
        .timeline({
          defaults: { duration: 1.5, ease: "hop" },
          onComplete: () => (isAnimating = false),
        })
        .to(menu, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" })
        .to(links, { y: 0, opacity: 1, stagger: 0.1 }, "-=0.8")
        .to(socialLinks, { y: 0, opacity: 1, stagger: 0.05 }, "-=0.8")
        .to(
          videoWrapper,
          { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
          "-=1"
        )
        .to(
          headerTitleSpans,
          { y: 0, scale: 1, rotateY: 0, stagger: 0.05 },
          "-=0.5"
        );
    };

    const closeMenu = () => {
      if (isAnimating) return;
      isAnimating = true;

      menuToggle.classList.replace("opened", "closed");

      gsap
        .timeline({
          defaults: { duration: 1.5, ease: "hop" },
          onComplete: () => {
            isAnimating = false;
            gsap.set(menu, {
              clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            });
            gsap.set(links, { y: 30, opacity: 0 });
            gsap.set(socialLinks, { y: 30, opacity: 0 });
            gsap.set(videoWrapper, {
              clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            });
            gsap.set(headerTitleSpans, { y: 500, scale: 0.75, rotateY: 90 });
          },
        })
        .to(menu, { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" });
    };

    const toggleMenu = () => {
      if (menuToggle.classList.contains("closed")) {
        openMenu();
      } else {
        closeMenu();
      }
    };

    menuToggle?.addEventListener("click", toggleMenu);

    // Cleanup on component unmount
    return () => {
      menuToggle?.removeEventListener("click", toggleMenu);
    };
  }, []);
};

export default useMenuToggleEffect;
