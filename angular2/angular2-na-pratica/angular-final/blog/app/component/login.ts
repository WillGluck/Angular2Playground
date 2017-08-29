import {Component} from 'angular2/core'
import {User} from '../model'
import {UserService, LoginService} from '../service'
import {PostService} from '../service'
import {Router} from 'angular2/router'

@Component({
    providers: [UserService],
    templateUrl: "login.html"
})
export class LoginComponent {
    
    private user:User = new User()
    private showLoading:boolean = false
    private errorMessage:string = null
    
    constructor(
        private userService:UserService,
        private loginService:LoginService,
        private router:Router) { }
    
    onClick(event) {
        event.preventDefault()
        this.showLoading = true
        this.errorMessage = null
        this.userService.insert(this.user).subscribe(
            result => this.onLoginResult(result),
            error => this.onLoginError(error)
        )
    }    
    
    onLoginResult(result) {
        console.log(result)
        this.loginService.setLogin(result.user, result.token)
        this.router.navigate(['Home'])
    }
    
    onLoginError(error) {
        this.showLoading = false
        this.errorMessage = error._body
    }
    
}