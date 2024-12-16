import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFactureComponent } from './factures/add-facture/add-facture.component';
import { ListFactureComponent } from './factures/list-facture/list-facture.component';
import { Factures2Component } from './factures2/factures2.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Page d'accueil
  { path: 'add-facture', component: AddFactureComponent },
  { path: 'factures', component: ListFactureComponent },
  { path: 'factures2', component: Factures2Component },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
