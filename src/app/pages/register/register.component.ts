import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  signupForm = this.formBuilder.group({
    fullname :['', [Validators.required]],
    email : ['', [Validators.required, Validators.email]],
    password : ['', [Validators.required, Validators.minLength(6)]],
    mobile : ['', [Validators.required]],
    confirmpassword:['', [Validators.required]]
   }, { validators: this.checkPassword })
   
  constructor (private formBuilder : FormBuilder,private http :HttpClient,private router :Router){}

 
 checkPassword(form: FormGroup) {
  const password = form.get('password')?.value;
  const confirmPassword = form.get('confirmpassword')?.value;
  if (password === confirmPassword) return null
  return { notMatch: true }
}
 signUp(){
  if(this.signupForm.valid){
    this.http.post<any>("http://localhost:3000/signupUser",this.signupForm.value)
    .subscribe(res =>{
      alert("Đăng ký thành công");
      this.signupForm.reset();
      this.router.navigateByUrl("user/login")
    },err =>{
      alert("Lỗi server")
    }
    )
  }
 
 }
 get user(){
  return this.signupForm.get('fullname');
 }
}
