import {Component} from 'angular2/core'
import {Config} from './config.service'
import {Video} from './video'
import {VideoListComponent} from './videolist.component'
import {VideoDetailComponent} from './videodetail.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [VideoListComponent, VideoDetailComponent]
})

export class AppComponent {
 
    title:string 
    videos: Array<Video>
    selectedVideo:Video
    
    constructor(_config:Config) {
        this.videos = [
            new Video(1, "Test", "www.test.com", "Test Descriptiom"),
            new Video(2, "Test 2", "www.test2.com")
        ]
        this.title = _config.TITLE_PAGE
    }
    
    onSelectVideo(video) {
        this.selectedVideo = video
    }
    
    onCloseDetailForm(event) {
        this.selectedVideo = null
    }
    
    newVideo() {
        var v = new Video(this.videos.length + 1, 'A New video', 'www.novoTeste.com')
        this.videos.push(v)
        this.selectedVideo = v
    }
 }