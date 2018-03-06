import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // TODO: Get token from users service
    const token = 'Bearer yXuIbM4Fdr7yE3AAQFEM21ckiyqEpARUgPSQO5dOqZjf587xyq2At8QzQVuC';
    const updatedRequest = request.clone({
      headers: request.headers.set('Authorization', token)
    });

    return next.handle(updatedRequest);
  }
}
