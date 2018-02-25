import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { NotificationService } from './../../notification.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private notification: NotificationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        // success response
        event => {},
        // error response
        event => {
          if (event instanceof HttpErrorResponse) {
            this.notification.error(event.error.message);
          }
        }
      )
    );
  }
}
