import Vue from 'vue'
import Vuex from 'vuex'
import Prismic from 'prismic-javascript' // REST API
// import { de, dk, en } from 'date-fns/esm/locale'
// import { format } from 'date-fns/esm'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    activeFilter: null,
    lang: 'de-de'
  },
  mutations: {
    FETCH_POSTS (state, posts) {
      state.posts = posts
    },
    ACTIVE_FILTER (state, category) {
      state.activeFilter = category
    },
    SET_LANG (state, lang) {
      state.lang = lang
    }
  },
  getters: {
    getActiveFilter: state => state.activeFilter,
    getPosts: state => state.posts,
    getLang: state => state.lang
  },
  actions: {
    setActiveFilter ({ commit, self, dispatch }, category) {
      commit('ACTIVE_FILTER', category)
    },
    setLang ({ commit, self, dispatch, state }, langToSet) {
      commit('SET_LANG', langToSet)
    },
    async fetchPrismicPosts ({ commit, self, dispatch, state }) {
      return new Promise((resolve, reject) => {
        Prismic.getApi('https://greenwind.prismic.io/api/v2').then((api) => {
          return api.query(
            Prismic.Predicates.at('document.type', 'news_post'),
            {
              pageSize: 100,
              lang: state.lang,
              orderings: '[my.news_post.published_date desc]'
            }
          )
        }).then(response => {
          // change 'Greenwind Energy' to just 'energy', etc.
          response.results.forEach((post) => {
            // --- remove empty paragraphs ---
            // let i = 0
            // post.data.content.forEach((p) => {
            //   if (p.text === '') {
            //     post.data.content.splice(i, 1)
            //   }
            //   i++
            // })

            // trim data of old category field
            // post.data.category = post.data.category.replace(/Greenwind /i, '').toLowerCase()
            // set 'null' category fields to false
            if (!post.data.energy) post.data.energy = false
            if (!post.data.operations) post.data.operations = false
            if (!post.data.offshore) post.data.offshore = false
            // make new categories object
            post.data.categories = {
              energy: post.data.energy,
              operations: post.data.operations,
              offshore: post.data.offshore
            }
            let categoriesClass = ''
            if (post.data.energy) categoriesClass = 'Energy'
            if (post.data.operations) categoriesClass = categoriesClass + 'Operations'
            if (post.data.offshore) categoriesClass = categoriesClass + 'Offshore'
            if (!post.data.energy && !post.data.operations && !post.data.offshore) categoriesClass = 'none'
            post.data.categoriesClass = categoriesClass
            // console.log(categoriesClass)

            // create year field
            let publishedDate
            if (post.data.published_date) {
              publishedDate = post.data.published_date
            } else {
              publishedDate = post.first_publication_date.substring(0, 8)
            }
            const dateParts = publishedDate.split('-')
            post.data.year = dateParts[0]
          })
          // save it to store
          commit('FETCH_POSTS', response.results)
          resolve()
        }, error => {
          // get posts from store without another API call
          console.log('store > Error: ', error)
        })
      })
    },
    async fetchStatePosts ({ self, dispatch, state }) {
      // only fetchPrismicPosts() if it's not done already
      if (state.posts.length === 0) {
        await dispatch('fetchPrismicPosts')
      }
      return state.posts
    },
    async fetchStatePost ({ self, dispatch, state }, uid) {
      if (uid) {
        // only fetchPrismicPosts() if it's not done already
        if (state.posts.length === 0) {
          await dispatch('fetchPrismicPosts')
        }
        const posts = state.posts
        const post = posts.filter(x => x.uid === uid)
        return post
      }
      else {
        return ['error, no uid']
      }
    },
    async fetchStatePostID ({ self, dispatch, state }, id) {
      // only fetchPrismicPosts() if it's not done already
      if (state.posts.length === 0) {
        await dispatch('fetchPrismicPosts')
      }
      const posts = state.posts
      const post = posts.filter(x => x.id === id)
      return post
    },
    async latestPost ({ self, dispatch, state }) {
      if (state.posts.length === 0) {
        await dispatch('fetchPrismicPosts')
      }
      const posts = state.posts
      return posts[0].uid
    },
    async getUidLang ({ self, dispatch, state}, uid) {
      if (state.posts.length === 0) {
        await dispatch('fetchPrismicPosts')
      }
      const posts = state.posts
      let alt_lang_post
      let lang
      posts.forEach(p => {
        alt_lang_post = p.alternate_languages.find(o => o.uid === uid)
        if (alt_lang_post) {
          lang = alt_lang_post.lang
        }
      })
      if (lang) {
        return lang
      } else {
        return false
      }
    }
  }
})
