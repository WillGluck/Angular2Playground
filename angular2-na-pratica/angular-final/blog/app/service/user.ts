import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {Injectable} from 'angular2/core'
import 'rxjs/add/operator/map'
import {User} from '../model'
import {HeaderService} from './headers'

@Injectable()
export class UserService {
    
    constructor(private http:Http, private _header:HeaderService) { }
    
    insert(u:User) {
        return this.http
            .post('./api/login',
                 JSON.stringify(u),
                 this._header.getJsonHeaders())
            .map(res => res.json())
    }    
}