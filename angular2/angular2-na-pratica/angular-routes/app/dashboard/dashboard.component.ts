import {Component} from 'angular2/core'
import {RouteParams, Router} from 'angular2/router'

@Component({
    templateUrl: 'app/dashboard/dashboard.html'
})

export class DashboardComponent {
    
    constructor(
        private _router:Router,
        private _routeParams:RouteParams
    ) { }
    
    ngOnInit() {
        var id = this._routeParams.get('id')
    }
    
    teste() {
        this._router.navigate(['User', {id: 1}])
    }
    
 }