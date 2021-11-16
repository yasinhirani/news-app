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
  categoryName: any;
  constructor(private newsService: NewsService) { 
    this.getNews("all");
  }

  categories = [
    {
      name:"all",
      icon: "fa fa-bookmark"
    },
    {
      name:"national",
      icon: "fa fa-flag-o"
    },
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
      icon: "fa fa-space-shuttle"
    },
    {
      name:"world",
      icon: "fa fa-globe"
    },
    {
      name:"politics",
      icon: "fa fa-users"
    }
  ];

  getNews(category: any){
    this.newsService.getNewsService(category).subscribe(data => {
      this.newsArray = data;
      this.setNews = this.newsArray.data;
      console.log(this.setNews);
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
