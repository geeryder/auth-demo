import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string;

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }
  login(details: {email:string, password:string}){
    console.log(details.email, details.password);
    this.auth.login(details.email, details.password)
    .then(()=>{
      this.router.navigate(['/']);
      //redirect to home page
    })
    .catch((error: Error)=>{
      this.errorMessage = error.message;
    });

  }

  ngOnInit() {
  }

}
