import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private matDialogRef: MatDialogRef<any>) {}

  ngOnInit() {}

  close(val) {
    sessionStorage.setItem("email", val);
    this.matDialogRef.close();
  }
}
