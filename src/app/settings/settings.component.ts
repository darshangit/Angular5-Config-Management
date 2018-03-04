import { Component, OnInit } from '@angular/core';
import { AppSettingsService, AppSettings } from '../shared/appsettings.service';

@Component({
    selector: 'app-settings',
    templateUrl: 'settings.component.html'
})

export class SettingsComponent implements OnInit {

    constructor(private appSettingsService: AppSettingsService) { }

    settings: AppSettings;

    ngOnInit() {
        this.appSettingsService.getSettings()
        .subscribe(settings => this.settings = settings);
    }

    saveSettings(): void {}
}
