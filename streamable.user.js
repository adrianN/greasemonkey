// ==UserScript==
// @name        streamable
// @namespace   streamable
// @include     https://streamable.com/*
// @version     1
// @grant       none
// ==/UserScript==
videoelement = document.getElementById("video-player-tag");
sources = videoelement.children;
window.location.replace(sources[0].src);
