import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DevExtremeModule } from 'devextreme-angular';
import { DxDataGridModule, DxButtonModule } from 'devextreme-angular';
import { DxTagBoxModule, DxTemplateModule } from "devextreme-angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentbodyComponent } from './contentbody/contentbody.component';
import { HomeComponent } from './home/home.component';
import { AlertifyService } from './services/alertify.service';
import { MainComponent } from './main/main.component';
import { PatientsComponent } from './patients/patients.component';
import { PrlistComponent } from './prlist/prlist.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContentbodyComponent,
    HomeComponent,
    MainComponent,
    PatientsComponent,
    PrlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DevExtremeModule, 
    DxDataGridModule,
    DxButtonModule,
    DxTemplateModule,
    DxTagBoxModule
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
