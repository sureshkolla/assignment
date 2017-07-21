import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,}   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeePage } from './employee/employee.component'; 
import { HeaderComponent }  from './header/header.component';
import { FooterComponent }  from './footer/footer.component';
import { HomeComponent }  from './home/home.component';
import { ContactComponent }  from './contactus/contact.component';
import { AboutComponent }  from './about/about.component';
import { GalleryComponent }  from './gallery/gallery.component';
import { ServiceComponent }  from './service/service.component';
import { EmployeeService } from './employee/employee.service';
import { MyColorDirective }  from './employee/employee.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EmployeePage,
    MyColorDirective,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ServiceComponent,
    ContactComponent,
    AboutComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    HttpModule,AppRoutingModule,RouterModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
