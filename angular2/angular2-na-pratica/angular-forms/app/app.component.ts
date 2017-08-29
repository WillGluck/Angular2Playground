import {Component} from 'angular2/core'
import {Person} from './model'
import {Mock} from './mock'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    
    user:Person
    submitted:boolean
    
    constructor(_mock:Mock) {
        this.submitted = false
        this.user = _mock.mike;
    }
    
    onSubmit(f) {
        this.submitted = true
        console.log("Sending..." + JSON.stringify(this.user))
        var self = this
        setTimeout(function() { self.submitted = false }, 1000)        
    }
    
 }