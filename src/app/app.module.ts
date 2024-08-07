import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { PainelComponent } from './componentes/painel/painel.component';
import { ProductComponent } from './componentes/product/product.component';
import { RelatedProductComponent } from './componentes/related-product/related-product.component';
import { BrandComponent } from './componentes/brand/brand.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PainelComponent,
    ProductComponent,
    RelatedProductComponent,
    BrandComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
