---
description: Get or Set the innerHTML value
---

# .html()

Get or Set the innerHTML value.

## Variations

### .html(): ``String``
Gets the innerHTML value of the first matched element
```javascript
console.log( $( "p" ).html() );
```

### .html( ``String`` value ): ``DoMini``
Sets node innerHTML for all the matched elements
```javascript
$( "p" ).html('Link: <a href='#'>Click here!</a>');
```