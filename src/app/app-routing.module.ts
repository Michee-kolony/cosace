import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './client/accueil/accueil.component';
import { CosaceComponent } from './client/cosace/cosace.component';
import { AboutComponent } from './client/about/about.component';

const routes: Routes = [
  {path:'', redirectTo: 'cosace', pathMatch: 'full'},
  {path:'cosace', component: CosaceComponent, 
    children:[
      {path:'', redirectTo: 'accueil', pathMatch: 'full'},
      {path:'accueil', component: AccueilComponent},
      {path:'about', component: AboutComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
