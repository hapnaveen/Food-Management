import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private db: AngularFireDatabase, 
    private fireservices:AngularFirestore,
    private storage: AngularFireStorage) { }

    getAll(){
      return this.db.list<any>('/categories').snapshotChanges();
    }
}
