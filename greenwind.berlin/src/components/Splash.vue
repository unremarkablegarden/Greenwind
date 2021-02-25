<template lang="pug">
transition(name='fade', mode='in-out' appear)
  .inner.splash
    .layers
      .layer.l7(:class="{ hide: isHidden.l7 }")
      .layer.l5(:class="{ hide: isHidden.l5 }")
      .layer.l6(:class="{ hide: isHidden.l6 }")
      .layer.l4(:class="{ hide: isHidden.l4 }")
      .layer.l3(:class="{ hide: isHidden.l3 }")
      .layer.l2(:class="{ hide: isHidden.l2 }")
      .layer.l1

    .whitepanel

    .content.energy
      .contain(:class="{ hide: isHidden.text }")
        .logo
          img(src='../assets/svg/splash/new/new-gw-logo-de.svg', :class="isActive('de')")
          img(src='../assets/svg/splash/new/new-gw-logo-en.svg', :class="isActive('en')")
          img(src='../assets/svg/splash/new/new-gw-logo-en.svg', :class="isActive('dk')")
        .menu
          a(v-on:click="routerPush('energy')").menu-item.energy
            img(src='../assets/svg/splash/new/new-icon-green.svg')
            div {{ title1 }}
          a(v-on:click="routerPush('operations')").menu-item.operations
            img(src='../assets/svg/splash/new/new-icon-grey.svg')
            div {{ title2 }}
          a(v-on:click="routerPush('offshore')").menu-item.offshore
            img(src='../assets/svg/splash/new/new-icon-blue.svg')
            div {{ title3 }}
        //- .text
          p {{ c.intro.split('\n') }}
        .columns

          .column.is-6.is-hidden-desktop
            router-link(:to='buttonLink[lang]')
              img(src='https://res.cloudinary.com/greenwind/image/upload/v1534749193/GW_Leitwarte_24_7_Signet_tozfw3.png', style='width: 110px; transform: rotate(-5deg) translate(0px, 10px)')

          .column.is-6
            .news
              a.button(v-bind:href='newsLink').energy {{ c.newsButton }}
            .lang
              .icon
                img(src='../assets/svg/splash/icon_translate_desktop.svg')
              a(v-on:click="setLang('de')", :class="isActive('de')") de
              span.divider /
              a(v-on:click="setLang('en')", :class="isActive('en')") en
              span.divider /
              a(href='https://greenwindgroup.dk') dk
          .column.is-6.is-hidden-touch
            router-link(:to='buttonLink[lang]')
              img(src='https://res.cloudinary.com/greenwind/image/upload/v1534749193/GW_Leitwarte_24_7_Signet_tozfw3.png', style='width: 110px; transform: rotate(-5deg) translate(12px, 10px)')
              
        .contact(style='margin-top: -1rem')
          span
            button(id="show-modal", @click="showModal = true") {{ c.contactTitle }}
          span
            router-link(:to='imprintLink[lang]') {{ imprintTitle[lang] }}
          span
            button(id="show-modal", @click="showNewsletter = true") {{ newsletterTitle[lang] }}


    //- .modal.is-active(v-if='startPopUp').startP
    //-   .modal-background(@click="startPopUp = false")
    //-   .modal-content.startPopUp
    //-     .inner
    //-       .popuptext
    //-         .popuplogo
    //-           img(src='../assets/img/popup-header.jpg')
    //-         h2 Willkommen bei Green Wind in Dänemark!
    //-         p Das deutsche Unternehmen Green Wind hat die beiden dänischen Unternehmen ECOPARTNER und FWE Administration ApS übernommen. Für die bestehenden Kunden beider Unternehmen bleiben alle Ansprechpartner und Geschäftsstellen in Kopenhagen und Aarhus erhalten. Welche Kompetenzen Green Wind auch für den dänischen Windmarkt zu bieten hat, entnehmen Sie bitte unserer Website, die wir nun kontinuierlich für Dänemark erweitern.
    //-         p Seit unserer Gründung 2011 pflegen wir als unabhängiges Unternehmen mit Hauptsitz in Berlin enge Kontakte zu Akteuren der dänischen Windbranche. Jetzt können wir als erfahrener deutscher Projektentwickler in Sachen Repowering und Spezialist in technischer und kaufmännischer Betriebsführung On- wie Offshore unser gesamtes Know-how dem dänischen Markt zur Verfügung stellen.
    //-         p Wir freuen uns auf die neue Herausforderung mit der Kraft des Windes.
    //-         p
    //-           | Martin Kühl, CEO
    //-           br
    //-           | Mobil: +49 1732 375 046
    //-         p
    //-           | Erling Salling Olesen, CEO
    //-           br
    //-           | Mobil: +45 2080 0207
    //-         .popupfooter
    //-           img(src='../assets/img/popup-footer.jpg')
    //-   .overlays
    //-     .left
    //-       img(src='../assets/img/gw-gfx-1.png')
    //-     .right
    //-       img(src='../assets/img/gw-gfx-2.png')
    //-   img.modal-close(src='../assets/svg/icons/gw-close-icon.svg', @click="startPopUp = false")

    //- .modal.is-active(v-if='startPopUp')
      .modal-background(@click="startPopUp = false")
      .modal-content.startPopUp
        img(src='../assets/img/xmas.png')
        //- .popuptext
          //- .date
            img(src='../assets/svg/splash/popup-july-2019/date2.svg')
          .popuplogo
            //- img(src='../assets/svg/splash/new/new-gw-logo-de.svg')
        //- .txt Find us here: 5B27
      button.modal-close.is-large(@click="startPopUp = false")

    
    .modal.is-active(v-if="showModal")
      .modal-background(@click="showModal = false")
      .modal-card
        header.modal-card-head
          div.modal-card-title {{ c.contactTitle }}
          button.delete(aria-label='close', @click="showModal = false")
        section.modal-card-body
          p
            | Green Wind Group
            | Alt-Moabit 60a
            | 10555 Berlin
          p
            | Phone: +49 30-351 28 86 30
            | Fax: +49 30-351 28 86 33
          p
            | Email:&nbsp;
            a(href="mailto:info@greenwindgroup.de") info@greenwindgroup.de
            //- | Email Energy:&nbsp;
            //- a(href="mailto:info@greenwindgroup.de") info@greenwindgroup.de
            //- br
            //- | Email Operations:&nbsp;
            //- a(href="mailto:info@greenwindgroup.de") info@greenwindgroup.de
            //- br
            //- | Email Offshore:&nbsp;
            //- a(href="mailto:info@greenwindgroup.de") info@greenwindgroup.de
        footer.modal-card-foot
    
    

    .modal.is-active(v-if="showNewsletter").newsletter
      .modal-background(@click="showNewsletter = false")
      .modal-card
        header.modal-card-head
          div.modal-card-title {{ newsletterTitle[lang] }}
          button.delete(aria-label='close', @click="showNewsletter = false")
        section.modal-card-body.energy
        
          form(class='layout_form cr_form cr_font' :action='action[lang]' method='post' target='_blank')
            //- @submit='cr_submit', ref='newsletter')
            div(class='cr_body cr_page cr_font formbox')
              div(class='editable_content' style='text-align:left;')
                .cr_ipe_item
                  label {{ langTitle[lang] }}
                  div
                    .lang
                      .icon
                        img(src='../assets/svg/splash/icon_translate_desktop.svg')
                      a(v-on:click="setLang('de')", :class="isActive('de')") de
                      span.divider /
                      a(v-on:click="setLang('en')", :class="isActive('en')") en
                      span.divider /
                      a(href='https://greenwindgroup.dk') dk
                #6138999(rel='email' class='cr_ipe_item ui-sortable musthave' style='margin-bottom:px;')
                  label.itemname(for='text6138999') E-Mail *
                  input#text6138999(:name='formIDs[lang][0]' v-model='form.email' type='text' style='width:100%;')
                #6139000(rel='text' class='cr_ipe_item ui-sortable' style=' margin-bottom:0px;')
                  label.itemname(for='text6139000') {{ formLabels[lang][0] }}
                  input#text6139000(:name='formIDs[lang][1]' v-model='form.anrede' type='text' value='' style='width:100%;')
                #6139002(rel='text' class='cr_ipe_item ui-sortable' style=' margin-bottom:0px;')
                  label.itemname(for='text6139002', v-model='form.vorname') {{ formLabels[lang][1] }}
                  input#text6139002(:name='formIDs[lang][2]' type='text' value='' style='width:100%;')
                #6139004(rel='text' class='cr_ipe_item ui-sortable' style=' margin-bottom:0px;')
                  label.itemname(for='text6139004') {{ formLabels[lang][2] }}
                  input#text6139004(:name='formIDs[lang][3]' v-model='form.name' type='text' value='' style='width:100%;')
                #6139006(rel='text' class='cr_ipe_item ui-sortable' style=' margin-bottom:0px;')
                  label.itemname(for='text6139006') {{ formLabels[lang][3] }}
                  input#text6139006(:name='formIDs[lang][4]' v-model='form.firma' type='text' value='' style='width:100%;')
                #6139007(rel='recaptcha' class='cr_ipe_item ui-sortable musthave')
                  label &nbsp;
                  div
                    vue-recaptcha(sitekey="6Lfhcd0SAAAAAOBEHmAVEHJeRnrH8T7wPvvNzEPD", :loadRecaptchaScript="true", size='normal', theme='light', @verify='verify', ref='captcha')#recaptcha_v2_widget
                    br
                #6139008(rel='mce_text' class='cr_ipe_item ui-sortable')
                  div(class='mce_text')
                    p
                      span(style='font-size: small;' mce_style='font-size: small;')
                        span {{ formNotice[lang] }}
                        br
                        .cr_error.clever_form_error(v-if='error') {{ error }}
                #6139009(rel='button' class='cr_ipe_item ui-sortable submit_container' style='text-align:center; margin-bottom:px;')
                  button.cr_button.button(type='submit' :class='{ disabled: !verified }' :disabled='!verified') {{ formButton[lang] }}
        footer.modal-card-foot
        
</template>


<script>
import asleep from 'asleep'
import postData from '@/content/splash.json'
import isMobile from '@/assets/js/isMobile'

// import axios from 'axios'
import VueRecaptcha from 'vue-recaptcha'

export default {
  name: 'splash',
  components: { VueRecaptcha },
  data () {
    return {
      error: false,
      form: {
        email: '',
        anrede: '',
        vorname: '',
        name: '',
        firma: ''
      },
      action: {
        de: 'https://eu2.cleverreach.com/f/191822-280045/wcs/',
        en: 'https://eu2.cleverreach.com/f/191822-281081/wcs/',
        dk: 'https://eu2.cleverreach.com/f/191822-280046/wcs/'
      },
      newsletterTitle: {
        de: 'Newsletter',
        en: 'Newsletter',
        dk: 'Nyhedsbrev'
      },
      formLabels: {
        de: [
          'Anrede',
          'Vorname',
          'Name',
          'Firma'
        ],
        en: [
          'Title',
          'First name',
          'Surname',
          'Company'
        ],
        dk: [
          'Hilsen',
          'Fornavn',
          'Efternavn',
          'Selskab'
        ],
      },
      formIDs: {
        de: ['email', 1011929, 1011931, 1011932, 1164226],
        en: ['email', 1011930, 1011931, 1011932, 1164226],
        dk: ['email', 1011930, 1011931, 1011932, 1164226],
      },
      langTitle: {
        de: 'Sprache',
        en: 'Language',
        dk: 'Sprog'
      },
      formNotice: {
        de: 'Sie können sich jeder Zeit kostenlos von den Newslettern abmelden!',
        en: 'You can unsubscribe from the newsletters free of charge at any time!',
        dk: 'Du kan til enhver tid afmelde dig nyhedsbreve gratis!'
      },
      formButton: {
        de: 'Anmelden',
        en: 'Register',
        dk: 'Tilmeld'
      },
      verified: false,
      showModal: false,
      showNewsletter: false,
      // showNewsletter: true,
      startPopUp: true,
      lang: null,
      content: postData,
      isHidden: {
        text: true,
        l5: true,
        l6: true,
        l7: true,
        l2: true,
        l3: true,
        l4: true
      },
      isMobile: isMobile(),
      buttonLink: {
        de: '/de/operations/leistungen',
        en: '/en/operations/services',
        dk: '/dk/operations/serviceydelser'
      },
      imprintTitle: {
        de: 'Impressum',
        en: 'Imprint'
      },
      imprintLink: {
        de: '/de/energy/impressum',
        en: '/en/energy/imprint'
      },
    }
  },
  computed: {
    c () {
      return this.content[this.lang]
    },
    title1 () {
      const t = this.c.intro.split('\n')
      return t[0]
    },
    title2 () {
      const t = this.c.intro.split('\n')
      return t[1]
    },
    title3 () {
      const t = this.c.intro.split('\n')
      return t[2]
    },
    newsLink () {
      if (this.lang === 'de') {
        return 'https://news.greenwind.berlin/'
      } else {
        return 'https://news.greenwind.berlin/?lang=' + this.lang
      }
    },
    URLlang () {
      if (this.$route.query.lang) {
        return this.$route.query.lang
      } else {
        return false
      }
    }
  },
  created () {
    // const lang =
    let lang
    if (this.URLlang) {
      lang = this.URLlang
    } else {
      lang = (typeof localStorage.getItem('greenwindLang') !== 'undefined' && localStorage.getItem('greenwindLang')) || 'de'
    }
    this.lang = lang

    if (this.isMobile) {
      this.isHidden = {
        text: false,
        l5: false,
        l6: false,
        l7: false,
        l2: false,
        l3: false,
        l4: false
      }
    }
  },
  methods: {
    verify(e) {
      if (e && ! e.includes('error')) {
        this.verified = true
      }
    },
    cr_submit (e) {
      e.preventDefault()
      
      let n = this.$refs.newsletter
      let check = 'https://eu2.cleverreach.com/f/191822-280045/check_email/' + this.form.email
      let action = 'https://eu2.cleverreach.com/f/191822-280045/wcs/'

      let self = this
      // input#text6138999(name='email' v-model='form.email'
      // input#text6139000(name='1008266' v-model='form.anrede'
      // input#text6139002(name='1008267' type='text' v-model='form.vorname'
      // input#text6139004(name='1008268' v-model='form.name'
      // input#text6139006(name='1008269' v-model='form.firma'      
      
      // axios.get(check).then(function (response) {
      //     self.error = false
      //     console.log('check response:')
      //     console.log(response)
          
          
      //     console.log('post action:');
      //     axios.post(action, {
      //       email: self.form.email,
      //       '1008266': self.form.anrede,
      //       '1008267': self.form.vorname,
      //       '1008268': self.form.name,
      //       '1008269': self.form.firma
      //     })
      //     .then(function (response) {
      //       console.log(response)
      //     })
      //     .catch(function (error) {
      //       console.log(error)
      //     })
      //   })
      //   .catch(function (error) {
      //     self.error = error
      //   })
      
    },
      
    isActive (lang) {
      if (lang === this.lang) return 'is-active'
    },
    setLang (lang) {
      localStorage.setItem('greenwindLang', lang)
      this.lang = lang
      console.log(this.lang)
    },
    routerPush (link) {
      // custom router nav, animate first then change URL
      const fullLink = '/' + this.lang + '/' + link

      const splashUnAnimation = () => {
        const stagger = 90
        let deceleration = 1
        let delay = 0
        let i = 1
        let j = 0

        asleep(100).then(() => {
          Object.entries(this.isHidden).reverse().forEach(([key, value]) => {
            asleep(delay).then(() => {
              if (key !== 'text') {
                this.isHidden[key] = true
              } else {
                // is 'text' ... move to the left?
              }
              j = j + 1
              if (j === Object.entries(this.isHidden).length) {
                this.$router.push({ path: fullLink })
              }
            })
            i = i + 1
            deceleration = deceleration + 0.1
            delay = stagger * i * deceleration
          })
        })
      }

      if (!this.isMobile) {
        splashUnAnimation()
      } else {
        this.$router.push({ path: fullLink })
      }
    }
  },
  mounted () {
    
    // this.cr()
    
    const splashAnimation = () => {
      const stagger = 180
      let deceleration = 1
      let delay = 0
      let i = 1

      asleep(100).then(() => {
        Object.entries(this.isHidden).forEach(([key, value]) => {
          asleep(delay).then(() => {
            this.isHidden[key] = false
          })
          i = i + 1
          deceleration = deceleration + 0.1
          delay = stagger * i * deceleration
        })
      })
    }
    if (!this.isMobile) {
      splashAnimation()
    }
  }
}
</script>

<style lang="sass" scoped>
// @import "~bulma/sass/utilities/_all.sass"
// @import "~bulma/sass/components/modal"
// @import "~bulma/sass/components/card"
// @import '../assets/sass/bulmaConfig.sass'
@import '../assets/sass/config.sass'
@import '../assets/sass/animation.sass'
@import '../assets/sass/root.sass'


.is-active
  font-weight: 800

.inner
  width: 100%
  min-height: 100vh

.layers
  background: black
  position: fixed
  +mobile
    display: none

.layer
  height: 100vh
  width: 110vh
  position: fixed
  // right: 0
  transition: transform 500ms
  left: calc(-110vh + 100vw)

// white
.guide
  background-image: url(../assets/svg/splash/01/layer00.svg)
  background-size: cover
  background-position: right
  opacity: 0.3
.l1
  background-image: url(../assets/svg/splash/01/layer01.svg)
  background-position: -44.6vh 0
// blue 1
.l7
  background-image: url(../assets/svg/splash/01/layer07.svg)
  background-position: center bottom
  &.hide
    transform: translate(0, 65vh)
    transition: transform 200ms
// gray 1
.l6
  background-image: url(../assets/svg/splash/01/layer06.svg)
  background-position: right 0
  &.hide
    transform: translate(60vh, 0vh)
    transition: transform 200ms
// green 1
.l5
  background-image: url(../assets/svg/splash/01/layer05.svg)
  background-position: right top
  background-size: 95vh
  &.hide
    transform: translate(0, -70vh)
    transition: transform 200ms
// blue 2
.l4
  background-image: url(../assets/svg/splash/01/layer04.svg)
  background-position: 7.8vh 29.2vh
  background-size: 74.1vh
  &.hide
    transform: translate(-35vh, -15vh)
    transition: transform 400ms
// grey 2
.l3
  background-image: url(../assets/svg/splash/01/layer03.svg)
  background-size: 27vh
  background-position: 48vh 19vh
  &.hide
    transform: translate(-35vh, 0vh)
    transition: transform 400ms
// green 2
.l2
  background-image: url(../assets/svg/splash/01/layer02.svg)
  background-size: 62vh
  background-position: -10vh 7vh
  transition: transform 1s
  &.hide
    transform: translate(-20vh, 20vh)
    transition: transform 400ms

.whitepanel
  height: 100vh
  background: white
  width: 200vh
  right: 97vh
  position: fixed

.content
  position: fixed
  width: 400px
  // right: 95vh
  // left: 10vw
  left: 4vw
  z-index: 9
  height: 100vh
  display: flex
  justify-content: flex-end
  align-items: center
  +mobile
    p
      font-size: .8em
    position: relative
    right: 0
    width: 100%
    padding: 1em
    left: 0
    justify-content: center
    align-items: flex-start
    // height: 90vh

.contain
  transition: opacity 7s
  &.hide
    opacity: 0

.logo
  margin-bottom: 2rem
  img
    display: none
    width: 80%
  .is-active
    display: block
  +mobile
    padding: 0 1em
    img
      width: 100%

.menu
  // width: 300px
  // display: flex
  // justify-content: space-between
  margin-bottom: 2rem
  a.energy
    color: #5A7840
  a.operations
    color: #979897
  a.offshore
    color: #254D74

  .menu-item
    display: flex
    align-items: flex-start
    justify-content: flex-start
    font-weight: 600
    font-size: 0.9rem
    margin-bottom: 5px
    margin-left: 20px
    color: #666
    img
      width: 20px
      margin-right: 10px
  +mobile
    width: 100%
    padding: 0 2em
  a
    // transition: transform 200ms
    // transform: scale(1)
  a:hover
    // transform: scale(1.1)
  img
    cursor: pointer

.text
  width: 400px
  +mobile
    width: 100%
    text-align: center
  margin-bottom: 1rem
.lang
  margin-bottom: 2rem
  transform: translateX(6px)
  .icon
    display: inline-block
  +mobile
    text-align: center
    // display: none
    transform: none
  img
    margin-right: 12px
.news
  transform: translateX(-10px)
  .button
    margin-top: 20px
    margin-bottom: 20px
    &:hover
      color: white !important
    +mobile
      margin-top: 5px
  +mobile
    transform: none
    text-align: center

.contact
  +mobile
    text-align: center
  p
    font-weight: bold
    // margin: -1em 0 0
  button, a
    border: 0
    font-size: 16px
    line-height: 1.5em
    letter-spacing: 0.02em
    font-family: 'Raleway', Arial, Helvetica, sans-serif
    font-weight: 500
    color: #444
    background: white
    margin: 0
    padding: 0
    text-decoration: underline
    margin-right: 0.6rem

.modal p
  margin-bottom: 1em
  font-weight: normal
.modal p a
  color: #84AF5F
  font-weight: bold
.modal-background
  background: rgba(10, 10, 10, 0.46)


.startP
  .overlays
    img
      position: fixed
      bottom: 0
      z-index: 9999
      height: 130px
      +mobile
        max-width: 50vw
    .left img
      left: 0
    .right img
      right: 0
  +desktop
    .modal-close
      min-width: 30px !important
      min-height: 30px !important
      max-width: 30px !important
      max-height: 30px !important
      top: 40px !important
      // right: 50px !important
      right: calc(2.5% + 25px) !important

  +mobile
    .modal-close
      top: 40px !important
      right: 50px !important
.startPopUp
  line-height: 0
  +desktop
    // width: 95% !important
    .inner
      // width: 640px
      // margin: 0 auto
  +mobile
    max-height: calc(100vh - 40px) !important
  background-color: #4B543B
  border-radius: 2em
  // background-image: url(../assets/svg/splash/popup-july-2019/bg.svg)
  background-position: left center
  // +mobile
    // background-position: -30vw 0
  background-size: cover
  background-repeat: no-repeat
  box-shadow: 0 20px 40px rgba(0,0,0,0.4)
  .popuplogo
    width: 90%
    +mobile
      width: 100%
    // margin-bottom: 2em
    margin-top: 1.7em
  .popupfooter
    padding-top: 2em
  h2
    font-size: 1.2em
    margin-bottom: 1em
  .popuptext
    // padding: 3em 4em 3em 2em
    font-size: 0.86em
    line-height: 1.5em
    display: flex
    justify-content: space-between
    +mobile
      flex-direction: column
    .date
      +desktop
        margin-right: 3em
      img
        width: 23em
    // +mobile
      // padding-bottom: 10em
    //   height: 400px
    //   overflow: auto
  .txt
    float: right
    transform: translate(-3.7rem, -2.5rem)
    font-weight: 600
    font-size: 1.2rem


// .startPopUp
//   background-color: white
//   border-radius: 2em
//   background-image: url(../assets/img/ecopartner-footer.jpg)
//   background-position: bottom center
//   background-size: contain
//   background-repeat: no-repeat
//   padding-bottom: 8em
//   box-shadow: 0 20px 40px rgba(0,0,0,0.4)
//   .popuplogo
//     width: 200px
//     margin-bottom: 2em
//   h2
//     font-size: 1.2em
//     margin-bottom: 1em
//   .popuptext
//     padding: 3em 4em 3em
//     font-size: 0.86em
//     line-height: 1.5em
//     +mobile
//       height: 400px
//       overflow: auto

  // img
    // width: 50%
    // border: 10px #FAFAFA solid
    // border-radius: 6px
    // box-shadow: 0 3px 8px rgba(10,10,10,0.3)

.column.is-6
  +mobile
    text-align: center
</style>


<style lang='sass'>
.cr_body
  .cr_ipe_item
    display: flex
    padding: 0 0 1em 0
  label
    width: 100px
    font-weight: bold
    font-size: 0.9rem
  input
    width: 300px !important
  .cr_button
    margin: 0 !important
  .disabled
    background: linear-gradient(-206deg, #CCC 0%, #888 100%) !important
  .submit_container
    text-align: center
    
.modal.newsletter
  font-weight: normal !important
  .modal-content, .modal-card
    width: 445px
    .lang
      margin: 0
      .is-active
        color: #4a4a4a
.white
  opacity: 0
</style>

<style scoped>
.cr_error{font-size:1.1em;padding:10px;}
.clever_form_error{background-color:#f99; color:#000; border:1px solid #f22 !important}
.clever_form_note {margin:26px 0 0 3px;position:absolute;display:inline; padding: 2px 4px; font-weight:bold;background-color:#f2ecb5; color:#000; font-size:12px !important;  }
</style>