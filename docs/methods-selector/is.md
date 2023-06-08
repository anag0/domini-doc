---
description: Checks if any of the selected Elements match the selector
---

# .is()

### .is(``String`` selector): ``Boolean``
Checks if any of the selected Elements match the selector
```javascript
console.log( 'Class name: ', $( "div" ).is('.class-name') );
console.log( 'Pseudo selector: ', $( "div" ).is(':first-child') );
```
