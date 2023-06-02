---
sidebar_position: 1
description: Get or Set a node attribute value
---

# .attr()

## Variations

### .attr( ``String`` a ): ``String|null``
Returns the last element's attribute value matched by the DoMini object.
```javascript
$("p").attr('id');
```

### .attr( ``Int|String`` v ): ``self``
Sets the node attribte value to the argument value of the elements matched. Uses the ``Element.setAttribute`` function.
```javascript
$("p").attr('id', 'myId');
```