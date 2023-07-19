import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';
import {NekretninaGetVM} from "../../../app.models";

@Component({
  selector: 'app-hot-offer-today',
  templateUrl: './hot-offer-today.component.html',
  styleUrls: ['./hot-offer-today.component.scss']
})
export class HotOfferTodayComponent implements OnInit {
  @Input('propertyId') propertyId;
  public property:NekretninaGetVM;
  constructor(public appService:AppService) { }

  ngOnInit() {
    this.appService.getPropertyById(15).subscribe(property=>{
      this.property = property;
    })
    console.log(this.property);
  }

}
