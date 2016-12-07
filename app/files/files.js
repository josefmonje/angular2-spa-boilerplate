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

    this.index = `<html>
          <head>
            <base href=/>
            <title>Angular 2 SPA boilerplate</title>
            <meta name=viewport content=width=device-width, initial-scale=1>
            <link rel=stylesheet href=node_modules/bulma/css/bulma.css />

            <!-- 1. Load libraries -->
            <script src=node_modules/core-js/client/shim.min.js></script>
            <script src=node_modules/reflect-metadata/Reflect.js></script>
            <script src=node_modules/zone.js/dist/zone.js></script>

            <script src=node_modules/rxjs/bundles/Rx.js></script>
            <script src=node_modules/@angular/core/bundles/core.umd.js></script>
            <script src=node_modules/@angular/common/bundles/common.umd.js></script>
            <script src=node_modules/@angular/compiler/bundles/compiler.umd.js></script>
            <script src=node_modules/@angular/forms/bundles/forms.umd.js></script>
            <script src=node_modules/@angular/http/bundles/http.umd.js></script>
            <script src=node_modules/@angular/router/bundles/router.umd.js></script>
            <script src=node_modules/@angular/platform-browser/bundles/platform-browser.umd.js></script>
            <script src=node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js></script>

            <!-- 2. Load our services and utils first -->
            <script src=app/utils/pipes.js></script>
            <script src=app/ajax/ajax.service.js></script>

            <!-- 3. Load our modules -->
            <script src=app/home/home.js></script>
            <script src=app/files/files.js></script>
            <script src=app/components/components.js></script>
            <script src=app/navigation/navigation.js></script>
            <script src=app/ajax/ajax.js></script>

            <script src=app/app.js></script>
            <script src=app/app.module.js></script>
            <script src=app/main.js></script>
          </head>

          <!-- 3. Display the application -->
          <body>
            <app>Loading...</app>
          </body>
        </html>`
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
