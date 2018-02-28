import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { AppSettingsService } from './shared/appsettings.service';

@NgModule({
  declarations: [AppComponent, ProductDetailComponent],
  imports: [BrowserModule, FormsModule],
  providers: [AppSettingsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
