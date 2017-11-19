// ==UserScript==
// @name        instagram-video
// @namespace   instagram
// @include     https://www.instagram.com/*
// @version     1
// @grant       none
// ==/UserScript==
var metaTags=document.getElementsByTagName("meta");

var video_url = null;
for (var i = 0; i < metaTags.length; i++) {
    if (metaTags[i].getAttribute("property") == "og:video:secure_url") {
        video_url = metaTags[i].getAttribute("content");
        break;
    }
}

if (video_url != null) {
  window.location.replace(video_url);
}
