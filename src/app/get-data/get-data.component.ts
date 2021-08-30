import { HttpserverService } from './../HTTPSERVER/httpserver.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit {

  constructor(private HttpserverService: HttpserverService) { }

  ngOnInit(): void {
    this.HttpserverService.getComments().subscribe()((data: any) =>{
      console.log('data', data)
    })
  }

}
