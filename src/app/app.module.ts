import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { Home2Component } from './home2/home2.component';
import { Home1Component } from './home1/home1.component';
import { Home3Component } from './home3/home3.component';
import { Home4Component } from './home4/home4.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    Home2Component,
    Home1Component,
    Home3Component,
    Home4Component,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { 
        path: 'home1', 
        component: Home1Component 
      },
      { 
        path: 'home2', 
        component: Home2Component 
      },
      { 
        path: 'home3', 
        component: Home3Component 
      },
      { 
        path: 'home4', 
        component: Home4Component 
      },
      { 
        path: '', 
        component: Home1Component 
      }
    ])
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
