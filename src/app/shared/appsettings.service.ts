import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export class AppSettings {
  defaultPrice  = 1;
  defaultUrl = 'http://www.dash.com';
}

@Injectable()
export class AppSettingsService {
  getSettings(): Observable<AppSettings> {
    const settings = new AppSettings();

    return of(settings);
  }
}
