import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CategoriesComponent } from './categories.component';
import { LoginComponent } from './login.component';
import { CreateBlogComponent } from './create-blog.component';
import { LogoutComponent } from './logout.component';

const routes: Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'categories', component: CategoriesComponent},
	{path: 'login', component: LoginComponent},
	{path: 'logout', component: LogoutComponent},
	{path: 'create-blog', component: CreateBlogComponent},
	{path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}