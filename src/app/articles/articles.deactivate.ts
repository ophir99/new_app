import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ArticlesDeactivate implements CanDeactivate<any> {
  canDeactivate() {
    return confirm("Are you sure you want to leave??");
  }
}
