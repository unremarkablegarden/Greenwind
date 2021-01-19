<template lang="pug">
  .post
    .loading(v-if='loading')
      img(src="../assets/img/spinner.svg")
    .error(v-if='error') {{ error }}
    transition(name="slide-fade", mode="out-in")
      article(v-if='post', :class='post.data.categoriesClass').post
        h1.title {{ P.RichText.asText(post.data.title) }}
        hr
        //- .date {{ post.last_publication_date }}
        .date {{ post.data.published_date | formatDate(locale)}}
        .content(v-html='P.RichText.asHtml(post.data.content)')
        .media_embed(v-if='post.data.media_embed.html')
          .media(v-html='post.data.media_embed.html')
</template>

<script>
import PrismicDOM from 'prismic-dom'
import { mapGetters } from 'vuex'
import format from 'date-fns/format'
import de from 'date-fns/locale/de'
import da from 'date-fns/locale/da'

export default {
  data () {
    return {
      loading: false,
      load: true,
      post: null,
      error: null,
      title: null,
      altLangPosts: {}
    }
  },
  metaInfo () {
    if (this.title) return { title: this.title + ' | Green Wind News' }
    else return { title: 'Green Wind News' }
  },
  computed: {
    ...mapGetters({
      posts: 'getPosts',
      lang: 'getLang'
    }),
    locale () {
      return this.lang.split('-')[0]
    }
  },
  created () {
    this.P = PrismicDOM
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      const uid = this.$route.params.id
      this.error = this.post = null
      this.loading = true
      if (uid) {
        this.setPost(uid)
      } else {
        this.noPost()
      }
    },
    setPost (uid) {
      // get post from vuexstore loaded in created()
      if (uid) {
        this.$store.dispatch('fetchStatePost', uid).then(response => {
          this.loading = false
          const res = response[0]
          if (!res) {
            this.$store.dispatch('getUidLang', uid).then(lang => {
              // console.log(this.lang);
              // console.log(lang);
              if (this.lang !== lang) {
                // wrong language, change it
                console.log(lang);
                this.$store.dispatch('setLang', lang)
                this.$store.dispatch('fetchPrismicPosts', { self: this }).then((response) => {
                  this.setPost(uid)
                })
              }

            })
          } else {
            this.post = res
            if (res) this.title = res.data.title[0].text
          }
        })
      } else {
        this.noPost()
      }
    },
    noPost () {
      console.log('no post');
      // no uid in route URL
      this.$store.dispatch('latestPost', { self: this }).then(res => {
        // go to first post if not mobile
        if (window.innerWidth > 769) {
          this.$router.push({ path: res })
        }
      })
    }
  },
  filters: {
    formatDate: function (date, locale) {
      if (date && locale) {
        const dA = date.split('-')
        dA[1] = dA[1] - 1
        const newDate = new Date(dA[0], dA[1], dA[2])
        const dateFormat = 'Do MMMM YYYY'

        if (locale === 'de') {
          return format(newDate, dateFormat, { locale: de })
        } else if (locale === 'da') {
          return format(newDate, dateFormat, { locale: da })
        } else {
          return format(newDate, dateFormat)
        }
      }
    }
  }
}
</script>

<style lang="sass">
  @import '../assets/config.sass'
  @import '../assets/animation.sass'
  @import '~bulma/sass/utilities/_all'

  article
    margin: 2rem 5vw 6rem
    font-weight: 400
    font-size: 20px
    line-height: 38px
    +mobile
      font-size: 16px
      line-height: 30px
    h3
      font-size: 16px
      line-height: 38px
      margin-top: 1em

  hr
    height: 6px
    width: 72px
    margin: 1.3rem 0
    transform: translateX(-22px)
    border-radius: 3px
  .Energy hr
    background-color: $energy
  .Offshore hr
    background-color: $offshore
  .Operations hr
    background-color: $operations
  .EnergyOperations hr
    background-image: linear-gradient(90deg, #9E9F9E 0%, #9E9F9E 38%, #84AF5F 63%)
  .EnergyOffshore hr
    background-image: linear-gradient(90deg, #316EA5 0%, #286AA6 25%, #84AF5F 63%)
  .OperationsOffshore hr
    background-image: linear-gradient(90deg, #316EA5 0%, #286AA6 22%, #9E9F9E 63%)
  .EnergyOperationsOffshore hr
    background-image: linear-gradient(90deg, #9E9F9E 20%, #316EA5 44%, #286AA6 56%, #84AF5F 76%)
  .none hr
    background-color: #555

  .post .date
    padding-bottom: 0.5em
    font-size: 20px
    line-height: 38px
    +mobile
      font-size: 18px
      line-height: 30px
    font-weight: 900

  h1
    font-weight: 900
    font-size: 30px
    line-height: 38px
    +mobile
      font-size: 24px
      line-height: 30px
  .block-img img
    background: #f3f3f3
    max-width: 100%
    height: auto
    border-radius: 4px

  .loading
    height: 90vh
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    img
      width: 10vw
      height: 10vw
</style>
