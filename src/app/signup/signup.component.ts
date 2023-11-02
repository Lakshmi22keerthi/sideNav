import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm!: FormGroup;
  passwordsMismatch:boolean= false;
  invalidMail:boolean=true;
 confirmPassword:boolean=false
  constructor(private fb:FormBuilder, private router:Router){}

  ngOnInit(): void{
    this.signupForm= this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      confirmPassword: ['', Validators.required],
    });
}
onSubmit(){
  if(this.signupForm.valid && this.signupForm.value.email.valid&& this.signupForm.value.password===this.signupForm.value.confirmPassword){
    

    this.router.navigate(['/login']);}

else{
  this.passwordsMismatch=true;
  this.invalidMail=false;
}
}
 
}

//could not add the logic for email ivalid