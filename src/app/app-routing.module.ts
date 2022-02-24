import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForfaitYComponent } from './components/forfait-y/forfait-y.component'; 
import { ForfaitXComponent } from './components/forfait-x/forfait-x.component';
import { AboutComponent } from './components/about/about.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { TableForfaitsComponent } from './components/table-forfaits/table-forfaits.component';

const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'forfait-y', component: ForfaitYComponent},
  { path: 'forfait-x', component: ForfaitXComponent},
  { path: 'about', component: AboutComponent},
  { path: 'administration', component: TableForfaitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
