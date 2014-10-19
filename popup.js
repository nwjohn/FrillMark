// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Global variable containing the query we'd like to pass to Flickr. In this
 * case, kittens!
 *
 * @type {string}
 */

var FrillMaker = {
  getLinks: function() {
    this.makeLinks_("Angelic Pretty", "logoAP.png", "http://www.angelicpretty.com/en/"); 
    this.makeLinks_("Baby, the Stars Shine Bright", "logoBaby.png", "http://www.babyssb.co.jp/"); 
    this.makeLinks_("Innocent World", "logoIW.png", "http://innocent-w.jp/index_e.html"); 
    this.makeLinks_("Metamorphose Temps De Fille", "logoMeta.png", "http://www.metamorphose.gr.jp/"); 
  }, 

  makeLinks_: function (linkTitle, linkImage, linkHref) { 
    var lineBreak = document.createElement('br')
      , img = new Image()
      , a = document.createElement('a');

    img.src = linkImage; 
    
    a.setAttribute("target", "_blank"); 
    a.title = linkTitle;
    a.href = linkHref;

    a.appendChild(img);

    document.body.appendChild(a);
    document.body.appendChild(lineBreak);
    }
};

// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
  FrillMaker.getLinks();
});
