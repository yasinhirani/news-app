import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
// Api service
  getNewsService(catagory: any){
    return this.http.get(`https://inshortsapi.vercel.app/news?category=${catagory}`);
  }
}
