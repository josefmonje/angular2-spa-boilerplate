(function (app) {
const name = 'Ajax'

app.routes[name] = {path: `${name.toLowerCase()}`}
app.routes[name]['component'] = app.declarables[name] = ng.core
.Component({
  templateUrl: `app/${name.toLowerCase()}/${name.toLowerCase()}.html`,
  styleUrls: [],
})
.Class({
  constructor: [ng.router.ActivatedRoute, app.services.AjaxService, function (route, ajax) {
    this.route = route
    this.ajax = ajax
  }],
  ngOnInit: function () {
    this.ajax.getStuff().subscribe(
      (res) => {
        this.res = res
      },
      (err) => {
        this.errors = err
      }
    )
  }
})
})(window.app || (window.app = {declarables: {}, routes: {}, services: {} }))
