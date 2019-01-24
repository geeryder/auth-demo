import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorMessage: string;

  constructor(
    private router: Router,
    private auth: AuthService) { }
  register(details: {email:string, password:string}){
    console.log(details.email, details.password);
    this.auth.register(details.email, details.password)
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
