---
sidebar_position: 4
description: Get or Set Element property value matched by the DoMini object
---

# .prop()

## Variations

### .prop( ``String`` p ): ``String|null``
Returns the last element's property value matched by the DoMini object
```javascript
console.log( $("input[type=checkbox]").prop('checked') );
```

### .prop( ``String`` p, ``Any`` v ): ``self``
Sets the node peroperty value to the argument value of the elements matched. Sets the property explicitly as ``Element[p] = v``
```javascript
$("input[type=checkbox]").prop('checked', true);
```