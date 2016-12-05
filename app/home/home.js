(function (app) {
const name = 'Home'

app.routes[name] = {path: `${name.toLowerCase()}`}
app.routes[name]['component'] = app.declarables[name] = ng.core
.Component({
  templateUrl: `app/${name.toLowerCase()}/${name.toLowerCase()}.html`,
  styleUrls: [
    // `css/${name.toLowerCase()}.css`,
  ],
})
.Class({
  constructor: [ng.router.ActivatedRoute, function (route) {
    this.route = route
  }],
  ngOnInit: function () {
  }
})
})(window.app || (window.app = {declarables: {}, routes: {}, services: {} }))
