<template lang="pug">
nav.navbar.is-hidden-mobile
  .navbar-end(v-if="lang === 'de'")
    .navbar-item.has-dropdown.is-hoverable
      a.navbar-link
        | Energy
      .navbar-dropdown
        router-link(:to="{path: '/' + lang + '/energy'}").navbar-item Start
        router-link(:to="{path: '/' + lang + '/energy' + '/profil' }").navbar-item  Profil
        router-link(:to="{path: '/' + lang + '/energy' + '/team'}").navbar-item Team
        router-link(:to="{path: '/' + lang + '/energy' + '/leistungen'}").navbar-item Leistungen
        //- router-link(:to="{path: '/' + lang + '/energy' + '/netzwerk'}").navbar-item Netzwerk
        router-link(:to="{path: '/' + lang + '/energy' + '/referenzen'}").navbar-item Referenzen
        //- router-link(:to="{path: '/' + lang + '/energy' + '/windwissen'}").navbar-item Windwissen
        router-link(:to="{path: '/' + lang + '/energy' + '/kontakt'}").navbar-item Kontakt
    .navbar-item.has-dropdown.is-hoverable
      a.navbar-link
        | Operations
      .navbar-dropdown
        router-link(:to="{path: '/' + lang + '/operations'}").navbar-item Start
        router-link(:to="{path: '/' + lang + '/operations' + '/profil'}").navbar-item  Profil
        router-link(:to="{path: '/' + lang + '/operations' + '/team'}").navbar-item Team
        router-link(:to="{path: '/' + lang + '/operations' + '/leistungen'}").navbar-item Leistungen
        //- router-link(:to="{path: '/' + lang + '/operations' + '/netzwerk'}").navbar-item Netzwerk
        router-link(:to="{path: '/' + lang + '/operations' + '/standorte'}").navbar-item Standorte
        //- router-link(:to="{path: '/' + lang + '/operations' + '/windwissen'}").navbar-item Windwissen
        router-link(:to="{path: '/' + lang + '/operations' + '/kontakt'}").navbar-item Kontakt
    .navbar-item.has-dropdown.is-hoverable
      a.navbar-link
        | Offshore
      .navbar-dropdown
        router-link(:to="{path: '/' + lang + '/offshore'}").navbar-item Start
        router-link(:to="{path: '/' + lang + '/offshore' + '/profil'}").navbar-item  Profil
        router-link(:to="{path: '/' + lang + '/offshore' + '/team'}").navbar-item Team
        router-link(:to="{path: '/' + lang + '/offshore' + '/leistungen'}").navbar-item Leistungen
        //- router-link(:to="{path: '/' + lang + '/offshore' + '/netzwerk'}").navbar-item Netzwerk
        router-link(:to="{path: '/' + lang + '/offshore' + '/referenzen'}").navbar-item Referenzen
        //- router-link(:to="{path: '/' + lang + '/offshore' + '/windwissen'}").navbar-item Windwissen
        router-link(:to="{path: '/' + lang + '/offshore' + '/kontakt'}").navbar-item Kontakt

  .navbar-end(v-if="lang === 'en'")
    .navbar-item.has-dropdown.is-hoverable
      a.navbar-link
        | Energy
      .navbar-dropdown
        router-link(:to="{path: '/' + lang + '/energy'}").navbar-item Start
        router-link(:to="{path: '/' + lang + '/energy' + '/profile' }").navbar-item  Profile
        router-link(:to="{path: '/' + lang + '/energy' + '/team'}").navbar-item Team
        router-link(:to="{path: '/' + lang + '/energy' + '/services'}").navbar-item Services
        //- router-link(:to="{path: '/' + lang + '/energy' + '/network'}").navbar-item Network
        router-link(:to="{path: '/' + lang + '/energy' + '/references'}").navbar-item References
        //- router-link(:to="{path: '/' + lang + '/energy' + '/knowledge'}").navbar-item Knowledge
        router-link(:to="{path: '/' + lang + '/energy' + '/contact'}").navbar-item Contact
    .navbar-item.has-dropdown.is-hoverable
      a.navbar-link
        | Operations
      .navbar-dropdown
        router-link(:to="{path: '/' + lang + '/operations'}").navbar-item Start
        router-link(:to="{path: '/' + lang + '/operations' + '/profile'}").navbar-item  Profile
        router-link(:to="{path: '/' + lang + '/operations' + '/team'}").navbar-item Team
        router-link(:to="{path: '/' + lang + '/operations' + '/services'}").navbar-item Services
        //- router-link(:to="{path: '/' + lang + '/operations' + '/network'}").navbar-item Network
        router-link(:to="{path: '/' + lang + '/operations' + '/locations'}").navbar-item Locations
        //- router-link(:to="{path: '/' + lang + '/operations' + '/knowledge'}").navbar-item Knowledge
        router-link(:to="{path: '/' + lang + '/operations' + '/contact'}").navbar-item Contact
    .navbar-item.has-dropdown.is-hoverable
      a.navbar-link
        | Offshore
      .navbar-dropdown
        router-link(:to="{path: '/' + lang + '/offshore'}").navbar-item Start
        router-link(:to="{path: '/' + lang + '/offshore' + '/profile'}").navbar-item  Profile
        router-link(:to="{path: '/' + lang + '/offshore' + '/team'}").navbar-item Team
        router-link(:to="{path: '/' + lang + '/offshore' + '/services'}").navbar-item Services
        //- router-link(:to="{path: '/' + lang + '/offshore' + '/network'}").navbar-item Network
        router-link(:to="{path: '/' + lang + '/offshore' + '/references'}").navbar-item References
        //- router-link(:to="{path: '/' + lang + '/offshore' + '/knowledge'}").navbar-item Knowledge
        router-link(:to="{path: '/' + lang + '/offshore' + '/contact'}").navbar-item Contact

  .navbar-end(v-if="lang === 'dk'")
    .navbar-item.has-dropdown.is-hoverable
      a.navbar-link
        | Energy
      .navbar-dropdown
        router-link(:to="{path: '/' + lang + '/energy'}").navbar-item Start
        router-link(:to="{path: '/' + lang + '/energy' + '/profil' }").navbar-item  Profil
        router-link(:to="{path: '/' + lang + '/energy' + '/team'}").navbar-item Team
        router-link(:to="{path: '/' + lang + '/energy' + '/services'}").navbar-item Serviceydelser
        //- router-link(:to="{path: '/' + lang + '/energy' + '/netvaerk'}").navbar-item Netværk
        router-link(:to="{path: '/' + lang + '/energy' + '/referencer'}").navbar-item Referencer
        //- router-link(:to="{path: '/' + lang + '/energy' + '/viden-om-vind'}").navbar-item Viden om vind
        router-link(:to="{path: '/' + lang + '/energy' + '/kontakt'}").navbar-item Kontakt
    .navbar-item.has-dropdown.is-hoverable
      a.navbar-link
        | Operations
      .navbar-dropdown
        router-link(:to="{path: '/' + lang + '/operations'}").navbar-item Start
        router-link(:to="{path: '/' + lang + '/operations' + '/profil'}").navbar-item  Profil
        router-link(:to="{path: '/' + lang + '/operations' + '/team'}").navbar-item Team
        router-link(:to="{path: '/' + lang + '/operations' + '/services'}").navbar-item Serviceydelser
        //- router-link(:to="{path: '/' + lang + '/operations' + '/netvaerk'}").navbar-item Netværk
        router-link(:to="{path: '/' + lang + '/operations' + '/lokaliteter'}").navbar-item Lokaliteter
        //- router-link(:to="{path: '/' + lang + '/operations' + '/viden-om-vind'}").navbar-item Viden om vind
        router-link(:to="{path: '/' + lang + '/operations' + '/kontakt'}").navbar-item Kontakt
    .navbar-item.has-dropdown.is-hoverable
      a.navbar-link
        | Offshore
      .navbar-dropdown
        router-link(:to="{path: '/' + lang + '/offshore'}").navbar-item Start
        router-link(:to="{path: '/' + lang + '/offshore' + '/profil'}").navbar-item  Profil
        router-link(:to="{path: '/' + lang + '/offshore' + '/team'}").navbar-item Team
        router-link(:to="{path: '/' + lang + '/offshore' + '/serviceydelser'}").navbar-item Serviceydelser
        //- router-link(:to="{path: '/' + lang + '/offshore' + '/netvaerk'}").navbar-item Netværk
        router-link(:to="{path: '/' + lang + '/offshore' + '/referencer'}").navbar-item Referencer
        //- router-link(:to="{path: '/' + lang + '/offshore' + '/viden-om-vind'}").navbar-item Viden om vind
        router-link(:to="{path: '/' + lang + '/offshore' + '/kontakt'}").navbar-item Kontakt
</template>

<script>
  export default {
    name: 'navbar',
    computed: {
      lang () {
        // let lang = this.$route.path.split('/')[1]
        // if (!lang) lang = localStorage.getItem('greenwindLang')
        // if (!lang) lang = 'de'
        let lang = 'dk'
        return lang
      },
      section () {
        // const section = this.$route.path.split('/')[2]
        const section = this.$route.path.split('/')[1]
        return section
      }
    }
  }
</script>

<style lang="sass" scoped>
  nav
    position: fixed
    right: 120px
    top: 20px
    border-radius: 5px
    z-index: 9999
</style>
