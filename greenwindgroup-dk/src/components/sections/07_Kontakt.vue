<template lang="pug">
  .inner(:class="section")

    .layers._1
      .background(:style='{ transform: layerPos.bg }')
      .layer.l4(:style='{ transform: layerPos.l4, transition: parallaxTransition }', :class="{ hide: isHidden.shape }")
      .layer.l3(:style='{ transform: layerPos.l3, transition: parallaxTransition }', :class="{ hide: isHidden.shape }")
      .layer.l2(:style='{ transform: layerPos.l2, transition: parallaxTransition }', :class="{ hide: isHidden.shape }")
      .layer.l1(:style='{ transform: layerPos.l1, transition: parallaxTransition }')

    section.section.intro
      .container.content
        .columns.is-multiline
          .text.column.is-6.is-offset-3.has-text-centered
            h2 {{ c.t1 }}
            p {{ c.t2 }}
            .newsletter {{ c.form }}
        //- .gmap
          googlemaps-map(:center.sync='center', :zoom.sync='zoom', :options='mapOptions', @idle='onIdle', @click='onMapClick')
        .map.column.is-12
          .snazzy-wrapper
            .snazzy
              iframe(:src='c.map.snazzy' width='100%' height='500px' style='border:none;')
          .text
            .inner.selectable-text
              h2 {{ c.map.title }}
              hr
              p {{ c.map.text }}
              p(v-if="c.map.email")
                a(:href='"mailto:" + c.map.email') {{ c.map.email }}
          //- .bg
            img(:src="c.map.img")
</template>

<script>
  import throttle from 'lodash/throttle'
  import asleep from 'asleep'
  import isMobile from '@/assets/js/isMobile'

  // import VueFriendlyIframe from 'vue-friendly-iframe'
  // Vue.component('vue-friendly-iframe', VueFriendlyIframe)

  export default {
    name: 'kontakt',
    // components: { VueFriendlyIframe },
    data () {
      return {
        isHidden: {
          shape: true
        },
        parallaxTransition: 'transform 1200ms',
        parallaxes: [
          { el: '.energy .photo._1', data: 'p1', amount: 0.35, pad: 0.13, Xpos: 0 }
          // { el: '.operations .photo._1', data: 'p2', amount: 0.33, pad: 0.05, Xpos: '-22vw' },
          // { el: '.operations .photo._3', data: 'p3', amount: 0.4, pad: 0.3, Xpos: 0 },
          // { el: '.offshore .shape._1 .photo', data: 'p4', amount: 0.18, pad: 0.07, Xpos: 0 }
        ],
        parallax: {
          p1: '0 0'
          // p2: '-22vw 0',
          // p3: '0 0',
          // p4: ''
        },
        scrolled: 0,
        layerPos: {
          bg: null,
          l1: null,
          l2: null,
          l3: null,
          l4: null
        },
        layerPos2: {
          l1: null
        },
        isMobile: isMobile()
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

        this.parallaxes.forEach((p) => {
          const elSel = document.querySelectorAll(p.el)[0]
          if (elSel) {
            const top = elSel.getBoundingClientRect().top
            const start = top - winH
            const end = top + winH
            const percentScrolled = (start * -1) / (elSel.offsetHeight + winH)
            const winW = window.innerWidth
            const imgH = winW * 0.75
            // image size = 4x3 of window height
            const dist = (((imgH * percentScrolled) * -1) * p.amount) + (p.pad * imgH)
            if (start < 0 && end > 0) {
              const newParallax = p.Xpos + ' ' + dist + 'px'
              this.parallax[p.data] = newParallax
            }
          }
        })
      }
    },
    created () {
      if (this.isMobile) {
        this.isHidden.shape = false
      } else {
        window.addEventListener('scroll', throttle(this.scrollHandler, 16))
      }
    },
    mounted () {
      // pageload fx
      asleep(600).then(() => {
        this.isHidden.shape = false
        asleep(1200).then(() => {
          this.parallaxTransition = 'none'
        })
      })
    },
    destroyed () {
      window.removeEventListener('scroll', this.scrollHandler)
    }
  }
</script>

<style lang="sass" scoped>
@import '../../assets/sass/config.sass'
// @import '../../assets/sass/bulmaConfig.sass'
@import "~bulma/sass/utilities/_all.sass"

.selectable-text, .selectable-text *
  user-select: text
  cursor: auto

.layer
  transform: translate3d(0, 0, 0)
  transition: transform 600ms
  &.hide
    transform: translate3d(0, 50vh, 0)

section.newsletter
  margin-bottom: 10em

section.intro
  padding: 0rem 1.5rem 10em
  margin-bottom: 10rem
  +mobile
    padding-bottom: 6rem
    padding-top: 3rem
    margin-bottom: 10rem

.layers
  height: 50vw
  // height: 100vh
  .layer, .background
    height: 100vh
    width: 100%
    position: absolute
  .background
    // background-size: 100vw auto!important
    background-size: cover
    background-position: center bottom
.button
  line-height: 0

.layers._1
  .l1
    top: 30vw
  .l2
    top: 30vw
  .l3
    top: 30vw
  .l4
    top: 30vw

.snazzy-wrapper
  // box-shadow: inset 1px 1px 11px rgba(0,0,0,0.4)
 
.snazzy
  position: absolute
  width: 100%
  border: 1px #DDD solid
  line-height: 0
  +mobile
    display: none
    // position: relative
    // height: 300px

.map
  // height: 75vh
  height: 500px
  .text
    // position: absolute
    // width: 100%
    width: 350px
    transform: translate(-3rem, 5rem)
    // height: 75vh
    // height: 500px
    +mobile
      height: auto
      width: auto
      transform: translate(0, 0)
    // display: flex
    // justify-content: flex-end
    // align-items: center
    // box-shadow: inset 1px 1px 11px rgba(0,0,0,0.4)
    // border: 1px #DDD solid
    // background: red
    float: right
    +mobile
      position: relative
      box-shadow: none
      border: 0

    .inner
      width: 350px
      +mobile
        width: 100%
        padding: 0
        margin: 0
      background: white
      border-radius: 18px
      padding: 2rem
      // margin: 0 4rem
      text-align: center
      hr
        width: 50%
        margin: 0 auto 1rem
      h2
        font-size: 1.5rem
        // text-transform: uppercase
  .bg
    width: 100%
    height: 50vh
    position: absolute
    background-color: #efefef
    // background-image: url(https://res.cloudinary.com/greenwind/image/upload/q_75/v1505125180/GW_Standortkarte_jivels.jpg)
    background-image: url(https://res.cloudinary.com/greenwind/image/upload/q_75,c_scale,w_1800/v1550746069/hero_image_contact-page_v8dczr.jpg)
    background-size: cover
    background-position: center center
    +mobile
      display: none

+mobile
  .map .text .inner
    box-shadow: none !important

.energy
  .map .text .inner
    box-shadow: 0 2px 4px 0 rgba(#000000, 0.2)
    hr
      background: lighten($energy, 20)
    h2
      color: $energy
.operations
  .map .text .inner
    box-shadow: 0 2px 4px 0 rgba(#000000, 0.2)
    hr
      background: lighten($operations, 20)
    h2
      color: $operations
.offshore
  .map .text .inner
    box-shadow: 0 2px 4px 0 rgba(#000000, 0.2)
    hr
      background: lighten($offshore, 20)
    h2
      color: $offshore

.energy
  .layers._1
    background-color: darken($energy, 10)
    .background
      // opacity: 0.94
      // background-image: url(https://res.cloudinary.com/greenwind/image/upload/v1503162952/Screen_Shot_2017-08-19_at_19.11.08_ghv2jm.png)
      // background-image: url(https://res.cloudinary.com/greenwind/image/upload/q_75/v1505125180/GW_Standortkarte_jivels.jpg)
      // background-image: url(https://res.cloudinary.com/greenwind/image/upload/v1505186379/GW_Standortkarte_jivels_BLUR_ubkv8i.jpg)
      background-image: url(https://res.cloudinary.com/greenwind/image/upload/c_scale,q_75,w_1800/v1550746513/hero_image_contact-page_hfh08p.jpg)

      
      
      background-size: 100%
      background-position: 0 -7vh
    .l1
      background-image: url(../../assets/svg/energy/07_kontakt/layer01.svg)
    .l2
      background-image: url(../../assets/svg/energy/07_kontakt/layer02.svg)
    .l3
      background-image: url(../../assets/svg/energy/07_kontakt/layer03.svg)
    .l4
      background-image: url(../../assets/svg/energy/07_kontakt/layer04.svg)

.operations
  .layers._1
    background-color: lighten($operations, 20)
    .background
      // opacity: 0.97
      // background-image: url(https://res.cloudinary.com/greenwind/image/upload/v1503162952/Screen_Shot_2017-08-19_at_19.11.08_ghv2jm.png)
      // background-image: url(https://res.cloudinary.com/greenwind/image/upload/q_75/v1505125180/GW_Standortkarte_jivels.jpg)
      // background-image: url(https://res.cloudinary.com/greenwind/image/upload/v1505186379/GW_Standortkarte_jivels_BLUR_ubkv8i.jpg)
      // background-image: url(https://res.cloudinary.com/greenwind/image/upload/c_scale,q_75,w_2400/v1506604042/GWO_Standortkarte_octx8i.jpg)
      background-image: url(https://res.cloudinary.com/greenwind/image/upload/c_scale,q_75,w_1800/v1550746513/hero_image_contact-page_hfh08p.jpg)
      background-size: 100%
      background-position: 0 -7vh
    .l1
      background-image: url(../../assets/svg/operations/07_kontakt/layer01.svg)
    .l2
      background-image: url(../../assets/svg/operations/07_kontakt/layer02.svg)
    .l3
      background-image: url(../../assets/svg/operations/07_kontakt/layer03.svg)
    .l4
      background-image: url(../../assets/svg/operations/07_kontakt/layer04.svg)

.offshore
  .layers._1
    background-color: darken($offshore, 15)
    .background
      opacity: 0.87
      // background-image: url(https://res.cloudinary.com/greenwind/image/upload/v1503162952/Screen_Shot_2017-08-19_at_19.11.08_ghv2jm.png)
      // background-image: url(https://res.cloudinary.com/greenwind/image/upload/q_75/v1505125180/GW_Standortkarte_jivels.jpg)
      // background-image: url(https://res.cloudinary.com/greenwind/image/upload/v1505186379/GW_Standortkarte_jivels_BLUR_ubkv8i.jpg)
      // background-image: url(https://res.cloudinary.com/greenwind/image/upload/c_scale,q_75,w_2400/v1506604043/GW_Off_Standortkarte_jfbing.jpg)
      background-image: url(https://res.cloudinary.com/greenwind/image/upload/c_scale,q_75,w_1800/v1550746513/hero_image_contact-page_hfh08p.jpg)
      background-size: 100%
      background-position: 0 -7vh
    .l1
      background-image: url(../../assets/svg/offshore/07_kontakt/layer01.svg)
    .l2
      background-image: url(../../assets/svg/offshore/07_kontakt/layer02.svg)
    .l3
      background-image: url(../../assets/svg/offshore/07_kontakt/layer03.svg)
    .l4
      background-image: url(../../assets/svg/offshore/07_kontakt/layer04.svg)

</style>
