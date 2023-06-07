import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit{
  public signupForm !: FormGroup;

  constructor (private formBuilder : FormBuilder,private http :HttpClient,private router :Router){}

 ngOnInit(): void {
   this.signupForm = this.formBuilder.group({
    fullname :new FormControl ('',[Validators.required]),
    email : [''],
    password : [''],
    mobile : [''],
   })
 }
 signUp(){
  this.http.post<any>("http://localhost:3000/signupUser",this.signupForm.value)
  .subscribe(res =>{
    alert("Đăng ký thành công");
    this.signupForm.reset();
    this.router.navigateByUrl("login")
  },err =>{
    alert("Lỗi server")
  }
  )
 }
 get user(){
  return this.signupForm.get('fullname');
 }
}
