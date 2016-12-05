(function (app) {
app.declarables.TitlePipe = ng.core
.Pipe({
  name: 'title',
  pure: true,
})
.Class({
  constructor: function () {},
  transform: function (value, args) {
    if (!!value && typeof(value) == 'string') {
      return value.charAt(0).toUpperCase() + value.slice(1)
    } else {
      return ''
    }
  }
})
})(window.app || (window.app = {declarables: {}, routes: {}, services: {} }))
