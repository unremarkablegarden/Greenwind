<template lang="pug">
transition(name='fade', mode='in-out' appear)
  .inner.splash
    .layers
      .layer.l7(:class="{ hide: isHidden.l7 }")
      .layer.l5(:class="{ hide: isHidden.l5 }")
      .layer.l6(:class="{ hide: isHidden.l6 }")
      .layer.l4(:class="{ hide: isHidden.l4 }")
      .layer.l3(:class="{ hide: isHidden.l3 }")
      .layer.l2(:class="{ hide: isHidden.l2 }")
      .layer.l1

    .whitepanel

    .content.energy
      .contain(:class="{ hide: isHidden.text }")
        .logo
          img(src='../assets/svg/splash/logoDE.svg', :class="isActive('de')")
          img(src='../assets/svg/splash/logoEN.svg', :class="isActive('en')")
          img(src='../assets/svg/splash/logoDK.svg', :class="isActive('dk')")
        .menu
          //- router-link(:to="{ path: lang + '/energy' }")
          a(v-on:click="routerPush('energy')")
            img(src='../assets/svg/splash/icon_energy.svg')
          //- router-link(:to="{ path: lang + '/operations' }")
          a(v-on:click="routerPush('operations')")
            img(src='../assets/svg/splash/icon_operations.svg')
          //- router-link(:to="{ path: lang + '/offshore' }")
          a(v-on:click="routerPush('offshore')")
            img(src='../assets/svg/splash/icon_offshore.svg')
        .text
          p {{ c.intro }}
        .columns

          .column.is-6.is-hidden-desktop
            router-link(:to='buttonLink[lang]')
              img(src='https://res.cloudinary.com/greenwind/image/upload/v1534749193/GW_Leitwarte_24_7_Signet_tozfw3.png', style='width: 110px; transform: rotate(-5deg) translate(0px, 10px)')

          .column.is-6
            .news
              a.button(v-bind:href='newsLink').energy {{ c.newsButton }}
            .lang
              .icon
                img(src='../assets/svg/splash/icon_translate_desktop.svg')
              a(v-on:click="setLang('de')", :class="isActive('de')") de
              span.divider /
              a(v-on:click="setLang('en')", :class="isActive('en')") en
              span.divider /
              a(v-on:click="setLang('dk')", :class="isActive('dk')") dk
            .contact
              p
                button(id="show-modal", @click="showModal = true") {{ c.contactTitle }}

          .column.is-6.is-hidden-touch
            router-link(:to='buttonLink[lang]')
              img(src='https://res.cloudinary.com/greenwind/image/upload/v1534749193/GW_Leitwarte_24_7_Signet_tozfw3.png', style='width: 110px; transform: rotate(-5deg) translate(12px, 10px)')


    .modal.is-active(v-if='startPopUp')
      .modal-background(@click="startPopUp = false")
      .modal-content.startPopUp
        a(href='https://news.greenwind.berlin/windenergy-hamburg-vom-25.-bis-28.-september-2018', target='_blank', @click="startPopUp = false")
          img(src='http://res.cloudinary.com/greenwind/image/upload/v1536312447/GW_Messestopper_NEWS_1200x616_ro6bgn.jpg')
      button.modal-close.is-large(@click="startPopUp = false")

    .modal.is-active(v-if="showModal")
      .modal-background(@click="showModal = false")
      .modal-card
        header.modal-card-head
          div.modal-card-title {{ c.contactTitle }}
          button.delete(aria-label='close', @click="showModal = false")
        section.modal-card-body
          p
            | Green Wind
            | Alt-Moabit 60a
            | D-10555 Berlin
          p
            | Phone: +49 30-351 28 86 30
            | Fax: +49 30-351 28 86 33
          p
            | Email Energy:&nbsp;
            a(href="mailto:berlin@greenwindenergy.de") berlin@greenwindenergy.de
            br
            | Email Operations:&nbsp;
            a(href="mailto:berlin@greenwindoperations.de") berlin@greenwindoperations.de
            br
            | Email Offshore:&nbsp;
            a(href="mailto:berlin@greenwindoffshore.de") berlin@greenwindoffshore.de
        footer.modal-card-foot
</template>

<script>
import asleep from 'asleep'
import postData from '@/content/splash.json'
import isMobile from '@/assets/js/isMobile'

export default {
  name: 'splash',
  data () {
    return {
      showModal: false,
      startPopUp: true,
      lang: null,
      content: postData,
      isHidden: {
        text: true,
        l5: true,
        l6: true,
        l7: true,
        l2: true,
        l3: true,
        l4: true
      },
      isMobile: isMobile(),
      buttonLink: {
        de: '/de/offshore/leistungen',
        en: '/en/offshore/services',
        dk: '/dk/offshore/serviceydelser'
      }
    }
  },
  computed: {
    c () {
      return this.content[this.lang]
    },
    newsLink () {
      if (this.lang === 'de') {
        return 'https://news.greenwind.berlin/'
      } else {
        return 'https://news.greenwind.berlin/?lang=' + this.lang
      }
    },
    URLlang () {
      if (this.$route.query.lang) {
        return this.$route.query.lang
      } else {
        return false
      }
    }
  },
  created () {
    // const lang =
    let lang
    if (this.URLlang) {
      lang = this.URLlang
    } else {
      lang = (typeof localStorage.getItem('greenwindLang') !== 'undefined' && localStorage.getItem('greenwindLang')) || 'de'
    }
    this.lang = lang

    if (this.isMobile) {
      this.isHidden = {
        text: false,
        l5: false,
        l6: false,
        l7: false,
        l2: false,
        l3: false,
        l4: false
      }
    }
  },
  methods: {
    isActive (lang) {
      if (lang === this.lang) return 'is-active'
    },
    setLang (lang) {
      localStorage.setItem('greenwindLang', lang)
      this.lang = lang
      console.log(this.lang)
    },
    routerPush (link) {
      // custom router nav, animate first then change URL
      const fullLink = '/' + this.lang + '/' + link

      const splashUnAnimation = () => {
        const stagger = 90
        let deceleration = 1
        let delay = 0
        let i = 1
        let j = 0

        asleep(100).then(() => {
          Object.entries(this.isHidden).reverse().forEach(([key, value]) => {
            asleep(delay).then(() => {
              if (key !== 'text') {
                this.isHidden[key] = true
              } else {
                // is 'text' ... move to the left?
              }
              j = j + 1
              if (j === Object.entries(this.isHidden).length) {
                this.$router.push({ path: fullLink })
              }
            })
            i = i + 1
            deceleration = deceleration + 0.1
            delay = stagger * i * deceleration
          })
        })
      }

      if (!this.isMobile) {
        splashUnAnimation()
      } else {
        this.$router.push({ path: fullLink })
      }
    }
  },
  mounted () {
    const splashAnimation = () => {
      const stagger = 180
      let deceleration = 1
      let delay = 0
      let i = 1

      asleep(100).then(() => {
        Object.entries(this.isHidden).forEach(([key, value]) => {
          asleep(delay).then(() => {
            this.isHidden[key] = false
          })
          i = i + 1
          deceleration = deceleration + 0.1
          delay = stagger * i * deceleration
        })
      })
    }
    if (!this.isMobile) {
      splashAnimation()
    }
  }
}
</script>

<style lang="sass" scoped>
// @import "~bulma/sass/utilities/_all.sass"
// @import "~bulma/sass/components/modal"
// @import "~bulma/sass/components/card"
// @import '../assets/sass/bulmaConfig.sass'
@import '../assets/sass/config.sass'
@import '../assets/sass/animation.sass'
@import '../assets/sass/root.sass'


.is-active
  font-weight: 800

.inner
  width: 100%
  min-height: 100vh

.layers
  background: black
  position: fixed
  +mobile
    display: none

.layer
  height: 100vh
  width: 110vh
  position: fixed
  // right: 0
  transition: transform 500ms
  left: calc(-110vh + 100vw)

// white
.guide
  background-image: url(../assets/svg/splash/01/layer00.svg)
  background-size: cover
  background-position: right
  opacity: 0.3
.l1
  background-image: url(../assets/svg/splash/01/layer01.svg)
  background-position: -44.6vh 0
// blue 1
.l7
  background-image: url(../assets/svg/splash/01/layer07.svg)
  background-position: center bottom
  &.hide
    transform: translate(0, 65vh)
    transition: transform 200ms
// gray 1
.l6
  background-image: url(../assets/svg/splash/01/layer06.svg)
  background-position: right 0
  &.hide
    transform: translate(60vh, 0vh)
    transition: transform 200ms
// green 1
.l5
  background-image: url(../assets/svg/splash/01/layer05.svg)
  background-position: right top
  background-size: 95vh
  &.hide
    transform: translate(0, -70vh)
    transition: transform 200ms
// blue 2
.l4
  background-image: url(../assets/svg/splash/01/layer04.svg)
  background-position: 7.8vh 29.2vh
  background-size: 74.1vh
  &.hide
    transform: translate(-35vh, -15vh)
    transition: transform 400ms
// grey 2
.l3
  background-image: url(../assets/svg/splash/01/layer03.svg)
  background-size: 27vh
  background-position: 48vh 19vh
  &.hide
    transform: translate(-35vh, 0vh)
    transition: transform 400ms
// green 2
.l2
  background-image: url(../assets/svg/splash/01/layer02.svg)
  background-size: 62vh
  background-position: -10vh 7vh
  transition: transform 1s
  &.hide
    transform: translate(-20vh, 20vh)
    transition: transform 400ms

.whitepanel
  height: 100vh
  background: white
  width: 200vh
  right: 97vh
  position: fixed

.content
  position: fixed
  width: 400px
  // right: 95vh
  left: 10vw
  z-index: 9
  height: 100vh
  display: flex
  justify-content: flex-end
  align-items: center
  +mobile
    p
      font-size: .8em
    position: relative
    right: 0
    width: 100%
    padding: 1em
    left: 0
    justify-content: center
    align-items: flex-start
    // height: 90vh

.contain
  transition: opacity 7s
  &.hide
    opacity: 0

.logo
  margin-bottom: 2rem
  img
    display: none
  .is-active
    display: block
  +mobile
    padding: 0 1em
    img
      width: 100%

.menu
  width: 300px
  display: flex
  justify-content: space-between
  margin-bottom: 1rem
  +mobile
    width: 100%
    padding: 0 2em
  a
    transition: transform 200ms
    transform: scale(1)
  a:hover
    transform: scale(1.1)
  img
    cursor: pointer

.text
  width: 400px
  +mobile
    width: 100%
    text-align: center
  margin-bottom: 1rem
.lang
  margin-bottom: 2rem
  transform: translateX(6px)
  .icon
    display: inline-block
  +mobile
    text-align: center
    // display: none
    transform: none
  img
    margin-right: 12px
.news
  transform: translateX(-10px)
  .button
    margin-top: 20px
    margin-bottom: 40px
    &:hover
      color: white !important
    +mobile
      margin-top: 5px
  +mobile
    transform: none
    text-align: center

.contact
  +mobile
    text-align: center
  p
    font-weight: bold
    margin: -1em 0 0
  button
    border: 0
    font-size: 16px
    line-height: 1.5em
    letter-spacing: 0.02em
    font-family: 'Raleway', Arial, Helvetica, sans-serif
    font-weight: 500
    color: #444
    background: white
    margin: 0
    padding: 0
    text-decoration: underline

.modal p
  margin-bottom: 1em
  font-weight: normal
.modal p a
  color: #84AF5F
  font-weight: bold
.modal-background
  background: rgba(10, 10, 10, 0.46)
.startPopUp
  text-align: center
  img
    // width: 50%
    border: 10px #FAFAFA solid
    border-radius: 6px
    box-shadow: 0 3px 8px rgba(10,10,10,0.3)

.column.is-6
  +mobile
    text-align: center
</style>
