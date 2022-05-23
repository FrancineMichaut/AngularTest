import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { BarrenavComponent } from './composants/barrenav/barrenav.component';

////////////////////////Forms module////////////////////////
import { FormsModule } from '@angular/forms';
import { AjouterunproduitComponent } from './composants/ajouterunproduit/ajouterunproduit.component';
import { ProduitsComponent } from './composants/produits/produits.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent, 
    AccueilComponent,
    BarrenavComponent,
    AjouterunproduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
