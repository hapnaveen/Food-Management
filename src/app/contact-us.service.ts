import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private db: AngularFireDatabase, 
    private fireservices:AngularFirestore,
    private storage: AngularFireStorage) { }
  
    createNewContactUs(record)
    {
      return this.db.list('Messages').push(record);
    }
    getAll(){
      return this.db.list<any>('/Messages').snapshotChanges();
    } 

  }
