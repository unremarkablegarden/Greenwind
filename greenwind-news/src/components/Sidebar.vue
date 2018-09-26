<template lang="pug">
  .inner
    .years
      .year(v-for='year of yearList', @click='setActiveYear', :data-year='year') {{ year }}
    .menu(v-if='posts && posts.length')
      .menu-item(v-for='post of posts', :key='post.id', :class='[ post.data.categoriesClass, yearClass(post.data.year) ]', :value='post.uid')
        router-link(:to='post.uid')
          .wrapper
            .inner
              h3.title {{ P.RichText.asText(post.data.title) }}
              .date
                img(src="../assets/img/time.svg")
                span {{ post.data.published_date | formatDate(lang) }}
</template>

<script>
import PrismicDOM from 'prismic-dom'
import $ from 'domtastic'
import { mapGetters } from 'vuex'
import format from 'date-fns/format'
import de from 'date-fns/locale/de'
import da from 'date-fns/locale/da'

export default {
  name: 'sidebar',
  data () {
    return {
      filterYear: this.currentYear,
      activePost: null,
      postActive: true
      // locale: 'de'
    }
  },
  computed: {
    currentYear () {
      return (new Date()).getFullYear()
    },
    yearList () {
      const y = this.currentYear
      return [ y, y - 1, y - 2 ]
    },
    ...mapGetters({
      activeFilter: 'getActiveFilter',
      posts: 'getPosts',
      lang: 'getLang'
    })
  },
  watch: {
    '$route': 'setActivePost',
    activeFilter () {
      const category = this.activeFilter
      if (category !== 'all') {
        // add hidden to all menu-item without one of the three classes
        // remove hidden from all menu-item with one of the three classes
        $('.menu-item').forEach((el) => {
          if ($(el).attr('class').includes(category)) $(el).removeClass('hidden')
          else $(el).addClass('hidden')
        })
      } else {
        $('.hidden').removeClass('hidden')
      }
    },
    filterYear () {
      $('.menu-item').forEach((el) => {
        if ($(el).attr('class').includes('year' + this.filterYear)) $(el).removeClass('yearHidden')
        else $(el).addClass('yearHidden')
      })
    }
  },
  methods: {
    yearClass (year) {
      return 'year' + year
    },
    setActivePost () {
      $('.menu-item').removeClass('is-active')
      $('.menu-item[value="' + this.$route.params.id + '"]').addClass('is-active')
    },
    setActiveYear (e) {
      const t = $(e.currentTarget)
      $('.years .is-active').removeClass('is-active')
      t.addClass('is-active')
      this.filterYear = t.attr('data-year')
    }
  },
  created () {
    this.P = PrismicDOM
  },
  // mounted () {
  //   console.log(this.yearsList)
  // },
  filters: {
    formatDate: function (date, locale) {
      if (date && locale) {
        const dA = date.split('-')
        dA[1] = dA[1] - 1
        const newDate = new Date(dA[0], dA[1], dA[2])
        const dateFormat = 'Do MMMM YYYY'

        // lang = 'en-gb'
        // lang = 'da-dk'
        if (locale === 'de-de') {
          return format(newDate, dateFormat, { locale: de })
        } else if (locale === 'da-dk') {
          return format(newDate, dateFormat, { locale: da })
        } else {
          return format(newDate, dateFormat)
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import "~bulma/sass/utilities/_all.sass"
@import '../assets/config.sass'


.years
  position: fixed
  width: 35vw
  height: 40px
  background: $grey-lighter
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.25)
  display: flex
  text-align: center
  z-index: 7
  +mobile
    width: 100%
    bottom: 0
  .year
    padding: .5em 1em
    flex-grow: 1
    border-left: 1px solid darken($grey-lighter, 4)
    &:hover
      background: darken($grey-lighter, 5)
      cursor: pointer
    &.is-active
      background: $white

.sidebar
  overflow-y: hidden
  .menu-item .inner
    transition: all 0ms
    padding-right: 80px
  &:hover
    overflow-y: scroll
    .menu-item .inner
      transition: all 0ms
      padding-right: 70px

\::-webkit-scrollbar
  width: 6px

\::-webkit-scrollbar-track
  background-color: #EFEFEF
  border-radius: 0px

\::-webkit-scrollbar-thumb
  -webkit-border-radius: 3px
  border-radius: 3px
  // background-image: linear-gradient(0deg, #9E9F9E 20%, #316EA5 44%, #286AA6 56%, #84AF5F 76%)
  background: #888
  &:window-inactive
    background: rgba(0, 0, 0, 0.4)


.menu
  top: 40px
  position: relative
  +mobile
    margin-top: 55px
.menu-item *
  cursor: pointer
.menu-item.hidden
  opacity: 0
  max-height: 0
  border: 0
.menu-item.yearHidden
  opacity: 0
  max-height: 0
  border: 0
.menu-item
  transition: 500ms all
  transform: scaleY(1)
  cursor: pointer
  border-bottom: 2px $white solid
  overflow: hidden
  opacity: 1
  max-height: 50vh
  .inner
    transition: 500ms all
    padding: 25px 70px
    transition: 300ms all
    transform: translate3d(0, 0, 0)
  &.is-active
    .wrapper
      background: #EFEFEF
      .inner
        transition: 500ms all
        transform: translate3d(35px, 0, 0)
        background: white
    .title
      color: black
  .title
    transition: 300ms all
    font-weight: normal
    font-size: 18px
    line-height: 24px
    // color: $white
    margin-bottom: .5em
  .date
    display: flex
    align-items: center
    padding-bottom: 0
    color: $black
    line-height: 1em
    img
      margin-right: 0.5em
  div
    cursor: pointer
    color: white

.Energy
  background: $energy
  &:hover
    background: lighten($energy, 10)
  &.is-active
.Offshore
  background: $offshore
  &:hover
    background: lighten($offshore, 10)
.Operations
  background: $operations
  &:hover
    background: lighten($operations, 10)

.menu-item
  .wrapper
    margin-top: 7px
  .inner
    background: #EFEFEF

.menu-item.none
  background: #FFF
.EnergyOperations
  background-image: linear-gradient(90deg, #9E9F9E 0%, #9E9F9E 38%, #84AF5F 63%)
.EnergyOffshore
  background-image: linear-gradient(90deg, #316EA5 0%, #286AA6 25%, #84AF5F 63%)
.OperationsOffshore
  background-image: linear-gradient(90deg, #316EA5 0%, #286AA6 22%, #9E9F9E 63%)
.EnergyOperationsOffshore
  background-image: linear-gradient(90deg, #9E9F9E 20%, #316EA5 44%, #286AA6 56%, #84AF5F 76%)


</style>
