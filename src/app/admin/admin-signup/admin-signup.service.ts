import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class AdminSignupService {

  constructor(private db: AngularFireDatabase, 
    private fireservices:AngularFirestore,
    private storage: AngularFireStorage) { }

    // createUser(record)
    // {
    //   return this.db.list('Admins').push(record);
    // }

    // getAll(){
    //   return this.db.list<any>('/products').snapshotChanges();
    // }

    get(token_new){
      return this.db.object(token_new);
    }
}
