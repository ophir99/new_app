import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatInputModule,
  MatChipsModule,
  MatCardModule
} from "@angular/material";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ArticlesComponent } from "./articles/articles.component";
import { ArticleComponent } from "./article/article.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    HttpClientModule,
    MatChipsModule,
    MatCardModule,
    RouterModule.forRoot([
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "articles/:article_name/:article_title",
        component: ArticlesComponent
      },
      {
        path: "article",
        component: ArticleComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
