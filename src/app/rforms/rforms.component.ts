import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rforms',
  templateUrl: './rforms.component.html',
  styleUrl: './rforms.component.css'
})
export class RformsComponent implements OnInit {
    reactiveform:FormGroup |any;


    ngOnInit(): void {
      this.reactiveform = new FormGroup({
    user: new FormControl('',[Validators.required,Validators.pattern('[a-zA-z]+$')]),
      email:new FormControl('',[Validators.email,Validators.required]),

      password:new FormControl('',[Validators.required,Validators.minLength(8)])
      })
    }

    get user(){
      return this.reactiveform.get('user')
    }


    get password(){
      return this.reactiveform.get('password')
    }

    loginform(){
      console.log(this.reactiveform)
      console.log(this.reactiveform.value)
      console.log(this.reactiveform.value.user)
      console.log(this.reactiveform.value.email)
    }


}
 