import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const url = environment.origin + request.url;
    const updatedRequest = request.clone({
      url: url
    });

    return next.handle(updatedRequest);
  }
}
