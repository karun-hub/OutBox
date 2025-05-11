import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoverComponent } from './cover/cover.component';
import { AboutComponent } from './about/about.component';
import { CyberComponent } from './cyber/cyber.component';
import { HackComponent } from './hack/hack.component';
import { SecurityComponent } from './security/security.component';
import { TestingComponent } from './testing/testing.component';
import { NetworkComponent } from './network/network.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { MissionComponent } from './mission/mission.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    AboutComponent,
    CyberComponent,
    HackComponent,
    SecurityComponent,
    TestingComponent,
    NetworkComponent,
    CertificationsComponent,
    MissionComponent,
    ContactComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
