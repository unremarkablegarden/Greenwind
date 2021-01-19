import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Splash from '@/components/Splash'

import Start from '@/components/sections/00_Start'
import Profil from '@/components/sections/01_Profil'
import Team from '@/components/sections/02_Team'
import Leistungen from '@/components/sections/03_Leistungen'
import Netzwerk from '@/components/sections/04_Netzwerk'
import Referenzen from '@/components/sections/05_Referenzen'
import Windwissen from '@/components/sections/06_Windwissen'
import Kontakt from '@/components/sections/07_Kontakt'
import Impressum from '@/components/sections/08_Impressum'
import Datenschutz from '@/components/sections/09_Datenschutz'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    { path: '/', component: Splash },

    // DE
    // { path: '/de/energy', component: Start },
    // { path: '/de/energy/profil', component: Profil },
    // { path: '/de/energy/team', component: Team },
    // { path: '/de/energy/leistungen', component: Leistungen },
    // { path: '/de/energy/netzwerk', component: Netzwerk },
    // { path: '/de/energy/referenzen', component: Referenzen },
    // { path: '/de/energy/windwissen', component: Windwissen },
    // { path: '/de/energy/kontakt', component: Kontakt },
    // { path: '/de/energy/impressum', component: Impressum },
    // { path: '/de/energy/datenschutz', component: Datenschutz },

    // { path: '/de/operations', component: Start },
    // { path: '/de/operations/profil', component: Profil },
    // { path: '/de/operations/team', component: Team },
    // { path: '/de/operations/leistungen', component: Leistungen },
    // { path: '/de/operations/netzwerk', component: Netzwerk },
    // { path: '/de/operations/standorte', component: Referenzen },
    // { path: '/de/operations/windwissen', component: Windwissen },
    // { path: '/de/operations/kontakt', component: Kontakt },
    // { path: '/de/operations/impressum', component: Impressum },
    // { path: '/de/operations/datenschutz', component: Datenschutz },

    // { path: '/de/offshore', component: Start },
    // { path: '/de/offshore/profil', component: Profil },
    // { path: '/de/offshore/team', component: Team },
    // { path: '/de/offshore/leistungen', component: Leistungen },
    // { path: '/de/offshore/netzwerk', component: Netzwerk },
    // { path: '/de/offshore/referenzen', component: Referenzen },
    // { path: '/de/offshore/windwissen', component: Windwissen },
    // { path: '/de/offshore/kontakt', component: Kontakt },
    // { path: '/de/offshore/impressum', component: Impressum },
    // { path: '/de/offshore/datenschutz', component: Datenschutz },

    // // EN
    // { path: '/en/energy', component: Start },
    // { path: '/en/energy/profile', component: Profil },
    // { path: '/en/energy/team', component: Team },
    // { path: '/en/energy/services', component: Leistungen },
    // { path: '/en/energy/network', component: Netzwerk },
    // { path: '/en/energy/references', component: Referenzen },
    // { path: '/en/energy/knowledge', component: Windwissen },
    // { path: '/en/energy/contact', component: Kontakt },
    // { path: '/en/energy/imprint', component: Impressum },
    // { path: '/en/energy/dataprotection', component: Datenschutz },

    // { path: '/en/operations', component: Start },
    // { path: '/en/operations/profile', component: Profil },
    // { path: '/en/operations/team', component: Team },
    // { path: '/en/operations/services', component: Leistungen },
    // { path: '/en/operations/network', component: Netzwerk },
    // { path: '/en/operations/locations', component: Referenzen },
    // { path: '/en/operations/knowledge', component: Windwissen },
    // { path: '/en/operations/contact', component: Kontakt },
    // { path: '/en/operations/imprint', component: Impressum },
    // { path: '/en/operations/dataprotection', component: Datenschutz },

    // { path: '/en/offshore', component: Start },
    // { path: '/en/offshore/profile', component: Profil },
    // { path: '/en/offshore/team', component: Team },
    // { path: '/en/offshore/services', component: Leistungen },
    // { path: '/en/offshore/network', component: Netzwerk },
    // { path: '/en/offshore/references', component: Referenzen },
    // { path: '/en/offshore/knowledge', component: Windwissen },
    // { path: '/en/offshore/contact', component: Kontakt },
    // { path: '/en/offshore/imprint', component: Impressum },
    // { path: '/en/offshore/dataprotection', component: Datenschutz },

    // DK
    { path: '/energy', component: Start },
    { path: '/energy/profil', component: Profil },
    { path: '/energy/team', component: Team },
    { path: '/energy/serviceydelser', component: Leistungen },
    { path: '/energy/netvaerk', component: Netzwerk },
    { path: '/energy/referencer', component: Referenzen },
    { path: '/energy/viden-om-vind', component: Windwissen },
    { path: '/energy/kontakt', component: Kontakt },
    { path: '/energy/kolofon', component: Impressum },
    { path: '/energy/databeskyttelse', component: Datenschutz },

    { path: '/operations', component: Start },
    { path: '/operations/profil', component: Profil },
    { path: '/operations/team', component: Team },
    { path: '/operations/serviceydelser', component: Leistungen },
    { path: '/operations/netvaerk', component: Netzwerk },
    { path: '/operations/lokaliteter', component: Referenzen },
    { path: '/operations/viden-om-vind', component: Windwissen },
    { path: '/operations/kontakt', component: Kontakt },
    { path: '/operations/kolofon', component: Impressum },
    { path: '/operations/databeskyttelse', component: Datenschutz },

    { path: '/offshore', component: Start },
    { path: '/offshore/profil', component: Profil },
    { path: '/offshore/team', component: Team },
    { path: '/offshore/serviceydelser', component: Leistungen },
    { path: '/offshore/netvaerk', component: Netzwerk },
    { path: '/offshore/referencer', component: Referenzen },
    { path: '/offshore/viden-om-vind', component: Windwissen },
    { path: '/offshore/kontakt', component: Kontakt },
    { path: '/offshore/kolofon', component: Impressum },
    { path: '/offshore/databeskyttelse', component: Datenschutz }

  ]
})
