import bodymovin from "lottie-web";
import carAnimationData from "../assets/animation-data/car-white.json";
import packingAnimationData from "../assets/animation-data/packing.json";
import movingCircleAnimationData from "../assets/animation-data/moving-circle.json";

export const carAnimation = bodymovin.loadAnimation({
  container: document.getElementById("car-lottie"),
  autoplay: false,
  loop: false,
  renderer: "svg",
  animationData: carAnimationData,
});

export const packingAnimation = bodymovin.loadAnimation({
  container: document.getElementById("packing-lottie"),
  autoplay: false,
  loop: false,
  renderer: "svg",
  animationData: packingAnimationData,
});

export const movingCircleAnimation = bodymovin.loadAnimation({
  container: document.getElementById("moving-circle-lottie"),
  autoplay: false,
  loop: false,
  renderer: "svg",
  animationData: movingCircleAnimationData,
});
