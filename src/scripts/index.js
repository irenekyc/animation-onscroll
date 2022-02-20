import {
  carAnimation,
  packingAnimation,
  movingCircleAnimation,
  rocketAnimation,
} from "./animation";
import { Controller, Scene } from "scrollmagic";

const controller = new Controller();

const addScene = (sectionId, animationData) => {
  const triggerElement = document.getElementById(sectionId);
  const content = document.querySelector(`#${sectionId} .content`);

  const { animation, animationDuration } = animationData;
  const animationTotalFrames = animation.totalFrames;

  const scene = new Scene({
    duration: animationDuration,
    triggerElement,
    triggerHook: 0, // trigger only when the trigger element is at 0 px top of the window
  })
    .setPin(triggerElement)
    .addTo(controller);

  scene.on("enter", () => {
    if (content) {
      content.style.display = "block";
    }
  });
  scene.on("update", ({ startPos, scrollPos, endPos }) => {
    if (scrollPos + 50 > startPos && scrollPos < endPos) {
      const scrollPercentage = (scrollPos - startPos) / animationDuration;
      const currentFrameValue = scrollPercentage * animationTotalFrames;
      animation.goToAndStop(currentFrameValue, true);
    }
  });
  scene.on("leave", () => {
    if (content) {
      content.style.display = "none";
    }
  });
};

addScene("car-section", {
  animation: carAnimation,
  animationDuration: 2000,
});

addScene("packing-section", {
  animation: packingAnimation,
  animationDuration: 6000,
});

addScene("moving-circle-section", {
  animation: movingCircleAnimation,
  animationDuration: 2000,
});

addScene("rocket-section", {
  animation: rocketAnimation,
  animationDuration: 2000,
});
