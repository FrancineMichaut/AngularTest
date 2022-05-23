import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterunproduitComponent } from "./composants/ajouterunproduit/ajouterunproduit.component";
import { AccueilComponent } from './composants/accueil/accueil.component';
import { ProduitsComponent } from './composants/produits/produits.component';

const routes: Routes = [
  {path: '', component: AccueilComponent, },
  {path: 'produits', component: ProduitsComponent },
  {path : 'ajouterunproduit', component: AjouterunproduitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
