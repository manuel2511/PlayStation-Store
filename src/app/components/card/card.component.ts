import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
	@Input()
	cardImg: string = '';
	@Input()
	gameLabel:string = ""
	@Input()
	packagePrice = ""
	@Input()
	titlePrice:string = ""
	@Input()
	gamePrice:string = ""
	@Input()
	gamePriceOf:string = ""
	@Input()
	gameCalcDiscount: string = ""

	constructor() {}

	ngOnInit(): void {}
}
