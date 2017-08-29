import {User} from '../model'

export class Post {
    
    public _id:string
    public title:string
    public user:User
    public body:Date
    public isNew:Boolean
    
    constructor() { }
}