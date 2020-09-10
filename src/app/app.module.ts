import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PromotionSettingComponent } from './promotions/promotion-setting.component';

@NgModule({
  declarations: [
    AppComponent,
    PromotionSettingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
