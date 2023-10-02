import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {
	@Input()
	packagePrice = ""
	@Input()
	titlePrice:string = ""
	@Input()
	gamePrice: string = ""
	@Input()
	gamePriceOf: string = ""
	@Input()
	gameCalcDiscount: string = ""

	constructor() {

   }

  ngOnInit(): void {
  }

}
