---
description: Returns the height of the element with or without margins.
---

# .outerHeight()

### .outerHeight( ``bool`` margin = false ): ``int``
Returns the height of the element with or without margins.
```javascript
console.log( 'Height with margins: ', $( "div" ).outerHeight(true) );
console.log( 'Height without margins: ', $( "div" ).outerHeight() );
```