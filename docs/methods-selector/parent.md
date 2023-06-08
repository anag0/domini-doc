---
description: Gets the parent elements for the selected elements
---

# .parent()

## Variations

### .parent(): ``DoMini``
Gets the direct parent elements (Dominified) for the selected elements
```javascript
console.log( 'Parent: ', $( "div" ).parent() );
```

### .parent(``String`` selector): ``DoMini``
Gets the direct parent elements (Dominified) matching the selector for the selected elements
```javascript
console.log( 'Parents matching ".prent-class": ', $( "div" ).parent('.parent-class') );
```