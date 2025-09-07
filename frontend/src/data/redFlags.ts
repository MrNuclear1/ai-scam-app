export interface RedFlag {
	id: string;
	title: string;
	description: string;
	category: 'communication' | 'financial' | 'urgency' | 'identity' | 'technology';
	severity: 'low' | 'medium' | 'high' | 'critical';
	examples: string[];
	prevention: string[];
	icon: string;
}

export const redFlags: RedFlag[] = [
	{
		id: 'urgent-action',
		title: 'Urgent Action Required',
		description: 'Scammers create false urgency to pressure victims into making quick decisions without thinking.',
		category: 'urgency',
		severity: 'high',
		examples: [
			'"Act now or lose this opportunity forever!"',
			'"Your account will be closed in 24 hours"',
			'"Limited time offer - only 3 spots left"',
			'"Police are on their way to arrest you"'
		],
		prevention: [
			'Take time to think and research',
			'Consult with trusted friends or family',
			'Verify claims through official channels',
			'Remember: legitimate offers can wait'
		],
		icon: '⏰'
	},
	{
		id: 'guaranteed-returns',
		title: 'Guaranteed High Returns',
		description: 'Promises of guaranteed profits with no risk are mathematically impossible in legitimate investments.',
		category: 'financial',
		severity: 'critical',
		examples: [
			'"Guaranteed 500% return in 30 days"',
			'"No risk, all profit investment"',
			'"Double your money in one week"',
			'"Risk-free cryptocurrency doubling"'
		],
		prevention: [
			'Remember: all investments carry risk',
			'Research investment opportunities thoroughly',
			'Consult licensed financial advisors',
			'If it sounds too good to be true, it is'
		],
		icon: '💰'
	},
	{
		id: 'upfront-payment',
		title: 'Upfront Payment Requests',
		description: 'Legitimate services and opportunities rarely require upfront payments from you.',
		category: 'financial',
		severity: 'high',
		examples: [
			'"Send $500 processing fee to claim your prize"',
			'"Pay $200 for background check before starting job"',
			'"Wire $1000 to verify your account"',
			'"Buy gift cards to pay tax on winnings"'
		],
		prevention: [
			'Legitimate employers pay you, not vice versa',
			'Real prizes don\'t require fees to claim',
			'Never pay upfront for promised services',
			'Be especially wary of gift card payments'
		],
		icon: '💳'
	},
	{
		id: 'poor-communication',
		title: 'Poor Grammar and Spelling',
		description: 'Many scams originate from non-native speakers, resulting in obvious language errors.',
		category: 'communication',
		severity: 'medium',
		examples: [
			'"You have win the lottery prize"',
			'"Kindly provide your bank details"',
			'"We need to varify your account"',
			'"Send the money via wire transfer immediately"'
		],
		prevention: [
			'Be suspicious of poor grammar in official communications',
			'Legitimate companies proofread their messages',
			'Look for consistent spelling and formatting',
			'Verify through official channels if unsure'
		],
		icon: '✍️'
	},
	{
		id: 'unsolicited-contact',
		title: 'Unsolicited Contact',
		description: 'Be wary of unexpected calls, emails, or messages offering deals or claiming problems.',
		category: 'communication',
		severity: 'medium',
		examples: [
			'Random calls about computer viruses',
			'Unexpected emails about winning contests',
			'Surprise text messages about account issues',
			'Social media messages from strangers with opportunities'
		],
		prevention: [
			'Don\'t engage with unsolicited offers',
			'Verify identity through official channels',
			'Let unknown calls go to voicemail',
			'Be skeptical of unexpected good news'
		],
		icon: '📞'
	},
	{
		id: 'personal-info-requests',
		title: 'Requests for Personal Information',
		description: 'Scammers need your personal information to steal your identity or access your accounts.',
		category: 'identity',
		severity: 'critical',
		examples: [
			'Asking for Social Security Numbers',
			'Requesting bank account details',
			'Wanting passwords or PINs',
			'Asking for copies of ID documents'
		],
		prevention: [
			'Never give personal info to unsolicited contacts',
			'Verify identity before sharing any information',
			'Use official websites to update account information',
			'When in doubt, hang up and call back'
		],
		icon: '🔒'
	},
	{
		id: 'wire-transfers',
		title: 'Wire Transfer Requests',
		description: 'Wire transfers are difficult to reverse, making them a favorite payment method for scammers.',
		category: 'financial',
		severity: 'high',
		examples: [
			'"Send money via Western Union"',
			'"Wire the fee to this account"',
			'"Use MoneyGram for faster processing"',
			'"Send Bitcoin to this wallet address"'
		],
		prevention: [
			'Avoid wire transfers to unknown parties',
			'Use reversible payment methods when possible',
			'Never send cryptocurrency to strangers',
			'Legitimate businesses offer multiple payment options'
		],
		icon: '🏦'
	},
	{
		id: 'celebrity-endorsement',
		title: 'Fake Celebrity Endorsements',
		description: 'Scammers often use fake celebrity endorsements to add credibility to their schemes.',
		category: 'identity',
		severity: 'medium',
		examples: [
			'"Elon Musk Bitcoin giveaway"',
			'"Bill Gates investment opportunity"',
			'"Oprah\'s secret weight loss method"',
			'"Celebrity chef\'s trading system"'
		],
		prevention: [
			'Verify endorsements on official celebrity accounts',
			'Be skeptical of celebrity financial advice',
			'Check major news outlets for verification',
			'Remember: celebrities rarely give away money'
		],
		icon: '⭐'
	}
];
