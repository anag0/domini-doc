---
description: Removes all matched elements from te DOM tree and returns them in a DoMini object
---

# .remove()

Removes all matched elements from te DOM tree, removes all DoMini related properties and events listeners, and returns them in a DoMini object.

<details>
  <summary>Difference between <code>.detach()</code> vs <code>.remove()</code></summary>
  <div>
    <div>Both functions remove the elements from the DOM, but<code>.detach()</code> will keep the DoMini related data and event listeners. <code>.remove()</code> clears all DoMini related data and even listeners.</div>
  </div>
</details>

### .remove(): ``DoMini``

```javascript
// Detach all paragraphs
var removed = $("p").remove();
```