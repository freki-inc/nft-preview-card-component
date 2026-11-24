# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Features](#features)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See active states for interactive elements

### Screenshot

![](./design/Screenshot%20Solution.png)

### Links

- Solution URL: (https://github.com/freki-inc/nft-preview-card-component)
- Live Site URL: (https://freki-inc.github.io/nft-preview-card-component/)

### Features

- Responsive layout that adapts from mobile to desktop
- Active state on the card image with a coloured overlay and icon
- Active colour change on the title and creator name
- Semantic, accessible HTML (descriptive `alt` text, proper heading structure)
- Component-based structure that is easy to reuse and extend

## My process

### Built with

- Semantic HTML5 markup
- CSS (custom properties, Flexbox, media queries)
- Mobile-first workflow
- [React](https://react.dev/) – UI library
- [Vite](https://vite.dev/) – Build tool and dev server
- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [Figma](https://www.figma.com/) – Design source

### What I learned

In general it was not a difficult project, but very fun to make! I had a little bit of difficulty deciding how to apply the active states. At first, as a challenge, I used props, onPointerDown and onPointerUp to mimic the active state effect of the image, but found this to be overkill so used the active state in CSS to keep it simple.

Below the simple CSS active state code:

```html
  <div className="image-wrapper">
      <div className="view-overlay">
          <img className="view-icon" src={view} alt="" width={48} height={48} aria-hidden="true" />
      </div>
      <div>
          <img className="image-card" src={equilibrium} alt="" width={604} height={604} aria-hidden="true" draggable={false} />
      </div>
  </div>
```
```css
.view-overlay {
  opacity: 0;
  position: absolute;
  background-color: var(--overlay-color);
  width: 302px;
  height: 302px;
  border-radius: 8px;
  z-index: 1000;
  cursor: pointer;
}

.image-wrapper:active .view-overlay {
  opacity: 1;
}
```

### Continued development

I would like to continue to develop my CSS skills, such as applying the use of CSS SASS, to make the code more efficient.

## Author

- Website - [Willem Freeke](https://www.willemwebdev.com)
- Frontend Mentor - [@freki-inc](https://www.frontendmentor.io/profile/freki-inc)
- Twitter - [@willemwebdev](https://www.x.com/willemwebdev)

## Acknowledgments

I would like to thank first and foremost God for giving me the strength and wisdom to learn how to code. Praise our Lord and Redeemer Jesus Christ! 
I would also like to thank freecodecamp.org for giving people on a low budget like me the chance to learn how to code. 
