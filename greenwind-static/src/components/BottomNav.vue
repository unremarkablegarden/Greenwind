
<template lang="pug">
.inner(:class="section")

  .top-menu(v-if="isSplash")
    router-link(to="/").close
      img(src='../assets/svg/icons/close_btn.svg')
    a.toggle-menu(v-on:click="toggleMenu", v-if="isPage")
      img(src='../assets/svg/icons/open-menu_btn.svg', :class="{ open: menu }").toOpen

  .bottom-menu(v-if="isPage", :class="{ curtain: curtain, fixed: fixed }")
    .inner(:style="{ transform: translateY, transition: innerTransition }")
      .layers.is-hidden-mobile
        .layer.l2(:style="{ 'background-position': bpl2 }")
        .layer.l1(:style="{  'background-position': bpl1 }")
      .menu-links(v-on:click="hideMenu", v-if="lang === 'de'")
        router-link(:to="{path: '/' + lang + '/' + section}").navbar-item Start
        router-link(:to="{path: '/' + lang + '/' + section + '/profil'}").navbar-item  Profil
        router-link(:to="{path: '/' + lang + '/' + section + '/leistungen'}").navbar-item Leistungen
        //- router-link(:to="{path: '/' + lang + '/' + section + '/netzwerk'}").navbar-item Netzwerk
        router-link(:to="{path: '/' + lang + '/' + section + '/standorte'}", v-if="section === 'operations'").navbar-item Standorte
        router-link(:to="{path: '/' + lang + '/' + section + '/referenzen'}", v-else).navbar-item Referenzen
        router-link(:to="{path: '/' + lang + '/' + section + '/team'}").navbar-item Team
        //- router-link(:to="{path: '/' + lang + '/' + section + '/windwissen'}").navbar-item Windwissen
        router-link(:to="{path: '/' + lang + '/' + section + '/kontakt'}").navbar-item Kontakt
        .mini
          router-link(:to="{path: '/' + lang + '/' + section + '/impressum'}").navbar-item Impressum
          router-link(:to="{path: '/' + lang + '/' + section + '/datenschutz'}").navbar-item Datenschutz

      .menu-links(v-on:click="hideMenu", v-if="lang === 'en'")
        router-link(:to="{path: '/' + lang + '/' + section}").navbar-item Start
        router-link(:to="{path: '/' + lang + '/' + section + '/profile'}").navbar-item  Profile
        router-link(:to="{path: '/' + lang + '/' + section + '/services'}").navbar-item Services
        //- router-link(:to="{path: '/' + lang + '/' + section + '/network'}").navbar-item Network
        router-link(:to="{path: '/' + lang + '/' + section + '/locations'}", v-if="section === 'operations'").navbar-item Locations
        router-link(:to="{path: '/' + lang + '/' + section + '/references'}", v-else).navbar-item References
        router-link(:to="{path: '/' + lang + '/' + section + '/team'}").navbar-item Team
        //- router-link(:to="{path: '/' + lang + '/' + section + '/knowledge'}").navbar-item Knowledge
        router-link(:to="{path: '/' + lang + '/' + section + '/contact'}").navbar-item Contact
        .mini
          router-link(:to="{path: '/' + lang + '/' + section + '/imprint'}").navbar-item Imprint
          router-link(:to="{path: '/' + lang + '/' + section + '/dataprotection'}").navbar-item Data protection

      .menu-links(v-on:click="hideMenu", v-if="lang === 'dk'")
        router-link(:to="{path: '/' + lang + '/' + section}").navbar-item Start
        router-link(:to="{path: '/' + lang + '/' + section + '/profil'}").navbar-item  Profil
        router-link(:to="{path: '/' + lang + '/' + section + '/serviceydelser'}").navbar-item Serviceydelser
        //- router-link(:to="{path: '/' + lang + '/' + section + '/netvaerk'}").navbar-item Netværk
        router-link(:to="{path: '/' + lang + '/' + section + '/lokaliteter'}", v-if="section === 'operations'").navbar-item Lokaliteter
        router-link(:to="{path: '/' + lang + '/' + section + '/referencer'}", v-else).navbar-item Referencer
        router-link(:to="{path: '/' + lang + '/' + section + '/team'}").navbar-item Team
        //- router-link(:to="{path: '/' + lang + '/' + section + '/viden-om-vind'}").navbar-item Viden om vind
        router-link(:to="{path: '/' + lang + '/' + section + '/kontakt'}").navbar-item Kontakt
        .mini
          router-link(:to="{path: '/' + lang + '/' + section + '/kolofon'}").navbar-item Kolofon
          router-link(:to="{path: '/' + lang + '/' + section + '/databeskyttelse'}").navbar-item Databeskyttelse
</template>

<script>
import asleep from 'asleep'

export default {
  name: 'bottom-nav',
  data () {
    return {
      menu: false,
      innerTransition: 'all 600ms',
      translateY: 'translateY(0)',
      speed: 600,
      curtain: false,
      fixed: false,
      bpl1: '0 50vh',
      bpl2: '50vw 50vh'
    }
  },
  watch: {
    '$route': 'hideMenu'
  },
  methods: {
    toggleMenu () {
      console.log(this.innerTransition)
      // console.log(this.translateY)

      if (this.menu === false) {
        this.showMenu()
      } else {
        this.hideMenu()
      }
    },
    showMenu () {
      this.menu = true
      this.fixed = true
      this.curtain = true
      this.translateY = 'translateY(-100vh)'
      // bpl1: '0 50vh',
      // bpl2: '50vw 50vh'
      this.bpl1 = '0 100vh'
      this.bpl2 = '50vw 100vh'
      asleep(300).then(() => {
        this.bpl1 = '0 50vh'
        asleep(150).then(() => {
          this.bpl2 = '50vw 50vh'
        })
      })
    },
    hideMenu () {
      this.menu = false
      this.curtain = false
      this.translateY = 'translateY(0vh)'
      asleep(this.speed).then(() => {
        this.fixed = false
      })
    }
  },
  computed: {
    lang () {
      return this.$route.path.split('/')[1]
    },
    section () {
      return this.$route.path.split('/')[2]
    },
    isPage () {
      if (this.$route.path.split('/').length > 3) return true
      else return false
    },
    isSplash () {
      if (this.$route.path.split('/').length > 2) return true
      else return false
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~bulma/sass/utilities/_all'

.toOpen
  transition: transform 300ms
.open
  transform: rotateZ(45deg)

.bottom-menu
  z-index: 0
  // transform: translateY(100%)
  transition: all 600ms
  width: 100%
  height: 100vh
  background-color: rgba(0,0,0,0)
  // background-color: red
  margin-top: -40vh
  .inner
    width: 100vw
    height: 100%

.bottom-menu.curtain
  transition: all 600ms
  background-color: rgba(0,0,0,0.4)

.bottom-menu.fixed
  position: fixed
  bottom: 0
  z-index: 500
  margin-top: 0
  .layers
    position: fixed
  .inner
    position: fixed
    top: 100vh

.top-menu
  display: flex
  justify-content: space-between
  z-index: 5
  .close, .toggle-menu
    width: 40px
  +mobile
    padding: 13px !important
    .close, .toggle-menu
      width: 25px

.menu-links
  background-repeat: no-repeat
  background-size: contain
  font-weight: 900
  letter-spacing: -0.02em
  text-transform: uppercase
  font-size: 2.4em
  padding: 3em 2.8em
  height: 37rem
  width: 35rem
  // height: 30vw
  // width: 100%
  // position: relative
  z-index: 10
  position: fixed
  bottom: 0
  left: 20vw
  // bottom: -5rem
  // top: calc(100vh - 40rem)
  +touch
    left: 2em
  +mobile
    background-size: 100%
    width: 14em
    left: -2em
    bottom: -8rem
  .navbar-item
    color: #fff
    padding: 0
    line-height: 1
    &:hover
      background: none
      opacity: 0.6
      cursor: pointer

.mini
  margin-top: 2.5em
  font-weight: normal
  font-size: 14px
  a
    display: inline-block
    margin-right: 1.5em
  text-transform: none
  letter-spacing: 0.01em

.layers
  width: 100vw
  height: 100vh
  position: absolute
  z-index: 5
  // overflow: hidden
  .layer
    position: absolute
    height: 100vh
    width: 100%
    background-repeat: no-repeat
    transition: all 700ms
  .l1
    background-size: 100%
    // background-position: bottom left
  .l2
    background-size: 53%
    // background-position: 50vw bottom

.top-menu
  position: fixed
  top: 0
  z-index: 909
  width: 100%
  // display: flex
  justify-content: space-between
  font-size: 3em
  color: #fff
  padding: .5em .4em
  // z-index: 5
  .close, .toggle-menu
    filter: drop-shadow( 0 0 4px rgba(#000000, 0.2) )
    &:hover
      opacity: .7
      cursor: pointer


.energy
  .menu-links
      background-image: url(../assets/svg/energy/menu/square.svg)
  .layers
    .l1
      background-image: url(../assets/svg/energy/menu/layer01.svg)
    .l2
      background-image: url(../assets/svg/energy/menu/layer02.svg)

.operations
  .menu-links
      background-image: url(../assets/svg/operations/menu/square.svg)
  .l1
    background-image: url(../assets/svg/operations/menu/layer01.svg)
  .l2
    background-image: url(../assets/svg/operations/menu/layer02.svg)

.offshore
  .menu-links
      background-image: url(../assets/svg/offshore/menu/square.svg)
  .l1
    background-image: url(../assets/svg/offshore/menu/layer01.svg)
  .l2
    background-image: url(../assets/svg/offshore/menu/layer02.svg)

</style>
