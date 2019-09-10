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
            h2 Jobs
            p Zur Verstärkung unseres Teams suchen wir ab sofort in Vollzeit
            //- h2 {{ c.t1 }}
            //- p {{ c.t2 }}

    section.section.team-members
      .container
        .team-members.content.de

          hr

          h3 Projektentwickler Windenergie Onshore (w/m/d)
          br
          b Ihre Aufgaben
          ul.ul1
            li.li3
              span.s2 Identifikation von potenziellen Windparkstandorten unter Berücksichtigung lokaler planungsrechtlicher Kriterien
            li.li3

              span.s2 Enge Zusammenarbeit mit eigenen Flächenakquisiteuren*innen und Landeigentümer*innen
            li.li3

              span.s2
                | Erstellung von Lageplänen, Konzepten und Planungsvarianten für potenzielle Windparkprojekte
                span.Apple-converted-space
            li.li3

              span.s2
                | Entwicklung der Anlagenstandorte bis zur Planungsreife
                span.Apple-converted-space
            li.li3

              span.s2
                | Beantragung und Erlangung der Genehmigung der Projekte nach dem Bundesimmissionsschutzgesetz (BImSchG)
                span.Apple-converted-space
            li.li3

              span.s2
                | Genehmigungsrechtliche und gutachterliche Betreuung der Projekte bis zur Inbetriebnahme
                span.Apple-converted-space
            li.li3

              span.s2
                | Kooperation mit Behörden und Gutachtern
                span.Apple-converted-space
            li.li3

              span.s2
                | Lokalpolitische Begleitung der Projekte inklusive Teilnahme an Bürgerversammlungen
                span.Apple-converted-space
            li.li3

              span.s2 Aktive Zusammenarbeit mit anderen Projektteams im Hause
          br
          p.p3
            span.s2
              b Ihr Profil
          ul.ul1
            li.li3

              span.s2
                | Erfolgreich abgeschlossenes Studium im Bereich Erneuerbare Energien, Landschaftsplanung, Geographie oder Vergleichbares
                span.Apple-converted-space
            li.li3

              span.s2
                | Mehrjährige Berufserfahrung im Projektmanagement, vorzugsweise im Bereich der Windenergie
                span.Apple-converted-space
            li.li3

              span.s2
                | Kenntnisse in der Windanlagentechnik, Ertragsberechnung und Gutachtenbeurteilung
                span.Apple-converted-space
            li.li3

              span.s2
                | Sichere Anwendung von GIS-Systemen, AutoCAD und WindPro
                span.Apple-converted-space
            li.li3

              span.s2
                | Routinierter Umgang mit rechtlichen Normen wie dem BImSchG, dem Baurecht und dem Recht der Erneuerbaren Energien
                span.Apple-converted-space
            li.li3

              span.s2 Strukturierte Arbeitsweise, Organisations- und Kommunikationsstärke
            li.li3

              span.s2 Faszination für Erneuerbare Energien und Freude an Teamarbeit
          br
          p.p3
            span.s2
              b Unser Angebot
          ul.ul1
            li.li3

              span.s2 Abwechslungsreiche und eigenverantwortliche Tätigkeit
            li.li3

              span.s2 Moderne Unternehmenskultur mit flacher Hierarchie 
              span.s4
                span.Apple-converted-space
            li.li3

              span.s2
                | Kontinuierliche Förderung der beruflichen Weiterentwicklung mit Aufstiegsmöglichkeit zum Projektleiter
                span.Apple-converted-space
            li.li3

              span.s2
                | Flexibles, familienfreundliches Arbeitsumfeld
                span.Apple-converted-space
            li.li3

              span.s2
                | Leistungsgerechte Vergütung mit umfangreichen sozialen Leistungen
                span.Apple-converted-space
            li.li3

              span.s2 Unternehmenssitz in zentraler Lage direkt an der Spree
          br
          p.p3
            span.s2
              | Falls wir Sie angesprochen haben, freuen wir uns auf Ihre aussagekräftige Bewerbung mit Ihrer Gehaltsvorstellung und Ihrem möglichen Eintrittstermin. Bitte fassen Sie die einzelnen Dokumente Ihrer E-Mail zu 
              b einer pdf-Datei
              |  zusammen und senden diese an Frau Gärtner 
            a(href='mailto:berlin@greenwindoffshore.de') berlin@greenwindoffshore.de
          
          br
          br
          
          hr

          h3 Servicetechniker/-ingenieur (w/m/d) für Leitstand
          br
          p.p3
            span.s2
              | Die Green Wind Offshore GmbH ist Spezialist für Instandhaltungsmanagement und Überwachung technischer Anlagen zur Offshore Energieerzeugung. Wir geben volle Unterstützung in der technischen Betriebsführung von Offshore-Windenergieanlagen und im Plattformmanagement für HGÜ und Umspannwerke.
          p.p3
            span.s2
              | Ab sofort suchen wir einen 
              b versierten Mitarbeiter
              |  (w/m/d) zur Überwachung von On- und Offshoreanlagen. Idealerweise bringen Sie bereits 
              b Erfahrungen mit gasisolierten Schaltanlagen, HGÜ und OUW
              |  im Hochspannungsbereich von Siemens, ABB bzw. GE oder an On- und Offshore Windenergieanlagen mit. Es erwartet Sie ein aufgeschlossenes Team, ein angenehmes Betriebsklima und anspruchsvolle nationale sowie internationale Projekte.
              span.Apple-converted-space
          b Ihre Aufgaben
          ul.ul1
            li.li3

              span.s2
                b Fehlerdiagnose: 
                | Analyse von anstehenden Fehlern, Maßnahmeneinleitung zur Fehlerbeseitigung
            li.li3

              span.s2
                b Auftragsmanagement
                | : Annahme, Erstellung und Verwaltung von Aufträgen, Abstimmung mit dem Auftraggeber, Auftragsdokumentation prüfen, ergänzen und bereitstellen, Mängellisten aufarbeiten
            li.li3

              span.s2
                b Methodenbeschreibungen
                |  zur Instandsetzung von gasisolierten Schaltanlagen, HGÜ- Anlagen und deren Nebengewerken, Windenergieanlagen und anderen technischen komplexen Anlagen
                span.Apple-converted-space
            li.li3

              span.s2
                b Ressourcenplanung
                | : Mitarbeiterauswahl und -einsatz, Überwachung und Dokumentation der Arbeitszeiten, Pflege der Qualifizierungsunterlagen der Mitarbeiter, adäquate Ersatzteile beschaffen und bereitstellen, nötige Werkzeuge nach Sicherheitsrichtlinien auswählen und zur Verfügung stellen, inkl. der Logistik und den Vorbereitungen der Verzollung, Organisation der fachgerechten Abfallentsorgung
            li.li3

              span.s2
                b Leitwarte 24/7
                | : Mitarbeit im 3-Schichtsystem zur Gewährleistung einer 24/7 Anlagenüberwachung.

          br
          b Ihr Profil
          ul.ul1
            li.li3
              span.s2 Sie bringen eine erfolgreich abgeschlossene Ausbildung im Bereich der Elektrotechnik, Mechanik oder Mechatronik mit
            li.li3
              span.s2
                | Sie sind kommunikativ, haben ein hohes Qualitätsbewusstsein und arbeiten selbstständig sowie detailgenau
                span.Apple-converted-space
            li.li3

              span.s2 Ein freundliches und souveränes Auftreten, Belastbarkeit sowie Teamfähigkeit zeichnet Sie aus
            li.li3

              span.s2 Erfahrungen mit Arbeiten am Leitstand sowie mit dem Programmieren der Software „prins“ und Offshoretauglichkeit wären von Vorteil, sind jedoch nicht zwingend erforderlich
            li.li3

              span.s2
                | Sie verfügen über sehr gute MS-Office-Kenntnisse, einen Führerschein der Klasse B und Reisebereitschaft
                span.Apple-converted-space
            li.li3

              span.s2 Sehr gute Deutschkenntnisse in Wort und Schrift sowie gute Kenntnisse der englischen Sprache.
          br
          p.p3
            span.s2
              b Wir bieten
          p.p9
            span.s2 Eine anspruchsvolle Aufgabe im wachsenden Bereich der erneuerbaren Energien und die Möglichkeit mitzugestalten. Einen attraktiven Arbeitsplatz direkt an der Spree in einem dynamischen und freundlichen Team mit der optimalen Mischung aus erfahrenen sowie jungen Kolleginnen und Kollegen. Eine leistungsgerechte Bezahlung und weiteren Extras wie: JobRad, Englischunterricht, frisches Bioobst und Getränke.
          p.p9
            span.s2
              | Fühlen Sie sich angesprochen? Dann freuen wir uns über Ihre aussagekräftige Bewerbung unter Angaben Ihrer Gehaltsvorstellungen und des möglichen Eintrittstermins. Bitte senden Sie Ihre Unterlagen 
              b per Mail
              |  (
            span.s6 eine
            span.s2  Anlage mit max. 5 MB) an Frau Gärtner: 
            a(href='mailto:berlin@greenwindoffshore.de') berlin@greenwindoffshore.de
          br
          br
          br
          
</template>

<script>
  import throttle from 'lodash/throttle'
  import asleep from 'asleep'
  import isMobile from '@/assets/js/isMobile'

  export default {
    name: 'jobs',
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
      // content () { return this.$store.state.content },
      section () { return this.$route.path.split('/')[2] },
      lang () { return this.$route.path.split('/')[1] }
      // c () { return this.content[this.lang][this.section][this.$options.name] }
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
      background-image: url(https://res.cloudinary.com/greenwind/image/upload/c_scale,q_80,w_2000/v1505149009/GWE_Team_web_w0tnxg.jpg)
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
      background-image: url(https://res.cloudinary.com/greenwind/image/upload/c_scale,q_50,w_2400/v1505147157/GWO_Team_web_o9rb2w.jpg)
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
      background-image: url(https://res.cloudinary.com/greenwind/image/upload/q_75/v1504171424/IMG_6864_moopyj.jpg)
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
