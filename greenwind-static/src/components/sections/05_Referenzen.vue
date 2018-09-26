<template lang="pug">
  .inner(:class="section")

    .layers._1
      .background(:style='{ transform: layerPos.bg }')
      .layer.l4(:style='{ transform: layerPos.l4, transition: parallaxTransition }', :class="{ hide: isHidden.shape }")
      .layer.l3(:style='{ transform: layerPos.l3, transition: parallaxTransition }', :class="{ hide: isHidden.shape }")
      .layer.l2(:style='{ transform: layerPos.l2, transition: parallaxTransition }', :class="{ hide: isHidden.shape }")
      .layer.l1(:style='{ transform: layerPos.l1, transition: parallaxTransition }', :class="{ hide: isHidden.shape }")

    section.section.intro
      .container.content
        .columns
          //- .text(v-if="section === 'offshore'").column.is-8.is-offset-2
          .text.column.is-6.is-offset-3.has-text-centered
            h2 {{ c.t1 }}
            p {{ c.t2 }}

    .photo._1(v-if="section === 'offshore'", :style="{ 'background-position': parallax.p1 }")
    .shape._1(v-if="section === 'offshore'")
    .shape._2(v-if="section === 'offshore'")

    //- SECTIONS ——————————————————————————————
    section.section._1
      .container.content
        //- .text(v-if="section === 'offshore'").column.is-8.is-offset-2
        section.section.text(v-for="sections in c.sections")
          h2.has-text-centered {{ sections.title }}
          .columns(v-for="sub in sections.subsections")
            .column.is-5
              .video-wrapper(v-if="sub.video")
                //- iframe(:src='sub.video', width='100%', height='100%', frameborder='0', webkitallowfullscreen='', mozallowfullscreen='', allowfullscreen='')
                iframe(src='https://player.vimeo.com/video/279442384?autoplay=0&title=0&loop=0&color=dadfe1&badge=0&byline=0&portrait=0', width='100%', height='100%', frameborder='0', webkitallowfullscreen='', mozallowfullscreen='', allowfullscreen='')
              .slider(v-if="sub.img")
                img(:src='sub.img')
              .slider(v-if="sub.img2")
                img(:src='sub.img2')

            .column.is-6.is-offset-1
              div(v-if="section === 'operations'")
                img(v-if="lang === 'de'", src="../../assets/svg/operations/05_referenzen/Legende_DE.svg").legend
                img(v-if="lang === 'en'", src="../../assets/svg/operations/05_referenzen/Legende_EN.svg").legend
                img(v-if="lang === 'dk'", src="../../assets/svg/operations/05_referenzen/Legende_DK.svg").legend
              h4 {{ sub.title }}
              p {{ sub.text }}
</template>

<script>
  import throttle from 'lodash/throttle'
  import VimeoPlayer from '@vimeo/player'
  import asleep from 'asleep'
  import isMobile from '@/assets/js/isMobile'

  export default {
    name: 'referenzen',
    data () {
      return {
        isHidden: {
          shape: true
        },
        parallaxTransition: 'transform 1200ms',
        parallaxes: [
          { el: '.photo._1', data: 'p1', amount: 0.35, pad: 0, Xpos: 0 }
        ],
        parallax: {
          p1: '0 0'
        },
        scrolled: 0,
        layerPos: {
          bg: null,
          l1: null,
          l2: null,
          l3: null,
          l4: null
        },
        videos: {
          'video1': '233281688'
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
      section () { return this.$route.path.split('/')[2] },
      lang () { return this.$route.path.split('/')[1] },
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
    destroyed () {
      window.removeEventListener('scroll', this.scrollHandler)
    },
    mounted () {
      // pageload fx
      asleep(600).then(() => {
        this.isHidden.shape = false
        asleep(1200).then(() => {
          this.parallaxTransition = 'none'
        })
      })

      const iframeSel = document.querySelector('iframe')
      if (iframeSel) {
        const vimeo = new VimeoPlayer(iframeSel)
        vimeo.on('play', () => {
          console.log('play')
        })
      }
    }
  }
</script>

<style lang="sass" scoped>
@import "~bulma/sass/utilities/_all.sass"
@import "../../assets/sass/config.sass"

h4
  font-weight: 500

.layer
  transform: translate3d(0, 0, 0)
  transition: transform 600ms
  &.hide
    transform: translate3d(0, 50vh, 0)

.layers
  // height: 53vw
  height: 100vh
  +mobile
    height: 33vh
  .layer, .background
    height: 100vh
    +mobile
      height: 33vh
    width: 100%
    position: absolute
  .background
    background-size: 100vw auto!important

.legend
  margin-top: 2rem
  margin-bottom: 5rem
  width: 35vw
  +mobile
    width: 92vw !important
    margin-left: -8vw
    max-width: none

.photo
  background-size: 100vw!important
  // background-position: center!important
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

section._1, section._2
  padding-bottom: 4em
  +mobile
    padding-bottom: 3em
    margin-bottom: 25vh
section._3
  padding-bottom: 12em

.offshore


section._1
  padding-bottom: 0em
  margin-bottom: 10em
  padding-top: 0
  +mobile
    padding-bottom: 4em
section section
  padding-bottom: 0em
section
  .text h2
    +mobile
      font-size: 1.7em
      line-height: 1.3

.layers._1
  .l1
    top: 42vw
  .l2
    top: 35vw
  .l3
    top: 35vw
  .l4
    top: 37vw

.energy
  .text
    margin-bottom: 4em
    +mobile
      margin-bottom: 0
    h2
      margin-bottom: 2em
      +mobile
        margin-bottom: 1em

  .slider img
    margin-bottom: 1em
  .video-wrapper
    margin-bottom: 1em

  .layers._1
    .background
      background-color: darken($energy, 25)
      background-image: url(http://res.cloudinary.com/greenwind/image/upload/v1504171375/DJI_0092_vrrhxl.jpg)
      background-position: bottom
    .l1
      background-image: url(../../assets/svg/energy/05_referenzen/layer01.svg)
    .l2
      background-image: url(../../assets/svg/energy/05_referenzen/layer03.svg)
    .l3
      background-image: url(../../assets/svg/energy/05_referenzen/layer02.svg)
    .l4
      background-image: url(../../assets/svg/energy/05_referenzen/layer04.svg)

.operations
  .layers._1
    .background
      background-color: darken($operations, 15)
      background-image: url(http://res.cloudinary.com/greenwind/image/upload/v1504171375/DJI_0092_vrrhxl.jpg)
      background-position: bottom
    .l1
      background-image: url(../../assets/svg/operations/05_referenzen/layer01.svg)
    .l2
      background-image: url(../../assets/svg/operations/05_referenzen/layer02.svg)
    .l3
      background-image: url(../../assets/svg/operations/05_referenzen/layer03.svg)
    .l4
      background-image: url(../../assets/svg/operations/05_referenzen/layer04.svg)
ul.has-dots
  li
    list-style: none
    display: flex
    margin-bottom: 1em
  li::before
    content: '●'
    padding-right: .4em
    font-size: 2.5em
  li.green::before
    color: #84ae5f

.offshore
  .columns
    margin-bottom: 4em
  .layers._1
    .background
      background-color: darken($offshore, 15)
      background-image: url(http://res.cloudinary.com/greenwind/image/upload/c_scale,q_80,w_2000/v1505153240/GWOf_Referenzen_Headerbild_web_jalq6p.jpg)
      background-position: bottom
    .l1
      background-image: url(../../assets/svg/offshore/05_referenzen/layer01.svg)
    .l2
      background-image: url(../../assets/svg/offshore/05_referenzen/layer02.svg)
    .l3
      background-image: url(../../assets/svg/offshore/05_referenzen/layer03.svg)
    .l4
      background-image: url(../../assets/svg/offshore/05_referenzen/layer04.svg)

section.intro
  // padding-top: 9vw
  padding-top: 0
  padding-bottom: 1px
  margin-bottom: -1em
.photo
  &._1
    background: url(http://res.cloudinary.com/greenwind/image/upload/v1504171426/DJI_0041_ebv9jx.jpg)
    height: 50vw
.shape
  &._1
    background-image: url(../../assets/svg/offshore/05_referenzen/02/layer01.svg)
    padding-top: 20vw
    height: 59vw
    margin-top: -50vw
  &._2
    background-image: url(../../assets/svg/offshore/05_referenzen/02/layer02.svg)
    padding-top: 20vw
    height: 31vw
    margin-top: -35vw
</style>
