import { Component, OnInit } from '@angular/core';

import { CardWhyUs } from '../../../shared/card-why-us';
import { CardsService } from '../../../shared/cards.service';

@Component({
	selector: 'app-card-why-us',
	templateUrl: './card-why-us.component.html',
	styleUrls: ['./card-why-us.component.scss']
})
export class CardWhyUsComponent implements OnInit {
	card: CardWhyUs;

	constructor(private cardsService: CardsService) {}

	ngOnInit() {
		this.card = this.cardsService.getWhyUsData();
	}
}
