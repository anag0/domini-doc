---
description: Iterates throught the elements matched, executes a callback function for each iteration.
---

# .each()

### .each( callback ( index ``Int``, n ``Element``, arr ``array``) ): ``self``
Iterates throught the elements matched, executes a callback function for each iteration.

<details>
  <summary>Difference between <code>.each()</code> vs <code>.forEach()</code></summary>
  <div>
    <div><code>.forEach()</code> acts as the regular <code>Array.forEach()</code>, where the arguments order is the callback is <code>item, index, array</code></div>
    <div>In <code>.each()</code> similarly to jQuery the index argument comes first: <code>index, item, array</code></div>
  </div>
</details>

```javascript
// No arguments
$( "p" ).each(function() {
  console.log( $( this ).text() );
});

// With arguments
$( "p" ).each(function( index, el, arr ) {
  console.log( 'Paragraph ' + index + ": " + $( this ).text() );
});
```