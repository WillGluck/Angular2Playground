import {Component} from 'angular2/core'
import {Video} from './Video'
import {EventEmitter} from 'angular2/core'

@Component({
    selector: 'video-detail',
    templateUrl: 'app/videodetail.component.html',
    inputs: ['video'],
    outputs: ['closeForm']
})

export class VideoDetailComponent {
    
    private closeForm = new EventEmitter();
    private editTitle:boolean = false
    
    onTitleClick() {
        this.editTitle = true;
    }    
    
    onButtonClick() {
        this.closeForm.next({})
    }
    
    ngOnChanges() {
        this.editTitle = false
    }
    
}