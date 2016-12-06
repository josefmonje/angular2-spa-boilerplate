(function (app) {
const name = 'Files'

app.routes[`_${name}File`] = {path: `${name.toLowerCase()}/:file`, hidden: true}
app.routes[`_${name}File`]['component'] = app.declarables[name] = ng.core
.Component({
  templateUrl: `app/${name.toLowerCase()}/${name.toLowerCase()}.html`,
  styleUrls: [],
})
.Class({
  constructor: [ng.router.ActivatedRoute, ng.router.Router, function (route, router) {
    this.route = route
    this.router = router

    this.goToFile = function (file) {
      this.router.navigate(['/files', file])
      this.file = file
    }
  }],
  ngOnInit: function () {
      try {
        this.file = this.route.snapshot.params['file']
      } catch (e) {}
  }
})

app.routes[name] = {
  path: `${name.toLowerCase()}`, 
  component: app.declarables[name],
}
})(window.app || (window.app = {declarables: {}, routes: {}, services: {} }))
