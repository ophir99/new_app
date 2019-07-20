import { Component, OnInit } from "@angular/core";
import { NewsService } from "../news.service";
import { map } from "rxjs/operators";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  sections = [];
  constructor(private newS: NewsService) {
    this.newS
      .getSections()
      .pipe(
        map(res => {
          console.log("logging from map", res);
          return res.response.results;
        })
        // map(data => {
        //   return {
        //     sections: data
        //   };
        // })
      )
      .subscribe(
        data => {
          this.sections = data;
        },
        err => console.log(err)
      );
  }

  ngOnInit() {}
}
