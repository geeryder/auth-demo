import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Iitem{
  name:string;
  userID: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user;
  items: Observable<Iitem[]>
  itemCollection: AngularFirestoreCollection<Iitem>
  
  constructor(
    private auth: AuthService, private afs: AngularFirestore
  ) { 

    this.itemCollection = this.afs.collection<Iitem>('items', 
    ref => ref.where('userID', '==', this.auth.user.uid).orderBy('name', 'desc'));
    this.items =this.itemCollection.valueChanges();
  }
 
  logout(){
    this.auth.logout();
  }

  ngOnInit() {
  }

}
