---
description: Viewport and visibility detection module
---

# Viewport

Viewport and visibility detection module

<details>
  <summary>How to enable <code>Viewport</code> module?</summary>
  <div>

## Modular javascript


  If you are using the whole DoMini import, then no further actions are required.

 ```javascript
import DoMini from domini;
```

  For individual imports, make sure that the viewport module is loaded:

 ```javascript
import "domini/dist/domini-core";
import "domini/dist/domini-viewport";
```


## Via CDN


  If you are using the whole DoMini script, nothing else is required:

```html
<script src="https://unpkg.com/domini@latest/dist/domini.js"></script>
```

  For individual files, make sure the viewport file is included:

```html
<script src="https://unpkg.com/domini@latest/dist/domini-core.js"></script>
<script src="https://unpkg.com/domini@latest/dist/domini-viewport.js"></script>
```


  </div>
</details>

## Included Methods

### .isInViewport( ``int`` tolerance,  ``String|Element`` context): bool

Checks if the current element is within the current viewport. This function **is synchronous** and does not use intersection observer or callback methods.

#### Parameters
 - ``int`` tolerance (default: 0) - how many pixels of distance the detection can tolerate away from the element
 - ``String|Element`` context (default: window) - Element or QuerySelector for the context the viewport


 ```javascript
 // Is any part of the element visible
let myElementVisible = $('#myElement').inViewport();

 // Is any part of the element visible in relation to #otherElement
let myElementVisible = $('#myElement').inViewport(0, "#otherElement");

// Is the element within the tolerance distance of the viewport
let myElementVisible = $('#myElement').inViewport(50);

/**
 * Negative tolerance means, that the element is visible if that amount of
 * portion of it is within the viewport from any side.
 */
let myElementVisible = $('#myElement').inViewport(-50);
```