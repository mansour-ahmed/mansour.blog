---
url: how-to-improve-ux-by-animated-scrolling-using-ts-js
title: How to improve UX by animated scrolling using TS/JS
date: 2019-01-16
draft: true
tags: ['User Experience', 'Tutorial', 'Typescript']

keywords: UX, Animated scroll, Javascript, Typescript, scroll, animation
description: Improve UX by custom animated scrolling.
---

## The Problem

The native DOM scroll function can be slow and doesn't offer optimal user experience.

## The Solution

Create a custom logic to animate the scroll event using Typescript

### High level sudo code

- Find an element to scroll to with the given id and find its position.
- Define the duration of the animation.
- Define a fixed incrementation value
- Recursively scroll using the animation duration until the element position is reached.

### Typescript class

```ts
export class AnimateScroll {
  constructor() {}

  /**
   * @desc scrollToItem Fn scrolls to an items by utilising the animated scroll fn (scrollTo)
   *       and calculating the height of the header to accurately find the item's position.
   * @param elementID: element's ID that will be scrolled to.
   * @param duration: duration in milliseconds, default is 750.
   */
  scrollToElement(elementID: string, duration: number = 750) {
    const item = document.getElementById(elementID); // the element
    if (item) {
      const itemPos = item.offsetTop;
      this.scrollTo(window.document, itemPos, duration);
    } else {
      console.error(
        `Could not find element with the following ID: ${elementID}`
      );
    }
  }

  /**
   * @desc scrollTo Fn allows scrolling with animation.
   * @param element the 'element' that the scroll will happen on.
   * @param to is the location to scroll to.
   * @param duration is the length of the animation.
   */
  private scrollTo(element, to: number, duration) {
    const increment = 20,
      that = this;
    let start,
      remaining,
      currentTime = 0,
      animateScroll;

    if (element.body.scrollTop > 0) {
      // for chrome
      start = element.body.scrollTop;
    } else if (element.documentElement.scrollTop > 0) {
      // for firefox
      start = element.documentElement.scrollTop;
    } else {
      start = 0;
    }

    remaining = to - start;

    animateScroll = () => {
      currentTime += increment;
      const val = that.easeInOut(currentTime, start, remaining, duration);
      // to allow scroll function on different browsers both chrome and firefox
      top.window.scroll(0, val);

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  }

  /**
   * @desc easeInOut Fn creates the values necessary to create easeInOut animation.
   * @param currentTime is current time.
   * @param startTime is the starting time.
   * @param remainingTime is the time period in the value.
   * @param duration is the duration of the animation
   * @returns a number value to scroll to.
   */
  private easeInOut(
    currentTime: number,
    startTime: number,
    remainingTime: number,
    duration: number
  ) {
    currentTime /= duration / 2;

    if (currentTime < 1) {
      return (remainingTime / 2) * currentTime * currentTime + startTime;
    }

    currentTime--;
    return (
      (-remainingTime / 2) * (currentTime * (currentTime - 2) - 1) + startTime
    );
  }
}
```

If you are using Angular in your projects, check out **[this small npm package](https://www.npmjs.com/package/ng-animate-scroll)** I created using the same logic.
