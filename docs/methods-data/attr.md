---
description: Get or Set a node attribute value
---

# .attr()

Get or Set a node attribute value.

## Variations

### .attr( ``String`` attribute ): ``String|undefined``
Returns the first element's attribute value matched by the DoMini object.
```javascript
$("p").attr('id');
```

### .attr( ``String`` attribute, ``Int|String`` value ): ``self``
Sets the node attribte value to the argument value of the elements matched. Uses the ``Element.setAttribute`` function.
```javascript
$("p").attr('id', 'myId');
```