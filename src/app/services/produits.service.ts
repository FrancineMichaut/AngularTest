import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http : HttpClient) { }

  getproducts (){
    return this.http.get("http://localhost:3000/produits");
  }
  saveProduit(produit:any){
    return this.http.post("http://localhost:3000/produits", produit);
  }
 delete(id:any){
   return this.http.delete("http://localhost:3000/produits/"+id);
 }

 update(produit:any){
   return this.http.put("http://localhost:3000/produits/"+produit.id, produit);
 }

//  *************  get product by key word ******************************
  getbykeyword(keyWord:any){
    return this.http.get("http://localhost:3000/produits?q="+keyWord);
  }


// *********************** méthode qui apelle la requête par prix*************************
  getbyPrice(min:any, max:any){
    return this.http.get(`http://localhost:3000/produits?price_gte=${min}&price_lte=${max}`);
  }

  // ******************** méthode qui apelle la requête par catégorie*******************
getbyCategory(c: any){
  return this.http.get("http://localhost:3000/produits?categorie="+c)
}

}






