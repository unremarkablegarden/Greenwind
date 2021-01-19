<template lang="pug">
  nav.filter
    .top
      a(href="https://greenwind.berlin/").nav-item.close
        img(src="../assets/img/close.svg")
      .category
        .nav-item(@click='setFilter', data-category='Energy')
          img(src="../assets/img/icon_energy.svg")
        .nav-item(@click='setFilter', data-category='Operations')
          img(src="../assets/img/icon_operations.svg")
        .nav-item(@click='setFilter', data-category='Offshore')
          img(src="../assets/img/icon_offshore.svg")
    .lang
      .nav-item(@click='setLang', data-lang='de-de', :class='langActive("de-de")').de
        .inner DE
        //- img(src="../assets/img/de.svg")
      .nav-item(@click='setLang', data-lang='en-gb', :class='langActive("en-gb")').en
        .inner EN
        //- img(src="../assets/img/gb.svg")
      .nav-item(@click='setLang', data-lang='da-dk', :class='langActive("da-dk")').dk
        .inner DK
        //- img(src="../assets/img/dk.svg")
</template>

<script>
import $ from 'domtastic'
import { mapGetters } from 'vuex'

export default {
  name: 'category-filter',
  data () {
    return {
      // lang: 'de-de'
    }
  },
  computed: {
    ...mapGetters({
      lang: 'getLang'
    })
  },
  methods: {
    langActive (lang) {
      if (lang === this.lang) return 'is-active'
    },
    setFilter (e) {
      let toSet
      const t = $(e.currentTarget)
      const category = t.attr('data-category')
      const navitems = $('.filter .category .nav-item')

      if (t.hasClass('is-active')) { // off
        navitems.removeClass('is-active').removeClass('inactive')
        toSet = 'all'
      } else { // on
        navitems.addClass('inactive').removeClass('is-active')
        t.removeClass('inactive').addClass('is-active')
        toSet = category
      }
      this.$store.dispatch('setActiveFilter', toSet)
    },
    setLang (e) {
      const t = $(e.target).closest('.nav-item')
      const lang = t.attr('data-lang')
      let newUID

      // get all current posts
      this.$store.dispatch('fetchStatePosts').then(response => {
        const posts = response
        // get current post alt lang ids
        const post = posts.filter(x => x.uid === this.$route.path.substring(1))
        // get uid of alt lang post where its lang = this lang
        const alts = post[0].alternate_languages
        const alt = alts.filter(x => x.lang === lang)
        if (alt[0].uid) {
          newUID = alt[0].uid
        } else {
          newUID = false
        }
      })

      this.$store.dispatch('setLang', lang)
      this.$store.dispatch('fetchPrismicPosts', { self: this }).then((response) => {
        console.log('new lang posts loaded')
        // push router to new lang uid
        if (newUID) {
          this.$router.push('/' + newUID)
        } else {
          this.$router.push('/')
        }
      })
    }
  }
}
</script>


<style lang="sass" scoped>
@import '../assets/config.sass'
@import '~bulma/sass/utilities/_all'

.filter
  display: flex
  flex-direction: column
  justify-content: space-between
  +mobile
    flex-direction: row
  background: $white
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50)
  .lang
    margin-bottom: 1rem
    // font-weight: bold
    .nav-item
      opacity: 0.4
      .inner
        border-radius: 4px
        border: 1px black solid
        padding: 3px 5px
      img
        width: 24px
        height: auto
    .nav-item.is-active, .nav-item:hover
      opacity: 1

  .nav-item *
    cursor: pointer
  .nav-item
    cursor: pointer
    transition: all 300ms
    img
      width: 36px
      height: 36px
      max-height: none
  .close
    img
      width: 28px
      height: 28px
    +mobile
      display: none
  .is-active
    transform: scale(1.1)
  .inactive
    opacity: 0.3
  .close.inactive
    opacity: 1
  +mobile
    .nav-item
      padding: 0.5rem 0.45rem
    .top, .lang, .category
      width: 50vw
      height: 70px
      background: #f9f9f9
      display: flex
      justify-content: flex-start
    .lang
      align-items: center
      justify-content: flex-end

</style>
