---
sidebar_position: 3
description: Iterates throught the elements matched, executes a callback function for each iteration
---

# .forEach()

### .each()
Alias of ``.forEach()``

### .forEach( callback ( n ``Element``, index ``Int``, arr ``array``) ): ``self``
Iterates throught the elements matched, executes a callback function for each iteration.
```javascript
// No arguments
$( "p" ).forEach(function() {
  console.log( $( this ).text() );
});

// With arguments
$( "p" ).forEach(function( el, index, arr ) {
  console.log( 'Paragraph ' + index + ": " + $( this ).text() );
});
```