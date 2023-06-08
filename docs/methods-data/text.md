---
sidebar_position: 5
description: Get or Set Element the textContent value
---

# .text()

## Variations

### .text(): ``String|undefined``
Gets the textContent value from the first matching element
```javascript
console.log( $( "p" ).text() );
```

### .text( ``String`` v ): ``self``
Sets textContent to the argument value for all the matching elements.
```javascript
$( "p" ).text('Text!');
```