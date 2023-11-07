import { Component, OnInit } from '@angular/core';

import { CardJoinCommunity } from '../../../shared/card-join-community';
import { CardsService } from '../../../shared/cards.service';

@Component({
	selector: 'app-card-join-community',
	templateUrl: './card-join-community.component.html',
	styleUrls: ['./card-join-community.component.scss']
})
export class CardJoinCommunityComponent implements OnInit {
	card: CardJoinCommunity;

	constructor(private cardsService: CardsService) {}

	ngOnInit() {
		this.card = this.cardsService.getJoinCommunityData();
	}
}
