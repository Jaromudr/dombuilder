Dombuilder
=========

dom(selector, [attributes, [nested]])

Features
------

  - Build DOM tree with javascript
  
```
var element = dom("div", {"class": "frame-choice", "data-frame-src": this.imageSrc}, [
    dom("img", {src: this.thumbSrc, height: 100})
]);

document.body.appendChild(element);
```

  - Use css selectors
 
```
dom("div")                                  // <div></div>
dom("img#id")                               // <img id="id" />
dom(#id.class1.class2)                      // <div id="id" class="class1 class2"></div>
```

  - Nested elements

```
dom("ul", [                                 // <ul>
    dom("li", "First"),                     //      <li>First</li>
    dom("li", {innerHTML: "Second"}),       //      <li>Second</li>
    dom("li", "Third")                      //      <li>Third</li>
])                                          // </ul>
``` 

  - Immediately mapping to js variable

```
content = dom(".content", [
    dom(".image-navigation", [
        rotateLeftButton = dom("i.fa.fa-rotate-left"),
        rotateRightButton = dom("i.fa.fa-rotate-right"),
        zoomInButton = dom("i.fa.fa-plus-circle"),
        zoomOutButton = dom("i.fa.fa-minus-circle")
    ])
]);

rotateLeftButton.addEventListener(events.start, function(){});

```   
