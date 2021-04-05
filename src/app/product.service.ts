import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private db: AngularFireDatabase, 
    private fireservices:AngularFirestore,
    private storage: AngularFireStorage) { }

    createNewProduct(record)
    {
      return this.db.list('products').push(record);
    }


  // create(product){
  //   return this.db.list('/products').push(product);
  // }

   getAll(){
     return this.db.list<any>('/products').snapshotChanges();
   }

   getProduct(id:string){
     return this.db.database.ref('products').child(id).get();
   }

   get(productId) {
     return this.db.object('/products/'+productId);
   }

   update(productId, product){
     return this.db.object('/product/' + productId).update(product);
   }

}
