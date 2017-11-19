// ==UserScript==
// @name        gfycat
// @namespace   gfycat
// @include     https://gfycat.com/*
// @version     1
// @grant       none
// @run-at      document-start
// ==/UserScript==
//TODO doesn't work for lowercase URLs
components = window.location.href.split('/')
window.location.replace('https://thumbs.gfycat.com/' 
  + components[components.length - 1] + '-mobile.mp4');
