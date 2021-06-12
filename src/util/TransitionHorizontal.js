export const transitionHorizontal = (isVisible, amt) => ({
  transition: `all 1.25s ease-in-out`,
  transform: isVisible ? `translateX(0px)` : `translateX(${amt}px)`,
});
