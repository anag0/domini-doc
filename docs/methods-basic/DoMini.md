---
sidebar_position: 1
description: DoMini or $ selector function
---

# DoMini()
A constructor method to create a Dominified object from a [selector](https://www.w3schools.com/css/css_selectors.asp) or an [Element](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector).

## Variations

### DoMini(``String`` selector ): ``array<Object>``
Retrieve the "Dominified" elements array
```javascript
DoMini('p');
```

### DoMini(``Element`` element ): ``array<Object>``
Retrieve the "Dominified" element
```javascript
DoMini(document.querySelector('body'));
```

### DoMini(``Function`` callback )
Executes the callback method on the window ``DOMContentLoaded`` event, passes itself as argument for scoping.
If ``DOMContentLoaded`` was fired, the callback is executed immediately.
```javascript
// Fires on DOMContentLoaded or immediately if DOMContentLoaded was fired
DoMini(function($){
    // $ is now DoMini
    $('p').text('Hi!');
});
```