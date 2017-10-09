<template>
  <div>
    <github-corners repo="zhanziyang/v-dragged"></github-corners>
    <h1>V-Dragged</h1>
    <p>This directive listens to the mouse/touch behaviors and sets a handler for when a drag action is detected. <br> It is different from setting
      <code>draggable</code> on an element in that you need to move the element yourself according to the information
      <em>v-dragged</em> provides.</p>
    <div :class="['box', {'dragged': dragged}]"
         v-dragged="onDragged"
         v-tooltip.notrigger="{ content: 'Drag me', visible: !dragged}">
      <div>deltaX: {{deltaX}}</div>
      <div>deltaY: {{deltaY}}</div>
      <div>offsetX: {{offsetX}}</div>
      <div>offsetY: {{offsetY}}</div>
      <div>clientX: {{clientX}}</div>
      <div>clientY: {{clientY}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        deltaX: 0,
        deltaY: 0,
        offsetX: 0,
        offsetY: 0,
        clientX: 0,
        clientY: 0,
        dragged: false
      }
    },
    methods: {
      onDragged ({ el, deltaX, deltaY, offsetX, offsetY, clientX, clientY, first, last }) {
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
        this.deltaX = deltaX
        this.deltaY = deltaY
        this.offsetX = offsetX
        this.offsetY = offsetY
        this.clientX = clientX
        this.clientY = clientY
      }
    }
  }
</script>

<style lang="stylus">
@import url(https://fonts.googleapis.com/css?family=Lusitana)

  body,
  html
    height: 100%

  #app
    height: 100%
    padding: 20px
    box-sizing: border-box
    text-align: center
    background-color: #0067c2
    background-image: url("/v-dragged/static/carbon-fibre.png")

  h1
    color: #F5F7FA
    margin-top: 0
    padding-top: 30px
    margin-bottom 100px
    font-family: "Lusitana"
    font-weight: normal
    font-size: 3em

  p
    color darken(white, 20%)
    width 800px
    margin auto    
    padding 20px
    background alpha(#0067c2, 80%)
    border-radius 8px
    line-height 1.5
    text-align left
    position absolute
    bottom 100px
    left 50%
    margin-left -400px

  .box
    width: 200px
    height: 200px
    box-sizing: border-box
    padding: 15px
    background: white
    display: inline-block
    position: relative
    user-select: none
    text-align: left
    cursor: pointer
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)
    transition: box-shadow 0.3s cubic-bezier(.25, .8, .25, 1)
    line-height: 1.8
    color: #272727
    font-family: Consolas, 'Courier New', 'Lucida Console'
    border-radius: 4px

  .box.dragged
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)
</style>
