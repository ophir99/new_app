import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NewsService } from "../news.service";
import { switchMap, map } from "rxjs/operators";
@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.scss"]
})
export class ArticlesComponent implements OnInit {
  heading: string;
  url: string;
  articles = [];
  constructor(private aRoute: ActivatedRoute, private newsS: NewsService) {
    console.log("Articles hi");
    // this.aRoute.params.subscribe(
    //   data => (console.log(data), (this.heading = data.article_name))
    // );

    // this.aRoute.queryParams.subscribe(qParam => {
    //   this.newsS
    //     .getArticles(qParam.api)
    //     .subscribe(res => console.log("ARTICLES", res));
    // });
    // this.getArticles();
    this.resolve();
  }

  ngOnInit() {}

  getArticles() {
    this.aRoute.queryParams
      .pipe(
        switchMap(qParams => this.newsS.getArticles(qParams.api)),
        map(data => data.response.results)
      )
      .subscribe(data => {
        console.log(data);
        this.articles = data;
      });
  }

  resolve() {
    this.aRoute.data
      .pipe(map((data: any) => data.articles.response.results))
      .subscribe(data => (this.articles = data));
  }
}
