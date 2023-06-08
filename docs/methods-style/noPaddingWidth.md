---
description: Returns the width of the element with or without margins and paddings, including borders.
---

# .noPaddingWidth()

### .noPaddingWidth(``Boolean`` margin = false): ``int``
Returns the width of the first matching element with/without margins and borders, but including padding.
```javascript
console.log( 'Width without padding and margin: ', $( "div" ).noPaddingWidth() );
console.log( 'Width without padding, including margin ', $( "div" ).noPaddingWidth(true) );
```
