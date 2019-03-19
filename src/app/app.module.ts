import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomesComponent } from './homes/homes.component';
import { RouterModule } from '@angular/router';
import { Home2Component } from './home2/home2.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomesComponent,
    Home2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { 
        path: 'home1', 
        component: HomesComponent 
      },
      { 
        path: 'home2', 
        component: Home2Component }
    ])
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
