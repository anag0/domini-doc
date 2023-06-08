---
description: Returns the width of the element with or without margins.
---

# .outerWidth()

### .outerWidth( ``bool`` margin = false ): ``int``
Returns the width of the element with or without margins.
```javascript
console.log( 'Width with margins: ', $( "div" ).outerWidth(true) );
console.log( 'Width without margins: ', $( "div" ).outerWidth() );
```