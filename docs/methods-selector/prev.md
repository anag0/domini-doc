---
description: Gets the previous elements for the selected elements
---

# .prev()

## Variations

### .prev(): ``DoMini``
Gets the preceeding elements (Dominified) for the selected elements
```javascript
console.log( 'Previous: ', $( "div" ).prev() );
```

### .prev(``String`` selector): ``DoMini``
Gets the preceeding elements (Dominified) matching the selector for the selected elements
```javascript
console.log( 'Previous matching ".prev-class": ', $( "div" ).prev('.prev-class') );