import assign from 'object-assign'
import directive from './directive'

const defaultOptions = {}

const VDragged = {
  install: function (Vue, options) {
    options = assign({}, defaultOptions, options)
    let major = Number(Vue.version.split('.')[0])
    let minor = Number(Vue.version.split('.')[1])
    if (major < 2 && minor < 1) {
      throw new Error(`v-dragged supports vue version 2.1 and above. You are using Vue@${Vue.version}. Please upgrade to the latest version of Vue.`)
    }
    // registration
    Vue.directive('dragged', directive)
  },

  directive
}
export default VDragged