export interface Lesson {
	id: string;
	title: string;
	description: string;
	difficulty: 'beginner' | 'intermediate' | 'advanced';
	duration: string;
	content: LessonContent;
	quiz?: QuizQuestion[];
}

export interface LessonContent {
	introduction: string;
	sections: LessonSection[];
	keyTakeaways: string[];
}

export interface LessonSection {
	title: string;
	content: string;
	type: 'text' | 'interactive' | 'video' | 'quiz';
	interactive?: InteractiveElement;
}

export interface InteractiveElement {
	type: 'drag-match' | 'mcq' | 'hotspot';
	data: any;
}

export interface QuizQuestion {
	id: string;
	question: string;
	options: string[];
	correctAnswer: number;
	explanation: string;
}

export const lessons: Lesson[] = [
	{
		id: 'crypto-basics',
		title: 'Cryptocurrency Scam Basics',
		description: 'Learn to identify common cryptocurrency scam tactics and red flags.',
		difficulty: 'beginner',
		duration: '15 mins',
		content: {
			introduction: 'Cryptocurrency scams are among the fastest-growing fraud types. Learn to protect yourself from these sophisticated schemes.',
			sections: [
				{
					title: 'Common Crypto Scam Types',
					content: 'Giveaway scams promise to double your crypto if you send them coins first. Investment scams guarantee unrealistic returns. Fake exchange platforms steal your deposits.',
					type: 'text'
				},
				{
					title: 'Red Flags to Watch For',
					content: 'Promises of guaranteed returns, urgent time limits, celebrity endorsements, and requests for upfront payments are major warning signs.',
					type: 'interactive',
					interactive: {
						type: 'drag-match',
						data: {
							items: [
								{ id: '1', text: 'Guaranteed 1000% returns', category: 'red-flag' },
								{ id: '2', text: 'Proper regulation disclosure', category: 'safe' },
								{ id: '3', text: 'Celebrity endorsement', category: 'red-flag' },
								{ id: '4', text: 'Transparent fee structure', category: 'safe' }
							],
							categories: [
								{ id: 'red-flag', name: 'Red Flags' },
								{ id: 'safe', name: 'Safe Practices' }
							]
						}
					}
				}
			],
			keyTakeaways: [
				'Never send crypto to get more crypto back',
				'Legitimate investments never guarantee returns',
				'Research any platform before depositing funds',
				'Be skeptical of celebrity endorsements'
			]
		},
		quiz: [
			{
				id: 'q1',
				question: 'What is a major red flag in crypto investments?',
				options: [
					'Transparent fee disclosure',
					'Guaranteed 500% returns in 30 days',
					'Proper regulatory compliance',
					'Professional customer support'
				],
				correctAnswer: 1,
				explanation: 'Guaranteed high returns are impossible and a clear sign of a scam. Legitimate investments always carry risk.'
			}
		]
	},
	{
		id: 'phishing-emails',
		title: 'Phishing Email Detection',
		description: 'Master the art of spotting phishing emails and protecting your information.',
		difficulty: 'beginner',
		duration: '12 mins',
		content: {
			introduction: 'Phishing emails are designed to steal your personal information. Learn to identify and avoid these deceptive messages.',
			sections: [
				{
					title: 'Anatomy of a Phishing Email',
					content: 'Phishing emails often contain urgent language, suspicious sender addresses, and links to fake websites that look legitimate.',
					type: 'text'
				},
				{
					title: 'Verification Techniques',
					content: 'Always verify sender identity, check URLs carefully, and contact organizations directly through official channels.',
					type: 'text'
				}
			],
			keyTakeaways: [
				'Check sender email addresses carefully',
				'Hover over links to see real destinations',
				'Never enter passwords from email links',
				'When in doubt, contact the organization directly'
			]
		}
	},
	{
		id: 'romance-scams',
		title: 'Romance Scam Awareness',
		description: 'Understand how romance scammers operate and protect yourself from emotional manipulation.',
		difficulty: 'intermediate',
		duration: '20 mins',
		content: {
			introduction: 'Romance scammers build fake relationships to exploit victims emotionally and financially. Learn their tactics.',
			sections: [
				{
					title: 'Common Romance Scam Tactics',
					content: 'Love bombing, fake profiles, avoiding video calls, and creating emergencies that require money are typical tactics.',
					type: 'text'
				},
				{
					title: 'Protecting Yourself',
					content: 'Never send money to someone you have not met in person. Verify identity through video calls. Be suspicious of emergency requests.',
					type: 'text'
				}
			],
			keyTakeaways: [
				'Never send money to online romantic interests',
				'Verify identity through video calls',
				'Be wary of emergency money requests',
				'Trust your instincts if something feels off'
			]
		}
	},
	{
		id: 'tech-support-scams',
		title: 'Tech Support Scam Detection',
		description: 'Learn to identify and avoid fake tech support scams targeting your devices.',
		difficulty: 'intermediate',
		duration: '18 mins',
		content: {
			introduction: 'Tech support scammers use fear tactics to convince you that your computer is infected or compromised.',
			sections: [
				{
					title: 'Common Tech Support Tactics',
					content: 'Cold calls claiming virus infections, pop-up warnings on websites, and fake Microsoft/Apple representatives are common tactics.',
					type: 'text'
				},
				{
					title: 'Red Flags and Protection',
					content: 'Legitimate companies never call about virus infections. Never give remote access to unsolicited callers. Always verify independently.',
					type: 'text'
				}
			],
			keyTakeaways: [
				'Microsoft/Apple never make unsolicited calls',
				'Never give remote access to strangers',
				'Pop-up warnings are often fake',
				'Hang up and contact companies directly'
			]
		}
	},
	{
		id: 'job-offer-scams',
		title: 'Fake Job Offer Protection',
		description: 'Recognize fraudulent job offers and protect yourself from employment scams.',
		difficulty: 'beginner',
		duration: '16 mins',
		content: {
			introduction: 'Job scammers prey on job seekers with offers that seem too good to be true.',
			sections: [
				{
					title: 'Warning Signs of Fake Jobs',
					content: 'High pay for minimal work, upfront fees, immediate hiring without interviews, and vague job descriptions are major red flags.',
					type: 'text'
				},
				{
					title: 'Safe Job Hunting Practices',
					content: 'Research companies thoroughly, never pay upfront fees, be wary of work-from-home schemes, and verify company legitimacy.',
					type: 'text'
				}
			],
			keyTakeaways: [
				'Legitimate jobs never require upfront payments',
				'Research companies independently',
				'Be suspicious of overly high salaries',
				'Never provide sensitive info before verification'
			]
		}
	},
	{
		id: 'investment-scams',
		title: 'Investment Fraud Awareness',
		description: 'Identify fake investment opportunities and Ponzi schemes.',
		difficulty: 'advanced',
		duration: '25 mins',
		content: {
			introduction: 'Investment scams promise unrealistic returns and use sophisticated tactics to appear legitimate.',
			sections: [
				{
					title: 'Types of Investment Fraud',
					content: 'Ponzi schemes, pump-and-dump stocks, fake cryptocurrency projects, and binary options scams are common investment frauds.',
					type: 'text'
				},
				{
					title: 'Due Diligence Best Practices',
					content: 'Verify investment firm credentials, understand the risks, check regulatory compliance, and consult licensed advisors.',
					type: 'text'
				}
			],
			keyTakeaways: [
				'High returns always mean high risk',
				'Verify investment firm credentials',
				'Be skeptical of exclusive opportunities',
				'Consult licensed financial advisors'
			]
		}
	},
	{
		id: 'government-scams',
		title: 'Government Impersonation Scams',
		description: 'Learn to identify fake government agency communications and threats.',
		difficulty: 'beginner',
		duration: '14 mins',
		content: {
			introduction: 'Scammers impersonate government agencies like CRA, IRS, and Social Security to create fear and urgency.',
			sections: [
				{
					title: 'Common Government Scam Tactics',
					content: 'Threats of arrest, deportation, or account suspension. Demands for immediate payment via gift cards or wire transfers.',
					type: 'text'
				},
				{
					title: 'How Government Agencies Really Communicate',
					content: 'Real agencies communicate by mail first, never demand immediate payment, and accept official payment methods only.',
					type: 'text'
				}
			],
			keyTakeaways: [
				'Government agencies mail official notices first',
				'No agency accepts gift cards as payment',
				'You cannot be arrested for owing taxes',
				'Always verify by calling official numbers'
			]
		}
	},
	{
		id: 'bank-phishing',
		title: 'Banking Security Alert Scams',
		description: 'Protect yourself from fake bank security alerts and account verification requests.',
		difficulty: 'intermediate',
		duration: '17 mins',
		content: {
			introduction: 'Bank phishing scams create panic about account security to steal your login credentials.',
			sections: [
				{
					title: 'Fake Security Alert Tactics',
					content: 'Urgent emails about suspicious activity, fake login pages, and requests for account verification are common tactics.',
					type: 'text'
				},
				{
					title: 'Banking Security Best Practices',
					content: 'Banks never ask for passwords via email. Always log in through official websites. Enable two-factor authentication.',
					type: 'text'
				}
			],
			keyTakeaways: [
				'Banks never ask for passwords via email',
				'Always use official bank websites/apps',
				'Check URLs carefully for fake sites',
				'Enable two-factor authentication'
			]
		}
	},
	{
		id: 'lottery-scams',
		title: 'Lottery and Prize Scam Detection',
		description: 'Recognize fake lottery winnings and prize notifications.',
		difficulty: 'beginner',
		duration: '13 mins',
		content: {
			introduction: 'Lottery scams claim you have won money or prizes, but require upfront fees to claim them.',
			sections: [
				{
					title: 'How Lottery Scams Work',
					content: 'Unexpected winning notifications, requests for processing fees, and urgent claim deadlines are typical elements.',
					type: 'text'
				},
				{
					title: 'Legitimate Lottery Rules',
					content: 'You cannot win a lottery you did not enter. Real lotteries never require upfront fees to claim prizes.',
					type: 'text'
				}
			],
			keyTakeaways: [
				'You cannot win contests you did not enter',
				'Real prizes never require upfront fees',
				'Be suspicious of urgent claim deadlines',
				'Verify with official lottery organizations'
			]
		}
	},
	{
		id: 'social-media-scams',
		title: 'Social Media Impersonation Scams',
		description: 'Identify fake celebrity and influencer accounts requesting money.',
		difficulty: 'intermediate',
		duration: '19 mins',
		content: {
			introduction: 'Scammers create fake celebrity accounts to build relationships and request money from fans.',
			sections: [
				{
					title: 'Celebrity Impersonation Tactics',
					content: 'Fake verified accounts, personal messages to fans, charity requests, and investment opportunities are common tactics.',
					type: 'text'
				},
				{
					title: 'Verification and Protection',
					content: 'Check for official verification badges, compare follower counts, and never send money to celebrities online.',
					type: 'text'
				}
			],
			keyTakeaways: [
				'Real celebrities do not randomly message fans',
				'Verify accounts through official channels',
				'Never send money to celebrity accounts',
				'Be suspicious of charity requests'
			]
		}
	}
];
