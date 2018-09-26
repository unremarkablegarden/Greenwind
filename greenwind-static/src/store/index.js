import Vue from 'vue'
import Vuex from 'vuex'
import content from '@/assets/js/content.js'
import pageNames from '@/assets/js/pageNames.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hello: 'world',
    content: content,
    pageNames: pageNames
  }
})
