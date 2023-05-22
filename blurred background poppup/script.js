"use strict";
const clickBtn = document.getElementById("btn");
const closeBtn = document.getElementById("close-btn");
//
const popupWindow = document.querySelector(".popup-window");
const container = document.querySelector(".container");

clickBtn.addEventListener("click", () => {
  container.classList.add("active");
  popupWindow.classList.remove("active");
});

closeBtn.addEventListener("click", () => {
  container.classList.remove("active");
  popupWindow.classList.add("active");
});
