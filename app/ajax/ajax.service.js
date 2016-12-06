(function (app) {
const name = 'AjaxService'

// https://github.com/angular/angular/issues/9294
app.MockXSRF = {
  provide: ng.http.XSRFStrategy,
  useValue: {
    configureRequest: function(req) {
    }
  }
}

app.services[name] = [ng.core
.Class({
  constructor: [ng.http.Http, function (http) {
    this.http = http
  }],
  getStuff: function() {
    return this.http.get('app/app.json')
      .map((res) => {return res.json()})
  }
}), app.MockXSRF]
})(window.app || (window.app = {declarables: {}, routes: {}, services: {} }))
