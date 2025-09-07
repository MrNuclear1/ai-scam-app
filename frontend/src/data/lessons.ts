export interface Lesson {
	id: string;
	title: string;
	description: string;
	difficulty: 'beginner' | 'intermediate' | 'advanced';
	duration: string;
	slides: LessonSlide[];
}

export interface LessonSlide {
	id: string;
	title: string;
	type: 'introduction' | 'red-flags' | 'tips' | 'summary' | 'interactive' | 'quiz';
	content: string;
	interactive?: InteractiveElement;
	quiz?: QuizQuestion[];
}

export interface InteractiveElement {
	type: 'drag-match' | 'mcq' | 'hotspot' | 'kahoot-style';
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
		duration: '10-12 mins',
		slides: [
			{
				id: 'introduction',
				title: 'Understanding Cryptocurrency Scams',
				type: 'introduction',
				content: `🚨 **Imagine this:** You're scrolling through TikTok, Twitter, or YouTube when you see a verified account claiming they'll double any crypto you send them. The page looks real, the comments seem positive, and the urgency makes you feel like you'll miss out if you don't act fast. This is a textbook crypto scam — one of the fastest-growing types of fraud worldwide.

📊 **The Reality:** In 2022, victims lost over $2.6 billion to cryptocurrency scams. Fraudsters use everything from fake giveaways to sophisticated investment schemes to trick both beginners and seasoned traders. Because crypto transactions are irreversible, once the money leaves your wallet, it's gone for good.

👥 **Who's at Risk?**

**Young people** are lured by the promise of quick profits, influencer endorsements, and social media hype.

**Older adults** can be targeted by "investment advisors" who use official-sounding language and professional websites.

**Everyone** is at risk when curiosity, urgency, or greed overrides skepticism.

**How Crypto Scams Work**

Scams often follow a predictable pattern: **The Hook → The Ask → The Vanish → The Multiply.**

**Impersonation 🎭**
Fraudsters pose as celebrities, influencers, or financial experts. They use fake profiles, logos, and "blue checkmarks" to seem legitimate.

**The Hook 🎣**
They promise guaranteed returns, exclusive investment opportunities, or "doubling" promotions.

**The Ask 💰**
They request payment upfront — usually in crypto — under the guise of a participation fee, verification step, or wallet funding.

**The Vanish 🕳️**
Once crypto is sent, the scammer disappears. Transactions are irreversible, so there's no way to get your money back.

**The Multiply 🔄**
Your wallet or email is flagged as a target, leading to more scam attempts in the future.

**Real-World Example**

In 2021, scammers impersonated Elon Musk on Twitter, claiming they'd return double any Bitcoin sent. Thousands of people fell for it, and millions of dollars were stolen. Despite takedowns, similar scams keep resurfacing because they prey on greed, urgency, and trust in public figures.`
			},
			{
				id: 'red-flags',
					title: 'Red Flags to Watch For',
				type: 'red-flags',
				content: `**Common Types of Crypto Scams**

**1. Giveaway Scams 🎁**

**Youth Scenario:** You see a celebrity post: "Send 0.1 BTC, get 0.2 BTC back!" Comments are filled with fake success stories.

**Why it works:** The social proof (fake testimonials) creates urgency and credibility.

**2. Fake Investment Platforms 💻**

Professional-looking websites promise 100%–500% returns.

Victims can often see "fake balances" grow on dashboards, but withdrawals are blocked.

**3. Phishing Scams 📧**

Fake emails or DMs trick you into clicking malicious links.

These links steal wallet keys, seed phrases, or login credentials.

**4. Romance or Friendship Scams 💔**

A scammer builds trust over weeks or months.

Eventually, they "recommend" a crypto investment, then disappear after you deposit funds.

**5. Pump-and-Dump Schemes 📈📉**

Groups promote obscure tokens to drive up the price.

Once people buy in, insiders dump their holdings, and the price collapses.

**Red Flags to Watch For**

🚩 Guaranteed or "risk-free" returns

🚩 Celebrity endorsements or fake influencer accounts

🚩 Requests for upfront crypto payments

🚩 Urgent time limits ("act now or miss out!")

🚩 Anonymous or unverifiable operators

🚩 Websites with poor grammar, stock images, or fake reviews

🚩 New accounts with very few followers but making big promises

**📋 Quick Red Flag Checklist:**

❌ Asking you to send crypto first
❌ Guaranteed high returns (>20% annually)
❌ Celebrity or influencer "endorsement"
❌ Urgent time pressure
❌ Asks for private keys or seed phrases
❌ "Investment opportunities" via social media DMs
❌ Requests for upfront fees or verification payments
❌ Anonymous teams or fake company information
❌ No clear explanation of how profits are generated
❌ Pressure to recruit friends and family`
			},
			{
				id: 'tips',
				title: 'Hot Tips for Staying Safe',
				type: 'tips',
				content: `**Hot Tips for Staying Safe**

✅ **Research before investing.** Look up the company, platform, or token on trusted sites.

✅ **Check regulation.** Legitimate platforms are registered with financial authorities.

✅ **Never share private keys or seed phrases.** No legitimate platform will ever ask for these.

✅ **Be skeptical of giveaways.** If it sounds too good to be true, it is.

✅ **Verify social accounts.** Even verified profiles can be faked — cross-check with official websites.

✅ **Use secure wallets.** Hardware wallets add an extra layer of safety.

✅ **Talk it out.** Before investing, discuss with a trusted friend or advisor. A second opinion can save thousands.

**🛡️ Essential Protection Strategies**

**1. The 72-Hour Rule**
Never make any cryptocurrency investment decision immediately. Wait 72 hours and research thoroughly. Scammers rely on impulse decisions - legitimate opportunities don't disappear overnight.

**2. Independent Verification Protocol**
• Look up the company/person through official channels (not links they provide)
• Check government regulatory databases (SEC, CFTC, FTC)
• Search "[company name] + scam" or "[person name] + fraud"
• Verify on multiple independent websites and forums

**3. Secure Your Crypto Knowledge**
• Only buy cryptocurrency through well-established exchanges (Coinbase, Kraken, Binance)
• NEVER share your private keys, seed phrases, or wallet passwords
• Use hardware wallets for large amounts
• Enable two-factor authentication on all accounts

**4. Social Media Safety**
• Be suspicious of any investment advice from social media
• Real celebrities and companies use official verified accounts
• Don't click crypto links from social media posts
• Report and block suspicious accounts immediately

**🚨 Emergency Action Plan**

**If You Think You've Been Scammed:**
1. **Stop all communication** with the scammer immediately
2. **Don't send any more money** (they may claim you need to pay "taxes" or "fees" to get your money back)
3. **Report to authorities:**
   - File complaint with FBI IC3 (ic3.gov)
   - Report to FTC (reportfraud.ftc.gov)
   - Contact your local police
4. **Document everything:** Screenshots, wallet addresses, communication records
5. **Warn others:** Share your experience to prevent others from falling victim`
			},
			{
				id: 'summary',
				title: 'Key Takeaways',
				type: 'summary',
				content: `**Key Takeaways**

• **Never send crypto expecting more in return.**

• **Legitimate investments don't guarantee returns.**

• **Research every platform before depositing funds.**

• **Stay skeptical of celebrity promotions and giveaways.**

• **Protect your wallet like you would your bank account.**

**📚 Essential Knowledge Summary**

**The #1 Rule:** Never send cryptocurrency to get more cryptocurrency back. This is ALWAYS a scam, no exceptions.

**How Crypto Scams Work:**
The Hook → The Ask → The Vanish → The Multiply
1. **Impersonation** - Scammers pose as celebrities, influencers, or financial experts
2. **The Hook** - Promise guaranteed returns, exclusive opportunities, or "doubling" investments  
3. **The Ask** - Request cryptocurrency first as "verification" or "participation fee"
4. **The Vanish** - Once you send crypto, scammer disappears forever (transactions are irreversible)
5. **The Multiply** - Your wallet is flagged as a target for future scams

**Major Red Flags (Any ONE of these = SCAM):**
• ❌ Guaranteed or "risk-free" returns
• ❌ Celebrity endorsements or fake influencer accounts
• ❌ Requests for upfront crypto payments
• ❌ Urgent time limits ("act now or miss out!")
• ❌ Anonymous or unverifiable operators
• ❌ Asks for private keys or seed phrases

**Protection Strategies:**
• ✅ Research before investing - look up companies on trusted sites
• ✅ Check regulation - legitimate platforms are registered with financial authorities
• ✅ Never share private keys or seed phrases
• ✅ Be skeptical of giveaways
• ✅ Verify social accounts through official websites
• ✅ Use secure wallets and hardware wallets for large amounts
• ✅ Talk it out with trusted friends or advisors before investing

**Remember:** The crypto space has legitimate opportunities, but it's also filled with scams. Education, patience, and skepticism are your best defenses. When in doubt, don't invest - there will always be other opportunities.`
			},
			{
				id: 'interactive',
				title: 'Scam Detection Challenge',
					type: 'interactive',
				content: `🎮 **Interactive Challenge: Spot the Crypto Scam**

Practice identifying cryptocurrency scams by categorizing these real-world scenarios. Drag each item to the correct category.`,
					interactive: {
						type: 'drag-match',
						data: {
							items: [
							{ id: '1', text: 'Elon Musk tweet: "Send 1 BTC, get 2 BTC back! Bitcoin anniversary event!"', category: 'scam' },
							{ id: '2', text: 'Coinbase email: "Your account requires identity verification before trading"', category: 'legitimate' },
							{ id: '3', text: 'Discord DM: "Exclusive crypto investment - 500% returns guaranteed in 30 days!"', category: 'scam' },
							{ id: '4', text: 'Kraken exchange: "New features available. 2FA required for enhanced security"', category: 'legitimate' },
							{ id: '5', text: 'YouTube ad: "Crypto millionaire secret revealed! Turn $100 into $10,000 overnight!"', category: 'scam' },
							{ id: '6', text: 'Investment advisor: "Bitcoin is risky. Only invest what you can afford to lose"', category: 'legitimate' }
							],
							categories: [
							{ id: 'scam', name: 'SCAM 🚩' },
							{ id: 'legitimate', name: 'LEGITIMATE ✅' }
						]
					}
				}
			},
			{
				id: 'quiz',
				title: 'Knowledge Check',
				type: 'quiz',
				content: `Test your understanding of cryptocurrency scam detection with these scenario-based questions.`,
		quiz: [
			{
				id: 'q1',
						question: 'You see a verified Twitter account claiming to be Elon Musk announcing a "Bitcoin doubling event" where you send 0.5 BTC and get 1 BTC back. What should you do?',
				options: [
							'Send a small amount first to test if it\'s real',
							'Check if the account is really verified before sending',
							'Ignore it completely - this is always a scam',
							'Wait to see if others get their money back first'
						],
						correctAnswer: 2,
						explanation: 'This is ALWAYS a scam, no exceptions. Real celebrities never ask followers to send cryptocurrency for giveaways. Even "verified" accounts can be compromised or fake.'
					},
					{
						id: 'q2',
						question: 'A professional-looking website offers guaranteed 300% returns on Bitcoin investments in 90 days with "zero risk." What is the BIGGEST red flag here?',
						options: [
							'The 90-day time frame is too short',
							'Bitcoin is too volatile for guarantees',
							'No legitimate investment can guarantee high returns',
							'300% is mathematically impossible'
						],
						correctAnswer: 2,
						explanation: 'The biggest red flag is the guarantee itself. ALL legitimate investments carry risk of loss - anyone promising guaranteed returns, especially high ones, is lying.'
					},
					{
						id: 'q3',
						question: 'What is the smartest approach when evaluating any cryptocurrency investment opportunity?',
				options: [
							'Act quickly before the opportunity disappears',
							'Wait 72 hours and research thoroughly',
							'Start with a small investment to test it',
							'Ask the company to prove their legitimacy'
				],
				correctAnswer: 1,
						explanation: 'The 72-hour rule protects you from impulse decisions. Legitimate opportunities don\'t disappear overnight, but scammers create false urgency.'
					}
				]
			}
		]
	},
	{
		id: 'phishing-emails',
		title: 'Phishing Email Detection',
		description: 'Master the art of spotting phishing emails and protecting your information.',
		difficulty: 'beginner',
		duration: '10-12 mins',
		slides: [
			{
				id: 'introduction',
				title: 'Understanding Phishing Email Attacks',
				type: 'introduction',
				content: `📧 **Imagine this:** You open your inbox and see a message from what looks like PayPal:
"Your account has been suspended due to suspicious activity. Click here to verify your details immediately."

The logo looks real, the email feels urgent, and without thinking you click the link. Suddenly, you've handed scammers your login credentials.

📊 **The Reality:** Phishing is the #1 type of cybercrime worldwide. In 2023, over 4.7 million phishing attacks were reported, costing victims billions. Scammers disguise themselves as trusted institutions — banks, delivery companies, government agencies — and trick you into giving up sensitive information.

👥 **Who's at Risk?**

**Employees at companies** (phishing is a top cause of corporate breaches).

**Seniors and students** who may not spot subtle email tricks.

**Anyone** who opens email on the go, where urgency overrides skepticism.

**How Phishing Emails Work**

Phishing attacks often follow this structure: **The Bait → The Hook → The Capture → The Exploit.**

**The Bait 🎣**
The email looks like it's from a trusted sender — a bank, PayPal, Amazon, CRA, or even your workplace IT department.

**The Hook ⚠️**
The message creates urgency:
• "Your account will be suspended in 24 hours."
• "You've received a refund — claim now."
• "Password reset required immediately."

**The Capture 🔑**
Victim clicks a link or downloads an attachment, then enters credentials on a fake site or unknowingly installs malware.

**The Exploit 💻**
Scammers steal login details, bank info, or infect devices, often leading to identity theft or corporate breaches.

**Real-World Example**

In 2020, hackers used a phishing email that looked like a Microsoft Office 365 login page to steal over 1 million corporate credentials worldwide. Employees at major companies fell for it because the emails were timed during the COVID remote work shift — exploiting fear and urgency around digital security.

**Critical Truth:** Legitimate companies will NEVER ask you to verify sensitive information via email links. When in doubt, always contact them directly using official phone numbers or websites.`
			},
			{
				id: 'red-flags',
				title: 'Red Flags to Watch For',
				type: 'red-flags',
				content: `**Common Phishing Email Types**

**1. Credential Theft Emails 🔐**

Pretend to be from your bank, email provider, or social media site.

Link leads to a fake login page.

**2. Delivery Scam Emails 📦**

Claim to be from UPS, FedEx, or Canada Post.

Say there's a package pending with a link to "confirm details."

**3. Invoice or Payment Requests 💳**

Look like unpaid bills or fake invoices.

Trick businesses into wiring money to scammers.

**4. Workplace Spear Phishing 🎯**

Targeted emails impersonate your boss or HR.

Example: "Please send me the W-2 forms ASAP."

**5. Malware Attachments 📎**

Attachments disguised as "reports" or "statements."

Open them, and ransomware installs silently.

**Red Flags to Watch For**

🚩 Generic greetings like "Dear Customer" instead of your name

🚩 Urgent or threatening language ("Act immediately or account will be closed")

🚩 Misspelled domains (e.g., amaz0n-support.com)

🚩 Poor spelling, grammar, or formatting

🚩 Suspicious attachments (.exe, .zip, .scr)

🚩 Hover link mismatch (text says one thing, actual link points elsewhere)

🚩 Requests for sensitive information (passwords, SIN, banking details)

🚩 "Too good to be true" offers or unexpected refunds

**📋 Quick Email Safety Checklist:**

Before clicking ANY link or downloading ANY attachment:

❌ Does it create urgency or fear?
❌ Are they asking for sensitive information?
❌ Does the sender email look suspicious?
❌ Are there spelling/grammar errors?
❌ Do the links look legitimate when you hover over them?
❌ Did you expect this email?
❌ Are they offering something too good to be true?
❌ Generic greetings instead of your name?

If you answer YES to any of these, it's likely a phishing attempt.`
			},
			{
				id: 'tips',
				title: 'Hot Tips to Stay Safe',
				type: 'tips',
				content: `**Hot Tips to Stay Safe**

✅ **Pause before you click.** Urgency is the scammer's best weapon.

✅ **Hover over links.** Check if the real destination matches the text.

✅ **Check the sender's address.** Official companies don't use Gmail or random domains.

✅ **Look for personalization.** Real companies use your name/account details.

✅ **Don't download attachments unless you're sure.** Even PDFs can be dangerous.

✅ **Use multi-factor authentication (MFA).** Even if credentials are stolen, MFA can block access.

✅ **Report phishing.** Most email providers have a "Report Phishing" button.

**🛡️ Essential Email Protection Strategies**

**1. The Independent Verification Rule**
Never use contact information from a suspicious email. Instead:
• Look up the company's official website independently
• Call using phone numbers from official sources
• Log into your account directly (not through email links)
• Check with the organization through their official social media

**2. Hover Before You Click**
• Hover your mouse over any link to see the real destination
• Look for misspelled domain names (amazom.com vs amazon.com)
• Be suspicious of shortened URLs in official communications
• When in doubt, don't click - go to the website directly

**3. Email Account Security**
• Enable two-factor authentication on your email
• Use a strong, unique password for your email account
• Keep your email app and security software updated
• Be cautious about which devices you check email on

**4. Advanced Verification Techniques**
• Check email headers for suspicious routing
• Look for official company signatures and contact information
• Verify that promotional emails match the company's usual style
• Be extra cautious with unexpected emails about money or accounts

🚨 **If You've Been Phished:**

**Immediate Actions:**
1. **Change your passwords** immediately on all affected accounts
2. **Contact your bank** if financial information was compromised
3. **Run antivirus scans** if you downloaded anything
4. **Monitor your accounts** for suspicious activity
5. **Report the phishing** to the FTC and the impersonated company
6. **Warn your contacts** in case the scammer targets them next

**Prevention is Key:** It's much easier to avoid phishing than to recover from it.`
			},
			{
				id: 'summary',
				title: 'Key Takeaways',
				type: 'summary',
				content: `**Key Takeaways**

• **Phishing is the #1 cybercrime worldwide.**

• **Urgency and fear are always red flags.**

• **Always check sender, links, and grammar.**

• **Never give credentials through email links.**

• **Report phishing attempts to help protect others.**

**📚 Essential Email Security Knowledge**

**Legitimate Email vs. Phishing Email**

| Legitimate Email ✅ | Phishing Email 🚩 |
|-------------------|------------------|
| Address matches official domain | Uses misspelled/fake domains |
| Personal greeting by name | "Dear Customer" or no greeting |
| No urgent threats | Threatens suspension, fines, or police |
| Links match the company site | Links redirect to shady sites |
| Professional grammar and design | Typos, odd spacing, fake logos |

**How Phishing Emails Work:**
The Bait → The Hook → The Capture → The Exploit

1. **Bait** - Email looks like it's from a trusted sender (bank, PayPal, Amazon, CRA)
2. **Hook** - Creates urgency with threats or time pressure
3. **Capture** - Victim clicks link and enters credentials on fake site
4. **Exploit** - Scammers steal login details, bank info, or install malware

**Major Red Flags (Any ONE of these = Suspicious):**
• ❌ Generic greetings like "Dear Customer"
• ❌ Urgent or threatening language
• ❌ Misspelled domains (amaz0n-support.com)
• ❌ Poor spelling, grammar, or formatting
• ❌ Suspicious attachments (.exe, .zip, .scr)
• ❌ Hover link mismatch
• ❌ Requests for sensitive information
• ❌ "Too good to be true" offers

**Protection Strategies:**
• ✅ Pause before you click - urgency is the scammer's weapon
• ✅ Hover over links to check real destination
• ✅ Check sender address for official domains
• ✅ Look for personalization in legitimate emails
• ✅ Use multi-factor authentication (MFA)
• ✅ Report phishing to help protect others

**Remember:** Phishers are getting more sophisticated, but informed users are still the best defense. Your skepticism and verification habits are your strongest protection against email fraud.`
			},
			{
				id: 'interactive',
				title: 'Phishing Email Challenge',
				type: 'interactive',
				content: `🎮 **Interactive Challenge: Spot the Phishing Email**

Practice identifying phishing emails by categorizing these real-world email scenarios. Drag each item to the correct category.`,
				interactive: {
					type: 'drag-match',
					data: {
						items: [
							{ id: '1', text: 'Email from "AmazonSecurity@outlook.com"', category: 'red-flags' },
							{ id: '2', text: 'Link text: "paypal.com" but hover shows pay-pal.verify-login.cn', category: 'red-flags' },
							{ id: '3', text: '"Your CRA refund expires in 24 hours — click here"', category: 'red-flags' },
							{ id: '4', text: 'Checking the sender domain before clicking', category: 'safe-practices' },
							{ id: '5', text: 'Verifying suspicious emails by calling the company directly', category: 'safe-practices' },
							{ id: '6', text: 'Reporting phishing emails to your IT/security team', category: 'safe-practices' }
						],
						categories: [
							{ id: 'red-flags', name: 'Red Flags 🚩' },
							{ id: 'safe-practices', name: 'Safe Practices ✅' }
						]
					}
				}
			},
			{
				id: 'quiz',
				title: 'Knowledge Check',
				type: 'quiz',
				content: `Test your understanding of phishing email detection with these scenario-based questions.`,
				quiz: [
					{
						id: 'q1',
						question: 'You receive an email from "security@paypal.com" saying your account has suspicious activity and you need to click a link to verify your identity. What should you do first?',
						options: [
							'Click the link immediately to secure your account',
							'Check if the email address is really from PayPal',
							'Go directly to PayPal\'s website and log in normally',
							'Reply to the email asking for more information'
						],
						correctAnswer: 2,
						explanation: 'Never click links in suspicious emails. Instead, go directly to the official website and log in normally to check your account status. Real security issues will be visible in your account dashboard.'
					},
					{
						id: 'q2',
						question: 'An email claims to be from your bank asking for your password to "update their security system." What is the BIGGEST red flag?',
						options: [
							'Banks usually call instead of emailing',
							'The email has poor grammar',
							'Banks never ask for passwords via email',
							'The timing seems suspicious'
						],
						correctAnswer: 2,
						explanation: 'Legitimate financial institutions NEVER ask for passwords, PINs, or sensitive information via email. This is always a scam, regardless of how official the email looks.'
					},
					{
						id: 'q3',
						question: 'What is the safest way to verify a suspicious email claiming to be from your credit card company?',
						options: [
							'Reply to the email asking if it\'s legitimate',
							'Click the link but don\'t enter any information',
							'Call the number provided in the email',
							'Call the official number on your credit card statement'
						],
						correctAnswer: 3,
						explanation: 'Always use contact information from official sources (your statements, cards, official website) rather than information provided in suspicious emails. Scammers often include fake phone numbers in phishing emails.'
					}
				]
			}
		]
	},

	{
		id: 'tech-support-scams',
		title: 'Tech Support Scam Basics',
		description: 'Learn to identify and avoid fake tech support scams targeting your devices.',
		difficulty: 'intermediate',
		duration: '10-12 mins',
		slides: [
			{
				id: 'introduction',
				title: 'Understanding Tech Support Scams',
				type: 'introduction',
				content: `💻 **Imagine this:** You're browsing online when suddenly a pop-up appears:
"Warning! Your computer is infected with a dangerous virus. Do not close this window. Call Microsoft Support immediately at 1-888-XXX-XXXX."

The screen may flash red, sound alarms, or even lock your browser. You panic, dial the number, and a calm voice says, "We can fix this — but first you need to give us remote access to your computer."

Sound familiar? This is a classic tech support scam, one of the most persistent forms of fraud worldwide.

📊 **The Reality:** Canadians and Americans lose hundreds of millions of dollars every year to fake tech support. Scammers often pose as employees of Microsoft, Apple, or antivirus companies. Once they gain access, they install malware, steal personal data, or demand payment for fake services.

👥 **Who's at Risk?**

**Seniors** who may be less familiar with modern tech tricks.

**Parents** who fear losing family photos or important files.

**Anyone** who reacts quickly to a sudden, alarming message without verifying.

**How Tech Support Scams Work**

Scams often follow the **Fear → Trust → Access → Payment** model:

**Fear 😨**
Victim is shown a scary message: fake virus alert, flashing pop-up, or a call claiming "your computer is compromised."

**Trust 🤝**
Scammer impersonates a trusted brand (Microsoft, Apple, Norton, McAfee). They use technical jargon to sound credible: "Your firewall is disabled," "Your IP address is compromised."

**Access 🖥️**
Victim is tricked into:
• Downloading remote access tools (TeamViewer, AnyDesk, LogMeIn)
• Granting permission for the scammer to "fix" the problem

**Payment 💳**
Victim is pressured into:
• Paying for fake security software or warranties
• Subscribing to useless "support plans"
• Handing over banking or credit card information

**Aftermath 🔒**
Even after payment, scammers may install backdoors or malware to extort victims again later.

**Real-World Example**

In 2018, the U.S. Department of Justice shut down a massive India-based call centre operation that scammed Americans out of over $100 million. Operators posed as Microsoft employees, tricking victims into granting access and paying for fake security software. Despite such busts, similar scams keep surfacing because they are cheap, scalable, and prey on fear.`
			},
			{
				id: 'red-flags',
				title: 'Red Flags to Watch For',
				type: 'red-flags',
				content: `**Common Tech Support Scam Variations**

**1. Pop-up Scareware Ads ⚠️**

Fake virus warnings appear when visiting compromised websites.

Messages block the screen with loud alarms urging you to "call support immediately."

**2. Cold Calls 📞**

You receive an unsolicited call claiming to be "Microsoft Technical Support."

Scammer says your computer is sending "error messages" or "hacking others."

**3. Phishing Emails 📧**

Fake emails warn of "subscription renewals" for antivirus software.

Victims are told to call or click to "cancel" charges.

**4. Refund Scams 💸**

Scammer pretends to refund money for "overcharged" support plans.

Tricks victim into giving remote access to their bank account, then manipulates the screen to show fake deposits.

Victim is told they must "return" the excess money — by gift cards or wire transfer.

**Red Flags to Watch For**

🚩 Pop-ups that can't be closed, demanding you call a number

🚩 Callers claiming to be Microsoft, Apple, or "Windows Support" (these companies never call out of the blue)

🚩 Requests to install remote access software

🚩 Demands for immediate payment to "fix" an urgent issue

🚩 High-pressure tactics: "Your data will be deleted in 30 minutes unless you act now"

🚩 Spelling errors, poor grammar, or fake company logos

🚩 Claims that your IP address is "hacked" or "infecting the internet"

**📋 Quick Tech Scam Checklist:**

❌ Unsolicited calls claiming to be Microsoft/Apple support
❌ Pop-ups with phone numbers demanding immediate action
❌ Requests to download TeamViewer, AnyDesk, or remote software
❌ Demands for payment via gift cards or wire transfers
❌ Claims your computer is "hacking others" or "sending errors"
❌ High-pressure tactics with artificial deadlines
❌ Requests for credit card info over the phone
❌ Claims about your "IP address being compromised"

If you encounter ANY of these red flags, it's a scam.`
			},
			{
				id: 'tips',
				title: 'Hot Tips to Stay Safe',
				type: 'tips',
				content: `**Hot Tips to Stay Safe**

✅ **Close the pop-up.** Use Task Manager (Ctrl+Alt+Delete) or Force Quit on Mac if necessary.

✅ **Don't call numbers on your screen.** Microsoft, Apple, and legitimate firms never put phone numbers in error messages.

✅ **Hang up on cold calls.** Legitimate tech companies don't call to report viruses.

✅ **Never give remote access unless you initiated the service request** with a trusted provider.

✅ **Use antivirus and keep software updated.** Real security tools prevent malware, not random pop-ups.

✅ **Verify through official channels.** If in doubt, contact the company directly using its website.

✅ **Educate family and friends.** Especially seniors — sharing awareness is the best defense.

**Remember:** Legitimate tech support is patient, professional, and never creates artificial urgency.`
			},
			{
				id: 'summary',
				title: 'Key Takeaways',
				type: 'summary',
				content: `**Key Takeaways**

• **Microsoft, Apple, and legitimate companies never call you first about security issues.**

• **Pop-ups demanding a call are always fake.**

• **Never pay in gift cards, wire transfers, or crypto for tech support.**

• **Remote access is for trusted IT professionals only — not strangers.**

• **Awareness and skepticism are your best protection.**

**Legitimate Tech Support vs. Scam**

| Legitimate Support ✅ | Scam Support 🚩 |
|----------------------|-----------------|
| You contact them first (via official channels) | They contact you unsolicited |
| Uses official domain emails & websites | Uses Gmail, Yahoo, or misspelled URLs |
| Offers patient troubleshooting | Uses high-pressure scare tactics |
| Accepts payment only through secure portals | Demands gift cards, wire transfers, or crypto |
| Solves issues without demanding remote access | Pushes you to install remote control software |

**Remember:** Real tech companies don't use scare tactics or demand immediate action. When in doubt, hang up and contact the company directly through official channels.`
			},
			{
				id: 'interactive',
				title: 'Tech Scam Challenge Game',
				type: 'interactive',
				content: `🎮 **Scam or Safe? - Kahoot Style Challenge**

Test your knowledge! For each scenario, click whether it's a RED FLAG (scam) or SAFE PRACTICE. Try to get all 6 correct!`,
				interactive: {
					type: 'kahoot-style',
					data: {
						gameTitle: "Tech Support: Scam or Safe?",
						scenarios: [
							{
								id: 'scenario1',
								question: "A pop-up appears saying 'VIRUS DETECTED! Call 1-800-HELP-NOW immediately!' What should you do?",
								options: [
									{ text: "Call the number to get help", color: "red", correct: false },
									{ text: "Close the pop-up with Task Manager", color: "green", correct: true }
								],
								explanation: "Never call numbers from pop-ups! Close them with Task Manager and run your real antivirus software.",
								category: "Red Flag"
							},
							{
								id: 'scenario2', 
								question: "You get a call: 'This is Microsoft. Your computer is sending error messages to our servers.' What's your response?",
								options: [
									{ text: "Hang up immediately", color: "green", correct: true },
									{ text: "Listen to what they have to say", color: "red", correct: false }
								],
								explanation: "Microsoft NEVER calls customers about computer issues. This is always a scam - hang up!",
								category: "Red Flag"
							},
							{
								id: 'scenario3',
								question: "Your computer is running slow. You decide to contact Apple Support through their official website. Is this safe?",
								options: [
									{ text: "Yes, contacting through official channels is safe", color: "green", correct: true },
									{ text: "No, never contact tech support", color: "red", correct: false }
								],
								explanation: "Contacting companies through their official websites and phone numbers is the safe way to get help.",
								category: "Safe Practice"
							},
							{
								id: 'scenario4',
								question: "A 'tech support agent' asks you to download TeamViewer to fix your computer. What do you do?",
								options: [
									{ text: "Download it so they can help", color: "red", correct: false },
									{ text: "Refuse and hang up", color: "green", correct: true }
								],
								explanation: "Never give remote access to unsolicited callers! TeamViewer requests from strangers are always scams.",
								category: "Red Flag"
							},
							{
								id: 'scenario5',
								question: "You keep your antivirus software updated and run regular scans. Is this good practice?",
								options: [
									{ text: "Yes, this helps protect against real threats", color: "green", correct: true },
									{ text: "No, antivirus software is unnecessary", color: "red", correct: false }
								],
								explanation: "Keeping legitimate antivirus software updated is excellent protection against real malware.",
								category: "Safe Practice"
							},
							{
								id: 'scenario6',
								question: "A caller says your 'Windows license has expired' and demands payment with iTunes gift cards. Your move?",
								options: [
									{ text: "Buy gift cards to renew the license", color: "red", correct: false },
									{ text: "Recognize this as a scam and hang up", color: "green", correct: true }
								],
								explanation: "Windows licenses don't 'expire' like this, and no legitimate company accepts gift cards as payment!",
								category: "Red Flag"
							}
						]
					}
				}
			},
			{
				id: 'quiz',
				title: 'Knowledge Check',
				type: 'quiz',
				content: `Test your understanding of tech support scam detection with these scenario-based questions.`,
				quiz: [
					{
						id: 'q1',
						question: 'A pop-up appears claiming your computer has 5 viruses and you must call a number immediately. What should you do first?',
						options: [
							'Call the number to get help fixing the viruses',
							'Close the pop-up using Task Manager or Force Quit',
							'Click "OK" to see more details about the viruses',
							'Share the pop-up with friends to see if they got it too'
						],
						correctAnswer: 1,
						explanation: 'Pop-ups with phone numbers are always fake. Close them with Task Manager (Ctrl+Alt+Delete on Windows) or Force Quit (Cmd+Option+Esc on Mac). Real antivirus software doesn\'t display pop-ups with phone numbers.'
					},
					{
						id: 'q2',
						question: 'You receive an unsolicited call from someone claiming to be "Microsoft Technical Support" saying your computer is infected. What\'s the biggest red flag?',
						options: [
							'They called you instead of sending an email',
							'Microsoft never makes unsolicited calls to customers',
							'They didn\'t ask for your Microsoft account password',
							'The call came during business hours'
						],
						correctAnswer: 1,
						explanation: 'Microsoft, Apple, and other legitimate tech companies NEVER make unsolicited calls to customers about security issues. They communicate through official channels and only when you contact them first.'
					},
					{
						id: 'q3',
						question: 'A "tech support agent" asks you to download TeamViewer or AnyDesk to fix your computer. What does this request indicate?',
						options: [
							'They are legitimate and need remote access to help',
							'This is standard procedure for tech support',
							'This is definitely a scam - never give remote access to strangers',
							'You should download it but not give them control'
						],
						correctAnswer: 2,
						explanation: 'Requests to download remote access software (TeamViewer, AnyDesk, LogMeIn) from unsolicited callers are ALWAYS scams. Legitimate tech support only uses remote access when YOU initiate contact and request help.'
					},
					{
						id: 'q4',
						question: 'What payment methods are legitimate tech companies most likely to accept for support services?',
						options: [
							'iTunes gift cards and Google Play cards',
							'Bitcoin and cryptocurrency payments',
							'Credit cards through secure official websites',
							'Wire transfers and prepaid debit cards'
						],
						correctAnswer: 2,
						explanation: 'Legitimate companies accept credit cards through secure, official payment portals. They never accept gift cards, cryptocurrency, wire transfers, or other untraceable payment methods for tech support services.'
					}
				]
			}
		]
	},
	{
		id: 'job-offer-scams',
		title: 'Fake Job Offer Scam',
		description: 'Recognize fraudulent job offers and protect yourself from employment scams.',
		difficulty: 'beginner',
		duration: '10-12 mins',
		slides: [
			{
				id: 'introduction',
				title: 'Understanding Fake Job Offer Scams',
				type: 'introduction',
				content: `💼 **Imagine this:** You've been applying for jobs online and finally — an email lands in your inbox.
"Congratulations! After reviewing your resume, we'd like to offer you a remote data entry job paying $35/hour. No interview required. Please reply quickly to confirm your acceptance."

The offer sounds perfect. But hidden behind that shiny opportunity is a scam designed to steal money, personal information, or even your identity.

📊 **The Reality:** Fake job offers are one of the fastest-growing scams globally. In 2023 alone, job seekers lost hundreds of millions of dollars to fraudulent postings and unsolicited offers.

👥 **Who's at Risk?**

**Students and recent grads** eager for entry-level jobs.

**Immigrants and newcomers** searching for opportunities in new countries.

**Professionals** looking for quick remote work or side income.

**How Fake Job Offer Scams Work**

Most fake job offers follow the **Promise → Hook → Ask → Exploit** pattern.

**The Promise 🎉**
You're contacted with a job offer — sometimes without applying. The message highlights:
• High pay
• Flexible hours
• No interview required

**The Hook 🪝**
The scammer makes it sound urgent: "Positions are limited, reply today."

**The Ask 💳**
Victim is pressured to:
• Pay upfront for "training materials" or "equipment"
• Provide personal info like SIN, passport, or banking details
• Deposit a cheque and send part of it back (fake cheque scam)

**The Exploit 🔒**
• Victim loses money
• Personal data is stolen for identity fraud
• Reputation damage if scammers use stolen info for further crimes

**Real-World Example**

In 2022, thousands of Canadians received fake job offers on Indeed for remote data entry positions. Scammers promised flexible schedules and high pay. Victims were sent fraudulent cheques to "buy equipment," then told to wire back excess funds. By the time banks flagged the cheques as fake, victims had already lost thousands.`
			},
			{
				id: 'red-flags',
				title: 'Red Flags to Watch For',
				type: 'red-flags',
				content: `**Common Fake Job Offer Variations**

**1. Upfront Payment for Training or Equipment 💸**

Victim is told to buy software, tools, or "starter kits."

Scammer vanishes after payment.

**2. Fake Cheque Overpayment Scam 🏦**

Employer "accidentally" sends too much money via cheque.

Victim is told to return the difference.

Cheque later bounces, leaving the victim responsible.

**3. Phishing for Identity Theft 🪪**

Fake employer requests full resume, SIN, banking info.

Data is sold or used for fraudulent accounts.

**4. Work-from-Home Money Mule Scams 📦**

Victim is told to process payments or forward packages.

In reality, they're laundering stolen goods or money.

**5. Too-Good-to-Be-True Job Postings 🎯**

Ads promise $100/hour remote jobs requiring little to no experience.

Applicants are funneled into scams after "applying."

**Red Flags to Watch For**

🚩 Job offer without an interview or proper screening

🚩 Requests for upfront payment for training or materials

🚩 Email from a generic domain (Gmail, Yahoo) instead of a company domain

🚩 Job description is vague or overly flattering ("easy work, great pay")

🚩 Employer pushes for urgency: "Accept today or lose the role"

🚩 Poor grammar, odd formatting, or stock images in the posting

🚩 Employer refuses to meet on video call or provide a company website

🚩 Requests for SIN, passport, or banking info before an official contract

**📋 Quick Job Scam Checklist:**

❌ No interview or screening process
❌ Requests for upfront payment for training/materials
❌ Generic email domains (Gmail, Yahoo)
❌ Vague or overly flattering job descriptions
❌ Urgent pressure to accept immediately
❌ Poor grammar or formatting in communications
❌ Refusal to meet via video call
❌ Requests for sensitive info before official contract

If you encounter ANY of these red flags, it's likely a job scam.`
			},
			{
				id: 'scam-psychology',
				title: 'Why Job Scams Work',
				type: 'red-flags',
				content: `🎭 **Scammers prey on hope and urgency. Job seekers are vulnerable because:**

**They're actively waiting for offers and may ignore red flags.**

**Remote work culture has normalized online-only hiring.**

**"Too good to be true" jobs appeal to financial stress or ambition.**

📌 **Key Insight: Scammers exploit emotions first — logic comes later.**

**The Psychology Behind Job Scam Success**

**🧠 Emotional Manipulation Tactics**

**Hope Exploitation**
• Job seekers are often desperate or stressed about finances
• Scammers offer exactly what victims want to hear: high pay, flexible hours, easy work
• The promise of financial relief clouds critical thinking

**Urgency Creation**
• "Limited positions available - respond immediately"
• "This opportunity won't last long"
• Pressure prevents victims from researching or consulting others

**Authority Mimicking**
• Use legitimate company names and professional language
• Create fake websites that look official
• Reference real job posting sites to build credibility

**🎯 Targeting Vulnerable Moments**

**Peak Vulnerability Times:**
• Recent layoffs or job loss
• Economic uncertainty periods
• Graduation seasons when students need employment
• End of temporary contracts or seasonal work

**Demographic Targeting:**
• New immigrants unfamiliar with local hiring practices
• Stay-at-home parents seeking flexible work
• Students needing part-time income
• Seniors looking for supplemental retirement income

**🔄 The Scammer's Playbook**

**Step 1: The Setup**
• Monitor job boards for recent applicants
• Send unsolicited offers that seem too good to refuse
• Use professional templates and company letterheads

**Step 2: The Hook**
• Build excitement about the opportunity
• Create false scarcity: "Only 3 positions left"
• Use flattery: "Your profile impressed our hiring team"

**Step 3: The Rush**
• Demand quick decisions to prevent research
• Create artificial deadlines
• Discourage consulting family or friends

**Step 4: The Ask**
• Request upfront payments for "training" or "equipment"
• Ask for personal information under the guise of payroll setup
• Send fake checks with overpayment scams

**💡 Breaking the Psychological Trap**

**Remember: Legitimate employers:**
• Never rush quality candidates
• Don't require upfront payments
• Welcome questions and verification
• Provide clear contact information and company details
• Follow standard hiring procedures regardless of remote work`
			},
			{
				id: 'tips',
				title: 'Hot Tips to Stay Safe',
				type: 'tips',
				content: `✅ **Practical protection strategies:**

**Apply only through official company websites or trusted platforms.**

**Research the employer on Google, LinkedIn, and Glassdoor.**

**Verify emails: real recruiters don't use Gmail/Yahoo.**

**Ask for a video interview before considering an offer.**

**Never pay for training, equipment, or software upfront.**

**Protect your SIN, passport, and banking info until after contract signing.**

**Advanced Job Scam Protection Strategies**

**🔍 Research and Verification**

**Company Verification Checklist:**
• Check the company's official website independently
• Look up company reviews on Glassdoor, Indeed, and Google
• Verify the company's physical address and phone number
• Search for recent news about the company
• Check if the company is registered with business bureaus

**Contact Verification:**
• Legitimate recruiters use company email domains (@company.com)
• Call the company directly using phone numbers from their official website
• Ask to speak with HR or the hiring manager by name
• Verify the recruiter's LinkedIn profile and connections

🛡️ Information Security Practices**

**What to NEVER Share Before Official Hiring:**
• Social Insurance Number (SIN)
• Passport or driver's license numbers
• Banking information or direct deposit details
• Credit card or financial account numbers
• Mother's maiden name or security questions

**Safe Information Sharing Timeline:**
• Initial Application: Resume, cover letter, professional references only
• Interview Stage: Educational background, work history, availability
• After Job Offer: Official documents for background checks (if standard for the industry)
• After Contract Signing: Banking info for payroll setup

📞 Interview Red Flags**

**Legitimate Interview Process:**
• Multiple rounds of interviews (phone/video screening, formal interview)
• Questions about your skills, experience, and work style
• Clear job description and expectations
• Discussion of company culture and team structure
• Opportunity for YOU to ask questions about the role

**Scam Interview Warning Signs:**
• No interview process at all
• Interview conducted only via text or email
• Vague questions unrelated to job skills
• Immediate job offer without skills assessment
• Refusal to provide specific job details
• No discussion of company policies or procedures

🚨 Emergency Action Plan**

**If You Suspect a Scam:**
1. **Stop all communication** immediately
2. **Don't send money** or provide additional information
3. **Document everything** - save emails, phone numbers, screenshots
4. **Report to authorities** - local police, Better Business Bureau, job platforms
5. **Warn others** - share your experience to protect fellow job seekers

**If You've Been Victimized:**
1. **Contact your bank** immediately if you sent money
2. **Monitor your credit** for signs of identity theft
3. **File a police report** with all documentation
4. **Report to the Canadian Anti-Fraud Centre**
5. **Consider credit monitoring services** for ongoing protection`
			},
			{
				id: 'interactive',
				title: 'Real vs. Fake Job Offer',
				type: 'interactive',
				content: `🔍 **Learn to distinguish between legitimate and fraudulent job offers**

Compare these characteristics to build your scam detection skills:

**Job Offer Comparison Guide**

| **Legitimate Offer ✅** | **Fake Offer 🚩** |
|-------------------------|-------------------|
| Requires an interview | No interview required |
| Uses official company email | Gmail/Yahoo accounts |
| Clear responsibilities | Vague "easy work, great pay" |
| Provides official job letter | Demands fees for equipment |
| Open to video call | Avoids calls, hides identity |

**Real-World Scenario Analysis**

**Practice identifying these job offers:**

**Scenario A:** Email from "hr@techcorp.gmail.com" offering $50/hour for data entry, no experience needed, start immediately, requires $200 for software license.

**Scenario B:** LinkedIn message from verified recruiter at established company, requesting phone interview to discuss marketing coordinator position, asks for your availability.

**Scenario C:** Text message: "Congratulations! You've been selected for a $40/hour work-from-home position. Reply YES to accept. Training starts Monday."

**Scenario D:** Formal email from company domain, detailed job description, invitation to video interview, clear company information and website provided.

**Analysis:**
- **Scenario A: SCAM** - Gmail account, upfront payment, unrealistic pay
- **Scenario B: LEGITIMATE** - Verified recruiter, proper process, reasonable request  
- **Scenario C: SCAM** - Unsolicited text, no application process, immediate acceptance
- **Scenario D: LEGITIMATE** - Professional communication, proper hiring process`,
				interactive: {
					type: 'drag-match',
					data: {
						title: 'Job Offer: Legitimate vs. Scam',
						instructions: 'Drag each job offer characteristic to the correct category',
						items: [
							'Requires interview process',
							'No interview required',
							'Uses official company email',
							'Gmail/Yahoo email accounts',
							'Clear job responsibilities',
							'Vague job descriptions',
							'Provides official documentation',
							'Demands upfront fees',
							'Open to video calls',
							'Avoids phone/video contact'
						],
						categories: [
							{
								name: 'Legitimate Offer ✅',
								items: ['Requires interview process', 'Uses official company email', 'Clear job responsibilities', 'Provides official documentation', 'Open to video calls']
							},
							{
								name: 'Fake Offer 🚩',
								items: ['No interview required', 'Gmail/Yahoo email accounts', 'Vague job descriptions', 'Demands upfront fees', 'Avoids phone/video contact']
							}
						]
					}
				}
			},
			{
				id: 'quiz',
				title: 'Story Mode Example & Quiz',
				type: 'quiz',
				content: `📖 **Story Mode Example**

**Scenario:**
You receive an email offering a remote data entry job for $40/hour, no interview required. The employer says they'll send you a $2,000 cheque to buy equipment and asks you to wire back any "extra funds."

👉 **Question: What should you do?**

**A)** Cash the cheque and wire back the difference.
**B)** Ask for a video interview and verify the company website.
**C)** Accept immediately because "it's too good to miss."

✅ **Correct Answer: B.** The cheque is fake, and wiring money will leave you liable.

**Key Takeaways:**

📝 **No interview = no real job.**

📝 **Never pay to work. Legitimate employers cover training and equipment.**

📝 **Emails matter. Generic domains are major red flags.**

📝 **Slow down. Urgency is a scammer's tool.**

📝 **Protect your identity. Don't share SIN, passport, or banking info prematurely.**`,
				quiz: [
					{
						id: 'q1',
						question: 'A job offer arrives via email with no interview required and asks for $500 upfront for training materials. This is:',
						options: [
							'A legitimate opportunity with standard training costs',
							'A job scam - real employers never charge for training',
							'Only a scam if the amount is over $1000',
							'Safe as long as they provide a receipt'
						],
						correctAnswer: 1,
						explanation: 'Legitimate employers never charge employees for training, equipment, or materials. Any upfront payment request is always a scam.'
					},
					{
						id: 'q2',
						question: 'You receive a job offer from "hiring@company.gmail.com" offering $45/hour for data entry. What\'s the biggest red flag?',
						options: [
							'The pay rate is too high',
							'Data entry jobs don\'t exist anymore',
							'Professional companies don\'t use Gmail for business',
							'The job seems too easy'
						],
						correctAnswer: 2,
						explanation: 'Legitimate companies use their own email domains (@company.com), not free email services like Gmail or Yahoo for official business communications.'
					},
					{
						id: 'q3',
						question: 'What should you do if a "recruiter" pressures you to accept a job offer immediately?',
						options: [
							'Accept quickly before the opportunity disappears',
							'Ask for more time to research the company',
							'Negotiate for better terms first',
							'Request references from current employees'
						],
						correctAnswer: 1,
						explanation: 'Pressure to accept immediately is a major red flag. Legitimate employers understand that candidates need time to make informed decisions and research the company.'
					},
					{
						id: 'q4',
						question: 'When is it safe to provide your Social Insurance Number (SIN) to a potential employer?',
						options: [
							'During the initial application process',
							'After the first interview to show you\'re serious',
							'Only after you\'ve signed an official employment contract',
							'When they ask for it to "verify your eligibility"'
						],
						correctAnswer: 2,
						explanation: 'Your SIN should only be provided after you\'ve been officially hired and signed a legitimate employment contract. Never share it during the application or interview process.'
					},
					{
						id: 'q5',
						question: 'You receive a check for $3000 from a new employer with instructions to buy equipment and wire back $2500. What should you do?',
						options: [
							'Deposit the check and follow the instructions',
							'Wait for the check to clear before buying anything',
							'Recognize this as a fake check scam and report it',
							'Cash the check at the bank that issued it'
						],
						correctAnswer: 2,
						explanation: 'This is a classic fake check scam. The check will eventually bounce, but your wired money will be gone forever. Never participate in overpayment schemes.'
					}
				]
			}
		]
	},
	{
		id: 'investment-scams',
		title: 'Investment Fraud Awareness',
		description: 'Identify fake investment opportunities and Ponzi schemes.',
		difficulty: 'advanced',
		duration: '10-12 mins',
		slides: [
			{
				id: 'introduction',
				title: 'Investment Fraud Overview',
				type: 'introduction',
				content: `📉 **Investment fraud is one of the most damaging scams because it attacks not just your wallet, but your future security.** Scammers know that people dream of growing their money quickly — whether it's saving for retirement, paying off debt, or chasing financial independence. They play on those desires by offering opportunities that seem professional, sophisticated, and low-risk.

These scams often arrive through email, social media ads, or even introductions from people you know who have already been tricked. Fraudsters use company logos, fake testimonials, and polished websites to look legitimate. What makes them dangerous is that they often use half-truths — mentioning real financial terms, citing actual companies, or blending real investments with fake ones.

💡 **Key Insight:** Unlike lottery or romance scams that are easy to spot once you know the tricks, investment fraud feels professional. The scammer doesn't just pretend to be a stranger — they pretend to be an advisor, expert, or insider. That authority makes their promises more believable.

**The Psychology of Investment Fraud**

**Why Investment Scams Work So Well:**

**1. They Target Universal Desires**
• Financial security and independence
• Early retirement dreams
• Paying off debts quickly
• Providing for family's future
• Building wealth for major purchases

**2. They Exploit Financial Anxiety**
• Fear of inflation eroding savings
• Worry about not having enough for retirement
• Pressure to "catch up" financially
• FOMO (fear of missing out) on wealth-building opportunities

**3. They Use Professional Credibility**
• Official-looking websites and documents
• Financial jargon and industry terminology
• Fake regulatory credentials and awards
• Testimonials from "successful" investors (often fabricated)
• Association with legitimate companies or people

**4. They Blend Truth with Lies**
• Mention real financial concepts and market trends
• Reference actual successful investments or companies
• Use half-true statistics and market data
• Mix legitimate investment strategies with fraudulent schemes

**The Devastating Impact**

Investment fraud is particularly destructive because:

• **Large amounts:** Victims often invest life savings, retirement funds, or borrowed money
• **Long-term damage:** Recovery can take years or decades, if possible at all
• **Compound effect:** Lost money means lost investment growth over time
• **Emotional trauma:** Victims often feel ashamed, betrayed, and financially insecure
• **Relationship strain:** Money loss can damage marriages and family relationships

**Real-World Scale**

• The SEC estimates Americans lose tens of billions annually to investment fraud
• Bernie Madoff's Ponzi scheme alone cost investors $65 billion
• Cryptocurrency scams have exploded, with billions lost in "rug pulls" and fake projects
• Elder fraud targeting retirees' investment accounts is a growing epidemic

Understanding these psychological tactics is the first step in building immunity to investment fraud.`
			},
			{
				id: 'scam-types',
				title: 'Common Types of Investment Scams',
				type: 'red-flags',
				content: `💼 **Scammers use sophisticated schemes designed to separate you from your money.**

**Ponzi Schemes**
These are the "classic" scams where money from new investors is used to pay returns to earlier investors. As long as fresh money keeps flowing in, the scheme appears successful. But when recruitment slows, the whole thing collapses. Famous cases like Bernie Madoff's $65 billion scheme show how devastating these can be, even for sophisticated investors.

**Pump-and-Dump Stocks**
Here, scammers artificially hype up little-known penny stocks on forums, email lists, or social media. Victims rush to buy in, driving the price up. Once the stock hits a peak, the scammers sell their shares for a profit and disappear — leaving everyone else with worthless stock.

**Fake Cryptocurrency Projects**
Scammers launch coins or NFT projects that look cutting-edge but have no real utility or technology behind them. They build hype with whitepapers, influencers, and even fake partnerships. Once investors put money in, the founders vanish — this is often called a rug pull.

**Binary Options & Trading Platforms**
These platforms pretend to be real trading tools but are rigged so the victim can never win. They often show fake "profits" on screen to encourage bigger deposits, then lock withdrawals or shut down accounts.

**Advanced Investment Scam Variations**

**5. Affinity Fraud**
• Targets specific communities (religious groups, ethnicities, professions)
• Uses trusted community members as unwitting recruiters
• Exploits shared identity and trust within tight-knit groups
• Often spreads through word-of-mouth recommendations

**6. Prime Bank Fraud**
• Claims access to "secret" high-yield bank instruments
• References fictional "prime bank" trading programs
• Uses complex financial jargon to confuse victims
• Promises returns that "banks don't want you to know about"

**7. Oil and Gas Investment Scams**
• Fake drilling projects and energy partnerships
• Use legitimate-sounding geological and technical terms
• Promise huge returns from "sure thing" oil discoveries
• Often target patriotic sentiments ("energy independence")

**8. Real Estate Investment Fraud**
• Non-existent property developments or flipping projects
• Fake REITs (Real Estate Investment Trusts) with fabricated portfolios
• Land investment scams in "developing" areas that don't exist
• Time-share and vacation property fraud

**9. Forex Trading Scams**
• Fake foreign exchange trading platforms and systems
• "Automated trading robots" that guarantee profits
• Signal services that charge for "insider" currency tips
• Managed forex accounts that steal deposits

**10. Precious Metals and Commodities Fraud**
• Overpriced or non-existent gold and silver investments
• Fake precious metals storage programs
• Agricultural commodity schemes (fake farm investments)
• Rare earth element and mineral extraction fraud

**How Scammers Make These Look Legitimate:**
• Professional websites with fake regulatory badges
• Fabricated performance charts and historical data
• Paid actors providing testimonials
• Fake news articles and press releases
• Social media manipulation and fake followers
• Rented office spaces for legitimacy`
			},
			{
				id: 'red-flags',
				title: 'Red Flags',
				type: 'red-flags',
				content: `🚩 **Investment scams share a common playbook — once you know the warning signs, they become much easier to spot.**

**Guaranteed or Risk-Free Returns:** All real investments carry some risk. If someone says "guaranteed 30% monthly return," they're lying.

**Urgent Deadlines:** Scammers pressure victims to act fast: "We're closing this round today." They don't want you to think.

**Unlicensed Advisors:** Many fraudsters call themselves "wealth managers" or "crypto consultants" but have no registration with financial regulators.

**Too Complex to Understand:** If the investment is so complicated that no one can explain it simply, that's a red flag. Scammers hide behind jargon to discourage questions.

**Payment in Crypto or Wires Only:** Legitimate firms allow normal payment methods. If they only accept irreversible methods like Bitcoin or wire transfer, be cautious.

📌 **Remember:** The more emotional pressure you feel — excitement, urgency, or fear of missing out — the more likely it's a scam.

**Detailed Red Flag Analysis**

🚨 **Financial Red Flags**
• Promises of guaranteed returns above market rates (anything over 10-12% annually is suspicious)
• Claims of "risk-free" investments (all investments carry risk)
• Pressure to invest retirement funds or borrow money to invest
• Requests for cash, wire transfers, or cryptocurrency only
• No clear explanation of how profits are generated
• Promises that are too good to be true for the current market conditions

🚨 **Behavioral Red Flags**
• High-pressure sales tactics and artificial urgency
• Discouraging you from consulting family, friends, or financial advisors
• Refusing to provide written documentation or contracts
• Avoiding direct questions about licensing and regulation
• Claiming "exclusive" or "limited time" opportunities
• Using fear tactics about missing out on wealth

🚨 **Communication Red Flags**
• Unsolicited contact via phone, email, or social media
• Professional-looking materials with spelling/grammar errors
• Use of testimonials that can't be verified
• Vague or evasive answers to specific questions
• Pressure to keep the investment "confidential"
• Claims of insider information or secret strategies

🚨 **Documentation Red Flags**
• No regulatory filings or disclosures available
• Fake or expired licenses and certifications
• No physical business address or fake office locations
• No clear fee structure or transparency about costs
• Contracts with confusing terms or unfair clauses
• No independent audit or verification of past performance

🚨 **Technology Red Flags (Crypto/Online Platforms)**
• Anonymous or fake team members with stock photo profiles
• No working product or technology demonstration
• Unrealistic roadmaps and promises
• Social media accounts with fake followers or engagement
• Copy-pasted whitepapers or business plans
• No clear use case or business model explanation

**The "Too Good to Be True" Test:**
If an investment promises:
• Monthly returns above 3-5%
• No possibility of loss
• Exclusive access to secret opportunities
• Returns that consistently beat the stock market
• Immediate profits with no waiting period

**It's definitely a scam.** Real investments involve risk, market fluctuations, and reasonable returns over time.`
			},
			{
				id: 'tips',
				title: 'Due Diligence Best Practices',
				type: 'tips',
				content: `✅ **The best way to protect yourself is not just spotting red flags but actively practicing due diligence. That means doing your homework before giving anyone your money.**

**Verify Credentials:** Use regulatory databases like FINRA (US), IIROC (Canada), or FCA (UK) to confirm the advisor or firm is licensed. If they're not listed, walk away.

**Check Compliance:** Real investment firms publish disclosures and follow strict rules. If you can't find records or filings, that's suspicious.

**Research Thoroughly:** Look for news articles, company history, and independent reviews. Scammers rely on victims skipping this step.

**Ask Professionals:** Before committing significant money, talk to a licensed financial advisor or accountant. A second opinion can save you from disaster.

**Be Skeptical of "Exclusive" Opportunities:** If you weren't already wealthy or connected, why would someone randomly give you a secret, high-return deal? Scarcity is often a trick.

**Understand the Risk:** If you can't explain in one sentence how the investment makes money, you shouldn't invest.

💡 **Tip:** Real investments welcome questions and transparency. Scams push secrecy and urgency.`
			},
			{
				id: 'interactive',
				title: 'Real vs. Scam Investment Pitch',
				type: 'interactive',
				content: `🔍 **Scammers know how to dress up lies as opportunity. Here's a direct comparison:**

| **Legitimate Pitch ✅** | **Scam Pitch 🚩** |
|-------------------------|-------------------|
| Provides official documentation and risk disclosures | Avoids paperwork, focuses on "quick wins" |
| Registered with regulators, easy to verify | Advisor dodges licensing or "works offshore" |
| Encourages time to review, consult others | Urges you to act "before it's too late" |
| Returns are modest and tied to market risk | Promises "guaranteed" or "risk-free" profits |
| Accepts normal payment methods | Requests crypto, gift cards, or wire transfers |

📌 **Scenario:**
If someone says, "We've unlocked a trading algorithm that beats the stock market every time. But spots are limited, you must send Bitcoin today."
— That is a 100% scam.`,
				interactive: {
					type: 'drag-match',
					data: {
						title: 'Investment Pitch: Legitimate vs. Scam',
						instructions: 'Drag each investment pitch characteristic to the correct category',
						items: [
							'Provides risk disclosures',
							'Avoids documentation',
							'Registered with regulators',
							'Works offshore, no license',
							'Encourages consultation',
							'Pressures immediate action',
							'Realistic market returns',
							'Guarantees impossible profits',
							'Normal payment methods',
							'Crypto/wire transfers only'
						],
						categories: [
							{
								name: 'Legitimate Investment ✅',
								items: ['Provides risk disclosures', 'Registered with regulators', 'Encourages consultation', 'Realistic market returns', 'Normal payment methods']
							},
							{
								name: 'Investment Scam 🚩',
								items: ['Avoids documentation', 'Works offshore, no license', 'Pressures immediate action', 'Guarantees impossible profits', 'Crypto/wire transfers only']
							}
						]
					}
				}
			},
			{
				id: 'quiz',
				title: 'Interactive Scenario & Quiz',
				type: 'quiz',
				content: `🎮 **Interactive Scenario:**

**Situation:**
You receive a call from a man claiming to be an investment advisor. He says he has an opportunity to double your money in six months through a "government-backed crypto bond." He pressures you by saying spots are closing fast and insists you wire $5,000 today to lock in your position.

👉 **What should you do?**

**A)** Send the money quickly so you don't miss out.
**B)** Ask for his regulatory license number and check it with financial authorities.
**C)** Send a smaller amount first as a "test."

✅ **Correct Answer: B.** Always verify before sending money. Even sending a "small test" amount can't be recovered if it's a scam.

**Key Takeaways:**
📝 **High returns with no risk = scam. All real investments carry some uncertainty.**
📝 **Urgency and secrecy are tools of manipulation. Scammers don't want you to think or verify.**
📝 **Do your due diligence. Research companies, confirm licenses, and consult professionals.**
📝 **If you don't understand it, don't invest in it. Complexity is often a cover for fraud.**
📝 **Protect your money like your health. It's easier to prevent than to recover.**`,
				quiz: [
					{
						id: 'i1',
						question: 'Someone promises you "guaranteed 25% monthly returns with zero risk." This is:',
						options: [
							'A legitimate high-yield investment opportunity',
							'Definitely a scam - no investment guarantees such returns',
							'Only risky if they ask for more than $10,000',
							'Safe if they provide official-looking documents'
						],
						correctAnswer: 1,
						explanation: 'No legitimate investment can guarantee 25% monthly returns (300% annually) with zero risk. This is always a scam, regardless of documentation.'
					},
					{
						id: 'i2',
						question: 'What should you do if an "investment advisor" pressures you to invest immediately?',
						options: [
							'Invest quickly before the opportunity disappears',
							'Ask for more time to research and verify their credentials',
							'Invest a small amount to test their legitimacy',
							'Negotiate for better terms first'
						],
						correctAnswer: 1,
						explanation: 'Legitimate investment opportunities don\'t disappear overnight. Pressure to act immediately is a classic scam tactic designed to prevent due diligence.'
					},
					{
						id: 'i3',
						question: 'How can you verify if an investment advisor is legitimate?',
						options: [
							'Check their social media profiles and followers',
							'Look at their professional website design',
							'Verify their license through official regulatory databases',
							'Ask them to provide references from other clients'
						],
						correctAnswer: 2,
						explanation: 'Always verify advisor credentials through official regulatory databases like FINRA, IIROC, or your local securities regulator. Social media and websites can be easily faked.'
					},
					{
						id: 'i4',
						question: 'A cryptocurrency project promises to "revolutionize finance" but has anonymous founders. This is:',
						options: [
							'Normal for innovative crypto projects',
							'A red flag - legitimate projects have identifiable teams',
							'Only concerning if they ask for large investments',
							'Acceptable if they have a detailed whitepaper'
						],
						correctAnswer: 1,
						explanation: 'Anonymous founders are a major red flag in investment projects. Legitimate businesses have identifiable leadership who stand behind their projects.'
					},
					{
						id: 'i5',
						question: 'What\'s the safest approach when someone offers you an "exclusive investment opportunity"?',
						options: [
							'Jump on it quickly since it\'s exclusive',
							'Ask why you were specifically chosen for this opportunity',
							'Request a smaller minimum investment amount',
							'Share the opportunity with friends to spread risk'
						],
						correctAnswer: 1,
						explanation: 'Ask yourself why you were chosen for an "exclusive" opportunity. Legitimate exclusive investments typically target wealthy, connected individuals - not random people.'
					}
				]
			}
		]
	},
	{
		id: 'cra-scams',
		title: 'CRA Scam Basics',
		description: 'Learn to identify fake Canada Revenue Agency communications and threats.',
		difficulty: 'beginner',
		duration: '10-12 mins',
		slides: [
			{
				id: 'introduction',
				title: 'Understanding CRA Scams',
				type: 'introduction',
				content: `📞 **Imagine this:** You're at home when your phone rings. The caller ID says "Government of Canada." The voice on the other end is stern: "This is the Canada Revenue Agency. You owe back taxes. If you don't pay immediately, you'll face arrest." They may even know your name, address, or SIN. Fear kicks in, and before you know it, you're being asked to pay with gift cards, prepaid credit, or cryptocurrency.

💡 **The Reality:** CRA scams are one of the most common fraud types in Canada, costing Canadians tens of millions of dollars each year. Fraudsters exploit fear of the tax system, using threats, urgency, and impersonation.

👥 **Who's at Risk?**

**Students & newcomers** who are unfamiliar with CRA rules.

**Seniors** who may be less familiar with phishing emails or spoofed caller ID.

**Every taxpayer** during tax season, when scams spike dramatically.

**How CRA Scams Work**

Most CRA scams follow this sequence: **The Contact → The Threat → The Payment Demand → The Escape.**

**The Contact 📲**
Scammers reach out by phone, email, or even text message. They use caller ID spoofing to look like a real government number, or official-looking logos in emails.

**The Threat ⚖️**
Victims are told they owe money, have filed taxes incorrectly, or committed fraud. Threats often include:
• Immediate arrest
• Freezing bank accounts  
• Deportation (for immigrants)

**The Payment Demand 💳**
Instead of normal tax channels, scammers demand:
• iTunes or Google Play gift cards
• Bitcoin or cryptocurrency
• Prepaid credit cards or wire transfers

**The Escape 💨**
Once payment is made, scammers vanish. Victims rarely recover funds because payments are anonymous and untraceable.

**Real-World Example**

In 2019, RCMP investigated a massive India-based call centre operation impersonating CRA officials. Thousands of Canadians were targeted, and many lost money. Despite global crackdowns, these scams continue because spoofing technology makes calls look legitimate, and scammers can easily operate across borders.`
			},
			{
				id: 'red-flags',
				title: 'Red Flags to Watch For',
				type: 'red-flags',
				content: `**Common CRA Scam Variations**

**1. Phone Call Threats 📞**

Caller claims to be a CRA agent.

Uses aggressive language: "Police are on their way if you don't pay now."

Background noise may mimic a call centre to sound official.

**2. Email Phishing 📧**

Victims receive "CRA refund" or "Notice of Assessment" emails.

Links lead to fake websites that steal login credentials and banking info.

**3. Text Message Refunds 💬**

Message promises a refund if you "click this link" and provide details.

Often disguised as Interac e-Transfer links.

**4. Voicemail/Robocalls 🤖**

Pre-recorded messages warn of "urgent legal action."

Victims are told to press a number to connect with a fake agent.

**Red Flags to Watch For**

🚩 Caller demands immediate payment by gift cards, Bitcoin, or prepaid cards

🚩 Threats of arrest, deportation, or police action

🚩 Emails/texts with links to claim a refund

🚩 Poor grammar, typos, or unprofessional formatting in messages

🚩 Caller refuses to let you hang up or "verify" through official CRA channels

🚩 Requests for SIN, banking info, or passport number over phone/email

🚩 Calls outside normal business hours claiming to be urgent CRA business

**📋 Quick CRA Scam Checklist:**

❌ Demanding payment by gift cards, crypto, or prepaid cards
❌ Threatening arrest or deportation
❌ Sending refund links via text or email
❌ Calling at odd hours with urgent demands
❌ Refusing to let you verify independently
❌ Asking for SIN or banking details over phone
❌ Using aggressive or threatening language
❌ Demanding immediate payment without documentation

If you encounter ANY of these red flags, it's a scam.`
			},
			{
				id: 'tips',
				title: 'Hot Tips to Stay Safe',
				type: 'tips',
				content: `**Hot Tips to Stay Safe**

✅ **Know CRA's real practices.** CRA never demands payment by gift card, crypto, or e-transfer.

✅ **CRA never threatens arrest or deportation.** Any call using threats is fake.

✅ **Check My Account online.** Log in to the official CRA website to verify balances and letters.

✅ **Hang up and call back.** Use the official CRA number (1-800-959-8281) to confirm.

✅ **Don't click links.** CRA never sends refund notices by text or email with links.

✅ **Watch the clock.** CRA agents don't call at midnight or on weekends demanding payment.

✅ **Trust your gut.** If the tone feels urgent, aggressive, or unusual, it's likely a scam.

**🛡️ Advanced Protection Strategies**

**1. Verify CRA Communications**
• Only trust letters that arrive by mail with official CRA letterhead
• Log into your CRA My Account directly (never through email links)
• Call CRA back using official numbers from Canada.ca
• Ask for the agent's name and badge number

**2. Understand Real CRA Procedures**
• CRA sends initial notices by mail, not phone
• Payment options are clearly outlined on official CRA website
• CRA gives you time to respond and dispute charges
• Real agents can provide detailed account information you can verify

**3. Protect Your Information**
• Never give out your SIN over the phone unless you initiated the call
• Don't provide banking information to unsolicited callers
• Be suspicious of anyone who already "knows" your personal details
• Keep your CRA login credentials secure and unique

**4. Family Protection Plan**
• Educate elderly relatives about CRA scam tactics
• Set up a family verification system for unexpected tax issues
• Create awareness about peak scam seasons (tax time)
• Establish a rule to never pay government debts with gift cards

**🚨 If You've Been Targeted:**

**Immediate Actions:**
1. **Hang up immediately** if you suspect a scam call
2. **Don't call back** numbers provided by suspicious callers
3. **Report to authorities:**
   - Canadian Anti-Fraud Centre: 1-888-495-8501
   - Local police if you lost money
   - CRA if someone used your SIN fraudulently
4. **Monitor your accounts** for unauthorized activity
5. **Warn others** about the specific tactics used against you

**Remember:** When in doubt, hang up and verify independently through official CRA channels.`
			},
			{
				id: 'summary',
				title: 'Key Takeaways',
				type: 'summary',
				content: `**Key Takeaways**

• **CRA never demands payment through gift cards, Bitcoin, or e-transfer.**

• **Threats of arrest or deportation are always fake.**

• **Never click refund links in texts or emails.**

• **Always verify directly on CRA's official website.**

• **If in doubt, hang up and call CRA yourself.**

**📚 Essential CRA Scam Knowledge**

**Legitimate CRA vs. CRA Scam**

| Legitimate CRA ✅ | CRA Scam 🚩 |
|-------------------|-------------|
| Will mail official letters first | Calls/texts/emails out of nowhere |
| Accepts payment through banks or online CRA portal | Demands gift cards, crypto, or prepaid cards |
| Never threatens arrest or police | Uses fear tactics and legal threats |
| Allows time to respond or dispute | Urgent deadlines ("pay now or else") |
| Official CRA phone numbers (listed on Canada.ca) | Spoofed numbers that look real |

**How CRA Scams Work:**
The Contact → The Threat → The Payment Demand → The Escape

1. **Contact** - Scammers use spoofed caller ID or official-looking emails
2. **Threat** - Create fear with arrest, deportation, or account freezing threats
3. **Payment Demand** - Request untraceable payments (gift cards, crypto, prepaid cards)
4. **Escape** - Disappear once payment is made, leaving victims with no recourse

**Major Red Flags (Any ONE of these = SCAM):**
• ❌ Payment demands via gift cards, Bitcoin, or prepaid cards
• ❌ Threats of immediate arrest or deportation
• ❌ Refund links sent via text or email
• ❌ Calls at odd hours with urgent demands
• ❌ Refusal to let you verify through official channels
• ❌ Requests for SIN or banking details over phone

**Protection Strategies:**
• ✅ Know that CRA never demands gift card payments
• ✅ Verify all communications through official CRA channels
• ✅ Use official CRA phone numbers from Canada.ca
• ✅ Check My Account online for real account status
• ✅ Trust your instincts if something feels wrong

**Remember:** Real CRA communications are professional, documented, and never create artificial urgency. When in doubt, hang up and verify independently.`
			},
			{
				id: 'interactive',
				title: 'CRA Scam Detection Challenge',
				type: 'interactive',
				content: `🎮 **Interactive Challenge: Spot the CRA Scam**

Practice identifying CRA scams by categorizing these real-world scenarios. Drag each item to the correct category.`,
				interactive: {
					type: 'drag-match',
					data: {
						items: [
							{ id: '1', text: 'Threats of arrest', category: 'red-flags' },
							{ id: '2', text: 'Payment by iTunes gift cards', category: 'red-flags' },
							{ id: '3', text: 'CRA refund link by text', category: 'red-flags' },
							{ id: '4', text: 'Logging into CRA "My Account" directly', category: 'safe-practices' },
							{ id: '5', text: 'Calling CRA back using official numbers', category: 'safe-practices' },
							{ id: '6', text: 'Paying only through banks or CRA portal', category: 'safe-practices' }
						],
						categories: [
							{ id: 'red-flags', name: 'Red Flags 🚩' },
							{ id: 'safe-practices', name: 'Safe Practices ✅' }
						]
					}
				}
			},
			{
				id: 'quiz',
				title: 'Knowledge Check',
				type: 'quiz',
				content: `Test your understanding of CRA scam detection with these scenario-based questions.`,
				quiz: [
					{
						id: 'q1',
						question: 'You receive a call from someone claiming to be from CRA saying you owe taxes and must pay immediately with iTunes gift cards or face arrest. What should you do?',
						options: [
							'Ask for their badge number and call them back',
							'Hang up immediately - this is definitely a scam',
							'Ask to see official documentation first',
							'Pay a small amount to see if they\'re legitimate'
						],
						correctAnswer: 1,
						explanation: 'This is 100% a scam. CRA never demands payment via gift cards and never threatens arrest. Real CRA communications come by mail first and use official payment methods.'
					},
					{
						id: 'q2',
						question: 'You get a text message saying "CRA REFUND: Click here to claim your $500 refund" with a link. What should you do?',
						options: [
							'Click the link to see if it looks legitimate',
							'Forward it to friends to see if they got the same message',
							'Delete it immediately - CRA doesn\'t send refund texts',
							'Call the number in the text to verify'
						],
						correctAnswer: 2,
						explanation: 'CRA never sends refund notifications by text with links. These are phishing attempts to steal your login credentials and banking information. Always check refunds by logging into My Account directly.'
					},
					{
						id: 'q3',
						question: 'How does the real CRA typically first contact taxpayers about issues with their account?',
						options: [
							'Phone calls from agents',
							'Text messages with links',
							'Official letters sent by mail',
							'Emails with urgent notices'
						],
						correctAnswer: 2,
						explanation: 'CRA\'s standard practice is to send official letters by mail first. They don\'t initiate contact through phone calls, texts, or emails for account issues. Always verify any unexpected contact through official channels.'
					},
					{
						id: 'q4',
						question: 'Which payment methods does the real CRA accept for tax payments?',
						options: [
							'iTunes gift cards and Google Play cards',
							'Bitcoin and cryptocurrency',
							'Banks, online banking, and official CRA portal',
							'Prepaid credit cards and wire transfers'
						],
						correctAnswer: 2,
						explanation: 'CRA only accepts payments through official channels: banks, online banking, and the official CRA My Payment portal. They never accept gift cards, cryptocurrency, or other untraceable payment methods.'
					}
				]
			}
		]
	},
	{
		id: 'banking-scams',
		title: 'Banking Scam Basics',
		description: 'Protect yourself from fake bank security alerts and account verification requests.',
		difficulty: 'intermediate',
		duration: '10-12 mins',
		slides: [
			{
				id: 'introduction',
				title: 'Understanding Banking Scams',
				type: 'introduction',
				content: `🏦 **Imagine this:** You wake up to a text message:
"Alert: Unusual activity detected on your bank account. Please click the link to verify your identity immediately."

The link looks like it belongs to your bank, and in a moment of panic you click it, entering your login details. Within hours, money vanishes from your account.

This is the reality of banking scams — one of the most dangerous and costly frauds because it directly targets your financial lifeline.

📊 **The Reality:** Every year, hundreds of millions of dollars are stolen from bank customers through phishing, fake apps, spoofed websites, and social engineering. Scammers exploit urgency and fear to trick victims into revealing sensitive financial information.

👥 **Who's at Risk?**

**Seniors** unfamiliar with online banking features.

**Busy professionals** who respond quickly to urgent texts or emails.

**Young adults** new to managing accounts and less skeptical of slick online designs.

**How Banking Scams Work**

Most banking scams follow this flow: **The Alert → The Hook → The Capture → The Theft.**

**The Alert ⚠️**
A text, email, or phone call warns of suspicious account activity, frozen funds, or blocked transactions.

**The Hook 🎣**
The scammer uses urgency: "Click here immediately to prevent account suspension."

**The Capture 🔑**
Victim enters login details, PIN, or security answers on a fake site or provides them over the phone.

Some scams go further, asking for two-factor authentication codes sent to your phone.

**The Theft 💸**
Once scammers have access, they:
• Drain funds
• Open new credit lines in your name
• Sell stolen credentials on the dark web

**Real-World Example**

In 2022, Canadian banks reported a surge in "safe account" scams. Victims received calls from fraudsters posing as fraud investigators, telling them criminals were inside the banking system. Customers were told to "move money to a secure account" to protect it — which was actually controlled by the scammer. Victims lost thousands, and because they "authorized" the transfer, recovery was often impossible.`
			},
			{
				id: 'scam-types',
				title: 'Common Types of Banking Scams',
				type: 'red-flags',
				content: `⚠️ **Scammers use multiple tactics to trick you:**

**Phishing Emails 📧**

Fake "security alerts" or "account locked" messages.

Direct victims to cloned bank websites.

**Smishing Text Messages 📱**

"Unusual login detected, verify here."

Link redirects to fake login pages.

**Vishing Phone Calls 📞**

Fraudster pretends to be your bank's fraud department.

Asks for PINs, passwords, or even transfers to a "safe account."

**Fake Banking Apps 📲**

Look legitimate but steal login details.

Often found outside official app stores.

**Advanced Banking Scam Techniques**

**1. Account Takeover Scams**
• Scammers call pretending to be fraud prevention
• They already have some of your information to sound legitimate
• Ask you to "verify" remaining details like PIN or full card number
• Use social engineering: "We're trying to protect your account"

**2. Safe Account Transfer Scams**
• Caller claims your account has been compromised
• Instructs you to move money to a "temporary safe account"
• The "safe account" actually belongs to the scammer
• Creates false urgency: "We need to secure your funds immediately"

**3. Fake Check/Wire Fraud**
• Scammer sends you a check that appears legitimate
• Asks you to deposit it and wire money back for "fees"
• The original check later bounces, leaving you liable
• Often combined with romance or employment scams

**4. SIM Swap Banking Attacks**
• Scammer takes control of your phone number
• Uses it to reset banking passwords and bypass 2FA
• Can drain accounts even with strong security measures
• Often targets high-value accounts

**5. Business Email Compromise (BEC)**
• Targets businesses and their banking relationships
• Scammer impersonates CEO or vendor requesting wire transfers
• Uses urgency and authority to bypass normal approval processes
• Can result in massive losses for companies`
			},
			{
				id: 'red-flags',
				title: 'Red Flags',
				type: 'red-flags',
				content: `🚩 **Watch out for these warning signs:**

**Generic greetings like "Dear Customer"**

**Urgent deadlines: "Respond within 30 minutes"**

**Email links that don't match the bank's domain**

**Requests for PINs, 2FA codes, or full account details**

**Poor spelling/grammar in emails or texts**

**Unfamiliar apps or websites asking for banking credentials**

**Calls that pressure you not to hang up or verify with your bank**

**Critical Red Flags That Signal Banking Scams**

🚨 **Immediate Action Required**
• Any message demanding you act "within minutes" 
• Threats of account closure or suspension
• Claims your account will be "frozen permanently"
• Pressure to not discuss with family or bank staff

🚨 **Information Requests**
• Asking for complete PIN numbers over phone
• Requesting online banking passwords via email
• Asking for 2FA codes sent to your phone
• Demanding Social Insurance Numbers for "verification"

🚨 **Communication Issues**
• Emails from non-bank domains (@gmail.com, @yahoo.com)
• Phone numbers that don't match your bank's official numbers
• Poor grammar and spelling in official communications
• Generic greetings instead of using your actual name

🚨 **Payment Method Red Flags**
• Requests for payment via gift cards
• Instructions to wire money to "secure accounts"
• Asking for cryptocurrency payments
• Demands for prepaid credit card numbers

🚨 **Technology Red Flags**
• Apps downloaded outside official app stores
• Websites with slightly different URLs (bnkofcanada.com vs bankofcanada.com)
• Pop-ups claiming to be from your bank
• Unsolicited remote access requests to your computer

🚨 **Behavioral Red Flags**
• Caller refuses to let you hang up and call back
• Insistence on secrecy: "Don't tell anyone about this"
• Creating false urgency about fraudulent activity
• Asking you to lie to bank tellers about transaction purposes`
			},
			{
				id: 'tips',
				title: 'Hot Tips to Stay Safe',
				type: 'tips',
				content: `✅ **Practical ways to protect yourself:**

**Type your bank's URL directly into your browser — don't click links.**

**Use official banking apps only from the App Store/Google Play.**

**Hang up on suspicious calls and call your bank directly using the number on your card.**

**Never share PINs, passwords, or verification codes.**

**Set up two-factor authentication (2FA) for extra protection.**

**Regularly monitor your account for unusual activity.**

**Advanced Banking Security Strategies**

**🔐 Strong Authentication Practices**
• Use unique passwords for banking that you don't use anywhere else
• Enable biometric authentication (fingerprint, face ID) when available
• Never save banking passwords in browsers on shared computers
• Set up account alerts for all transactions, no matter how small

**📱 Secure Banking Habits**
• Only access banking on your personal devices, never public computers
• Always log out completely after banking sessions
• Use your mobile carrier's official banking app, not web browsers when possible
• Keep your banking apps updated to the latest security versions

**🔍 Verification Protocols**
• Always verify suspicious contacts by calling your bank directly
• Use the phone number on your bank card, not numbers provided in messages
• Ask bank representatives for their full name and department
• If someone claims to be from fraud prevention, ask for a case number you can reference

**🛡️ Account Monitoring**
• Check your accounts daily, not just monthly statements
• Set up immediate text/email alerts for all transactions
• Review monthly statements carefully for small unauthorized charges
• Know your spending patterns so you can spot unusual activity quickly

**👨‍👩‍👧‍👦 Family Protection**
• Educate family members about banking scam tactics
• Set up shared family protocols for handling suspicious banking contacts
• Create a family rule: always verify before taking any banking action
• Designate one family member to handle banking emergencies for elderly relatives

**🚨 Emergency Response Plan**
• Know how to immediately freeze your accounts if compromised
• Keep your bank's fraud hotline number easily accessible
• Document any suspicious contacts (screenshots, caller ID, etc.)
• Report attempted scams to help protect others in your community`
			},
			{
				id: 'interactive',
				title: 'Scam vs. Legit Banking Contact',
				type: 'interactive',
				content: `🔍 **Learn to distinguish between legitimate and fraudulent banking communications**

Compare these examples to build your scam detection skills:

**Contact Method Comparison**

| **Legitimate Bank ✅** | **Bank Scam 🚩** |
|------------------------|-------------------|
| Greets you by name | "Dear Customer" |
| Uses secure portals for communication | Sends links by text/email |
| No urgency — gives time to respond | "Act immediately or account will close" |
| Never asks for full PIN or password | Demands sensitive info over phone/email |
| Accepts payment only via secure methods | Requests gift cards, wires, or crypto |

**Real vs. Fake Banking Scenarios**

**Scenario Analysis Practice:**

Think about these situations and identify which are legitimate vs. scams:

1. **Email Alert:** "Your account has been temporarily suspended. Click here to reactivate within 24 hours or it will be permanently closed."

2. **Phone Call:** "This is John from TD Bank fraud prevention. We've detected unusual activity and need to verify your identity. Can you please confirm your PIN?"

3. **Text Message:** "Scotiabank Alert: We've placed a temporary hold on your card due to suspicious activity. Please call 1-800-SCOTIA to review."

4. **App Notification:** "New transaction: $150.00 at Metro. If this wasn't you, tap here to report."

**Analysis:**
1. **SCAM** - Legitimate banks don't suspend accounts via email links
2. **SCAM** - Banks never ask for PINs over the phone
3. **LEGITIMATE** - Directs you to call official number, doesn't ask for info
4. **LEGITIMATE** - Asks you to report, doesn't request sensitive information`,
				interactive: {
					type: 'drag-match',
					data: {
						title: 'Banking Contact: Legitimate vs. Scam',
						instructions: 'Drag each banking contact example to the correct category',
						items: [
							'Greets you by name',
							'"Dear Customer"',
							'Uses secure banking portal',
							'Sends links via text/email',
							'Gives you time to respond',
							'"Act immediately or lose account"',
							'Never asks for full PIN',
							'Demands PIN over phone',
							'Official payment methods only',
							'Requests gift card payments'
						],
						categories: [
							{
								name: 'Legitimate Bank ✅',
								items: ['Greets you by name', 'Uses secure banking portal', 'Gives you time to respond', 'Never asks for full PIN', 'Official payment methods only']
							},
							{
								name: 'Bank Scam 🚩',
								items: ['"Dear Customer"', 'Sends links via text/email', '"Act immediately or lose account"', 'Demands PIN over phone', 'Requests gift card payments']
							}
						]
					}
				}
			},
			{
				id: 'quiz',
				title: 'Quick Interactive Exercise',
				type: 'quiz',
				content: `📝 **Test your banking scam knowledge**

Apply what you've learned to identify safe banking practices.`,
				quiz: [
					{
						id: 'b1',
						question: 'Which of these banking practices is SAFE?',
						options: [
							'Text from "Scotiabank" asking you to click a link within 10 minutes',
							'Call from "fraud prevention" asking for your debit PIN',
							'Logging in by typing your bank\'s URL directly into the browser',
							'Downloading a banking app from a random website'
						],
						correctAnswer: 2,
						explanation: 'Always type your bank\'s URL directly rather than clicking links. This ensures you\'re on the legitimate website.'
					},
					{
						id: 'b2',
						question: 'A caller claims to be from your bank\'s fraud department and asks for your PIN to "verify your identity." What should you do?',
						options: [
							'Give them the PIN since they\'re trying to help',
							'Ask them to verify the last transaction on your account first',
							'Hang up and call your bank directly using the number on your card',
							'Give them only half the PIN to be safe'
						],
						correctAnswer: 2,
						explanation: 'Banks NEVER ask for PINs over the phone. Always hang up and call your bank directly using official numbers.'
					},
					{
						id: 'b3',
						question: 'Which of these is a legitimate way banks communicate account issues?',
						options: [
							'Urgent text messages with links to click',
							'Emails demanding immediate password reset',
							'Secure messages through your online banking portal',
							'Social media direct messages about account problems'
						],
						correctAnswer: 2,
						explanation: 'Banks use secure messaging within your online banking portal for legitimate communications about your account.'
					},
					{
						id: 'b4',
						question: 'You receive a check for $5,000 with instructions to deposit it and wire $4,500 back for "processing fees." This is:',
						options: [
							'A legitimate transaction with normal processing fees',
							'A check fraud scam - the check will bounce',
							'Safe as long as you wait for the check to clear',
							'Only risky if the check amount is larger'
						],
						correctAnswer: 1,
						explanation: 'This is a classic check fraud scam. The check will eventually bounce, leaving you responsible for the full amount you wired.'
					},
					{
						id: 'b5',
						question: 'What\'s the safest way to download your bank\'s mobile app?',
						options: [
							'Click the link in an email from your bank',
							'Search for it on Google and click the first result',
							'Download it directly from the official App Store or Google Play',
							'Get it from your bank\'s social media page'
						],
						correctAnswer: 2,
						explanation: 'Only download banking apps from official app stores (Apple App Store or Google Play Store) to ensure authenticity and security.'
					}
				]
			}
		]
	},

	{
		id: 'social-media-scams',
		title: 'Social Media Impersonation Scam',
		description: 'Identify fake profiles impersonating friends, family, celebrities, and professionals.',
		difficulty: 'intermediate',
		duration: '10-12 mins',
		slides: [
			{
				id: 'introduction',
				title: 'Understanding Social Media Impersonation Scams',
				type: 'introduction',
				content: `🚨 **Understanding Social Media Impersonation Scams**
📱 **Scenario: A Familiar Face, a Fake Crisis**

You're scrolling Instagram, sipping coffee, when a message pops up:

"Hey! I'm in trouble. Can you send me an e-transfer? It's urgent."

The message is from your cousin. Or so it seems. The name matches. The profile photo is right. Even past photos on the timeline seem convincing.

But it's not them.
It's a scammer who cloned their account.

Before you realize it's a scam, you've sent money — and the scammer is gone.

📊 **The Growing Threat**

Social media impersonation scams have skyrocketed. In 2023 alone, over $1.2 billion was stolen globally through scams on platforms like Instagram, Facebook, WhatsApp, LinkedIn, and TikTok.

These scams work because:

They mimic people we trust — friends, family, or public figures.

They use urgency and emotion to bypass rational thinking.

👥 **Who's Most at Risk?**

These scams don't discriminate — but certain groups are more vulnerable:

**Teens & Young Adults**
Often overshare online.
Less experienced with fraud tactics.

**Professionals & Job Seekers**
Targets for fake recruiters or business deals.

**Seniors**
May not recognize red flags.
Easily manipulated by messages from "grandchildren" or "family in trouble."

🔁 **How These Scams Work: The 4-Stage Cycle**

**1. Clone 🪞**
Scammer creates a duplicate profile, copying the original user's name, photos, bio, and friends list.

**2. Contact 💬**
They send friend/follow requests to the real person's connections. Once accepted, they message you directly.

**3. Crisis 🚨**
They invent a situation:
"I'm stuck overseas."
"My wallet was stolen."
"Can you help with a down payment?"

**4. Exploit 💸**
The goal? Get you to send:
Money via e-transfer
Gift cards
Personal information
After that, they disappear.

🎯 **Real-World Example**

In 2022, dozens of fake Facebook profiles were created impersonating Canadian politicians. Messages promised "government grants" — if users first sent a small "processing fee."
💸 Thousands of dollars were stolen before the accounts were removed.

🧠 **Why These Scams Work: The Psychology**

Humans are wired to trust familiar names and faces. These scams bypass your brain's defense mechanisms by:

Using emotional triggers like fear, urgency, or affection.

Exploiting social proof — "they're friends with your friends, so they must be legit."

Targeting your desire to help.`
			},
			{
				id: 'red-flags',
				title: 'Red Flags & Scam Variations',
				type: 'red-flags',
				content: `🚩 **Red Flags & Scam Variations**

👨‍👩‍👧 **1. Family/Friend in Distress**

"Hey, I lost my passport while traveling — can you help?"

🌟 **2. Celebrity/Influencer Giveaways**

"You've won $10,000! Just pay the processing fee."

💼 **3. Professional Impersonation**

"Hi, I'm a recruiter from [Big Company]. We're hiring — click this link."

❤️ **4. Romance Scams**

"Let's get to know each other. I want to visit you — can you send money for my ticket?"

🤲 **5. Charity Scams**

"Please donate to this disaster relief fund. Time is critical!"

🚨 **Critical Warning Signs**

❌ Clone accounts with the same photos, but different usernames.
❌ Urgent requests for money or gift cards.
❌ Weird grammar or off-sounding messages.
❌ Unverified celebrity/influencer accounts asking for money.
❌ Request to move platforms (e.g. "Let's talk on WhatsApp").

🔎 **Analyze Like a Pro: Spot Red Flags**

📱 **Account Red Flags:**

✅ Low follower count

✅ Only a few (often recycled) photos

✅ Bio or links don't match the real person

✅ Recently created account

✅ No verification badge

💬 **Message Red Flags:**

✅ "Hey" or generic greetings

✅ Pushes you to act quickly

✅ Wants money FAST

✅ Won't video call or confirm identity

✅ "Don't tell anyone" — secretive tone`
			},
			{
				id: 'tips',
				title: 'Hot Tips to Stay Safe',
				type: 'tips',
				content: `✅ **Hot Tips to Stay Safe**

👨‍👩‍👧‍👦 **For Everyone:**

Call or text the person directly before sending money.

Never send gift cards or wire transfers based on social media messages.

Report fake accounts immediately using in-app tools.

Verify profiles (look for checkmarks on public figures).

Keep your account private: hide your friends list and contact details.

🔒 **Advanced Safety Tips**

🛡️ **Account Security**

Enable 2-Factor Authentication (2FA)

Regularly review your friends/followers

Avoid posting personal identifiers (birthdays, addresses)

🧠 **Verification Techniques**

Use voice or video to confirm identity

Compare the suspicious profile to the real one

Use reverse image search on profile pictures

👵 **Family Awareness**

Teach seniors and younger relatives about these scams

Set up family code words for real emergencies

💼 **Workplace Protection**

Always verify job/investment opportunities through official channels

Be skeptical of offers that seem "too good to be true"

🚨 **If You've Been Targeted**

**Act Fast:**

Stop communicating

Don't send anything further

Report the account immediately

Screenshot all conversations

Warn the real person (they may not know they're being impersonated)

**Then:**

Tell your friends/family

Monitor your social and financial accounts

Report to your local cybercrime authority or police

Save all evidence`
			},
			{
				id: 'interactive',
				title: 'Interactive Activity',
				type: 'interactive',
				content: `🧠 **INTERACTIVE ACTIVITY**

🎮 **Drag and Drop: Spot the Scam!**

**Instructions:** Drag each message into the correct column:
"Likely Legit" ✅ or "Red Flag Scam" 🚩

📩 **Messages:**

"Hey! Can you help me out real quick? I can't talk on the phone but need $200 urgently."

"Congrats! You've been selected for a secret Tesla giveaway. Just pay $50 for delivery."

"Hi! Long time no see. Want to catch up sometime soon?"

"My grandma is in the hospital. Can you send me money for her meds, please don't tell anyone."

"We're hiring! Visit careers.microsoft.com to apply officially."

"I lost my wallet while traveling. Can you wire me some money through Western Union?"

✅ **Likely Legit**	🚩 **Red Flag Scam**
3. Want to catch up sometime?	1. Urgent money, can't call
5. Microsoft careers site	2. Tesla scam, pay to receive
	4. Secret money request for hospital meds
	6. Lost wallet, asks for Western Union transfer

✅ **Drag-and-Drop Complete? Great job!**
If you're unsure about a message — always verify.

🧭 **Ready to Practice?**

Test your skills in a real-time simulation!
Chat with an AI scammer and see if you can spot the red flags before it's too late.

👉 **[Start Simulation →]**`
			}
		]
	},
	{
		id: 'romance-scams',
		title: 'Romance Scam Basics',
		description: 'Understand how romance scammers operate and protect yourself from emotional manipulation.',
		difficulty: 'intermediate',
		duration: '10-12 mins',
		slides: [
			{
				id: 'introduction',
				title: 'Understanding Romance Scams',
				type: 'introduction',
				content: `❤️ **Imagine this:** You join a dating app or social platform and meet someone who seems perfect. They shower you with affection, call you their soulmate, and talk about a future together. But soon, they mention a crisis — a medical bill, travel expense, or business problem. They ask you to send money because "love means trust."

Weeks or months later, you're left heartbroken and financially drained.

📊 **The Reality:** Romance scams cost victims more than $1.3 billion worldwide in 2022 — making them the most expensive type of online scam. Victims lose not only money, but also emotional security.

👥 **Who's at Risk?**

**Divorced or widowed adults** seeking companionship.

**Young adults** new to online dating.

**Anyone** who is lonely or looking for meaningful connection.

**How Romance Scams Work**

Romance scams typically follow the **Charm → Bond → Crisis → Exploit** cycle:

**Charm 🌹**
Scammer sets up a fake profile with stolen photos. They're often "successful professionals" (engineers, military, doctors) working abroad.

**Bond 💌**
They message daily, building emotional connection. Victims feel flattered and wanted.

**Crisis 🚨**
After weeks of trust-building, the scammer introduces a problem:
• Hospital emergency
• Stolen wallet while traveling
• Business deal that needs "temporary funds"

**Exploit 💸**
Victim sends money — often multiple times. The scammer disappears once funds dry up, or continues extracting until suspicion arises.

**Real-World Example**

In 2021, a Toronto woman lost $450,000 to a romance scammer she met online. The man claimed to be a U.S. engineer working overseas. He built trust for months, then requested money for "business emergencies." By the time she realized it was a scam, her retirement savings were gone.

**💔 The Emotional Impact**

Romance scams are particularly devastating because they exploit our deepest human need for connection and love. Victims often feel ashamed and embarrassed, making them less likely to report the crime or seek help. The emotional trauma can last long after the financial loss.`
			},
			{
				id: 'red-flags',
				title: 'Red Flags and Scam Variations',
				type: 'red-flags',
				content: `**Common Romance Scam Variations**

**1. Military Romance Scam 🎖️**

Scammer pretends to be a soldier overseas.

Claims they can't access funds while deployed and need help.

**2. Wealthy Businessperson Abroad 💼**

Presents as a successful entrepreneur stuck in customs or facing a financial snag.

**3. Emergency Medical Crisis 🏥**

Claims a family member (or they themselves) needs urgent surgery.

**4. Visa or Travel Scam ✈️**

Says they want to visit but need money for airfare, visas, or "clearance."

**5. Crypto Investment Romance 💰**

Builds a romantic relationship, then convinces victim to "invest together" in cryptocurrency through a fake platform.

**Red Flags to Watch For**

🚩 **Profile pictures that look too perfect** (often stolen from models or real people).

🚩 **They fall in love quickly** and talk about marriage within weeks.

🚩 **Avoid video calls, live chats, or meeting in person.**

🚩 **Claim to be working/living abroad** in places that make visits hard.

🚩 **Ask for secrecy:** "Don't tell anyone, they wouldn't understand."

🚩 **Constantly bring up financial emergencies.**

🚩 **Request payment via gift cards, wire transfers, or crypto.**

**🚨 Critical Warning Signs:**

❌ **Perfect profile photos** (reverse image search often reveals stolen pictures)
❌ **Immediate declarations of love** (within days or weeks)
❌ **Avoidance of live interaction** (no video calls, phone calls, or meetings)
❌ **Remote location claims** (deployed military, working overseas, traveling)
❌ **Secrecy demands** (keep relationship private from friends/family)
❌ **Financial emergencies** (medical bills, travel problems, business issues)
❌ **Untraceable payment requests** (gift cards, wire transfers, cryptocurrency)

**📱 Profile Analysis Red Flags:**

- **Photos too professional** or model-like
- **Limited photos** or photos that don't match the person's claimed lifestyle
- **Inconsistent background stories** about work, family, or location
- **Recently created profiles** with minimal connections or activity
- **Vague personal details** that can't be verified
- **Claims of high-status professions** (doctor, engineer, military officer) working abroad

**💬 Communication Red Flags:**

- **Love bombing** - excessive affection and attention early on
- **Scripted messages** that feel rehearsed or generic
- **Poor grammar** inconsistent with claimed education level
- **Time zone inconsistencies** in communication patterns
- **Avoidance of specific questions** about their life or background
- **Pressure for quick commitment** or exclusive relationship

Remember: **Legitimate relationships develop naturally over time, with increasing transparency and verification, not secrecy and financial requests.**`
			},
			{
				id: 'tips',
				title: 'Hot Tips to Stay Safe',
				type: 'tips',
				content: `**Hot Tips to Stay Safe**

✅ **Do a reverse image search.** Stolen photos are common in fake profiles.

✅ **Take it slow.** Real relationships develop over time.

✅ **Never send money to someone you haven't met in person.**

✅ **Insist on video calls.** Scammers often avoid live interaction.

✅ **Talk to trusted friends/family.** They can provide perspective if something feels off.

✅ **Report suspicious profiles** on dating apps immediately.

✅ **Trust your gut.** If the story feels dramatic, scripted, or rushed, it probably is.

**🛡️ Advanced Romance Scam Protection**

**1. Profile Verification Strategies**
• **Reverse image search:** Use Google Images to check if profile photos appear elsewhere online
• **Social media cross-check:** Look for consistent social media presence across platforms
• **Video call requirements:** Insist on live video calls before developing deeper feelings
• **Background verification:** Ask specific questions about their claimed location, job, and background

**2. Communication Safety**
• **Gradual development:** Healthy relationships develop trust and intimacy slowly over time
• **Transparency:** Legitimate partners are open about their life, family, and circumstances
• **Consistency:** Watch for contradictions in their stories or timeline
• **Local knowledge:** Test their claimed location with specific local questions

**3. Financial Protection**
• **Never send money:** Legitimate partners don't ask for financial help before meeting
• **No gift cards:** Real emergencies are never solved with gift cards or wire transfers
• **Separate finances:** Keep your financial information completely private
• **Emergency skepticism:** Be especially cautious of urgent financial "emergencies"

**4. Emotional Protection**
• **Support network:** Share your online relationships with trusted friends and family
• **Reality checks:** Get outside perspective if someone seems "too good to be true"
• **Pace yourself:** Don't let anyone rush you into emotional or financial commitments
• **Self-worth:** Remember that you deserve genuine love that doesn't come with a price tag

**🚨 If You've Been Targeted:**

**Immediate Actions:**
1. **Stop all communication** with the suspected scammer
2. **Don't send any more money** or personal information
3. **Save evidence:** Screenshots of conversations, photos, and financial transactions
4. **Report to authorities:**
   - Canadian Anti-Fraud Centre: 1-888-495-8501
   - Local police if money was sent
   - Dating platform where you met them
   - IC3.gov for international online crimes

**Recovery Steps:**
5. **Monitor your identity** if personal information was shared
6. **Contact your bank** if financial information was compromised
7. **Seek emotional support** from friends, family, or professional counselors
8. **Don't blame yourself** - these scammers are professional manipulators

**Remember:** Love should never cost money. Real relationships are built on mutual respect, trust, and gradual development - not urgency, secrecy, and financial requests.`
			}
		]
	},
	{
		id: 'lottery-scams',
		title: 'Lottery Scam Basics',
		description: 'Recognize fake lottery winnings and prize notifications.',
		difficulty: 'beginner',
		duration: '10-12 mins',
		slides: [
			{
				id: 'introduction',
				title: 'Understanding Lottery Scams',
				type: 'introduction',
				content: `🎉 **Imagine this:** You get an email that reads:
"Congratulations! You've won the International Mega Millions Lottery worth $2.5 million. To claim your prize, please reply with your details and pay a small processing fee of $50."

Your heart races. You don't remember buying a ticket — but maybe you entered some contest online? Before you know it, you're convinced you're a millionaire. Unfortunately, this is one of the oldest and most widespread scams in the world.

📊 **The Reality:** Lottery and sweepstakes scams steal hundreds of millions of dollars annually. Victims are tricked into paying upfront fees or handing over personal information, only to discover there was never any prize to begin with.

👥 **Who's at Risk?**

**Seniors** who may trust official-looking letters.

**Young adults** lured by the promise of easy money.

**Anyone** who gets caught up in the dream of sudden wealth.

**⚠️ Important Religious Consideration:** It's worth noting that in Islamic teachings, lotteries and gambling are considered haram (forbidden). Many religious communities have similar teachings about gambling. This means that even legitimate lotteries may conflict with religious beliefs, making it easier to recognize and reject lottery scams.

**How Lottery Scams Work**

Lottery scams usually follow this pattern: **The Win → The Hook → The Payment → The Drain.**

**The Win 🏆**
Victim receives a message (email, text, mail, or social media) saying they've won a big prize.

**The Hook 🎣**
Scammer builds excitement: "You are one of only 5 grand prize winners!"

**The Payment 💳**
Victim is asked to pay taxes, fees, or handling charges upfront to "release" the prize.

**The Drain 💸**
Once the victim pays, scammers ask for more: customs fees, courier charges, legal verification. Payments continue until the victim catches on — or runs out of money.

**Real-World Example**

In 2021, the RCMP warned Canadians about lottery scams where victims were told they'd won millions in a U.S. sweepstakes. To claim, they were pressured into paying "customs duties" and "release fees." Victims lost tens of thousands before realizing no prize existed.

**Religious Protection Note:** For those following Islamic teachings, remember that since lotteries are haram, any lottery "win" notification can immediately be recognized as a scam, providing an additional layer of protection against these fraudulent schemes.`
			},
			{
				id: 'red-flags',
				title: 'Red Flags and Scam Variations',
				type: 'red-flags',
				content: `**Common Lottery Scam Variations**

**1. Email or Letter Notifications 📧📬**

Claim to be from "International Lottery Commission" or "EuroMillions."

Include official-looking logos and reference numbers.

**2. Text Message Alerts 📱**

Short messages: "Congrats, you won $1 million! Reply YES to claim."

Designed to lure quick responses.

**3. Social Media Giveaways 🎯**

Fake accounts message users: "You've been selected in our special draw!"

**4. Check Fraud Prize Delivery 🏦**

Victim receives a fake cheque for part of the winnings.

Told to deposit it and wire back fees.

Cheque later bounces, leaving victim in debt.

**5. Romance-Lottery Combo ❤️🎲**

Scammer posing as a romantic interest "shares" lottery winnings.

Victim is asked to pay a transfer or legal fee to access funds.

**Red Flags to Watch For**

🚩 **You didn't buy a ticket — but you "won."**

🚩 **Asked to pay taxes or fees before receiving money.**

🚩 **Pressure to keep your win "secret" until the prize is released.**

🚩 **Messages full of typos, bad grammar, or generic greetings.**

🚩 **Claims from foreign lotteries you've never heard of.**

🚩 **Requests for personal info: banking details, passport, or SIN.**

🚩 **Overpayment cheques that later bounce.**

**⚠️ Religious Red Flag:** Since lotteries are haram in Islam, any lottery-related communication can immediately be identified as either a scam or something that conflicts with religious beliefs. This provides an automatic warning system for those following Islamic teachings.

**🚨 Critical Warning Signs:**

❌ **Unexpected "wins" without participation**
❌ **Upfront payment demands for any reason**
❌ **Secrecy requirements about your "prize"**
❌ **Poor grammar and spelling in official communications**
❌ **Foreign lottery claims (especially from countries you've never visited)**
❌ **Personal information requests before prize verification**
❌ **Check overpayment schemes with "return the difference" requests**

**📋 Lottery Scam Detection Checklist:**

- Did I actually buy a ticket for this lottery? (If no = 100% scam)
- Are they asking for money upfront? (If yes = 100% scam)
- Do they want me to keep it secret? (If yes = 100% scam)
- Is the grammar and spelling professional? (If no = likely scam)
- Can I verify this on the official lottery website? (If no = likely scam)

Remember: **Legitimate lotteries NEVER require upfront payments and you cannot win lotteries you never entered.**`
			},
			{
				id: 'tips',
				title: 'Hot Tips to Stay Safe',
				type: 'tips',
				content: `**Hot Tips to Stay Safe**

✅ **If you didn't enter, you can't win. Period.**

✅ **Real lotteries don't ask for upfront fees.** Taxes are taken from winnings, not paid in advance.

✅ **Check official sources.** Verify with the official lottery operator's website.

✅ **Be skeptical of international lotteries.** If it's not your country's official draw, it's likely fake.

✅ **Don't share personal info.** Scammers use details for identity theft.

✅ **Ignore secrecy requests.** Real organizations never ask you to keep wins confidential.

✅ **Talk it out.** Excitement clouds judgment — ask a trusted friend or family member.

**🛡️ Advanced Lottery Scam Protection**

**1. Verification Strategies**
• **Official Website Check:** Look up the lottery on its official government-run website
• **Contact Direct:** Call the official lottery organization using numbers from their website, not from the suspicious message
• **Government Verification:** Check with consumer protection agencies about known lottery scams
• **News Search:** Search for recent news about the specific "lottery" that contacted you

**2. Communication Analysis**
• **Email Headers:** Check if emails come from official domains (.gov, official lottery domains)
• **Language Quality:** Professional lotteries use proper grammar and spelling
• **Personalization:** Real lotteries use your full name, not generic greetings
• **Official Branding:** Compare logos and formatting with official lottery materials

**3. Financial Protection**
• **Never Pay Upfront:** Legitimate winnings never require advance payments
• **Avoid Wire Transfers:** Scammers prefer untraceable payment methods
• **Reject Check Schemes:** Don't deposit "advance" checks that require you to send money back
• **No Gift Cards:** Real organizations never ask for payment via gift cards or cryptocurrency

**4. Personal Information Safety**
• **Limit Sharing:** Never provide SIN, banking details, or passport information
• **Identity Theft Prevention:** Scammers use personal details for fraudulent accounts
• **Document Security:** Don't send copies of official documents
• **Financial Privacy:** Protect bank account and credit card information

**⚠️ Religious Protection:** For those following Islamic teachings, since participating in lotteries is haram, any lottery communication should be immediately dismissed. This religious guideline provides built-in protection against these scams.

**🚨 If You've Been Targeted:**

**Immediate Actions:**
1. **Stop all communication** with the lottery scammers
2. **Don't send any money** or personal information
3. **Report to authorities:**
   - Canadian Anti-Fraud Centre: 1-888-495-8501
   - Local police if money was already sent
   - Internet Crime Complaint Center (IC3) for online scams
4. **Monitor your identity** if personal information was shared
5. **Warn others** by reporting the scam to friends and family

**Remember:** Real lottery organizations are transparent, professional, and never rush you into payments. When in doubt, always verify independently through official channels.`
			}
		]
	}
];
