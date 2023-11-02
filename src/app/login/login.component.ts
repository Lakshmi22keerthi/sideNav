import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  loginForm!: FormGroup;
  loginfailed:boolean=false;
  


  constructor(private router:Router, private fb: FormBuilder){}

  ngOnInit(): void{
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
    });
  }

  onSubmit(){
   if(this.loginForm.valid){
     this.router.navigate(['/dashboard']);
   }
  else
   {
    this.loginfailed = true;
   }
   }
  }

  






