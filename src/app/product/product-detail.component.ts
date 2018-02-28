import { Component, OnInit } from '@angular/core';
import { AppSettingsService, AppSettings } from '../shared/appsettings.service';
import { Product } from './product';

@Component({
  selector: 'app-product-detail',
  templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  constructor(private appSettingsService: AppSettingsService) {}

  product: Product;
  settings: AppSettings;

  ngOnInit() {
    this.appSettingsService.getSettings().subscribe(
      settings => (this.settings = settings),
      () => null,
      () => {
        this.product = new Product();
        this.product.price = this.settings.defaultPrice;
        this.product.url = this.settings.defaultUrl;
      }
    );
  }

  saveProduct(): void {}
}
