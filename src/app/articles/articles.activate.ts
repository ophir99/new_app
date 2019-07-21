import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
@Injectable({
  providedIn: "root"
})
export class ArticlesActivate implements CanActivate {
  canActivate() {
    if (sessionStorage.getItem("email")) {
      return true;
    } else {
      alert("Please login in");
      return false;
    }
  }
}
