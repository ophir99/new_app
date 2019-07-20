import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { NewsService } from "../news.service";
@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"]
})
export class ArticleComponent implements OnInit {
  res: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService
  ) {
    this.activatedRoute.queryParams
      .pipe(
        switchMap(qParams => {
          console.log(qParams.api);
          return this.newsService.getArticles(qParams.api);
        })
      )
      .subscribe(res => (this.res = res));
  }

  ngOnInit() {}
}
