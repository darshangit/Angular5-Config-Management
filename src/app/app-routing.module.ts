import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product/product-detail.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
    { path: 'product', component: ProductDetailComponent},
    { path: 'settings', component: SettingsComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }
