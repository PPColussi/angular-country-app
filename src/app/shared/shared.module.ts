import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AboutPagesComponent,
    ContactPageComponent,
    HomepageComponent,
    LoadingSpinnerComponent,
    SearchBoxComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AboutPagesComponent,
    ContactPageComponent,
    HomepageComponent,
    LoadingSpinnerComponent,
    SearchBoxComponent,
    SidebarComponent,

  ]
})
export class SharedModule { }
