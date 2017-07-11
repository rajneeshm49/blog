import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { CategoriesComponent } from './categories.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { AppRoutingModule } from  './app-routing.module';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, HomeComponent, CategoriesComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
