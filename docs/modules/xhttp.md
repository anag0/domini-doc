---
description: XHTTP requests module, ajax requests
---

# XHTTP 

Module for XHTTP aka. asynchronous HTTP requests (ajax)

<details>
  <summary>How to enable <code>XHTTP</code> module?</summary>
  <div>

## Modular javascript


  If you are using the whole DoMini import, then no further actions are required.

 ```javascript
import DoMini from domini;
```

  For individual imports, make sure that both the **serialize** and **XHTTP** modules are loaded:

 ```javascript
import "domini/dist/domini-core";
import "domini/dist/domini-serialize";
import "domini/dist/domini-xhttp";
```


## Via CDN


  If you are using the whole DoMini script, nothing else is required:

```html
<script src="https://unpkg.com/domini@latest/dist/domini.js"></script>
```

  For individual files, make sure the **serialize** and **xhttp** files are included:

```html
<script src="https://unpkg.com/domini@latest/dist/domini-core.js"></script>
<script src="https://unpkg.com/domini@latest/dist/domini-serialize.js"></script>
<script src="https://unpkg.com/domini@latest/dist/domini-xhttp.js"></script>
```


  </div>
</details>


## .ajax()

Performs an asynchronous HTTP request (ajax request)

#### Signature
```typescript
.ajax(options: Object): XMLHttpRequest|void
```

### Default options

```typescript
let defaults = {
    'url': '',
    'method': 'GET',  // GET, POST
    'cors': 'cors', // cors, no-cors
    'data': {},
    'success': function (responseText: String) {}, 
    'fail': function (responseObject: XMLHttpRequest) {},
    'accept': 'text/html',
    'contentType': 'application/x-www-form-urlencoded; charset=UTF-8'
}
```

- ``String`` **url** *(default: '')* - the endpoint URL for the request
- ``String`` **method** *(default: 'GET')* - request method, 'GET' or 'POST'
- ``String`` **cors** *(default: 'cors')* - the request mode, 'cors' or 'no-cors' are supported
- ``Object`` **data** *(default: {})* - the data sent with the request
- ``Callback`` **success** - the callback function to be executed when the request was successful
- ``Callback`` **fail** - the callback function to be executed when the request failed
- ``String`` **accept** *(default: 'text/html')* - the mime type sent in the Accept-request header
- ``String`` **contentType** *(default: 'text/html')* - Content type with encoding of the data sent to the server


### Usage (cors)

```javascript
var post = $.fn.ajax({
    url: 'http://localhost:3000',
    method: 'POST',
    data: {
        action: 'do_something',
        options: $('form').serialize()
    },
    success: function (response) {
        if (response.length > 0) {
            $('#element').text(response);
        }
    },
    fail: function(xhr){
        console.log(xhr);
        if ( xhr.aborted ) {
            // do stuff
        }
    }
});
```

In cors mode the function returns the newly created [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) object, so you can use it's events/properties - like abort the request or add event listeners to specific events.

```javascript
// Aborts the previous request
post.abort();

// Adding various event listeners
post.addEventListener("loadstart", handleEvent);
post.addEventListener("load", handleEvent);
post.addEventListener("loadend", handleEvent);
post.addEventListener("progress", handleEvent);
post.addEventListener("error", handleEvent);
post.addEventListener("abort", handleEvent);
```

### Usage (no-cors)

If the cors policy is blocking requests from the current origin to the remote server, then you can use the *no-cors* configuration. This is not a recommended solution for solving *CORS* isssues, it should be used only for cases when there is absolutely no other solution available.

In *no-cors* mode the ``.ajax()`` function returns nothing as no ``XMLHttpRequest`` is made.

```javascript
// Google text autocomplete request
DoMini.fn.ajax({
    url: 'https://clients1.google.com/complete/search',
    cors: 'no-cors',
    data: {
        q: 'us',
        hl: 'en',
        nolabels: 't',
        client: 'hp',
        ds: ''
    },
    success: function (data) {
        if (data[1].length > 0) {
            let response = data[1][0][0].replace(/(<([^>]+)>)/ig, "");
            response = DoMini('<textarea />').html(response).text();
            console.log(response);
        }
    }
});
```