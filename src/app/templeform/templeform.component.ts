import { CommonService } from './../Services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templeform',
  templateUrl: './templeform.component.html',
  styleUrls: ['./templeform.component.scss']
})
export class TempleformComponent implements OnInit {
  public name =  ""

  constructor(private common :  CommonService) { }

  ngOnInit(): void {
  }
  public submitForm(): void{
    console.log("submit form name " + this.name)
    this.common.submitName(this.name)
  }

}
