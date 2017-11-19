// ==UserScript==
// @name        streamable
// @namespace   streamable
// @include     https://streamable.com/*
// @version     1
// @grant       none
// ==/UserScript==
videourl = document.getElementById("mp4-url").value;
window.location.replace(videourl);
