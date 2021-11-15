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
    return this.http.get(`https://gnews.io/api/v4/top-headlines?token=f3b031924bfe70721e2cea85655c2f96&topic=${catagory}&country=in&lang=en`);
  }
}
