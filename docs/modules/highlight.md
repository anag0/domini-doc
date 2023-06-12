---
description: Highlights list of keywords in the selected nodes and descendant contents.
---

# Highlight

Highlights list of keywords in the selected nodes and descendant contents.


<details>
  <summary>How to enable <code>.highlight()</code> module?</summary>
  <div>

## Modular javascript


  If you are using the whole DoMini import, then no further actions are required.

 ```javascript
import DoMini from domini;
```

  For individual imports, make sure that the highlight module is loaded:

 ```javascript
import "domini/dist/domini-core";
import "domini/dist/domini-highlight";
```


## Via CDN


  If you are using the whole DoMini script, nothing else is required:

```html
<script src="https://unpkg.com/domini@latest/dist/domini.js"></script>
```

  For individual files, make sure the highlight file is included:

```html
<script src="https://unpkg.com/domini@latest/dist/domini-core.js"></script>
<script src="https://unpkg.com/domini@latest/dist/domini-highlight.js"></script>
```


  </div>
</details>

## .highlight() method

### .highlight(``Array`` words, ``Object`` options)

Wraps the keywords found with a ``span`` element and adss the ``highlight`` class to them.

#### Usage

```javascript
// Highlights word1 and word2 in every paragraph
$('p').highlight(['word1', 'word2']);
```

#### Custom options

```javascript
// Highlights word1 and word2 in every paragraph, case sensitive, whole words only
// .. also applies a custom class
$('p').highlight(['word1', 'word2'], {
    className: 'myHighlight',
    element: 'span',
    caseSensitive: true,
    wordsOnly: true,
    excludeParents: '.excludeThis'
});
```

#### Default options

```javascript
var defaultOptions = {
    className: 'highlight',
    element: 'span',
    caseSensitive: false,
    wordsOnly: false,
    excludeParents: '.excludeFromHighlight'
};
```

:::info

Styling is **not added**, you can use your own custom CSS, for example:

```css
span.highlight {
    color: red;
}
```

:::


## .unHighlight() method

### .unHighlight(``Object`` options)

Unhighlights previously highlighted elements matching the options.

#### Usage

```javascript
// Unhighlights everything previously highlighted (with default options)
$('p').unHighlight();
```

#### Custom options

```javascript
// Unhighlights everything previously highlighted with custom options
$('p').unHighlight({
    className: 'myHighlight',
    element: 'span'
});
```

#### Default options

```javascript
var defaultOptions = {
    className: 'highlight',
    element: 'span'
};
```