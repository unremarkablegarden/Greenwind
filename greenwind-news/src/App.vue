<template lang="pug">
  #app
    #app-body
      #top-bar
        .top-bar-item.left
          router-link(to='../', v-if='notRoot').back
            img(src="http://res.cloudinary.com/greenwind/image/upload/v1505158637/back_g6ugpb.svg")
          a(href='http://greenwind.berlin', v-if='!notRoot').back
            img(src="http://res.cloudinary.com/greenwind/image/upload/v1505158637/back_g6ugpb.svg")

        .top-bar-item.center
          img(src="./assets/img/news.svg").logo

        .mobile-menu.top-bar-item.right(v-on:click='toggleMobileMenu')
          .icon
            i.material-icons dehaze
      category-filter.filter(v-bind:class='{ open : openMobileMenu }')
      sidebar.sidebar(:class="{ 'slide-left': notRoot }")
      section.main
        .the-post
          transition(name="slide-fade", mode="out-in" appear)
            router-view
</template>

<script>
import Sidebar from '@/components/Sidebar'
import CategoryFilter from '@/components/CategoryFilter'

export default {
  name: 'app',
  data () {
    return {
      openMobileMenu: false
    }
  },
  metaInfo: {
    title: 'Green Wind News',
    titleTemplate: null
  },
  components: { Sidebar, CategoryFilter },
  computed: {
    notRoot () {
      if (this.$route.params.id) return true
    },
    URLlang () {
      if (this.$route.query.lang) {
        return this.$route.query.lang
      } else {
        return false
      }
    }
  },
  watch: {
    '$route': 'scrollTop'
  },
  created () {
    this.$store.dispatch('fetchPrismicPosts', { self: this })
  },
  methods: {
    langTrans (lang) {
      if (lang === 'en') {
        lang = 'en-gb'
      } else if (lang === 'dk') {
        lang = 'da-dk'
      } else if (lang === 'de') {
        lang = false
      }
      return lang
    },
    scrollTop () {
      document.querySelectorAll('.main')[0].scrollTop = 0
    },
    toggleMobileMenu () {
      this.openMobileMenu = !this.openMobileMenu
    }
  }
}
</script>

<style lang="sass">
@import './assets/bulmaConfig.sass'
@import './assets/config.sass'
@import './assets/animation.sass'
@import './assets/App.sass'

.dropdown
  margin-left: 1.8em
.is-small .material-icons
  transform: scale(0.75) translate(1px, 0.5px)


#top-bar
  position: fixed
  top: 20px
  right: 30px
  z-index: 100
  +mobile
    display: flex
    justify-content: space-between
    align-items: center
  .top-bar-item
    display: flex
    align-items: center
    .icon
      display: flex
      height: 100%
      align-items: center
      justify-content: flex-end
      i
        font-size: 32px
        opacity: 0.9
  .top-bar-item.left, .top-bar-item.right
    width: 35px
    height: 100%
  .top-bar-item.left
    justify-content: flex-start
  .top-bar-item.right
    justify-content: flex-end
  .top-nav
    position: absolute
    left: 10px
    display: flex
    .close
      width: 25px
      margin: 5px 0 0 5px
  .back
    display: none
    img
      margin-top: 4px
      height: 28px
      width: auto
      opacity: 0.6
  .logo
    float: right
    width: 115px
    +mobile
      float: none
  .mobile-menu
    display: none
    +mobile
      display: inline-block
  +desktop
    .logo
      width: 140px
      background-color: $white
      padding: 12px 0 12px 15px
      border-radius: 6px
      transform: translateY(-12px)
  +mobile
    padding: 10px
    top: 0
    right: 0
    background: #fff
    width: 100%
    height: 55px
    box-shadow: 0px 0px 12px rgba(#000000, 0.25)
    .back
      display: inline-block
    .logo


.sidebar
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.25)
  width: 35vw
  height: 100vh
  overflow-x: hidden
  overflow-y: auto
  position: fixed
  left: 80px
  top: 0
  z-index: 5
  transition: all 400ms ease-in-out
  +mobile
    width: 100vw
    left: 0
    &.slide-left
      transform: translate(-100vw)
      box-shadow: none


.main
  position: absolute
  left: calc(35vw + 80px)
  width: calc(65vw - 80px)
  // height: 100vh
  overflow-x: hidden
  overflow-y: auto
  padding-top: 40px
  +mobile
    box-shadow: 0
    left: 0
    width: 100vw
    padding-top: 50px

.filter
  position: fixed
  top: 0
  left: 0
  width: 80px
  height: 100vh
  z-index: 10
  padding-top: 20px
  +mobile
    top: 55px
    width: 100vw
    height: 70px
    padding: 0 10px
    transition: all 300ms
    transform: translateY(-120%)
    &.open
      transform: translateY(0)
</style>
