export const transitionHorizontal = (isVisible, amt) => ({
  transition: `all 1.25s ease-in-out`,
  transform: isVisible ? `translateX(0px)` : `translateX(${amt}px)`,
});

export const transitionVertical = (isVisible, amt) => ({
  transition: `all 1.25s ease-in-out`,
  transform: isVisible ? `translateY(0px)` : `translateY(${amt}px)`,
});
