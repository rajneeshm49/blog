import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { CategoriesComponent } from './categories.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout.component';
import { CreateBlogComponent } from './create-blog.component';

import { AppRoutingModule } from  './app-routing.module';
import { HttpModule } from '@angular/http';
import { CKEditorModule } from 'ng2-ckeditor';

import { LoginService } from './login.service'

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, HomeComponent, CategoriesComponent, LoginComponent, LogoutComponent, CreateBlogComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpModule, CKEditorModule
  ],
  providers: [ LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
