---
sidebar_position: 1
---

# What is DoMini

A minimalistic HTML document manipulation and traversal tool.

Syntactically mostly indentical to jQuery, but much smaller with only the essential features.

## Installation
Use npm or yarn to install DoMini with a single command

```shell
# with npm
npm i domini --save-dev

# with yarn
yarn add domini
```
## Via CDN

If you prefer a build, use the CDN version (all features)

```html
<script src="https://unpkg.com/domini@latest/dist/domini.js"></script>
```

..or individually (core + modules):

```html
<script src="https://unpkg.com/domini@latest/dist/domini-core.js"></script>

// You can optionally load more modules after the core if you need them:
<script src="https://unpkg.com/domini@latest/dist/domini-animate.js"></script>
<script src="https://unpkg.com/domini@latest/dist/domini-highlight.js"></script>
<script src="https://unpkg.com/domini@latest/dist/domini-serialize.js"></script>
<script src="https://unpkg.com/domini@latest/dist/domini-xhttp.js"></script>
```

## Sample Usage
DoMini loads itself to the ```DoMini``` variable in the global namespace.

```javascript
// Similarly to jQuery
DoMini('#selector').text('Hi!');

// If you prefer $
const $ = DoMini;
$('#selector').text('Hi!');

// Or much better in a scope
(function($){
    $('#selector').text('Hi!');
})(DoMini);

// Fires on DOMContentLoaded or immediately if DOMContentLoaded was fired
DoMini(function($){ 
    $('#selector').text('Hi!');
});
```  

## Medthods Reference
 - [Basic Methods](./category/basic-methods)
 - [Element Selector Methods](./category/element-selector-methods)
 - [Element Data Methods](./category/element-data-methods)
 - [Style Related Methods](./category/style-related-methods)