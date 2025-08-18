export interface Persona {
	title: string;
	description: string;
	difficulty: 'easy' | 'medium' | 'hard';
	category: string;
	tips: string[];
}

export type PersonaId = 'crypto_giveaway' | 'tech_support' | 'romance' | 'job_offer' | 'investment' | 'cra_scams';

export const personas: Record<PersonaId, Persona> = {
	crypto_giveaway: {
		title: "Crypto Giveaway Scam",
		description: "Practice identifying fake cryptocurrency giveaway schemes that promise to double your money.",
		difficulty: "easy",
		category: "Financial",
		tips: [
			"Real giveaways never ask you to send crypto first",
			"Celebrity endorsements are often fake",
			"Check official social media accounts for verification",
			"Be suspicious of urgent time limits"
		]
	},
	tech_support: {
		title: "Tech Support Scam",
		description: "Learn to recognize fake tech support calls claiming your computer is infected.",
		difficulty: "medium",
		category: "Technical",
		tips: [
			"Microsoft/Apple never call you about viruses",
			"Don't give remote access to strangers",
			"Legitimate companies don't demand immediate payment",
			"Hang up and call the company directly"
		]
	},
	romance: {
		title: "Romance Scam",
		description: "Understand how scammers exploit emotions to build fake relationships for money.",
		difficulty: "hard",
		category: "Social",
		tips: [
			"Never send money to someone you haven't met",
			"Be suspicious of emergency requests",
			"Verify identity through video calls",
			"Listen to friends and family concerns"
		]
	},
	job_offer: {
		title: "Fake Job Offer Scam",
		description: "Spot fraudulent job offers that ask for upfront fees or personal information.",
		difficulty: "medium",
		category: "Employment",
		tips: [
			"Legitimate jobs never require upfront payments",
			"Research the company independently",
			"Be wary of overly high salaries for simple work",
			"Don't provide SSN before official job offer"
		]
	},
	investment: {
		title: "Investment Scam",
		description: "Identify fake investment opportunities promising unrealistic returns.",
		difficulty: "hard",
		category: "Financial",
		tips: [
			"High returns always come with high risk",
			"Verify investment firm credentials",
			"Be skeptical of 'exclusive' opportunities",
			"Consult with licensed financial advisors"
		]
	},
	cra_scams: {
		title: "CRA Scam",
		description: "Recognize fake Canada Revenue Agency calls threatening arrest or deportation.",
		difficulty: "easy",
		category: "Government",
		tips: [
			"CRA doesn't demand immediate payment",
			"Government agencies don't accept gift cards",
			"You can't be arrested for owing taxes",
			"Verify by calling CRA directly"
		]
	}
};
