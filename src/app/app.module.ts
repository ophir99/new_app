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
  MatCardModule,
  MatDialogModule
} from "@angular/material";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ArticlesComponent } from "./articles/articles.component";
import { ArticleComponent } from "./article/article.component";
import { ArticleResolver } from "./articles/articles.resolver";
import { ArticlesActivate } from "./articles/articles.activate";
import { LoginComponent } from "./login/login.component";
import { ArticlesDeactivate } from "./articles/articles.deactivate";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesComponent,
    ArticleComponent,
    LoginComponent
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
    MatDialogModule,
    RouterModule.forRoot([
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "articles/:article_name/:article_title",
        resolve: {
          articles: ArticleResolver
        },
        canActivate: [ArticlesActivate],
        canDeactivate: [ArticlesDeactivate],
        component: ArticlesComponent
      },
      {
        path: "article",
        component: ArticleComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule {}
