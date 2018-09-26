<template lang="pug">
  .inner(:class="section")

    .layers
      .background(:style='{ transform: layerPos.bg }')
      .layer.l4(:style='{ transform: layerPos.l4, transition: parallaxTransition }', :class="{ hide: isHidden.shape }")
      .layer.l3(:style='{ transform: layerPos.l3, transition: parallaxTransition }', :class="{ hide: isHidden.shape }")
      .layer.l2(:style='{ transform: layerPos.l2, transition: parallaxTransition }', :class="{ hide: isHidden.shape }")
      .layer.l1(:style='{ transform: layerPos.l1, transition: parallaxTransition }', :class="{ hide: isHidden.shape }")

    section.section.intro
      .container.content
        .columns
          .text.column.is-6.is-offset-3.has-text-centered
            h2 {{ c.t1 }}
            p {{ c.t2 }}

    section.section.team-members
      .container
        .team-members.content.de.columns.is-multiline.has-text-centered
          .team-member.column.is-4(v-for="member in c.team")
            figure.image.portrait
              img(v-if="member.img", :src="member.img")
              img(v-else, src='../../assets/img/portrait_placeholder.jpg')
            .name {{ member.name }}
            .job {{ member.job}}
            .bio {{ member.bio }}
</template>

<script>
  import throttle from 'lodash/throttle'
  import asleep from 'asleep'
  import isMobile from '@/assets/js/isMobile'

  export default {
    name: 'team',
    data () {
      return {
        isHidden: {
          shape: true
        },
        parallaxTransition: 'transform 1200ms',
        scrolled: 0,
        layerPos: {
          bg: null,
          l1: null,
          l2: null,
          l3: null,
          l4: null
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
        const decimals = 2
        const winH = window.innerHeight
        const scrolled = window.scrollY
        if ((scrolled / winH) < 1) {
          this.scrolled = scrolled
          // const moveBg = (scrolled / 1.5)
          const moveY4 = (scrolled / 2).toFixed(decimals)
          const moveY3 = (scrolled / 4).toFixed(decimals)
          const moveY2 = (scrolled / 6).toFixed(decimals)
          // this.layerPos.bg = 'translate(0, ' + moveBg + 'px)'
          this.layerPos.l4 = 'translate3d(0, -' + moveY4 + 'px, 0)'
          this.layerPos.l3 = 'translate3d(0, -' + moveY3 + 'px, 0)'
          this.layerPos.l2 = 'translate3d(0, -' + moveY2 + 'px, 0)'
        }
      }
    },
    created () {
      if (!this.isMobile) {
        window.addEventListener('scroll', throttle(this.scrollHandler, 16))
      } else {
        this.isHidden = {
          shape: false
        }
      }
    },
    mounted () {
      // pageload fx
      asleep(600).then(() => {
        this.isHidden.shape = false
        asleep(1200).then(() => {
          this.parallaxTransition = 'none'
        })
      })
    },
    destroyed () {
      window.removeEventListener('scroll', this.scrollHandler)
    }
  }
</script>

<style lang="sass" scoped>
  @import '../../assets/sass/config.sass'
  @import "~bulma/sass/utilities/_all.sass"

  .layer
    transform: translate3d(0, 0, 0)
    transition: transform 1200ms
    &.hide
      transform: translate3d(0, 50vh, 0)

  .team-member
    margin-bottom: 2em
  figure.portrait
    margin-bottom: 1em

  .layers
    // height: 56vw
    height: 100vh
    +mobile
      height: 35vh
  .layer, .background
    height: 100vh
    width: 100%
    position: absolute
  .background
    background-size: 100vw auto
    height: 100vh

  section.intro
    padding-top: 0
    .text
      margin-top: 0vw

  .name
    font-size: 1.2em
    line-height: 2em
    font-weight: 700

  .energy
    .background
      background-color: darken($energy, 25)
      background-image: url(http://res.cloudinary.com/greenwind/image/upload/c_scale,q_80,w_2000/v1505149009/GWE_Team_web_w0tnxg.jpg)
      // background-position: 0 -12vw
      // background-position: bottom
      background-position: top
    .l1
      background-image: url(../../assets/svg/energy/02_team/layer01.svg)
      top: 39vw
    .l2
      background-image: url(../../assets/svg/energy/02_team/layer02.svg)
      top: 38vw
    .l3
      background-image: url(../../assets/svg/energy/02_team/layer03.svg)
      top: 34vw
    .l4
      background-image: url(../../assets/svg/energy/02_team/layer04.svg)
      top: 34vw

    .job
      color: $energy

  .operations
    .background
      background-color: darken($operations, 15)
      background-image: url(http://res.cloudinary.com/greenwind/image/upload/c_scale,q_50,w_2400/v1505147157/GWO_Team_web_o9rb2w.jpg)
      // background-position: 0 -12vw
      background-position: bottom
      +mobile
        height: 30vh
    .l1
      background-image: url(../../assets/svg/operations/02_team/layer01.svg)
      top: 39vw
    .l2
      background-image: url(../../assets/svg/operations/02_team/layer02.svg)
      top: 38vw
    .l3
      background-image: url(../../assets/svg/operations/02_team/layer03.svg)
      top: 34vw
    .l4
      background-image: url(../../assets/svg/operations/02_team/layer04.svg)
      top: 34vw

    .job
      color: $operations

  .offshore
    .background
      background-color: darken($offshore, 15)
      background-image: url(http://res.cloudinary.com/greenwind/image/upload/q_75/v1504171424/IMG_6864_moopyj.jpg)
      // background-position: 0 -12vw
      background-position: bottom
    .l1
      background-image: url(../../assets/svg/offshore/02_team/layer01.svg)
      top: 39vw
    .l2
      background-image: url(../../assets/svg/offshore/02_team/layer02.svg)
      top: 38vw
    .l3
      background-image: url(../../assets/svg/offshore/02_team/layer03.svg)
      top: 34vw
    .l4
      background-image: url(../../assets/svg/offshore/02_team/layer04.svg)
      top: 34vw

    .job
      color: $offshore

  .section
    position: relative
    background: white
    z-index: 10

  section.team-members
    margin-bottom: 13vw
    padding-bottom: 0
    +mobile
      margin-bottom: 52vw

  .intro p
    font-size: 1.25em
    line-height: 1.5em
    +mobile
      font-size: 1em

  .portrait
    img
      border-radius: 1em
      max-width: 150px

  h2
    font-weight: 500
    font-size: 2.750em
    margin-bottom: 0.7em
    line-height: 1.1em

  .team-member
    padding-left: 3rem
    padding-right: 3rem
</style>
