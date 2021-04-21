import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  constructor(private db: AngularFireDatabase, 
    private fireservices:AngularFirestore,
    private storage: AngularFireStorage) { }

  addToCart(record)
  {
    return this.db.list('Cart').push(record);
  }

  getAll(){
    return this.db.list<any>('/Cart').snapshotChanges();
  }
}
