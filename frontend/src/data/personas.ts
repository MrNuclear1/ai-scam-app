export interface Persona {
	title: string;
	description: string;
	difficulty: 'easy' | 'medium' | 'hard';
	category: string;
	tips: string[];
	lessonId?: string; // Link to corresponding lesson
}

export type PersonaId = 
	| 'crypto_giveaway' 
	| 'tech_support' 
	| 'romance' 
	| 'job_offer' 
	| 'investment' 
	| 'cra_scams'
	| 'phishing_bank'
	| 'lottery_winner'
	| 'social_media_impersonator';

export const personas: Record<PersonaId, Persona> = {
	crypto_giveaway: {
		title: "Crypto Giveaway Scam",
		description: "Practice identifying fake cryptocurrency giveaway schemes that promise to double your money.",
		difficulty: "easy",
		category: "Financial",
		lessonId: "crypto-basics",
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
		lessonId: "tech-support-scams",
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
		lessonId: "romance-scams",
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
		lessonId: "job-offer-scams",
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
		lessonId: "investment-scams",
		tips: [
			"High returns always come with high risk",
			"Verify investment firm credentials",
			"Be skeptical of 'exclusive' opportunities",
			"Consult with licensed financial advisors"
		]
	},
	cra_scams: {
		title: "Government Agency Scam",
		description: "Recognize fake Canada Revenue Agency calls threatening arrest or deportation.",
		difficulty: "easy",
		category: "Government",
		lessonId: "government-scams",
		tips: [
			"CRA doesn't demand immediate payment",
			"Government agencies don't accept gift cards",
			"You can't be arrested for owing taxes",
			"Verify by calling CRA directly"
		]
	},
	phishing_bank: {
		title: "Bank Phishing Scam",
		description: "Protect yourself from fake bank security alerts and account verification requests.",
		difficulty: "medium",
		category: "Financial",
		lessonId: "bank-phishing",
		tips: [
			"Banks never ask for passwords via email",
			"Always use official bank websites/apps",
			"Check URLs carefully for fake sites",
			"Enable two-factor authentication"
		]
	},
	lottery_winner: {
		title: "Lottery Winner Scam",
		description: "Recognize fake lottery winnings and prize notifications requiring upfront fees.",
		difficulty: "easy",
		category: "Prize",
		lessonId: "lottery-scams",
		tips: [
			"You cannot win contests you didn't enter",
			"Real prizes never require upfront fees",
			"Be suspicious of urgent claim deadlines",
			"Verify with official lottery organizations"
		]
	},
	social_media_impersonator: {
		title: "Social Media Impersonator",
		description: "Identify fake celebrity and influencer accounts requesting money or gifts.",
		difficulty: "medium",
		category: "Social Media",
		lessonId: "social-media-scams",
		tips: [
			"Real celebrities don't randomly message fans",
			"Verify accounts through official channels",
			"Never send money to celebrity accounts",
			"Be suspicious of charity requests"
		]
	}
};

// Helper function to get persona by lesson ID
export function getPersonaByLessonId(lessonId: string): PersonaId | null {
	const entry = Object.entries(personas).find(([_, persona]) => persona.lessonId === lessonId);
	return entry ? entry[0] as PersonaId : null;
}

// Helper function to get lesson-to-persona mapping
export function getLessonToPersonaMapping(): Record<string, PersonaId> {
	const mapping: Record<string, PersonaId> = {};
	Object.entries(personas).forEach(([personaId, persona]) => {
		if (persona.lessonId) {
			mapping[persona.lessonId] = personaId as PersonaId;
		}
	});
	return mapping;
}