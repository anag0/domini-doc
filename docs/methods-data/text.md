---
description: Get or Set Element the textContent value
---

# .text()

Get or Set Element the textContent value.

## Variations

### .text(): ``String|undefined``
Gets the textContent value from the first matching element
```javascript
console.log( $( "p" ).text() );
```

### .text( ``String`` text ): ``self``
Sets textContent to the argument value for all the matching elements.
```javascript
$( "p" ).text('Text!');
```