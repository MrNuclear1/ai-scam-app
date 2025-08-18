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
	}
];
