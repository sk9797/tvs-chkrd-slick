import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppComponent } from './app.component';
import { SlickCompComponent } from './slick-comp/slick-comp.component';
import { SlickOldCompComponent } from './slick-old-comp/slick-old-comp.component';
import { ModalCompComponent } from './modal-comp/modal-comp.component';
import { ModalButtonComponent } from './modal-button/modal-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SlickCompComponent,
    SlickOldCompComponent,
    ModalCompComponent,
    ModalButtonComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
