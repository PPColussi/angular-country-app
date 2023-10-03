
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomepageComponent } from './shared/pages/homepage/homepage.component';
import { AboutPagesComponent } from './shared/pages/about-pages/about-pages.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { CountriesModule } from './countries/countries.module';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomepageComponent
  // },
  {
    path: 'about',
    component: AboutPagesComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
  },
  {
    path: '**',
    redirectTo: 'countries'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
