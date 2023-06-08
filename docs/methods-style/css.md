---
description: Sets or Gets a single style value of the matched element
---

# .css()

## Variations

### .css( ``String`` p ): ``String``
Returns the computedStyle value of the first matched element.
```javascript
console.log( $( "p" ).css('opacity') );
```

### .css( ``String`` p, ``String`` v ): ``self``
Sets a single style value of the matched elements
```javascript
$("p").css('opacity',  0.5);
```

### .css( ``Object<String, String>`` o ): ``self``
Sets a multiple style values of the matched elements.
```javascript
$("p").css({
    'marginLeft': '12px',
    'display': 'block',
    'opacity': 0.5
});
```