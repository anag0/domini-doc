---
description: Adds the elements matching the selector to the current DoMini object
---

# .add()

Adds the elements matching the selector to the current DoMini object and returns it.

:::info

This function will **not** create new DoMini object, but appends the newly added elements to the current one.

:::

### .add(``String`` selector): ``DoMini``
Elements added via a query selector

```javascript
$( "div" ).add('.more'),
```

### .add(``String`` html): ``DoMini``
Elements added using direct HTML code

```javascript
$( "div" ).add('<div class="more">Hi!<div>'),
```

### .add(``Element`` element): ``DoMini``
Element added directly

```javascript
var el = document.querySelector('#myElement');
$( "div" ).add(el),
```

### .add(``Array<Element>`` elements): ``DoMini``
Add via array of Elements

```javascript
var elements = document.querySelectorAl('.more');
$( "div" ).add(elements),
```

### .add(``DoMini`` elements): ``DoMini``
Add element(s) via DoMini object

```javascript
var el = document.querySelector('#myElement');
$( "div" ).add($('.more')),
```