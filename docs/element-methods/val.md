---
sidebar_position: 6
description: Get or Set element value matched by the DoMini object
---

# .val()

## Variations

### .val(): ``String``
Returns the last element's value matched by the DoMini object
```javascript
console.log( $( "input[type=text]" ).val() );
```

### .val( ``String`` v ): ``self``
Sets the node value to the argument value of the elements matched
```javascript
 $( "input[type=text]" ).val('value');
```