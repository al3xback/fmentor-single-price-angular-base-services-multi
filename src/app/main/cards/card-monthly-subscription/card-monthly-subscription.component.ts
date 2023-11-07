import { Component, OnInit } from '@angular/core';

import { CardMonthlySubscription } from '../../../shared/card-monthly-subscription';
import { CardsService } from '../../../shared/cards.service';

@Component({
	selector: 'app-card-monthly-subscription',
	templateUrl: './card-monthly-subscription.component.html',
	styleUrls: ['./card-monthly-subscription.component.scss']
})
export class CardMonthlySubscriptionComponent implements OnInit {
	card: CardMonthlySubscription;

	constructor(private cardsService: CardsService) {}

	ngOnInit() {
		this.card = this.cardsService.getMonthlySubscriptionData();
	}
}
