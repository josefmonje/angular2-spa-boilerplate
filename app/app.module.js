(function (app) {
app.get_list = function (name) {
  app.namespaces = {
    declarations: 'declarables',
    routes: 'routes',
    providers: 'services',
  }
  if (name in app.namespaces) {
    let list = []
    let namespace = app.namespaces[name]
    if (namespace in app) {
      for (let each in app[namespace]) {
        if (each in app[namespace] && each.startsWith('__') != true) {
          list[list.length] = app[namespace][each]
        }
      }
    }
    return list
  }
}

app.routes.__otherwise = { path: '**',
  redirectTo: 'home',
  pathMatch: 'full',
}
app.AppRoutes = app.get_list('routes')
app.AppRoutes.push(app.routes.__otherwise)
app.AppProviders = app.get_list('providers')
app.AppComponents = app.get_list('declarations')

app.AppModule = ng.core
.NgModule({
  imports: [
    ng.common.CommonModule,
    ng.platformBrowser.BrowserModule,
    ng.forms.FormsModule,
    ng.http.HttpModule,
    ng.router.RouterModule.forRoot(app.AppRoutes, { useHash: true }),
  ],
  providers: app.AppProviders,
  declarations: app.AppComponents,
  bootstrap: [
    app.declarables.App
  ],
})
.Class({
  constructor: function () {}
})
})(window.app || (window.app = {declarables: {}, routes: {}, services: {} }))
