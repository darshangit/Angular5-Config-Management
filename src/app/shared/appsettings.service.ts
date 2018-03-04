import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const SETTING_LOCATION = 'assets/appsettings.json';

export class AppSettings {
  defaultPrice = 1;
  defaultUrl = 'http://www.dash.com';
}

@Injectable()
export class AppSettingsService {

  constructor(private http: HttpClient) {}

  getSettings(): Observable<AppSettings> {
    // const settings = new AppSettings();
    // return of(settings);
    return this.http.get<AppSettings>(SETTING_LOCATION)
    .pipe(
      catchError(
        this.handleError<AppSettings>('getSettings', new AppSettings()))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      switch (error.status) {
        case 404:
          console.error('Cant find File: ' + SETTING_LOCATION);
          break;
        default:
          console.error(error);
          break;
      }
      return of(result as T);
    };
  }
}
