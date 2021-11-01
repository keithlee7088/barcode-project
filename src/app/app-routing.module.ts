import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BarcodeComponent } from './barcode/barcode.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'barcode', component: BarcodeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:barcodevalue', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
