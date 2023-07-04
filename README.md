# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshots

![Desktop version](<Screenshots/Notifications page - desktop version.png>)
![Mobile version](<Screenshots/Notifications page - mobile version.png>)

### Links

- Solution URL: [Solution URL](https://github.com/JaBoe97/notifications_page)
- Live Site URL: [Live site URL](https://jaboe97.github.io/notifications_page)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- JQuery

### What I learned

```css
max-width: calc(100% - 40px);

grid-template-columns: clamp(2.5em, 5vw, 4em) 1fr;
```

```js
$(document).ready(function () {
  $("#count").html($(".unread").length);

  $(".unread-toggle").click(function () {
    $(".unread").removeClass("unread");
    $(".notification-dot").removeClass("notification-dot");
    $("#count").html($(".unread").length);
  });
});
```

## Author

- GitHub - [@JaBoe97](https://github.com/JaBoe97)
- Frontend Mentor - [@JaBoe97](https://www.frontendmentor.io/profile/JaBoe97)
