import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-ajouterunproduit',
  templateUrl: './ajouterunproduit.component.html',
  styleUrls: ['./ajouterunproduit.component.css']
})
export class AjouterunproduitComponent implements OnInit {

  ///////////////////// inject service /////////////////////////
  constructor(private produitservice : ProduitService) { }

  ngOnInit(): void {
  }
   

/////////////////: méthode save données ///////////////////
saveProduit(produit:any){

let data = produit.value
this.produitservice.saveProduit(data).subscribe(data=>{
  console.log("les données enregistrées.",data)
})

}

}
