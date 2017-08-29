/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />

import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {LoginService, HeaderService} from './service'

bootstrap(AppComponent, [HTTP_PROVIDERS, HeaderService, LoginService])