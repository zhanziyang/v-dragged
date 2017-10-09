# v-dragged
> Vue directive plugin for drag event detection.

**NOTE:** This directive listens to the mouse/touch behavior and set a handler for when a drag action is detected. This is different from setting `draggable` on element in that you need to move the element yourself according to the information *v-dragged* provides.

## Install

```bash
npm install --save v-dragged
```
```js
import Vue from 'vue'
import VDragged from 'v-dragged'

Vue.use(VDragged) 
```

## Example

```html
<div v-dragged="onDragged"></div>
```
```js
{
  // ...other options omitted

  methods: {
    onDragged({ el, deltaX, deltaY, offsetX, offsetY, clientX, clientY, first, last }) {
      if (first) {
        this.dragged = true
        return
      }
      if (last) {
        this.dragged = false
        return
      }
      var l = +window.getComputedStyle(el)['left'].slice(0, -2) || 0
      var t = +window.getComputedStyle(el)['top'].slice(0, -2) || 0
      el.style.left = l + deltaX + 'px'
      el.style.top = t + deltaY + 'px'
    }
  }
}
```

### Event Details

The argument passed to the callback function is an object containing the following properties:

#### el
- The target element on which the diretive binds.
- type: HTMLElement

#### first
- A boolean to indicate whether it is the first move of the drag. (drag starts here).
- type: Boolean

#### last
- A boolean to indicate whether it is the last move of the drag. (drag ends here).
- type: Boolean

#### deltaX
- The change of the pointer (mouse/touch)'s **x** coordination  from the last position. `undefined` when `first` or `last` is `true`.
- type: Number

#### deltaY
- The change of the pointer (mouse/touch)'s **y** coordination  from the last position. `undefined` when `first` or `last` is `true`.
- type: Number

#### offsetX
- The change of the pointer (mouse/touch)'s **x** coordination  from **the starting position**. `undefined` when `first` or `last` is `true`.
- type: Number

#### offsetY
- The change of the pointer (mouse/touch)'s **y** coordination from **the starting position**. `undefined` when `first` or `last` is `true`.
- type: Number

#### clientX
- Current x coordination of the pointer (mouse/touch).
- type: Number

#### clientY
- Current y coordination of the pointer (mouse/touch).
- type: Number