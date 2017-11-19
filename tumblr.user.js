// ==UserScript==
// @name        tumblr
// @namespace   tumblr
// @include     http://*.tumblr.com/image/*
// @version     1
// @grant       none
// ==/UserScript==
frame = document.getElementById("content-image");
window.location.href = frame.getAttribute("data-src");
