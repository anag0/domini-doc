---
description: Adds animation to an element property with a defined easing method
---

# Animate

Adds animation to an element property with a defined easing method

<details>
  <summary>How to enable <code>.animate()</code> module?</summary>
  <div>

## Modular javascript


  If you are using the whole DoMini import, then no further actions are required.

 ```javascript
import DoMini from domini;
```

  For individual imports, make sure that the animate module is loaded:

 ```javascript
import "domini/dist/domini-core";
import "domini/dist/domini-animate";
```


## Via CDN


  If you are using the whole DoMini script, nothing else is required:

```html
<script src="https://unpkg.com/domini@latest/dist/domini.js"></script>
```

  For individual files, make sure the animate file is included:

```html
<script src="https://unpkg.com/domini@latest/dist/domini-core.js"></script>
<script src="https://unpkg.com/domini@latest/dist/domini-animate.js"></script>
```


  </div>
</details>

## Variations

### .animate(``Object`` properties, ``Int`` duration, ``String`` easing)

 ```javascript
// Method definition
function animate(properties, duration = 200, easing = "easeInOutQuad") {};
```

Animates the selected element ``properties`` for ``duration`` via the ``easing`` function name.

 ```javascript
 // Animate left margin to 200px
$('div').animate({
    'marginLeft': 200
});

 // Animate left and top margin to 200px in 1 second, using linear easing
$('div').animate({
    'marginLeft': 200,
    'marginTop:': 200
}, 1000, 'linear');
```

### .animate( properties = false )

Passing boolean ``false`` as the properties argument will stop all pending animation frames.

 ```javascript
// Stop all previously started animations
$('div').animate( false );

// Restart animations after stopping
$('div').animate( false ).animate({
    'marginLeft': 200
});
```

## Easing

By default only 3 most used easing methods are implemented ``linear`` ``easeInOutQuad`` and ``easeOutQuad``.

You can add your own easing methods if you want to by extending the ``DoMini.fn.animate.easing`` object with an [easing math function](https://easings.net/).

For example:

 ```javascript
DoMini.fn.easing.easeInExpo = function(x) {
    return x === 0 ? 0 : pow(2, 10 * x - 10);
}

// then use it:
$('div').animate({
    'marginLeft': 200,
    'marginTop:': 200
}, 1000, 'easeInExpo');
```