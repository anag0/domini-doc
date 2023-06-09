---
description: Prepends elements to the matched elements as the first child.
---

# .prepend()

Prepends element(s) to the matched elements as their first child.

### .prepend(``String`` selector): ``DoMini``
Elements added via a query selector

```javascript
// adds .another-element to .my-element as first child
$( ".my-element" ).preped('.another-element');

// Before:
<body>
    <div class="another-element"></div> <-- this element
    <div class="my-element">
        <div class="some-class"></div>
    </div>
</body>   

// After:
<body>
    <div class="my-element">
        <div class="another-element"></div> <-- as first child
        <div class="some-class"></div>
    </div>
</body>  
```

### .prepend(``String`` html): ``DoMini``
Elements added using direct HTML code

```javascript
$( ".my-element" ).preped('<div class="more">Hi!<div>');
```

### .prepend(``Element`` element): ``DoMini``
Element added directly

```javascript
var el = document.querySelector('#myElement');
$( "div" ).prepend(el),
```

### .prepend(``Array<Element>`` elements): ``DoMini``
Add via array of Elements

```javascript
var elements = document.querySelectorAl('.more');
$( ".my-element" ).prepend(elements),
```

### .prepend(``DoMini`` elements): ``DoMini``
Add element(s) via DoMini object

```javascript
$( "div" ).prepend($('.more'));
```