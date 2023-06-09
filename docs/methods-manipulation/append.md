---
description: Appends elements to the matched elements as their last child.
---

# .append()

Appends elements to the matched elements as their last child.

### .append(``String`` selector): ``DoMini``
Elements added via a query selector

```javascript
// adds .another-element to .my-element as last child
$( ".my-element" ).append('.another-element');

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
        <div class="some-class"></div>
        <div class="another-element"></div> <-- as last child
    </div>
</body> 
```

### .append(``String`` html): ``DoMini``
Elements added using direct HTML code

```javascript
$( ".my-element" ).append('<div class="more">Hi!<div>'),
```

### .append(``Element`` element): ``DoMini``
Element added directly

```javascript
var el = document.querySelector('#myElement');
$( "div" ).append(el),
```

### .append(``Array<Element>`` elements): ``DoMini``
Add via array of Elements

```javascript
var elements = document.querySelectorAl('.more');
$( ".my-element" ).append(elements),
```

### .append(``DoMini`` elements): ``DoMini``
Add element(s) via DoMini object

```javascript
$( "div" ).append($('.more')),
```