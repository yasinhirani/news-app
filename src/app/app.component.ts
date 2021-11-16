import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Variables
  title = 'news-app';
  news: any;
  name: String = "all";
  constructor(){ }

    newsResponse(e: any){
      this.news = e;
    // console.log(e);
  }
  categoryname(e: any){
    // console.log(e);
    this.name = e;
  }
}
