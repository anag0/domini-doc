---
description: HTML form and object serialization features.
---

# Serialize

HTML form and object serialization features.

<details>
  <summary>How to enable <code>Serialize</code> module?</summary>
  <div>

## Modular javascript


  If you are using the whole DoMini import, then no further actions are required.

 ```javascript
import DoMini from domini;
```

  For individual imports, make sure that the serialize module is loaded:

 ```javascript
import "domini/dist/domini-core";
import "domini/dist/domini-serialize";
```


## Via CDN


  If you are using the whole DoMini script, nothing else is required:

```html
<script src="https://unpkg.com/domini@latest/dist/domini.js"></script>
```

  For individual files, make sure the serialize file is included:

```html
<script src="https://unpkg.com/domini@latest/dist/domini-core.js"></script>
<script src="https://unpkg.com/domini@latest/dist/domini-serialize.js"></script>
```


  </div>
</details>

## Included Methods

### .serialize()

Encode a HTML form element items to a string. Ideal for using in Ajax requests.

```javascript
let formData = $('form').serialize();
$.fn.ajax({
    url: ajaxUrl,
    data: {
        options: formData
    },
    success: function(){}
})
```

### .serializeObject(``Object`` object)

Deep serializes the given object to a normalized string format.

```javascript
let str = $.fn.serializeObject({
    prop1: 'hi',
    prop2: {
        prop21: [1, 2, 3]
    },
    prop3: true
});
// Outputs: 'prop1=hi&prop2[prop21][0]=1&prop2[prop21][1]=2&prop2[prop21][2]=3&prop3=true'
console.log(decodeURIComponent(str));
```