<template lang="pug">
  .inner(:class="section")

    .layers._1
      .background(:style='{ transform: layerPos.bg }')
      .layer.shpe.l4(:style='{ transform: layerPos.l4, transition: parallaxTransition }', :class="{ hide: isHidden.shpe }")
      .layer.shpe.l3(:style='{ transform: layerPos.l3, transition: parallaxTransition }', :class="{ hide: isHidden.shpe }")
      .layer.shpe.l2(:style='{ transform: layerPos.l2, transition: parallaxTransition }', :class="{ hide: isHidden.shpe }")
      .layer.shpe.l1(:style='{ transform: layerPos.l1, transition: parallaxTransition }', :class="{ hide: isHidden.shpe }")
      .layer.logo(:style='{ transform: layerPos.logo, opacity: layerPos.logoOpacity, transition: parallaxTransition }', :class="{ hide: isHidden.logo }")
        .text(v-if="section === 'energy'") energy
        .text(v-if="section === 'operations'") operations
        .text(v-if="section === 'offshore'") offshore
        //- img(src='../../assets/svg/logos/gw_energy_logo_white.svg', v-if="section === 'energy'")
        //- img(src='../../assets/svg/logos/gw_operations_logo_white.svg', v-if="section === 'operations'")
        //- img(src='../../assets/svg/logos/gw_offshore_logo_white.svg', v-if="section === 'offshore'")

    section.section.intro._1
      .container.content
        .columns
          .text.column.is-6.is-offset-3.has-text-centered
            h2.title {{ c.t1 }}
            p {{ c.t2 }}
            .credit
              strong {{ c.t3 }}
              div {{ c.t4 }}

    //- .layers_2
      .layer.l2(v-bind:style='{ transform: layerPos2.l2 }')
      .layer.l1(v-bind:style='{ transform: layerPos2.l1 }')

    .photo._1(v-if="section === 'operations'", :style="{ 'background-position': parallax.p2 }")
    .photo._1(v-if="section === 'offshore'")

    section.shape-bg._2
      .container.content
        .columns
          .text.column.is-6(:class="section==='operations' ? 'is-6 is-offset-1' : 'is-6 is-offset-3 has-text-centered'")
            h2.title {{ c.t5 }}
            p {{ c.t6 }}
            //- p(v-if="section === 'offshore'") {{ c.t7b }}
            //- p(v-if="section === 'offshore'") {{ c.t7c }}
            //- router-link(to='/energy/leistungen').button {{ c.b1 }}
            //- router-link.button.nice(:to="{ path: '/' + lang + '/' + section + '/' + slug('leistungen') }") {{ linkName('leistungen') }}
            router-link.button.nice(:to="{ path: '/' + lang + '/' + section + '/' + slug('leistungen') }") {{ c.b1 }}


    //- .photo._1(v-if="section === 'energy'", :style="{ transform: parallax.p1 }")
    .photo._1(v-if="section === 'energy'", :style="{ 'background-position': parallax.p1 }")
    .shape._1(v-if="section === 'offshore'")
      .photo(:style="{ 'background-position': parallax.p4 }")
      .shape

    section.shape-bg._3
      .container.content
        .columns
          .text.column.is-6.is-offset-3.has-text-centered
            h2.title {{ c.t7 }}
            //- img.windmills(src='../../assets/svg/energy/01_Profil/windmills.svg', v-if="section === 'energy'")
            p {{ c.t8 }}
            router-link.button.nice(:to="{ path: '/' + lang + '/' + section + '/' + slug('referenzen') }")  {{ linkName('referenzen') }}
            //- router-link.button(:to="{ path: '/' + lang + '/' + section + '/referenzen' }", v-if="section !== 'operations'")  {{ c.b2 }}


    .shape._1(v-if="section === 'operations'")
      .video-top
      .video
        .video-wrapper
          iframe(src='https://player.vimeo.com/video/279442384?autoplay=0&title=0&loop=0&color=dadfe1&badge=0&byline=0&portrait=0', width='100%', height='100%', frameborder='0', webkitallowfullscreen='', mozallowfullscreen='', allowfullscreen='', autoplay='0')
          .play
      .video-bottom

    section._4
      //- router-link.button.nice.ftom(:to="{ path: '/' + lang + '/' + section + '/' + slug('referenzen') }", v-if="section === 'energy'")  {{ linkName('referenzen') }}
      .container.content
        .columns
          .text.column(:class="section==='offshore' ? 'is-5 is-offset-2' : 'is-6 is-offset-3 has-text-centered'")
            h2.title {{ c.t9 }}
            //- p(v-for="item in c.t13") {{ item }}
            p {{ c.t10 }}
            //- router-link(to='/energy/team').button {{ c.b3 }}
            router-link.button(:to="{ path: '/' + lang + '/' + section + '/team' }")  Team


    //- extra section in operations and  offshore
    .shape._2(v-if="section === 'operations'")
      .photo._3(:style="{ 'background-position': parallax.p3 }")
      .frame

    section.section._5(v-if="section === 'operations'")
      .container.content
        .columns
          .text.column.is-6.is-offset-3.has-text-centered
            h2.title {{ c.t11 }}
            p {{ c.t12 }}
            //- router-link(to='/energy/kontakt').button {{ c.b4 }}
            router-link.button.nice(:to="{ path: '/' + lang + '/' + section + '/' + slug('kontakt') }")  {{ linkName('kontakt') }}
</template>

<script>
  import throttle from 'lodash/throttle'
  import VimeoPlayer from '@vimeo/player'
  import asleep from 'asleep'
  import isMobile from '@/assets/js/isMobile'

  export default {
    name: 'profil',
    data () {
      return {
        vimeo: null,
        scrolled: 0,
        parallaxTransition: 'transform 1200ms',
        parallaxes: [
          { el: '.energy .photo._1', data: 'p1', amount: 0.35, pad: 0.13, Xpos: 0 },
          { el: '.operations .photo._1', data: 'p2', amount: 0.33, pad: 0.05, Xpos: '-22vw' },
          { el: '.operations .photo._3', data: 'p3', amount: 0.4, pad: 0.3, Xpos: 0 },
          { el: '.offshore .shape._1 .photo', data: 'p4', amount: 0.18, pad: 0.07, Xpos: 0 }
        ],
        parallax: {
          p1: '0 0',
          p2: '-22vw 0',
          p3: '0 0',
          p4: ''
        },
        isHidden: {
          logo: true,
          shpe: true
        },
        layerPos: {
          bg: null,
          l1: null,
          l2: null,
          l3: null,
          l4: null,
          logo: null,
          logoOpacity: 1
        },
        layerPos2: {
          l1: null,
          l2: null
        },
        layerPos3: {
          l1: null,
          l2: null
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
        // const decimals = 2
        const winH = window.innerHeight
        const scrolled = window.scrollY
        if ((scrolled / winH) < 1) {
          // const moveBg = (scrolled / 2).toFixed(decimals)
          const moveY4 = (scrolled / 3) // .toFixed(decimals)
          const moveY3 = (scrolled / 4) // .toFixed(decimals)
          const moveY2 = (scrolled / 10) // .toFixed(decimals)
          const moveLogo = (scrolled / 2) // .toFixed(decimals)
          const opac = 1 - (scrolled / winH) // .toFixed(decimals)
          // const z = 1 + (scrolled / winH / 4)
          // this.layerPos.bg = 'translate3d(0, ' + moveBg + 'px, 0)' //  scale(' + z + ')
          this.layerPos.l4 = 'translate3d(0, -' + moveY4 + 'px, 0)'
          this.layerPos.l3 = 'translate3d(0, -' + moveY3 + 'px, 0)'
          this.layerPos.l2 = 'translate3d(0, -' + moveY2 + 'px, 0)'
          // this.layerPos.l1 = 'translate(0, ' + moveY1 + 'px)'
          this.layerPos.logo = 'translate3d(0, ' + moveLogo + 'px, 0)'
          this.layerPos.logoOpacity = opac
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
      if (!this.isMobile) {
        window.addEventListener('scroll', throttle(this.scrollHandler, 16))
      }
      if (this.isMobile) {
        this.isHidden.logo = false
        this.isHidden.shpe = false
        this.parallaxTransition = 'none'
      }
    },
    destroyed () {
      window.removeEventListener('scroll', this.scrollHandler)
    },
    mounted () {
      // pageload fx
      if (!isMobile()) {
        asleep(600).then(() => {
          this.isHidden.logo = false
          this.isHidden.shpe = false
          asleep(1200).then(() => {
            this.parallaxTransition = 'none'
          })
        })
      }

      // VIMEO EMBED
      const iframe = document.querySelector('iframe')
      if (iframe) {
        this.vimeo = new VimeoPlayer(iframe)
        this.vimeo.on('play', () => {
          console.log('play')
        })
        const play = document.querySelector('.play')
        play.addEventListener('click', () => {
          play.remove()
          this.vimeo.play()
        }, false)
      }
    }
  }
</script>

<style lang="sass" scoped>
@import "../../assets/sass/config.sass"
// @import '../../assets/sass/bulmaConfig.sass'
@import "~bulma/sass/utilities/_all.sass"
// @import '../../assets/sass/root.sass'

+mobile
  section
    overflow: hidden

section
  background-size: 100%
  background-position: top
  background-repeat: no-repeat

.section
  position: relative
  background: white
  z-index: 10

section.intro
  // margin: 5vh
  padding-top: 3em
  padding-bottom: 22vw
  +mobile
    padding-top: 0em
    padding-bottom: 4em
    margin-top: -4em

h2
  font-size: 2.750em
  line-height: 1em
  font-weight: 500

p
  line-height: 1.625em

.credit
  margin-top: 3rem
  font-size: 0.875em
  line-height: 1.429em
  text-align: left
  // transform: translateX(25%)
  text-align: center

.intro p
  margin-top: 3rem
  font-size: 1.5em
  line-height: 1.458em
  font-family: 'Shadows Into Light', cursive
  +mobile
    font-size: 1.2em

.shpe
  transform: translate3d(0, 0, 0)
  transition: transform 1000ms
  &.hide
    transform: translate3d(0, 50vh, 0)

.layers
  height: 104vh
  +mobile
    height: 100vh
.layer, .background
  height: 100vh
  width: 100%
  position: absolute
  transform: translate3d(0, 0, 0)
.background
  height: 100vh
  background-size: cover

.layer.logo
  transition: transform 600ms
  transform: translate3d(0, 0, 0) scale3d(1,1,1)
  &.hide
    transform: translate3d(0, -50vh, 0) scale3d(2, 2, 2)
  img
    width: 350px
    +mobile
      width: 70vw
    margin-bottom: 17vh
  .text
    font-size: 3em
    margin-top: -3em
    color: white
    font-weight: 400

.background, .layer.logo
  display: flex
  justify-content: center
  align-items: center

section.shape-bg
  h2
    color: white
  color: white
  position: relative
  z-index: 10

+mobile
  .text
    padding: 2em

.photo
  background-size: 100%
  background-position: center
  width: 100%
  position: relative
  z-index: 1

.energy
  .layers._1
    .background
      background-color: darken($energy, 25)
      background-image: url(https://res.cloudinary.com/greenwind/image/upload/v1505145056/GW_Energy_isj4nl_n61uet.jpg)
      background-position: top
    .l1
      background-image: url(../../assets/svg/energy/01_profil/01/layer01.svg)
      top: 72vh
      +mobile
        top: 78vh
    .l2
      background-image: url(../../assets/svg/energy/01_profil/01/layer02.svg)
      top: 70vh
    .l3
      background-image: url(../../assets/svg/energy/01_profil/01/layer03.svg)
      top: 73vh
    .l4
      background-image: url(../../assets/svg/energy/01_profil/01/layer04.svg)
      top: 77vh

  .button.ftom
    transform: translate(calc(50vw - 65px), -28vw)
    position: absolute
    +mobile
      transform: translate(calc(50vw - 65px), -70vw)

  .windmills
    width: 18vw
    margin-bottom: 1em
    +mobile
      display: none
  .shape-bg._2
    background-image: url(../../assets/svg/energy/01_profil/02/layer02.svg)
    padding-top: 20vw
    height: 81vw
    margin-top: -16vw
    +mobile
      padding: 45vw 1em
      height: 274vw
      height: 65em
      background-size: cover

  .photo._1
    background-color: darken($energy, 20)
    background-image: url('https://res.cloudinary.com/greenwind/image/upload/q_75/v1504171302/DJI_0024_fe5brg.jpg')
    background-position: 0 0
    margin-top: -33vw
    height: 60vw
    +mobile
      margin-top: -20em
      height: 20em
      background-size: 140%

  .shape-bg._3
    background-image: url(../../assets/svg/energy/01_profil/03/layer01.svg)
    margin-top: -18vw
    padding-top: 15vw
    height: 60vw
    background-size: 120%
    +mobile
      margin-top: -18vw
      padding: 18vw 1em
      height: 102vh
      background-size: 295%

  section._4
    background-image: url(../../assets/svg/energy/01_profil/03/layer02.svg)
    padding-top: 26vw
    padding-bottom: 15em
    margin-top: -29vw
    position: relative
    z-index: 20
    +mobile
      padding-bottom: 0
      height: 173vh !important


.operations
  .background
    background-color: darken($operations, 15)
    background-image: url(https://res.cloudinary.com/greenwind/image/upload/v1505145055/GW_Operations_Start_qf7iay.jpg)
    // background-position: 0 0
    background-position: center center
    background-size: cover
    height: 100vh
    width: 100vw
    +mobile
      // height: 90vh!important
  .l1
    background-image: url(../../assets/svg/operations/01_profil/layer01.svg)
    top: 72vh
  .l2
    background-image: url(../../assets/svg/operations/01_profil/layer02.svg)
    top: 70vh
  .l3
    background-image: url(../../assets/svg/operations/01_profil/layer03.svg)
    top: 70vh
  .l4
    background-image: url(../../assets/svg/operations/01_profil/layer04.svg)
    top: 77vh

  section.intro
    +mobile
      margin-top: -5em

  .shape-bg._2
    background-image: url(../../assets/svg/operations/01_profil/02/layer01.svg)
    padding-top: 20vw
    height: 81vw
    margin-top: -15vw
    z-index: 15
    position: relative
    +mobile
      padding-top: 80vw
      height: 60em
      margin-top: -15vw
      position: relative
      // background-size: 850%
      background-size: auto 174vh !important
      background-position: top left
      .text
        text-align: center

  .photo._1
    background-color: darken($operations, 20)
    background-image: url('https://res.cloudinary.com/greenwind/image/upload/q_75/v1504171374/9H1B5439-2_qytl8g.jpg')
    background-position: -22vw
    margin-top: -10vw
    height: 60vw
    width: 50vw
    margin-left: 50vw
    background-size: cover
    position: absolute
    z-index: 11
    background-size: 115vw

  .video-top
    background-repeat: no-repeat
    background-image: url(../../assets/svg/operations/01_profil/03/layer01.svg)
    width: 100%
    height: 30vw
    position: absolute
    z-index: 2
    background-size: 100%

  .video
    background-color: darken($operations, 20)
    // background-image: url(https://res.cloudinary.com/greenwind/image/upload/q_75/v1504182127/video_rwoyru.jpg)
    width: 100%
    height: 53vw
    position: relative
    z-index: 1
    top: 6vw
    .play:after
      content: '▶'
      font-size: 12vw
      color: white
      width: 100vw
      height: 50vw
      display: flex
      justify-content: center
      align-items: center
      position: absolute
      top: 0
      cursor: pointer
      background-color: rgba(0,0,0,0.1)
      transition: all 400ms
    .play:hover:after
      background-color: rgba(0,0,0,0.0)


  .video-bottom
    background-repeat: no-repeat
    background-image: url(../../assets/svg/operations/01_profil/03/layer02.svg)
    width: 100%
    height: 20vw
    // position: absolute
    position: relative
    z-index: 2
    background-size: 100%
    top: 3vw

  .shape-bg._3
    padding-top: 0vw
    padding-bottom: 8vw
    color: #000
    +mobile
      padding-top: 5em
      height: 34em
    h2
      color: black


  section._4
    background-color: #DADADA
    padding-top: 3vw
    margin-bottom: -2em
    position: relative
    z-index: 20
    color: #222
    h2
      color: #222
    // color: white
    // h2
    //   color: white

  .shape._2 .frame
    margin-top: -1vw
    width: 100%
    height: 70vw
    background-size: 100%
    background-image: url(../../assets/svg/operations/01_profil/04/layer01.svg)
    position: relative
    z-index: 12
  .photo._3
    background-color: darken($operations, 20)
    background-image: url('https://res.cloudinary.com/greenwind/image/upload/q_75/v1504171369/9H1B5898_msyfaj_xsrlis.jpg')
    background-position: 5vw 8vw
    background-size: 100%
    height: 60vw
    width: 85vw
    margin-left: 15vw
    background-size: cover
    position: absolute
    z-index: 11

  section._5
    position: relative
    z-index: 13
    margin-top: -10vw
    // padding-bottom: 15vw
    margin-bottom: 12em
    // margin-bottom: 40vw

.offshore
  section.intro
    +mobile
      padding-top: -4em
    padding-bottom: 7vw
  .shape-bg._2
    background-color: #488ecc
    // padding-bottom: 30vw
    padding-top: 5vw
    margin-bottom: -3em
    +mobile
      margin-bottom: 0
    .text
      margin-top: -10vw

  .shape-bg._3
    color: black
    padding-bottom: 8vw
    h2
      color: $offshore

  .shape._1
    .photo
      background-image: url(https://res.cloudinary.com/greenwind/image/upload/q_75/v1504171418/shutterstock_24601687_gtamrs.jpg)
      background-size: cover
      width: 50vw
      height: 40vw
      left: 45vw
      margin-top: 9vw
      position: absolute
      z-index: 1
    .shape
      background-image: url(../../assets/svg/offshore/01_profil/02/layer02.svg)
      height: 52vw
      width: 100%
      background-size: 100%
      background-position: top
      position: relative
      z-index: 2

  section._4
    background-image: url(../../assets/svg/offshore/01_profil/03/layer01.svg)
    height: 57vw
    width: 100%
    background-size: 100%
    background-position: top
    position: relative
    color: white
    padding-top: 18vw
    margin-bottom: 12em
    // padding-top: 3vw
    padding-bottom: 8vw
    +mobile
      margin-bottom: 0
      height: 250vw
      background-size: 440%
      padding-top: 52vw
      margin-bottom: 50vw
    h2
      color: white
    *
      text-align: left

  section._5
    *
      text-align: left
    padding-bottom: 14vw

  .background
    background-color: darken($offshore, 15)
    background-image: url(https://res.cloudinary.com/greenwind/image/upload/v1505145055/GW_Offshore_Bild_eqytlh_ermqc5.jpg)
    background-position: top
  .l1
    background-image: url(../../assets/svg/offshore/01_profil/01/layer01.svg)
    top: 76vh
  .l2
    background-image: url(../../assets/svg/offshore/01_profil/01/layer02.svg)
    top: 68vh
  .l3
    background-image: url(../../assets/svg/offshore/01_profil/01/layer03.svg)
    top: 73vh
  .photo._1
    width: 100%
    height: 90vw
    background-position: top
    +desktop
      background-image: url(https://res.cloudinary.com/greenwind/image/upload/q_50/v1504548428/01_background_xcteme.jpg)
    +mobile
      background-image: url(https://res.cloudinary.com/greenwind/image/upload/c_scale,q_80,w_1400/v1504548428/01_background_xcteme.jpg)

  .shape-bg
    padding-top: 10vw
  .shape-bg._3
    padding-top: 0


</style>
