import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  get user(){
    return this.afAuth.auth.currentUser;
  }
  
  get isLoggedIn():boolean{
    return (this.user) ?true:false;
  }
  
  register(email:string, password:string){
    return this.afAuth.auth
    .createUserWithEmailAndPassword(email, password);
  }

  login(email:string, password:string){
    return this.afAuth.auth
    .signInAndRetrieveDataWithEmailAndPassword(email, password);
  }

  logout(){
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['login']);
   })
   .catch((error)=>{
     console.error(error);
     throw error
   });
  }

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
    ) { }
}
