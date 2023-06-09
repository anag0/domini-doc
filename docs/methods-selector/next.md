---
description: Gets the subsequent (next) elements for the selected elements
---

# .next()

## Variations

### .next(): ``DoMini``
Gets the subsequent elements (Dominified) for the selected elements
```javascript
console.log( 'Next: ', $( "div" ).next() );
```

### .next(``String`` selector): ``DoMini``
Gets the subsequent elements (Dominified) matching the selector for the selected elements
```javascript
console.log( 'Next matching ".next-class": ', $( "div" ).next('.next-class') );