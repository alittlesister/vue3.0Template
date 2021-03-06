import { createStore } from 'vuex'
import routesList  from "../router/routes"
interface State {
  userName: string
  tagsList: any
  collapse: boolean
  defaultMenu: string
}

export default createStore({
  state: {
    userName: '王大合',
    tagsList: [
      {
        path: '/Home',
        title: '首页'
      }
    ],
    collapse: false,
    defaultMenu: '/Home',
    staticRoute: routesList,
    formLabelPosition:'left'
  },
  mutations: {
    delTagsItem(state, index) {
      console.log('index', index)

      state.tagsList.splice(index, 1)
    },
    setTagItem(state, data: any) {
      state.tagsList.push(data)
    },
    clearTags(state) {
      state.tagsList = []
    },
    closeCurrentTag(state, data) {
      for (let i = 0, len = state.tagsList.length; i < len; i++) {
        const item = state.tagsList[i]
        if (item.path === data.$route.fullPath) {
          if (i < len - 1) {
            data.$router.push(state.tagsList[i + 1].path)
          } else if (i > 0) {
            data.$router.push(state.tagsList[i - 1].path)
          } else {
            data.$router.push('/')
          }
          state.tagsList.splice(i, 1)
          break
        }
      }
    },
    handleCollapse(state, data) {
      state.collapse = data
    },
    setDefaultMenu(state, path) {
      state.defaultMenu = path
    },
    setStaticRoute(state, data) {
      state.staticRoute = data
    }
  },
  modules: {
    
  },
  actions: {
    async fetchPermission({commit,state},a) {
      if (a === 1) {
        
      }
    }
  }
})