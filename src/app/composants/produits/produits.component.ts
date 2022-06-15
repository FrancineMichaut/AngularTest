import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit {
  sliceDes:boolean = false;
  totlDes:number = -1; 

  byKeyWord: any;
  successUpdate: boolean = false;
  produitAmodifier = {
    title: '',
    description: '',
    image: '',
    price: '',
    categorie: '',
  };
  produits: any;

  categories = ['Retour', "peinture à l'huile", 'gouache', 'estampe'];

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.products();
  }

  products() {
    this.produitService.getproducts().subscribe((data) => {
      this.produits = data;
      console.log(this.produits);
    });
  }

  delete(id: any) {
    this.produitService.delete(id).subscribe(() => {
      console.log('product with id : ' + id + 'deleted');

      this.products(); ///apelle la méthode products pour que ça s'efface directement sur l'interface quand on clique sur delete//
    });
  }

  edit(p: any) {
    this.produitAmodifier = p;
  }

  savemodification() {
    this.produitService.update(this.produitAmodifier).subscribe(() => {
      console.log('product with id : update');
      this.successUpdate = true;

      this.products();
      console.log(this.produits);
    });
  }

  // *********************** méthode de recherche par mot clef***********************
  onKeyWord(form: any) {
    this.produitService
      .getbykeyword(form.findByKeyWordtata)
      .subscribe((donnees) => {
        this.produits = donnees;
      });
  }

  // *********************** méthode de recherche par prix***********************
  onPrice(formi: any) {
    this.produitService
      .getbyPrice(formi.min, formi.max)
      .subscribe((donnees2) => {
        this.produits = donnees2;
      });
  }

  // ********************** méthode de recherche par catégorie *******************

  onCategory(c: any) {
    if (c === 'Retour') {
      this.products();
    } else {
      this.produitService.getbyCategory(c).subscribe((donnees3) => {
        this.produits = donnees3;
      });
    }

    console.log('c est ; ', c);
  }
}
//  ********************* méthode de condition texte déroulant description****************

// totlDes:number = -1
// toggleDescription:boolean = false;

// ondesc(i:any){
//   this.toggleDescription = !this.toggleDescription
// console.log("tta", i);
// this.totlDes = i
// }

// onredesc(){
//   this.toggleDescription = !this.toggleDescription
//   }