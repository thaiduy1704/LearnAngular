import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public userName = "admin"
  public counter = 0
  public counterbinhphuong = 0
  constructor(private common : CommonService ) { }

  ngOnInit(): void {
    this.counter = this.common.counter
    this.counterbinhphuong = this.common.binhPhuong(this.counter)
    this.common.counter++
  }

}
