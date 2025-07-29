import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CosaceComponent } from './client/cosace/cosace.component';
import { AccueilComponent } from './client/accueil/accueil.component';
import { NavbarComponent } from './client/navbar/navbar.component';
import { FooterComponent } from './client/footer/footer.component';
import { AboutComponent } from './client/about/about.component';
import { ContactComponent } from './client/contact/contact.component';
import { FaqComponent } from './client/faq/faq.component';
import { ActionsComponent } from './client/actions/actions.component';

@NgModule({
  declarations: [
    AppComponent,
    CosaceComponent,
    AccueilComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
