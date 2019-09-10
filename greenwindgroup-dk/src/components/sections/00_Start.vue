<template lang="pug">
transition(name='fade', mode='in-out' appear)
  .inner(:class="section")
    .cloudz(:style='{ "transform": cloudParallax }', :class="{ hide: isHidden.cloudz }")
      .cloud1
      .cloud2
    .background(:style='{ "background-position": bgParallax, transition: bgTransition }', :class="{ noparallax: removeParallax }")
    .shape(:class="{ hide: isHidden.shape }")
      section
        .content
          img.logo(src='../../assets/svg/logos/gw_energy_logo_white.svg', v-if="section === 'energy'")
          img.logo(src='../../assets/svg/logos/operations.svg', v-if="section === 'operations'")
          img.logo(src='../../assets/svg/logos/offshore.svg', v-if="section === 'offshore'")
          h2.title.is-4 {{ c.t1 }}
          hr
          p {{ c.t2 }}
          a.button(v-on:click="routerPush('profil')") {{ c.t3 }}
</template>

<script>
import throttle from 'lodash/throttle'
import asleep from 'asleep'
import isMobile from '@/assets/js/isMobile'
// import TWEEN from '@tweenjs/tween.js'

export default {
  name: 'start',
  data () {
    return {
      bgParallax: 20 + 'px ' + 3 + 'px',
      cloudParallax: 'translate3d(' + 18 + 'px, ' + 2 + 'px,' + '0px) scale(1.1)',
      removeParallax: false,
      bgTransition: 'transform 600ms',
      isHidden: {
        shape: true,
        cloudz: true
      },
      isMobile: isMobile()
    }
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
    mouseHandler (e) {
      const motionX = (window.innerWidth * 1.02) - (window.innerWidth)
      const motionY = (window.innerHeight * 1.02) - (window.innerHeight)
      const motionXcloud = (window.innerWidth * 1.017) - (window.innerWidth)
      const motionYcloud = (window.innerHeight * 1.017) - (window.innerHeight)
      const mX = ((e.pageX / window.innerWidth) * 2) - 1
      const mY = ((e.pageY / window.innerHeight) * 2) - 1
      const distX = (motionX * mX * -1).toFixed(2)
      const distY = (motionY * mY * -1).toFixed(2)
      const distXcloud = (motionXcloud * mX * -1).toFixed(2)
      const distYcloud = (motionYcloud * mY * -1).toFixed(2)
      this.bgParallax = distX + 'px ' + distY + 'px'
      this.cloudParallax = 'translate3d(' + distXcloud + 'px, ' + distYcloud + 'px,' + '0px) scale(1.1)'
    },
    routerPush (link) {
      window.removeEventListener('mousemove', this.mouseHandler)
      this.bgTransition = 'all 600ms'
      this.bgParallax = '0px 0px'
      this.isHidden.shape = true
      this.isHidden.cloudz = true
      this.removeParallax = true

      asleep(600).then(() => {
        // const fullLink = '/' + this.lang + '/' + this.section + '/' + this.slug('profil')
        const fullLink = '/' + this.section + '/' + this.slug('profil')
        this.$router.push({ path: fullLink })
      })
    }
  },
  mounted () {
    asleep(300)
      .then(() => {
        this.isHidden.shape = false
        this.isHidden.cloudz = false
      })
  },
  created () {
    if (!this.isMobile) {
      window.addEventListener('mousemove', throttle(this.mouseHandler, 16), false)
    }
    if (this.isMobile) {
      this.isHidden.shape = false
    }
  },
  destroyed () {
    window.removeEventListener('mousemove', this.mouseHandler)
  }
}
</script>

<style lang="sass" scoped>
  @import '../../assets/sass/config.sass'
  @import '../../assets/sass/bulmaConfig.sass'

  .shape
    transition: transform 600ms
  .shape.hide
    transform: translateX(-100vw)

  .logo
    // width: 175px
    width: 200px

  .cloudz
    transition: opacity 2000ms
    opacity: 1
  .cloudz.hide
    opacity: 0
    transition: opacity 600ms

  .cloudz
    position: fixed
    top: 0
    left: 0
    height: 100%
    width: 100%
    z-index: 8
    .cloud1, .cloud2
      position: absolute
      top: 0
      left: 0
      height: 100vh
      width: 100vw
      background-size: cover
    .cloud1
      background-image: url(../../assets/img/cloud1.png)
      opacity: .5
      background-position: 0 59vh
      background-size: 50%
    .cloud2
      background-image: url(../../assets/img/cloud2.png)
      opacity: 1
      background-position: 0 59vh
      // opacity: 0


  @-webkit-keyframes cloudani1
   0%
     transform: translate3d(0,0,0)
   100%
     transform: translate3d(2000px,0,0)
  .cloud1
    -webkit-animation: cloudani1 100s linear

  @-webkit-keyframes cloudani2
   0%
     transform: translate3d(0,0,0)
   100%
     transform: translate3d(2000px,0,0)
  .cloud2
    -webkit-animation: cloudani2 250s linear


  hr
    background: white
    width: 60px
    margin-left: -30px
    height: 4px
    border-radius: 3px
  .background
    width: 100%
    height: 100%
    background-size: cover !important
    position: fixed
    transform: scale(1.1)
    +mobile
      background-position: center top !important
  .background.noparallax
    transform: scale(1)
    background-position: 0 0
  .shape
    background-position: 0 0
    background-size: auto 100%
    background-repeat: no-repeat
    width: 100vw

  .energy
    .button
      background-image: linear-gradient(0deg, #57733F 0%, #84AF5F 100%) !important
      border: 1px solid lighten(#5A7344, 8)
      &:hover
        border: 1px solid lighten(#5A7344, 8)
    .shape
      background-image: url(../../assets/svg/energy/00_start/layer01.svg)
      +mobile
        background-image: url(../../assets/svg/energy/00_start/layer01_mobile.svg)
    .background
      background-color: darken($energy, 25)
      background-image: url('https://res.cloudinary.com/greenwind/image/upload/v1505145056/GW_Energy_isj4nl_n61uet.jpg')

  .operations
    .button
      background-image: linear-gradient(-1deg, #828282 0%, #9E9F9E 100%) !important
      border: 1px solid #919191
      &:hover
        border: 1px solid #919191
    .shape
      background-image: url(../../assets/svg/operations/00_start/layer01.svg)
      +mobile
        background-image: url(../../assets/svg/operations/00_start/layer01_mobile.svg)
    .background
      background-color: darken($operations, 15)
      // background-image: url('https://res.cloudinary.com/greenwind/image/upload/v1505149489/GW_Operations-new_qpyynk.jpg')
      background-image: url(https://res.cloudinary.com/greenwind/image/upload/v1505145055/GW_Operations_Start_qf7iay.jpg)

  .offshore
    .button
      background: linear-gradient(-180deg, #5AA2E4 0%, #286AA6 100%) !important
      border: 1px solid darken(#4588c1, 12)
      &:hover
        border: 1px solid darken(#4588c1, 12)
    .shape
      background-image: url(../../assets/svg/offshore/00_start/layer01.svg)
      +mobile
        background-image: url(../../assets/svg/offshore/00_start/layer01_mobile.svg)
    .background
      background-color: darken($offshore, 15)
      background-image: url('https://res.cloudinary.com/greenwind/image/upload/v1505145055/GW_Offshore_Bild_eqytlh_ermqc5.jpg')

  .shape
    height: 100vh
    z-index: 9
    position: fixed
    +mobile
      // background-size: 70vh
      background-size: 100vh
      background-position: bottom

  section
    height: 100vh
    display: flex
    align-items: center
    margin-left: 15vh
    +mobile
      display: block
      // margin-top: 11rem
      margin-top: 4rem
      // padding-bottom: 24vw
      margin-left: 1.2rem

  .content
    position: relative
    color: #fff
    width: 20em
    z-index: 303
    +mobile
      width: 90vw
      hr
        display: none
    h2
      color: #fff
      font-size: 2.250em
      font-weight: 800
      white-space: pre-line
      +mobile
        font-size: 1.5em !important
        margin-top: 2rem

  .button
    color: white
    box-shadow: 1px 4px 12px 0 rgba(#000000, 0.12)
    border: none
    +mobile
      margin-top: 0.5em !important
      font-size: 0.95rem

  .button:hover
    color: white
    border-color: white

</style>
