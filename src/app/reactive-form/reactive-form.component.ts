import { CommonService } from './../Services/common.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private common : CommonService, private formBuild : FormBuilder) { }


  // public formData : FormGroup =new FormGroup({
  // userName: new FormControl(""),
  // age: new FormControl(""),
  // gender : new FormControl("")
  // });;
  ngOnInit(): void {
    // this.formData2 = new FormGroup({
    //     userName: new FormControl(""),
    //     age: new FormControl(""),
    //     gender : new FormControl("")
    // });
  }


  public formData2 = this.formBuild.group({
    name: ['',Validators.required],
    age: ['',Validators.required],
    gender : ['',Validators.required]

  })
  public onSubmit(): void {
    // console.log("submit form name " , this.formData.value)
    this.common.submitName(this.formData2.value)

  }
}


