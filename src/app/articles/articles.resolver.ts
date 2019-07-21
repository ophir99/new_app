import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { NewsService } from "../news.service";
@Injectable({
  providedIn: "root"
})
export class ArticleResolver implements Resolve<any> {
  constructor(private newsS: NewsService) {}

  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot) {
    const api = activatedRouteSnapshot.queryParams.api;
    // console.log("REsolver hi", activatedRouteSnapshot);
    return this.newsS.getArticles(api);
  }
}
