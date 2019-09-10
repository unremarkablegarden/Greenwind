<template lang="pug">
  .inner(:class="section")
    .layers._1
      .background(v-bind:style='{ transform: layerPos.bg }')
      .layer.l4(v-bind:style='{ transform: layerPos.l4 }')
      .layer.l3(v-bind:style='{ transform: layerPos.l3 }')
      .layer.l2(v-bind:style='{ transform: layerPos.l2 }')
      .layer.l1(v-bind:style='{ transform: layerPos.l1 }')

    section.section.intro
      .container.content
        .columns
          .text.column.is-6.is-offset-3.has-text-centered
            h2.title {{ c.t1 }}
            p(v-if="c.t2") {{ c.t2 }}

    section.section._2
      .container.content
        .text.columns.is-multiline
          .column.is-4.is-offset-2(v-for="item in c.network")
            p {{ item.name }}
            hr
            img(src="item.img", v-if="item.img !== 'url'")
            div(v-if="item.img === 'url'") [image]
            p {{ item.text }}
</template>

<script>
  import throttle from 'lodash/throttle'

  export default {
    name: 'netzwerk',
    data () {
      return {
        scrolled: 0,
        layerPos: {
          bg: null,
          l1: null,
          l2: null,
          l3: null,
          l4: null
        }
      }
    },
    metaInfo () {
      const ucfirst = (str) => { return str.charAt(0).toUpperCase() + str.substr(1) }
      return { title: this.linkName(this.$options.name) + ' | Green Wind ' + ucfirst(this.section) }
    },
    computed: {
      content () { return this.$store.state.content },
      // section () { return this.$route.path.split('/')[2] },
      // lang () { return this.$route.path.split('/')[1] },
      section () { return this.$route.path.split('/')[1] },
      lang () { return 'dk' },
      c () { return this.content[this.lang][this.section][this.$options.name] }
    },
    methods: {
      slug (page) { return this.$store.state.pageNames[this.section][page][this.lang].slug },
      linkName (page) { return this.$store.state.pageNames[this.section][page][this.lang].name },
      scrollHandler () {
        const winH = window.innerHeight
        const scrolled = window.scrollY
        if ((scrolled / winH) < 1) {
          const moveY4 = (scrolled / 3) // .toFixed(decimals)
          const moveY3 = (scrolled / 4) // .toFixed(decimals)
          const moveY2 = (scrolled / 10) // .toFixed(decimals)
          this.layerPos.l4 = 'translate3d(0, -' + moveY4 + 'px, 0)'
          this.layerPos.l3 = 'translate3d(0, -' + moveY3 + 'px, 0)'
          this.layerPos.l2 = 'translate3d(0, -' + moveY2 + 'px, 0)'
        }
      }
    },
    created () {
      window.addEventListener('scroll', throttle(this.scrollHandler, 16))
    },
    destroyed () {
      window.removeEventListener('scroll', this.scrollHandler)
    }
  }
</script>

<style lang="sass" scoped>
@import "~bulma/sass/utilities/_all.sass"
@import '../../assets/sass/config.sass'

.layers
  height: 56vw
  .layer, .background
    height: 100vh
    width: 100%
    position: absolute
  .background
    background-position: 0 -12vw!important
    background-size: 100vw auto!important

.photo
  background-size: 100vw!important
  background-position: center!important
  width: 100vw
  position: relative
  z-index: 1

.shape
  background-position: top!important
  background-repeat: no-repeat!important
  z-index: 3
  position: relative
  width: 100%
  background-size: 100%

section.intro
  padding: 0 0 5em
  +mobile
    padding: 2em 1em
section._2
  padding-bottom: 5rem
  min-height: 50vh
  +mobile
    padding: 2em 2em 0
section._3
  margin-bottom: 4em
  +mobile
    padding: 2em


.layers._1
  .l1
    top: 40vw
  .l2
    top: 37vw
  .l3
    top: 34vw
  .l4
    top: 35vw

.energy
  .layers._1
    .background
      background-color: darken($energy, 25)
      background-image: url(https://res.cloudinary.com/greenwind/image/upload/v1504171303/DJI_0009_s802l1.jpg)
    .l1
      background-image: url(../../assets/svg/energy/04_netzwerk/layer01.svg)
    .l2
      background-image: url(../../assets/svg/energy/04_netzwerk/layer02.svg)
    .l3
      background-image: url(../../assets/svg/energy/04_netzwerk/layer03.svg)
    .l4
      background-image: url(../../assets/svg/energy/04_netzwerk/layer04.svg)

.operations
  .layers._1
    .background
      background-color: darken($operations, 15)
      background-image: url(https://res.cloudinary.com/greenwind/image/upload/v1504171303/DJI_0009_s802l1.jpg)
    .l1
      background-image: url(../../assets/svg/operations/04_netzwerk/layer01.svg)
    .l2
      background-image: url(../../assets/svg/operations/04_netzwerk/layer02.svg)
    .l3
      background-image: url(../../assets/svg/operations/04_netzwerk/layer03.svg)
    .l4
      background-image: url(../../assets/svg/operations/04_netzwerk/layer04.svg)

.offshore
  .layers._1
    .background
      background-color: darken($offshore, 15)
      background-image: url(https://res.cloudinary.com/greenwind/image/upload/v1504171416/9H1B8540_pqwclv.jpg)
    .l1
      background-image: url(../../assets/svg/offshore/04_netzwerk/layer01.svg)
    .l2
      background-image: url(../../assets/svg/offshore/04_netzwerk/layer02.svg)
    .l3
      background-image: url(../../assets/svg/offshore/04_netzwerk/layer03.svg)
    .l4
      background-image: url(../../assets/svg/offshore/04_netzwerk/layer04.svg)

</style>
