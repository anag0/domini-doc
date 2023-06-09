---
description: Get or Set element value matched by the DoMini object
---

# .val()

Get or Set element value matched by the DoMini object.

## Variations

### .val(): ``String|undefined``
Returns the first element's value matched
```javascript
console.log( $( "input[type=text]" ).val() );
```

### .val( ``String`` value ): ``self``
Sets the node value to the argument value of the elements matched
```javascript
 $( "input[type=text]" ).val('value');
```