import { Component } from "@angular/core";
import { MatDialog } from "@angular/material";
import { LoginComponent } from "./login/login.component";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "large-app";
  constructor(private matDialog: MatDialog) {}

  openDialog() {
    this.matDialog.open(LoginComponent);
  }
  logout() {
    sessionStorage.removeItem("email");
  }
}
