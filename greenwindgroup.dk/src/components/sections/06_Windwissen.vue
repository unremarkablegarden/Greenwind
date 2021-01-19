<template lang="pug">
  .inner(:class="section")

    .layers._1
      .background(v-bind:style='{ transform: layerPos.bg }')
      .layer.l3(v-bind:style='{ transform: layerPos.l3 }')
      .layer.l2(v-bind:style='{ transform: layerPos.l2 }')
      .layer.l1(v-bind:style='{ transform: layerPos.l1 }')

    section.section.intro
      .container.content
        .columns
          .text.column.is-6.is-offset-3.has-text-centered
            h2 {{ c.t1 }}
            p {{ c.t2 }}

    section.section._1
      .container.content
        //- .text(data-lang='de', v-if="section === 'offshore'").column.is-6.is-offset-3.de
        .text.columns.is-multiline
          .column.is-5.custom-offset1(v-for="s in c.sections")
            strong {{ s.title }}
            div(v-if="s.subtitle") {{ s.subtitle }}
            hr
            p {{ s.text }}
            p(v-if="s.link")
              | {{ s.link.text }}
              a(:href="s.link.url", target="_blank") {{ s.link.url }}
            p(v-if="s.more").more {{ s.more }}
</template>

<script>
import throttle from 'lodash/throttle'

export default {
  name: 'windwissen',
  data () {
    return {
      scrolled: 0,
      layerPos: {
        bg: null,
        l1: null,
        l2: null,
        l3: null
      }
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
    }
  },
  created () {
    window.addEventListener('scroll', throttle(this.scrollHandler, 16))
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollHandler)
  }
}
</script>

<style lang="sass" scoped>
  @import "~bulma/sass/utilities/_all.sass"
  @import "../../assets/sass/config.sass"
  .custom-offset1
    margin-left: 4.166666667%
    margin-right: 4.16666667%
  .layers
    height: 65vw
    .layer, .background
      height: 100vh
      width: 100%
      position: absolute
    .background
      background-size: 100vw auto!important

  .photo
    background-size: 100vw!important
    background-position: center!important
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

  section.intro
    padding-top: 0
    +mobile
      padding-top: 3em
      padding-bottom: 2em
  section._2
    padding-bottom: 10em
    +mobile
      padding-bottom: 4em

  section._1
    min-height: 48vh
    margin-bottom: 12vw

  .is-multiline
    margin-top: -4em
    .column
      margin-top: 4em

  .offshore
    section._1
      padding-bottom: 10em
      +mobile
        padding-bottom: 4em

  .content
    ul
      li::before
        background-image: url(../../assets/svg/icons/external_link_icon.svg)
        background-repeat: no-repeat
        content: ''
        padding-right: 2em
  .energy
    .layers._1
      .background
        background-color: darken($energy, 25)
        background-image: url(https://res.cloudinary.com/greenwind/image/upload/v1504171376/DJI_0033_zdhhkb.jpg)
        background-position: 0 -18vw
      .l1
        background-image: url(../../assets/svg/energy/06_windwissen/layer01.svg)
        top: 36vw
      .l2
        background-image: url(../../assets/svg/energy/06_windwissen/layer02.svg)
        top: 38vw
      .l3
        background-image: url(../../assets/svg/energy/06_windwissen/layer03.svg)
        top: 38vw

  .operations
    .layers._1
      .background
        background-color: darken($operations, 15)
        background-image: url(https://res.cloudinary.com/greenwind/image/upload/v1504171303/DJI_0009_s802l1.jpg)
        background-position: 0 -20vw
      .l1
        background-image: url(../../assets/svg/operations/06_windwissen/layer01.svg)
        top: 36vw
      .l2
        background-image: url(../../assets/svg/operations/06_windwissen/layer02.svg)
        top: 38vw
      .l3
        background-image: url(../../assets/svg/operations/06_windwissen/layer03.svg)
        top: 38vw

  .offshore
    .layers._1
      .background
        background-color: darken($offshore, 15)
        background-image: url(https://res.cloudinary.com/greenwind/image/upload/v1504171428/009A9H1B2246_nze0yq.jpg)
        background-position: 0 -6vw
      .l1
        background-image: url(../../assets/svg/offshore/06_windwissen/layer01.svg)
        top: 36vw
      .l2
        background-image: url(../../assets/svg/offshore/06_windwissen/layer02.svg)
        top: 38vw
      .l3
        background-image: url(../../assets/svg/offshore/06_windwissen/layer03.svg)
        top: 38vw

  li
    list-style-type: none

</style>
