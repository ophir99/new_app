import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from "@angular/common/http";

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, reqHandler: HttpHandler) {
    console.log("Logging from interceptor", req);
    const newReq = req.clone({
      params: req.params.set("api-key", "5c5fbd50-93a5-4da9-82d5-19c951b46360"),
      headers: req.headers
        .set("header-from-interceptor", "dshjkhskjhjskhd")
        .set("lol", "lol-H")
    });

    return reqHandler.handle(newReq);
  }
}
