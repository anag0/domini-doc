---
description: Returns the height of the element with or without margins and paddings, including borders.
---

# .noPaddingHeight()

### .noPaddingHeight(``Boolean`` margin = false): ``int``
Returns the height of the first matching element with/without margins and borders, but including padding.
```javascript
console.log( 'Height without padding and margin: ', $( "div" ).noPaddingHeight() );
console.log( 'Height without padding, including margin ', $( "div" ).noPaddingHeight(true) );
```
