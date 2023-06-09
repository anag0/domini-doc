---
description: Gets the closest parent elements for the selected elements
---

# .closest()

Finds the closest parent which matches the selector for each selected element. Goes upwards the DOM tree until finds a match. If no match is found and empty DoMini object is returned.

The selector can be either a query selector string, a DoMini object or an Element. In case of a DoMini object arguments it's compared to the first element.

## Variations

### .closest(``String`` selector): ``DoMini``
```javascript
console.log( 'Parents matching ".parent-class": ', $( "div" ).closest('.parent-class') );
```

### .closest(``Element`` element): ``DoMini``
```javascript
var el = document.querySelector('#myDiv');
console.log( '#myDiv is parent of selected: ', $( "div" ).closest(el).length > 0 );
```

### .closest(``DoMini`` elements): ``DoMini``
:::info

Compares only to the **first** item from the DoMini object parameter, not agains all of them.

:::
```javascript
console.log( '#myDiv is parent of selected: ', $( "div" ).closest($('#myDiv')).length > 0 );

// Same as:
console.log( '#myDiv is parent of selected: ', $( "div" ).closest($('#myDiv').get(0)).length > 0 );
```