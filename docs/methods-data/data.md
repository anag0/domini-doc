---
description: Get or Set the node dataset attribute value
---

# .data()

Get or Set the node dataset attribute value.

## Variations

### .data( ``String`` a ): ``String``
Returns the first element's dataset ``data-{key}`` value matched by the DoMini object.
```javascript
$("p").data('customData');
```

### .data( ``String`` a, ``Int|String`` v ): ``self``
Sets the node dataset ``data-{key}`` value to the argument value of the elements matched.
```javascript
$("p").data('customData', 'value');
```