// ==UserScript==
// @name        liveleak_agreeer
// @namespace   liveleak
// @include     https://www.liveleak.com/*
// @version     1
// @grant       none
// ==/UserScript==
videoid = document.URL.split('=') [1];
content = document.getElementById('content_box').children;
for (var i = 0; i < content.length - 1; i++) {
  if (content[i].className == 'msg') {
    content[i].style.visibility = 'hidden';
    content[i].style.display = 'none';
  }
}
videoelement = document.getElementById('item_' + videoid);
videoelement.style.visibility = 'visible';
videoelement.style.display = 'block';
