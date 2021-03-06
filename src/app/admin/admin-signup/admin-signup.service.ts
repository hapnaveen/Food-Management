import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class AdminSignupService {

  public token : string;

  constructor(private db: AngularFireDatabase, 
    private fireservices:AngularFirestore,
    private storage: AngularFireStorage) { }

    // get(token_new){
    //   return this.db.object(token_new);
    // }

    submit(token_get){
      this.token = token_get;
    }
    
    getAll(){
      return this.db.list<any>('/Admins').snapshotChanges();
    }
}
