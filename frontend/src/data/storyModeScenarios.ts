export interface StoryChoice {
	id: string;
	text: string;
	outcome: 'good' | 'bad' | 'neutral';
	nextMessageId?: string;
	points: number;
	feedback: string;
}

export interface StoryMessage {
	id: string;
	text: string;
	choices: StoryChoice[];
	isFinal?: boolean;
	winCondition?: boolean;
	loseCondition?: boolean;
	continueCondition?: boolean;
}

export interface StoryScenario {
	id: string;
	title: string;
	description: string;
	difficulty: 'easy' | 'medium' | 'hard';
	category: string;
	initialMessage: string;
	messages: Record<string, StoryMessage>;
	maxMessages: number;
	requiredScore: number;
	badges: {
		perfect: string;
		good: string;
		okay: string;
		poor: string;
	};
}

export const storyModeScenarios: Record<string, StoryScenario> = {
	crypto_doubler: {
		id: 'crypto_doubler',
		title: 'The Bitcoin Doubler',
		description: 'You receive a message about a limited-time Bitcoin doubling opportunity. Navigate this crypto scam scenario.',
		difficulty: 'easy',
		category: 'Cryptocurrency',
		initialMessage: 'A stranger on social media messages you about an amazing Bitcoin investment opportunity...',
		maxMessages: 5,
		requiredScore: 70,
		messages: {
			start: {
				id: 'start',
				text: "🚨 URGENT: Limited Bitcoin Doubling Event! 🚨\n\nHello! I'm reaching out because you've been selected for an exclusive Bitcoin doubling opportunity. Send any amount of Bitcoin to our secure wallet and we'll double it within 24 hours! This is a limited-time offer with only 100 spots available. Don't miss out on this life-changing opportunity!",
				choices: [
					{
						id: 'send_bitcoin',
						text: 'This sounds amazing! How do I send my Bitcoin?',
						outcome: 'bad',
						nextMessageId: 'scammer_excited',
						points: -30,
						feedback: 'Red flag! Legitimate investments never guarantee to double your money. This is a classic scam.'
					},
					{
						id: 'ask_proof',
						text: 'Can you provide proof this is legitimate?',
						outcome: 'neutral',
						nextMessageId: 'fake_proof',
						points: 10,
						feedback: 'Good thinking to ask for proof, but be aware scammers often provide fake documentation.'
					},
					{
						id: 'suspicious',
						text: 'This sounds like a scam. I\'m not interested.',
						outcome: 'good',
						nextMessageId: 'scammer_pressure',
						points: 40,
						feedback: 'Excellent! You correctly identified this as a scam. Guaranteed returns are impossible.'
					}
				]
			},
			scammer_excited: {
				id: 'scammer_excited',
				text: "Perfect! You're making the right choice! Just send your Bitcoin to this wallet address: 1ScammerWallet123... The minimum is 0.1 BTC to participate. Once we receive your payment, we'll process the doubling within 24 hours. Hurry, only 23 spots left!",
				choices: [
					{
						id: 'send_money',
						text: 'Okay, sending 0.1 BTC now!',
						outcome: 'bad',
						nextMessageId: 'money_lost',
						points: -50,
						feedback: 'You just lost your Bitcoin! Never send crypto to unknown parties promising returns.'
					},
					{
						id: 'second_thoughts',
						text: 'Wait, let me think about this first...',
						outcome: 'good',
						nextMessageId: 'pressure_tactics',
						points: 30,
						feedback: 'Smart! Taking time to think is always wise with investment decisions.'
					}
				]
			},
			fake_proof: {
				id: 'fake_proof',
				text: "Of course! Here's a screenshot of our recent successful transactions and a testimonial from John Smith who doubled his 2 BTC yesterday. We're also endorsed by several crypto influencers. This is 100% legitimate - we use advanced trading algorithms to guarantee profits!",
				choices: [
					{
						id: 'convinced',
						text: 'That proof looks good. I\'ll send my Bitcoin.',
						outcome: 'bad',
						nextMessageId: 'money_lost',
						points: -40,
						feedback: 'Screenshots and testimonials can be easily faked. Always verify through independent sources.'
					},
					{
						id: 'verify_independent',
						text: 'Let me verify this independently first.',
						outcome: 'good',
						nextMessageId: 'scammer_pressure',
						points: 35,
						feedback: 'Excellent approach! Independent verification would reveal this is fake.'
					}
				]
			},
			scammer_pressure: {
				id: 'scammer_pressure',
				text: "Wait! Don't make a mistake you'll regret forever. This opportunity expires in 2 hours and you'll miss out on doubling your money. Everyone else is getting rich while you hesitate. This is your last chance to join the Bitcoin elite!",
				choices: [
					{
						id: 'cave_to_pressure',
						text: 'You\'re right, I don\'t want to miss out!',
						outcome: 'bad',
						nextMessageId: 'money_lost',
						points: -35,
						feedback: 'Pressure tactics are a major red flag. Legitimate opportunities don\'t use FOMO tactics.'
					},
					{
						id: 'block_scammer',
						text: 'This is definitely a scam. I\'m blocking you.',
						outcome: 'good',
						nextMessageId: 'victory',
						points: 50,
						feedback: 'Perfect! You recognized the pressure tactics and took decisive action.'
					}
				]
			},
			pressure_tactics: {
				id: 'pressure_tactics',
				text: "Time is running out! Only 30 minutes left and 5 spots remaining. If you don't act NOW, you'll regret this forever. Everyone else is getting rich while you waste time thinking. Don't be the person who missed out on financial freedom!",
				choices: [
					{
						id: 'final_cave',
						text: 'Okay fine, I\'ll send the Bitcoin right now!',
						outcome: 'bad',
						nextMessageId: 'money_lost',
						points: -45,
						feedback: 'The pressure got to you. Remember: legitimate investments can wait for your decision.'
					},
					{
						id: 'final_resist',
						text: 'Nice try, but I\'m not falling for this scam.',
						outcome: 'good',
						nextMessageId: 'victory',
						points: 45,
						feedback: 'Excellent! You resisted the pressure tactics and saved your money.'
					}
				]
			},
			money_lost: {
				id: 'money_lost',
				text: "🎭 SCENARIO COMPLETE 🎭\n\nUnfortunately, you sent your Bitcoin to scammers. They've disappeared with your money and you'll never see those funds again. This is exactly how Bitcoin doubling scams work - they take your money and vanish.\n\nLessons learned:\n• Never send crypto for promised returns\n• Guaranteed profits don't exist\n• Pressure tactics are red flags\n• Always verify independently",
				choices: [],
				isFinal: true,
				loseCondition: true
			},
			victory: {
				id: 'victory',
				text: "🎉 SCENARIO COMPLETE 🎉\n\nCongratulations! You successfully identified and avoided this Bitcoin doubling scam. You protected your money by recognizing the red flags:\n\n✅ Impossible guaranteed returns\n✅ Pressure tactics and urgency\n✅ Unsolicited contact\n✅ Requests for upfront payment\n\nYou're now better prepared to spot similar cryptocurrency scams in the wild!",
				choices: [],
				isFinal: true,
				winCondition: true
			}
		},
		badges: {
			perfect: '🏆 Scam Detective',
			good: '🛡️ Well Protected',
			okay: '⚠️ Needs Practice',
			poor: '😵 Scammed'
		}
	},
	tech_support: {
		id: 'tech_support',
		title: 'The Fake Tech Support Call',
		description: 'You receive a call claiming your computer has been hacked. Handle this tech support scam scenario.',
		difficulty: 'medium',
		category: 'Tech Support',
		initialMessage: 'Your phone rings with a call from "Microsoft Support" claiming your computer is infected...',
		maxMessages: 4,
		requiredScore: 60,
		messages: {
			start: {
				id: 'start',
				text: "Hello, this is David from Microsoft Support. We've detected that your computer has been infected with malicious software and is sending spam emails. Your internet will be disconnected in 30 minutes unless we fix this immediately. Can you please turn on your computer so I can help you?",
				choices: [
					{
						id: 'comply',
						text: 'Oh no! Yes, let me turn on my computer right away.',
						outcome: 'bad',
						nextMessageId: 'remote_access',
						points: -25,
						feedback: 'Microsoft never makes unsolicited calls about computer problems. This is a scam.'
					},
					{
						id: 'question',
						text: 'How did you get my phone number?',
						outcome: 'neutral',
						nextMessageId: 'fake_explanation',
						points: 15,
						feedback: 'Good question! Scammers often can\'t explain how they got your information.'
					},
					{
						id: 'hang_up',
						text: 'Microsoft doesn\'t call people. This is a scam.',
						outcome: 'good',
						nextMessageId: 'victory',
						points: 50,
						feedback: 'Perfect! You correctly identified this as a scam and hung up immediately.'
					}
				]
			},
			remote_access: {
				id: 'remote_access',
				text: "Good! Now I need you to download TeamViewer so I can remotely access your computer to remove the virus. Please go to teamviewer.com and download the software. I'll guide you through the process. Time is running out!",
				choices: [
					{
						id: 'download',
						text: 'Downloading TeamViewer now...',
						outcome: 'bad',
						nextMessageId: 'computer_compromised',
						points: -40,
						feedback: 'Never give remote access to strangers! They can steal all your information.'
					},
					{
						id: 'refuse',
						text: 'I\'m not comfortable giving you remote access.',
						outcome: 'good',
						nextMessageId: 'scammer_angry',
						points: 35,
						feedback: 'Smart! Never allow remote access from unsolicited callers.'
					}
				]
			},
			fake_explanation: {
				id: 'fake_explanation',
				text: "Your phone number is registered with your Windows license. We monitor all computers and detected the infection on your machine with IP address 192.168.1.1. This is a serious security breach that needs immediate attention!",
				choices: [
					{
						id: 'believe',
						text: 'That makes sense. What do I need to do?',
						outcome: 'bad',
						nextMessageId: 'remote_access',
						points: -20,
						feedback: 'This explanation is fake. Microsoft doesn\'t monitor individual computers.'
					},
					{
						id: 'verify',
						text: 'Let me verify this by calling Microsoft directly.',
						outcome: 'good',
						nextMessageId: 'scammer_angry',
						points: 40,
						feedback: 'Excellent! Always verify by calling the company directly using official numbers.'
					}
				]
			},
			scammer_angry: {
				id: 'scammer_angry',
				text: "Sir, you don't understand the severity! Your computer will be permanently damaged and all your files deleted if you don't act now. I'm trying to help you but you're being very difficult. Do you want to lose all your important documents?",
				choices: [
					{
						id: 'scared_comply',
						text: 'I don\'t want to lose my files! What should I do?',
						outcome: 'bad',
						nextMessageId: 'computer_compromised',
						points: -30,
						feedback: 'Fear tactics are a major red flag. Don\'t let emotions override logic.'
					},
					{
						id: 'final_hang_up',
						text: 'This is clearly a scam. I\'m hanging up now.',
						outcome: 'good',
						nextMessageId: 'victory',
						points: 45,
						feedback: 'Perfect! You didn\'t fall for the fear tactics and ended the call.'
					}
				]
			},
			computer_compromised: {
				id: 'computer_compromised',
				text: "🎭 SCENARIO COMPLETE 🎭\n\nYou gave the scammer remote access to your computer. They now have access to all your files, passwords, and personal information. They may have installed malware or stolen your data.\n\nWhat really happened:\n• No virus was detected\n• Microsoft never makes these calls\n• Remote access was used to steal your information\n• You may need professional help to secure your computer",
				choices: [],
				isFinal: true,
				loseCondition: true
			},
			victory: {
				id: 'victory',
				text: "🎉 SCENARIO COMPLETE 🎉\n\nExcellent work! You successfully identified and avoided this tech support scam. You protected your computer and personal information by recognizing:\n\n✅ Unsolicited calls about computer problems\n✅ Pressure tactics and urgency\n✅ Requests for remote access\n✅ Fear-based manipulation\n\nRemember: Microsoft, Apple, and other tech companies never make unsolicited support calls!",
				choices: [],
				isFinal: true,
				winCondition: true
			}
		},
		badges: {
			perfect: '💻 Tech Savvy',
			good: '🔒 Secure User',
			okay: '⚠️ Vulnerable',
			poor: '🦠 Compromised'
		}
	}
};
