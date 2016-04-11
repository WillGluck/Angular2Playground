import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {Config} from './config.service'

bootstrap(AppComponent, [Config])