import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverComponent } from './cover/cover.component';
import { AboutComponent } from './about/about.component';
import { CyberComponent } from './cyber/cyber.component';
import { HackComponent } from './hack/hack.component';
import { NetworkComponent } from './network/network.component';
import { SecurityComponent } from './security/security.component';
import { TestingComponent } from './testing/testing.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { MissionComponent } from './mission/mission.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [

{path:'',component:CoverComponent},
{path:'about',component:AboutComponent},
{path:'cyber',component:CyberComponent},
{path:'hack',component:HackComponent},
{path:'security',component:SecurityComponent},
{path:'network',component:NetworkComponent},
{path:'testing',component:TestingComponent},
{path:'certifications',component:CertificationsComponent},
{path:'mission',component:MissionComponent},
{path:'contact',component:ContactComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
