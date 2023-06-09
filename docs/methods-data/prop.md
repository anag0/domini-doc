---
description: Get or Set Element property value matched by the DoMini object
---

# .prop()

Get or Set Element property value matched by the DoMini object.

## Variations

### .prop( ``String`` property ): ``String|undefined``
Returns the first element's property value matched by the DoMini object
```javascript
console.log( $("input[type=checkbox]").prop('checked') );
```

### .prop( ``String`` property, ``Any`` value ): ``DoMini``
Sets the node property value to the argument value of the elements matched. Sets the property explicitly as ``Element[p] = v``
```javascript
$("input[type=checkbox]").prop('checked', true);
```