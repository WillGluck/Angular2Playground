import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router'
import {HomeComponent, LoginComponent, AddPostComponent} from './component'

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [ROUTER_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]    
})

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/Login', name: 'Login', component: LoginComponent },
    { path: '/AddPost', name: 'AddPost', component: AddPostComponent }
])

export class AppComponent {
    
}