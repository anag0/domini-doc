---
description: Gets the closest child elements by query slector for the selected elements
---

# .find()

Finds the closest child element which matches the selector for each selected element. Goes down the DOM tree until finds a match. If no match is found and empty DoMini object is returned.

### .find(``String`` selector): ``DoMini``
```javascript
let children = $( "div" ).find('.child-class');
console.log( 'Children matching ".child-class": ', children );
```