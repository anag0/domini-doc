---
description: Plugins are the way to extend DoMini features.
---

# Plugins

Plugins are the best way to extend DoMini features. Check out the best practices below on how to create individual plugins.

## Plugin via constructor

The ``DoMini.fn`` attribute acts as the ``DoMini`` object constructor. Adding attributes to the ``DoMini.fn`` constructor will automatically extend the DoMini object.

```javascript
(function ($) {
    $.fn.myPlugin = function() {
        /**
         * Do your stuff here
         */ 

        // To perserve chaining return this
        return this;
    };
}(DoMini));

// The constructor is now extended with .myPlugin(..)
$('div').myPlugin(..);
```

## Plugin via the DoMini._fn.plugin() utility method

You can also declare a plugin via the ``DoMini._fn.plugin(plugin_name, plugin_object)`` method. 

### _fn.plugin( ``String`` plugin_name, ``Object`` plugin_object )

This method will automatically:
 - Extend the ``DoMini.fn`` constructor with the ``plugin_name`` attribute
 - Calling the method will create a new object from the ``plugin_object`` constructor
 - After creating the new object the ``object.init()`` method is automatically called 


 ```javascript
var myPlugin = {
    // Required
    init: function(options, element) {
        // This is automatically executed on creation
    },
    method1: function() {},
    method2: function() {}
}
DoMini._fn.plugin('myPlugin', myPlugin);

var options = {
    option1: 1,
    option2: "123"
};
$('div').myPlugin(options);
```