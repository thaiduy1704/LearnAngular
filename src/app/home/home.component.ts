import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public myColor = "red "
  public counter = 0
  public counterbinhphuong = 0

  public name = 'Duy'
  public age  = 15
  public traiCay = ["tao ", "cam","viet quat","nho "]
  public traiCay2 = [{ten: "tao",gia:12, sales : true},
                    {ten : "cam ", gia : 3, sales : true },
                    {ten:"viet quat ",gia : 5,sales : false} ,
                    {ten:"nho ", gia : -5.23, sales : true}]

  public dataVietNam = [{city: "An Giang ", district: ["Thành phố Long Xuyên","Thành phố Châu Đốc","Thị xã Tân Châu","Huyện An Phú","Huyện Châu Phú","Huyện Châu Thành","Huyện Chợ Mới","Huyện Phú Tân","Huyện Thoại Sơn","Huyện Tịnh Biên","Huyện Tri Tôn"]},{city: "Bà Rịa - Vũng Tàu", district : ["Thành phố Vũng Tàu","Thị xã Bà Rịa","Thị xã Phú Mỹ","Huyện Châu Đức","Huyện Côn Đảo","Huyện Đất Đỏ","Huyện Long Điền","Huyện Tân Thành","Huyện Xuyên Mộc"]}]
  public districs : string[] = [];



  constructor(private common : CommonService) { }
  public resetName () : void {
    console.log("resetname");

  }
  public changeCity (event : any ) {
    const chooseCity = event.target.value
    console.log("event",chooseCity);
    const search = this.dataVietNam.filter(data => data.city  === chooseCity);
    console.log("search",search);
    if(search && search.length >0){
      this.districs = search[0].district;
    }
  }


  public ngOnInit(): void {
    this.counter = this.common.counter
    this.counterbinhphuong = this.common.binhPhuong(this.counter)
    this.common.counter++

  }

}
