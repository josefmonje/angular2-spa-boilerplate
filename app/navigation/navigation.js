(function (app) {
const name = 'Navigation'

app.routes[name] = {path: `${name.toLowerCase()}`}
app.routes[name]['component'] = app.declarables[name] = ng.core
.Component({
  templateUrl: `app/${name.toLowerCase()}/${name.toLowerCase()}.html`,
  styleUrls: [],
})
.Class({
  constructor: [ng.router.ActivatedRoute, function (route) {
    this.route = route
  }],
  ngOnInit: function () {
  }
})
})(window.app || (window.app = {declarables: {}, routes: {}, services: {} }))
