import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

const SETTING_LOCATION = 'assets/appsettings.json';
const SETTINGS_KEY = 'configuration';

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

    const settings = localStorage.getItem(SETTINGS_KEY);

    if (settings) {
        return of(JSON.parse(settings));
    } else {
    return this.http
      .get<AppSettings>(SETTING_LOCATION)
      .pipe(
        // tslint:disable-next-line:no-shadowed-variable
        tap(settings => {
          if (settings) {
            this.saveSettings(settings);
          }
        }),
        catchError(
          this.handleError<AppSettings>('getSettings', new AppSettings())
        )
      );
    }
  }

  saveSettings(settings: AppSettings) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }

  deleteSettings(): void {
    localStorage.removeItem(SETTINGS_KEY);
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
