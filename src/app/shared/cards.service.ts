export class CardsService {
	private cards = {
		joinCommunity: {
			title: 'Join our community',
			subtitle: '30-day, hassle-free money back guarantee',
			desc: 'Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.'
		},
		monthlySubscription: {
			title: 'Monthly Subscription',
			desc: 'Full access for less than $1 a day',
			price: 29
		},
		whyUs: {
			title: 'Why Us',
			benefits: [
				'Tutorials by industry experts',
				'Peer &amp; expert code review',
				'Coding exercises',
				'Access to our GitHub repos',
				'Community forum',
				'Flashcard decks',
				'New videos every week'
			]
		}
	};

	getJoinCommunityData() {
		return this.cards.joinCommunity;
	}

	getMonthlySubscriptionData() {
		return this.cards.monthlySubscription;
	}

	getWhyUsData() {
		return this.cards.whyUs;
	}
}
