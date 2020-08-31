import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { RecordsService} from './records.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    DataComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
        {
            path: 'data',   // localhost:4200/data
            component: DataComponent
        },
        {
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'admin',
            component: AdminComponent
        },
        {
            path: '',
            component: HomeComponent
        },
    ]),
  ], 
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
