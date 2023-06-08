---
sidebar_position: 3
description: Get or Set the innerHTML value
---

# .html()

## Variations

### .html(): ``String``
Gets the innerHTML value of the first matched element
```javascript
console.log( $( "p" ).html() );
```

### .html( ``String`` v ): ``self``
Sets node innerHTML for all the matched elements
```javascript
$( "p" ).html('Link: <a href='#'>Click here!</a>');
```