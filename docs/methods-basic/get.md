---
sidebar_position: 2
description: Retrieve all or one of the elements matched by the DoMini object
---

# .get()

## Variations

### .get( ): ``array<Element>``
Retrieve all of the elements matched by the DoMini object
```javascript
for ( el of $( "p" ).get() ) {
  console.log( el.innerText );
}
```

### .get( ``Int`` n ): ``Element|null``
Retrieve one of the elements matched by the DoMini object
```javascript
console.log( $( "p" ).get(0).innerText );
```