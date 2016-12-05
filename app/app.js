(function (app) {
const name = 'App'

app.declarables[name]= ng.core
.Component({
  selector: 'app',
  templateUrl: `app/${name.toLowerCase()}.html`,
  styleUrls: [
    // 'css/app.css'
  ],
})
.Class({
  constructor: function () {
    this.nav = app.get_list('routes').filter((each) => {return !('hidden' in each)})
  }
})
})(window.app || (window.app = {declarables: {}, routes: {}, services: {} }))
