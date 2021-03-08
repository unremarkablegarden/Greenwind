<template lang="pug">
  #app
    //- navbar
    router-view
    bottom-nav
</template>

<script>
  // import Navbar from '@/components/Navbar'
  import BottomNav from '@/components/BottomNav'

  export default {
    name: 'app',
    // components: { Navbar, BottomNav },
    components: { BottomNav },
    metaInfo: {
      title: 'Green Wind',
      // override the parent template and just use the above title only
      titleTemplate: null
    },
    watch: {
      '$route': 'setFavicon'
    },
    mounted () {
      this.setFavicon()
    },
    methods: {
      setFavicon () {
        if (this.$route.path.split('/')[2]) {
          const section = this.$route.path.split('/')[2]
          const favIcoUrl = '/static/favicon_' + section + '.ico'
          // document.querySelector("link[rel='shortcut icon']").href = favIcoUrl
          document.querySelector("link[rel='icon']").href = favIcoUrl
        } else {
          // const favIcoUrl = '/static/favicon_energy.ico'
          const favIcoUrl = '/static/favicon_energy_all.ico'
          document.querySelector("link[rel='icon']").href = favIcoUrl
        }
      }
    }
  }
</script>

<style lang="sass">
  @import './assets/sass/bulmaConfig.sass'
  @import './assets/sass/config.sass'
  @import './assets/sass/animation.sass'
  @import './assets/sass/root.sass'
  @import '~vue2-animate/dist/vue2-animate.min.css'
</style>
