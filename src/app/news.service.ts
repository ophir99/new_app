import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getSections = () =>
    this.http.get(`https://content.guardianapis.com/sections`, {
      params: new HttpParams()
        // .append("api-key", "5c5fbd50-93a5-4da9-82d5-19c951b46360")
        .append("my-key-lol", "Super scret")
        .append("another-token", "fdhsjkfhjkdshfjkhdfjkhd")
    });

  getArticles = url => this.http.get(`${url}`);
}
