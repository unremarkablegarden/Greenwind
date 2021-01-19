  <template lang="pug">
  .inner(:class="section")

    //- .layers._1
      .background(:style='{ transform: layerPos.bg }')
      .layer.l4(:style='{ transform: layerPos.l4, transition: parallaxTransition }', :class="{ hide: isHidden.shape }")
      .layer.l3(:style='{ transform: layerPos.l3, transition: parallaxTransition }', :class="{ hide: isHidden.shape }")
      .layer.l2(:style='{ transform: layerPos.l2, transition: parallaxTransition }', :class="{ hide: isHidden.shape }")
      .layer.l1(:style='{ transform: layerPos.l1, transition: parallaxTransition }')

    section.section.intro
      .container.content
        .columns.is-multiline
          .text.column.is-6.is-offset-3.has-text-centered
            h2 {{ c.t1 }}
            p {{ c.t2 }}
</template>

<script>
  // import throttle from 'lodash/throttle'
  // import asleep from 'asleep'

  export default {
    name: 'impressum',
    data () {
      return {
        isHidden: {
          shape: true
        },
        scrolled: 0,
        layerPos: {
          bg: null,
          l1: null,
          l2: null,
          l3: null,
          l4: null
        },
        layerPos2: {
          l1: null
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
      linkName (page) { return this.$store.state.pageNames[this.section][page][this.lang].name }
    }
  }
</script>

<style lang="sass" scoped>
@import '../../assets/sass/config.sass'
// @import '../../assets/sass/bulmaConfig.sass'
@import "~bulma/sass/utilities/_all.sass"

.selectable-text, .selectable-text *
  user-select: text
  cursor: auto

.layer
  transform: translate3d(0, 0, 0)
  transition: transform 600ms
  &.hide
    transform: translate3d(0, 50vh, 0)

section.intro
  padding: 4rem 1.5rem 5em
  margin-bottom: 5em
  +mobile
    padding-bottom: 0
</style>
