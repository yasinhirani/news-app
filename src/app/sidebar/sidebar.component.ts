import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {NewsService} from '../news.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() newsResponse:EventEmitter<any> = new EventEmitter();
  @Output() categoryname:EventEmitter<any> = new EventEmitter();
  newsArray: any;
  setNews: any;
  categoryName: String =  "business";
  constructor(private newsService: NewsService) { 
    this.getNews("business");
  }

  categories = [
    {
      name:"business",
      icon: "fa fa-briefcase"
    },
    {
      name:"sports",
      icon: "fa fa-futbol-o"
    },
    {
      name:"entertainment",
      icon: "fa fa-film"
    },
    {
      name:"technology",
      icon: "fa fa-television"
    },
    {
      name:"health",
      icon: "fa fa-medkit"
    },
    {
      name:"science",
      icon: "fa fa-briefcase"
    }
  ];

  getNews(category: any){
    this.newsService.getNewsService(category).subscribe(data => {
      this.newsArray = data;
      this.setNews = this.newsArray.articles;
      // console.log(this.setNews);
      this.newsResponse.emit(this.setNews);
    })
  }
  getCategory(categoryName: any){
    // console.log(categoryName);
    this.categoryname.emit(categoryName);
  }

  ngOnInit(): void {
  }

}
