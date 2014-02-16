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
dom("ul", {}, [                             // <ul>
    dom("li", {innerHTML: "First"}),        //      <li>First</li>
    dom("li", {innerHTML: "Second"}),       //      <li>Second</li>
    dom("li", {innerHTML: "Third"})         //      <li>Third</li>
])                                          // </ul>
```    