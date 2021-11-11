import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNewsService(catagory: any){
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=in&category=${catagory}&apiKey=6dd98cb4dec143c59c6b2ea329004c53`);
  }
}
