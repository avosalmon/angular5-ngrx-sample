import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiResponse } from 'app/core/models/api-response';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  /**
   * Login with username and password.
   *
   * @param username
   * @param password
   */
  login(username: string, password: string): Observable<LoginResponse> {
    const body = {
      username: username,
      password: password
    };
    return this.http.post<ApiResponse<LoginResponse>>('/login', body)
              .pipe(
                map(response => response.data)
              );
  }
}

export interface LoginResponse {
  login: {
    app: {
      env: string;
      shop_url: string;
      pusher_key: string;
      sales_tax_rate: string;
    };
    user: any;
  };
  meta: any;
  schema: any;
}
