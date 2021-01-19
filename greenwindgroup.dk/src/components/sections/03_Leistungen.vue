<template lang="pug">
.inner(:class="section")
  .layers._1
    .background(:style='{ transform: layerPos.bg }')
    .layer.l4(:style='{ transform: layerPos.l4, transition: parallaxTransition }', :class="{ hide: isHidden.shape }")
    .layer.l3(:style='{ transform: layerPos.l3, transition: parallaxTransition }', :class="{ hide: isHidden.shape }")
    .layer.l2(:style='{ transform: layerPos.l2, transition: parallaxTransition }', :class="{ hide: isHidden.shape }")
    .layer.l1(:style='{ transform: layerPos.l1, transition: parallaxTransition }')

  //- new, all
  //- 0
  section.section._0.intro
    .container.content
      .columns
        .text.column.is-6.is-offset-3.has-text-centered
          h2.title  {{ c.t0 }}
          p  {{ c.t0n }}
          p &nbsp;

  //- E 1
  section.intro_old.section._5(v-if="section === 'energy'")
    .container.content
      .columns
        .text.column.is-6.is-offset-3.has-text-centered.no-top-margin
          h2.title {{ c.t9 }}
          p {{ c.t10 }}
      .columns(v-if="c.sections2").is-multiline
        .text.column(v-for="s in c.sections2").is-5.custom-offset1
          strong {{ s.title }}
          hr
          p {{ s.p }}
          ul(v-if="s.list")
            li(v-for="li in s.list") {{ li }}


  //- OP 3
  section.section._killme(v-if="section === 'operations'")
    .container.content
      .columns
        .text.column.is-8.is-offset-2.has-text-centered
          h2.title {{ c.section_sept_2018.h1 }}
          //- p {{ c.section_sept_2018.h2 }}
          img(src='https://res.cloudinary.com/greenwind/image/upload/v1534749193/GW_Leitwarte_24_7_Signet_tozfw3.png', style='width: 110px; transform: rotate(-5deg) translate(0px, 10px); margin-bottom: 30px; margin-top: 20px;')
          br
      .columns(v-for='s in c.section_sept_2018.sections')
        .text.column.is-8.is-offset-2.has-text-centered
          h2.title
            .small {{ s.small }}
            .big {{ s.title }}
          p {{ s.p }}
          br
      .columns
        .column.is-5.custom-offset1(v-for='s in c.section_sept_2018.columns')
          strong {{ s.title }}
          hr
          ul
            li(v-for='li in s.list') {{ li }}


      //- .columns.is-multiline
        .column.is-5.custom-offset1(v-for="s in c.sections0")
          strong {{ s.title }}
          hr
          p {{ s.p }}

  //- section.section._killme(v-if="section === 'operations'")
    .container.content
      .columns
        .text.column.is-8.is-offset-2.has-text-centered
          h2.title {{ c.t1 }}
          p {{ c.t2 }}
          p(v-if="c.t2b") {{ c.t2b }}
      .columns(v-if="c.sections0").is-multiline
        .column.is-5.custom-offset1(v-for="s in c.sections0")
          strong {{ s.title }}
          hr
          p {{ s.p }}


  //- OFF 1
  //- OP 3
  section.section._killme(v-if="section === 'offshore'")
    .container.content
      .columns
        .text.column.is-8.is-offset-2.has-text-centered
          h2.title {{ c.section_sept_2018.h1 }}
          //- p {{ c.section_sept_2018.h2 }}
          img(src='https://res.cloudinary.com/greenwind/image/upload/v1534749193/GW_Leitwarte_24_7_Signet_tozfw3.png', style='width: 110px; transform: rotate(-5deg) translate(0px, 10px); margin-bottom: 30px; margin-top: 20px;')
          br
      .columns(v-for='s in c.section_sept_2018.sections')
        .text.column.is-8.is-offset-2.has-text-centered
          h2.title
            .small {{ s.small }}
            .big {{ s.title }}
          p {{ s.p }}
          br
      .columns
        .column.is-5.custom-offset1(v-for='s in c.section_sept_2018.columns')
          strong {{ s.title }}
          hr
          ul
            li(v-for='li in s.list') {{ li }}

  //- section.intro_old.section._3(v-if="section === 'offshore'")
    .container.content
      .columns
        .text.column.is-8.is-offset-2.has-text-centered
          h2.title {{ c.t1 }}
          p {{ c.t2 }}
          p(v-if="c.t2b") {{ c.t2b }}
      .columns(v-if="c.sections0").is-multiline
        .column.is-5.custom-offset1(v-for="s in c.sections0")
          strong {{ s.title }}
          hr
          p {{ s.p }}


  .photo._4(v-if="section === 'energy'", :style="{ 'background-position': parallax.p4 }")
  .shape._4(v-if="section === 'energy'")

  //- OFF 2
  //- SHOULD BE REPOWERING NOT
  //- section.section(v-if="section === 'energy'")._10
    .container.content
      .columns
        .text.column.is-6.is-offset-3.has-text-centered
          h2.title  {{ c.t4 }}
          p  {{ c.t5 }}
          p  {{ c.t6 }}
      .columns.is-multiline
        .column.is-5.custom-offset1(v-for="section in c.sections1")
           strong {{ section.title }}
           hr
           p {{ section.p }}
  section.section(v-if="section === 'energy'")._10
    .container.content
      .columns
        .text.column.is-6.is-offset-3.has-text-centered
          h2.title {{ c.t13 }}
          p {{ c.t14 }}
          p {{ c.t15 }}
          p
            strong {{ c.t16 }}
            //- | &nbsp;{{ c.t17 }}
            | &nbsp;
            a(:href="'mailto:'+c.t17", style='color: #89B66A') {{ c.t17 }}
      .columns.is-multiline
        .column.is-5.custom-offset1(v-for="section in c.sections4")
          strong {{ section.title }}
          hr
          p {{ section.p }}



  .photo._1(:style="{ 'background-position': parallax.p1 }")
  .shape._1

  //- E 2
  section.section._3(v-if="section === 'energy'")
    .container.content
      .columns
        .text.column.is-6.is-offset-3.has-text-centered
          h2.title  {{ c.t4 }}
          p  {{ c.t5 }}
          p  {{ c.t6 }}
      .columns.is-multiline
        .column.is-5.custom-offset1(v-for="section in c.sections1")
           strong {{ section.title }}
           hr
           p {{ section.p }}


  //- OP 1
  section.intro_old.section._3(v-if="section === 'operations'")
   .container.content
     .columns
       .text.column.is-6.is-offset-3.has-text-centered
         h2.title  {{ c.t4 }}
         p  {{ c.t5 }}
         p  {{ c.t6 }}
     .columns.is-multiline
       .column.is-5.custom-offset1(v-for="section in c.sections1")
          strong {{ section.title }}
          hr
          p {{ section.p }}


  //- OFF 2
  section.section._5(v-if="section === 'offshore'")
    .container.content
      .column.is-6.text.is-offset-3.has-text-centered
        h2 {{ c.t4 }}
        p {{ c.t5 }}
        p {{ c.t6 }}
        br
        br
      .columns
        .column.is-5.custom-offset1(v-for="s in c.sections1")
          strong {{ s.title }}
          hr
          p {{ s.p }}


  .photo._2(:style="{ 'background-position': parallax.p2 }")
  .shape._2


  //- OP 2
  section.section._5(v-if="section === 'operations'")
    .container.content
      .columns
        .text.column.is-6.is-offset-3.has-text-centered
          h2.title {{ c.t9 }}
          p {{ c.t10 }}
      .columns(v-if="c.sections2").is-multiline
        .text.column(v-for="s in c.sections2").is-5.custom-offset1
          strong {{ s.title }}
          hr
          p {{ s.p }}
          ul(v-if="s.list")
            li(v-for="li in s.list") {{ li }}


  //- OFF 3
  section.section(v-if="section === 'offshore'")._9
    .container.content
      .columns
        .text.column.is-6.is-offset-3.has-text-centered
          h2.title {{ c.t9 }}
          p {{ c.t10 }}
      .columns(v-if="c.sections2").is-multiline
        .text.column(v-for="s in c.sections2").is-5.custom-offset1
          strong {{ s.title }}
          hr
          p {{ s.p }}
          ul(v-if="s.list")
            li(v-for="li in s.list") {{ li }}


  .photo._3(v-if="section === 'offshore'", :style="{ 'background-position': parallax.p3 }")
  .shape._3(v-if="section === 'offshore'")

  .photo._3(v-if="section === 'operations'", :style="{ 'background-position': parallax.p3 }")
  .shape._3(v-if="section === 'operations'")

  //- E 3
  section.section(v-if="section === 'energy'")._9
    .container.content
      .text.columns.is-multiline
        .column.is-8.is-offset-2.has-text-centered
          h2 {{ c.t11 }}
          p {{ c.t12 }}
      .columns.is-multiline
        .column.is-5.custom-offset1(v-for="s in c.sections3")
          strong {{ s.title }}
          hr
          p {{ s.p }}

  //- OP 4
  section.section(v-if="section === 'operations'")._9
    .container.content
      .text.columns.is-multiline
        .column.is-8.is-offset-2.has-text-centered
          h2 {{ c.t11 }}
          p {{ c.t12 }}
      .columns.is-multiline
        .column.is-5.custom-offset1(v-for="s in c.sections3")
          strong {{ s.title }}
          hr
          p {{ s.p }}

  //- OFF 4
  section.section(v-if="section === 'offshore'")._fyout
    .container.content
      .text.columns.is-multiline
        .column.is-8.is-offset-2.has-text-centered
          h2 {{ c.t11 }}
          p {{ c.t12 }}
      .columns.is-multiline
        .column.is-5.custom-offset1(v-for="s in c.sections3")
          strong {{ s.title }}
          hr
          p {{ s.p }}



  .photo._3(v-if="section === 'energy'", :style="{ 'background-position': parallax.p3 }")
  .shape._3(v-if="section === 'energy'")

  //- E 4
  section.section(v-if="section === 'energy'").last
    .container.content
      .columns
        .text.column.is-8.is-offset-2.has-text-centered
          h2.title {{ c.t1 }}
          p {{ c.t2 }}
          p(v-if="c.t2b") {{ c.t2b }}
      .columns(v-if="c.sections0").is-multiline
        .column.is-5.custom-offset1(v-for="s in c.sections0")
          strong {{ s.title }}
          hr
          p {{ s.p }}
</template>


<script>
  import throttle from 'lodash/throttle'
  import asleep from 'asleep'
  import isMobile from '@/assets/js/isMobile'

  export default {
    name: 'leistungen',
    data () {
      return {
        isHidden: {
          shape: true
        },
        parallaxTransition: 'transform 1200ms',
        parallaxes: [
          { el: '.energy .photo._1', data: 'p1', amount: 0.30, pad: 0, Xpos: 0 },
          { el: '.operations .photo._1', data: 'p1', amount: 0.28, pad: 0, Xpos: 0 },
          { el: '.offshore .photo._1', data: 'p1', amount: 0.28, pad: 0, Xpos: 0 },
          { el: '.energy .photo._2', data: 'p2', amount: 0.43, pad: 0, Xpos: 0 },
          { el: '.operations .photo._2', data: 'p2', amount: 0.34, pad: 0, Xpos: 0 },
          { el: '.offshore .photo._2', data: 'p2', amount: 0.35, pad: 0, Xpos: 0 },
          { el: '.energy .photo._3', data: 'p3', amount: 0.45, pad: 0, Xpos: 0 },
          { el: '.operations .photo._3', data: 'p3', amount: 0.34, pad: 0, Xpos: 0 },
          { el: '.offshore .photo._3', data: 'p3', amount: 0.4, pad: 0, Xpos: 0 },
          { el: '.photo._4', data: 'p4', amount: 0.17, pad: 0, Xpos: 0 }
        ],
        parallax: {
          p1: '0 0',
          p2: '0 0',
          p3: '0 0',
          p4: '0 0'
        },
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
        const decimals = 3
        const winH = window.innerHeight
        const scrolled = window.scrollY
        const scrollRatio = (scrolled / winH)
        // console.log(scrolled.toFixed(1))
        if (scrollRatio < 1) {
          // const moveBg = (scrolled / 2) // .toFixed(decimals)
          const moveY4 = (scrolled / 3).toFixed(decimals)
          const moveY3 = (scrolled / 4).toFixed(decimals)
          const moveY2 = (scrolled / 10).toFixed(decimals)
          // const z = 1 + (scrolled / winH / 4)
          // this.layerPos.bg = 'translate3d(0, ' + moveBg + 'px, 0)' //  scale(' + z + ')
          this.layerPos.l4 = 'translate3d(0, -' + moveY4 + 'px, 0)'
          this.layerPos.l3 = 'translate3d(0, -' + moveY3 + 'px, 0)'
          this.layerPos.l2 = 'translate3d(0, -' + moveY2 + 'px, 0)'
          // this.layerPos.l1 = 'translate(0, ' + moveY1 + 'px)'
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
      window.addEventListener('scroll', throttle(this.scrollHandler, 16))
    },
    mounted () {
      // pageload fx
      if (!isMobile()) {
        asleep(600).then(() => {
          this.isHidden.shape = false
          asleep(1200).then(() => {
            this.parallaxTransition = 'none'
          })
        })
      } else {
        // is mobile
        this.isHidden.shape = false
        this.parallaxTransition = 'none'
      }
    },
    destroyed () {
      window.removeEventListener('scroll', this.scrollHandler)
    }
  }
</script>

<style lang="sass" scoped>
@import "~bulma/sass/utilities/_all.sass"
@import '../../assets/sass/config.sass'

.layer
  transform: translate3d(0, 0, 0)
  transition: transform 600ms
  +mobile
    transition: all 0 !important
  &.hide
    transform: translate3d(0, 50vh, 0)

+mobile
  .text h2
    font-size: 1.7em !important

.custom-offset1
  margin-left: 4.166666667%
  margin-right: 4.16666667%
.layers
  height: 58vw
  // height: 100vh
  .layer, .background
    height: 100vh
    width: 100%
    position: absolute
  .background
    // background-position: 0 -8vw!important
    // background-size: 100vw auto!important
    background-position: bottom
    background-size: cover
    height: 100vh
    +mobile
      height: 35vh

.photo
  background-size: 100vw !important
  // background-position: center !important
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

.energy .layers._1 .background
  background-color: darken($energy, 25)
.operations .layers._1 .background
  background-color: darken($operations, 15)
.offshore .layers._1 .background
  background-color: darken($offshore, 15)


.section._0
  padding-top: 0
  background: white !important

.energy
  section.intro
    padding: 1px 0 3em
    +mobile
      padding: 0 1em 4em
  section._2
    margin-top: -10vw
    padding-bottom: 12em
    background: none
    +mobile
      padding: 1em 4em
  section._3
    margin-top: -15vw
    background: none
    margin-bottom: 10vw
    .column
      margin-top: 4em
  section._4
    padding-bottom: 14em
    +mobile
      padding: 1em 4em
  section._5
    margin-top: -3vw
    background: none
    margin-bottom: 10vw
    padding: 3em 1em
    +mobile
      padding-top: 0
    .column
      margin-top: 4em
      +mobile
        margin-top: 2em
  section._8
    padding-bottom: 14em
  section._9
    padding: 0 0 12em
    +mobile
      padding-bottom: 3em
    background: none
    margin-top: -4em
    .column
      margin-top: 4em
  section._10
    background: none
    margin-bottom: 10vw
    margin-top: -4em
    +mobile
      // padding-bottom: 50vw
      padding-bottom: 3em
    .column
      margin-top: 4em
  section._11
    padding-bottom: 12em
  section.last
    padding-top: 0
    margin-bottom: 10em
    +mobile
      margin-bottom: 8em
  .layers._1
    .background
      background-image: url(https://res.cloudinary.com/greenwind/image/upload/c_crop,h_800,w_1408,x_0/v1504171294/DJI_0066_mzecle.jpg)
      +mobile
        height: 54vw
    .l1
      background-image: url(../../assets/svg/energy/03_leistungen/01/layer01.svg)
      top: 42vw
    .l2
      background-image: url(../../assets/svg/energy/03_leistungen/01/layer02.svg)
      top: 38vw
    .l3
      background-image: url(../../assets/svg/energy/03_leistungen/01/layer03.svg)
      top: 35vw
    .l4
      background-image: url(../../assets/svg/energy/03_leistungen/01/layer04.svg)
      top: 32vw

  .layers._2
    .background
      background-image: url(https://res.cloudinary.com/greenwind/image/upload/v1504171296/DJI_0057_l7wocm.jpg)
    .l1
      background-image: url(../../assets/svg/energy/03_leistungen/02/layer02.svg)
      margin-top: -25vw

  .photo
    background-position: 0 0
    &._1
      background: url(https://res.cloudinary.com/greenwind/image/upload/c_crop,h_750,q_75,w_1440/v1503062294/Rectangle_3_Copy_9_yinpec.jpg)
      height: 50vw
    &._2
      background: url(https://res.cloudinary.com/greenwind/image/upload/v1504171296/DJI_0057_l7wocm.jpg)
      height: 50vw
    &._3
      background: url(https://res.cloudinary.com/greenwind/image/upload/v1504171295/DJI_0026_igk0h1_kaip4t.jpg)
      height: 50vw
    &._4
      background: url(https://res.cloudinary.com/greenwind/image/upload/v1503075259/mills_in_the_field_zeniyy.jpg)
      height: 50vw
      background-size: 115vw !important


  .shape
    &._1
      background-image: url(../../assets/svg/energy/03_leistungen/02/layer01.svg)
      padding-top: 20vw
      height: 36vw
      margin-top: -29vw
    &._2
      background-image: url(../../assets/svg/energy/03_leistungen/02/layer02.svg)
      padding-top: 20vw
      height: 28vw
      margin-top: -26vw
    &._3
      background-image: url(../../assets/svg/energy/03_leistungen/02/layer03.svg)
      padding-top: 20vw
      height: 32vw
      margin-top: -28vw
    &._4
      background-image: url(../../assets/svg/energy/03_leistungen/02/layer04.svg)
      padding-top: 20vw
      height: 30vw
      margin-top: -28vw

.operations
  section.intro
    padding: 0 0 3em
    background: none
    // margin-top: -4em
    +mobile
      padding: 0 1em 4em
      background: #fff
      margin-top: 0
  section._2
    padding: 5em 0 10em
    +mobile
      padding: 2em 1em
  section._3
    // margin-bottom: 10vw
    padding-bottom: 7em
    .is-multiline
      margin-top: -4em
    +mobile
      padding: 2em 1em
  section._4
    padding-bottom: 14em
    +mobile
      padding: 2em 1em
  section._5
    padding-top: 0
    margin-bottom: 0vw
    margin-bottom: 2em
  section._6
    padding-bottom: 14em
  section._9
    margin-bottom: 10vw
    padding-bottom: 10vw
    +mobile
      margin-bottom: 45vw
  section._14
    padding-bottom: 10em
  section._killme
    padding-top: 0
    padding-bottom: 7em
    +mobile
      padding-bottom: 4em

  .is-multiline
    .column
      margin-top: 4em
    .is-offset-2
      margin-top: 0
  .layers._1
    .background
      // background-image: url(https://res.cloudinary.com/greenwind/image/upload/v1504171374/9H1B5439-2_qytl8g.jpg)
      background-image: url('https://res.cloudinary.com/greenwind/image/upload/c_scale,q_80,w_1800/v1537530889/GWO_Header_s2mqno.jpg')
      +mobile
        height: 55vw
    .l1
      background-image: url(../../assets/svg/operations/03_leistungen/01/layer01.svg)
      top: 42vw
    .l2
      background-image: url(../../assets/svg/operations/03_leistungen/01/layer02.svg)
      top: 38vw
    .l3
      background-image: url(../../assets/svg/operations/03_leistungen/01/layer03.svg)
      top: 35vw
    .l4
      background-image: url(../../assets/svg/operations/03_leistungen/01/layer04.svg)
      top: 32vw

  .photo
    &._1
      background: url(https://res.cloudinary.com/greenwind/image/upload/v1505147427/GWO_Leistung_technisch_BF_2_web_q0qgbz.jpg)
      height: 50vw
    &._2
      background: url(https://res.cloudinary.com/greenwind/image/upload/v1505147455/GWO_Leistung_technisch_BF_3_web_tg1w0n_jyuyzv.jpg)
      height: 50vw
    &._3
      background: url(https://res.cloudinary.com/greenwind/image/upload/v1504171369/9H1B5898_msyfaj_xsrlis.jpg)
      height: 50vw

  .shape
    &._1
      background-image: url(../../assets/svg/operations/03_leistungen/02/layer01_1.svg)
      height: 16vw
      margin-top: -10vw
    &._2
      background-image: url(../../assets/svg/operations/03_leistungen/02/layer02_2.svg)
      height: 26vw
      margin-top: -30vw
    &._3
      background-image: url(../../assets/svg/operations/03_leistungen/02/layer03_1.svg)
      height: 25vw
      margin-top: -30vw

.offshore
  section._3, section._5, section._9
    .is-multiline
      .column
        margin-top: 4em
        padding: 1em

  section.intro
    padding: 0 0 8em
    // margin-top: -5em
    background: none
    +mobile
      background: #fff
      margin-top: 0
      padding: 1em
      margin-bottom: 4em
  section._2
    margin-top: -7vw
    padding: 0 0 10em
    background: none
  section._3
    margin-top: -7vw
    background: none
    padding: 0 0 10em
    +mobile
      padding: 1em
      margin-bottom: 3em
  section._4
    margin-top: -14vw
    padding: 0 0 10em
    background: none
  section._5
    // margin-bottom: 10vw
    margin-top: -5vw
    padding-top: 0
    .is-multiline
      margin-top: -4em
  section._9
    margin-top: -9vw
    .is-multiline
      margin-top: -4em
    background: none
    padding-bottom: 6em
    // margin-bottom: 12vw
    +mobile
      margin-top: 0
  section._fyout
    margin-bottom: 8em
    .content
      margin-top: -18vw
      margin-bottom: 10rem
      +mobile
        margin-bottom: 2em

  .layers._1
    .background
      background-image: url('https://res.cloudinary.com/greenwind/image/upload/c_scale,q_80,w_1800/v1537530895/GWOf_Header_lhq6by.jpg')
      // background-image: url(https://res.cloudinary.com/greenwind/image/upload/c_crop,g_south,h_1200,q_75,w_2000/v1507879729/offshore_lestungen_y3p1ho.jpg)
      // background-image: url(https://res.cloudinary.com/greenwind/image/upload/v1504171426/DJI_0031_Meer_yuiw7v.jpg)
    .l1
      background-image: url(../../assets/svg/offshore/03_leistungen/01/layer01.svg)
      top: 42vw
    .l2
      background-image: url(../../assets/svg/offshore/03_leistungen/01/layer02.svg)
      top: 38vw
    .l3
      background-image: url(../../assets/svg/offshore/03_leistungen/01/layer03.svg)
      top: 35vw
    .l4
      background-image: url(../../assets/svg/offshore/03_leistungen/01/layer04.svg)
      top: 32vw

  .photo
    &._1
      background: url(https://res.cloudinary.com/greenwind/image/upload/c_scale,q_80,w_2000/v1505153146/GWOf_Leistung_Planung_web_f9keeu_y5vhgc.jpg)
      height: 50vw
    &._2
      // background: url(https://res.cloudinary.com/greenwind/image/upload/v1504171420/9H1B7943_ibep5a.jpg)
      background: url(https://res.cloudinary.com/greenwind/image/upload/c_scale,q_50,w_2400/v1506518841/soll_das_2._Foto_bei_Offshore-Leistungen-Management_ausgetauscht_werden_DolWin3_hsugew.jpg)
      height: 50vw
    &._3
      background: url(https://res.cloudinary.com/greenwind/image/upload/v1504171421/DJI_0022_nrz2f8.jpg)
      height: 40vw

  .shape
    background-size: 100% !important
    &._1
      background-image: url(../../assets/svg/offshore/03_leistungen/02/layer01_1.svg)
      height: 29vw
      margin-top: -13vw
    &._2
      background-image: url(../../assets/svg/offshore/03_leistungen/02/layer02.svg)
      height: 34vw
      margin-top: -30vw
    &._3
      background: url(../../assets/svg/offshore/03_leistungen/02/layer03_1.svg)
      height: 30vw
      margin-top: -10vw

.no-top-margin
  margin-top: 0 !important

.title .small
  font-size: 1rem
  margin-bottom: 1em
</style>
