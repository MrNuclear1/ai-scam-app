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
			}
		]
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
				content: `📱 **Imagine this:** You're scrolling Instagram when you get a message from your cousin.
"Hey! I'm in trouble and need some quick money. Can you send me an e-transfer?"

The profile photo and name look identical to your cousin's. But in reality, it's not them — it's a scammer who cloned their account. By the time you realize, the money is long gone.

📊 **The Reality:** Social media impersonation scams are exploding worldwide. In 2023, more than $1.2 billion was stolen through scams on platforms like Facebook, Instagram, TikTok, and WhatsApp. These scams are effective because victims believe they're talking to someone they know or trust.

👥 **Who's at Risk?**

**Teens and young adults** who share personal info openly.

**Professionals** whose reputations scammers exploit.

**Seniors** who may trust messages from "family members."

**How Social Media Impersonation Scams Work**

These scams typically follow the **Clone → Contact → Crisis → Exploit** cycle:

**Clone 🪞**
Scammer copies someone's profile — photos, bio, friends list — and creates a nearly identical account.

**Contact 💬**
They send friend/follow requests to people connected to the real account. Once accepted, they start conversations.

**Crisis 🚨**
Scammer creates urgency: "I lost my wallet, please send money," or "I need help with a business investment."

**Exploit 💸**
Victims send money, gift cards, or share personal information (like banking details). Scammer blocks and moves on to the next target.

**Real-World Example**

In 2022, scammers on Facebook created dozens of fake profiles impersonating well-known Canadian politicians and executives. They sent messages offering "government grants" if users paid a small upfront fee. Thousands of dollars were stolen before the fake accounts were shut down.

**🎭 The Psychology Behind These Scams**

Social media impersonation scams are particularly effective because they exploit our trust in familiar faces and names. When we see a message from someone we "know," our guard naturally comes down. Scammers count on this psychological vulnerability to bypass our normal skepticism.`
			},
			{
				id: 'red-flags',
				title: 'Red Flags and Scam Variations',
				type: 'red-flags',
				content: `**Common Social Media Impersonation Scam Variations**

**1. Family/Friend in Distress 👨‍👩‍👧**

Message: "I'm stuck overseas, need money for a flight home."

Exploits concern for loved ones.

**2. Celebrity/Famous Person Scams 🌟**

Scammers impersonate influencers or musicians.

Promise giveaways, investment opportunities, or exclusive access.

**3. Business/Professional Impersonation 💼**

Fake profiles of recruiters, executives, or HR managers.

Offer fake jobs or investment deals.

**4. Romance Impersonation ❤️**

Clone someone's profile to start a fake relationship.

Eventually request money or "help with travel."

**5. Charity/Donation Scams 🤲**

Fake accounts impersonate charities or community leaders.

Solicit donations for "urgent causes" (often disasters or medical crises).

**Red Flags to Watch For**

🚩 **Duplicate accounts with same name and photos**

🚩 **Urgent requests for money or gift cards**

🚩 **Messages that don't "sound like" the real person**

🚩 **Requests to move conversations off-platform (WhatsApp, Telegram)**

🚩 **Poor grammar or awkward phrasing in messages**

🚩 **Unverified celebrity/influencer profiles promising giveaways**

🚩 **New accounts with few followers but many friend requests**

**🚨 Critical Warning Signs:**

❌ **Duplicate or cloned accounts** with identical photos but different details
❌ **Urgent financial requests** especially via gift cards or wire transfers
❌ **Communication style mismatch** - doesn't sound like the real person
❌ **Platform switching requests** - wants to move to WhatsApp, Telegram, etc.
❌ **Poor language quality** - grammar and spelling inconsistent with the real person
❌ **Unverified celebrity profiles** offering prizes or investment opportunities
❌ **New accounts with suspicious activity** - recently created but sending many requests

**📱 Account Analysis Red Flags:**

- **Profile inconsistencies:** Different bio details, follower counts, or posting history
- **Limited photos:** Only a few recycled images from the real account
- **Recent creation date:** Account was made very recently
- **Suspicious followers:** Fake or bot followers instead of real connections
- **Missing verification:** Celebrity/business accounts without official verification badges
- **Contact information mismatch:** Different email, phone, or website links

**💬 Message Analysis Red Flags:**

- **Urgent tone:** Creating immediate pressure to act quickly
- **Financial focus:** Conversations quickly turn to money or financial help
- **Generic greetings:** Using "Hello" instead of the person's usual greeting style
- **Spelling/grammar errors:** Inconsistent with the real person's education or background
- **Secretive requests:** Asking you not to tell others about the conversation
- **Off-platform pressure:** Insisting on moving to other messaging apps

Remember: **When in doubt about any social media contact requesting money or personal information, verify through a separate communication channel.**`
			},
			{
				id: 'tips',
				title: 'Hot Tips to Stay Safe',
				type: 'tips',
				content: `**Hot Tips to Stay Safe**

✅ **Double-check.** If a "friend" asks for money, call/text them directly to confirm.

✅ **Report fake profiles.** Use the platform's reporting tools immediately.

✅ **Check verification badges.** Real celebrities/influencers are often verified.

✅ **Set profile privacy.** Limit who can see your friends list and photos.

✅ **Don't send money or gift cards.** Especially through social media messaging.

✅ **Educate family members.** Seniors are prime targets for "grandchild in trouble" scams.

✅ **Be skeptical.** If something feels off, it probably is.

**🛡️ Advanced Social Media Protection**

**1. Account Security Strategies**
• **Privacy settings:** Make your friends list, photos, and personal details private
• **Two-factor authentication:** Enable 2FA on all social media accounts
• **Regular account audits:** Periodically review your friends/followers list
• **Limited personal information:** Avoid sharing sensitive details like full birth dates, locations

**2. Verification Techniques**
• **Direct contact:** Always verify unusual requests through phone calls or in-person contact
• **Multiple channels:** Use different communication methods to confirm identity
• **Account comparison:** Compare suspicious accounts with the original profile
• **Reverse image search:** Check if profile photos appear elsewhere online

**3. Family Protection**
• **Education:** Teach family members, especially seniors, about impersonation scams
• **Code words:** Establish family code words for emergency financial requests
• **Regular communication:** Stay in touch with family to know their real situations
• **Awareness campaigns:** Share scam warnings with your social network

**4. Professional Protection**
• **LinkedIn verification:** Be extra cautious with professional networking requests
• **Company verification:** Verify business opportunities through official company channels
• **Background checks:** Research any "professional" opportunities thoroughly
• **Official channels:** Use company websites and official contact information

**🚨 If You've Been Targeted:**

**Immediate Actions:**
1. **Stop all communication** with the suspicious account
2. **Don't send any money** or personal information
3. **Report the fake account** to the platform immediately
4. **Screenshot evidence:** Save conversations and profile information
5. **Warn the real person** that their identity is being impersonated

**Recovery Steps:**
6. **Alert your network:** Warn friends and family about the impersonation
7. **Monitor your accounts:** Watch for any unauthorized access or changes
8. **Report to authorities:** Contact police if money was lost
9. **Document everything:** Keep records of all communications and financial transactions

**Platform-Specific Tips:**

**Facebook/Instagram:**
• Report impersonation through "Report" → "Fake Account"
• Check for verification badges on celebrity/business accounts
• Be cautious of friend requests from existing contacts

**LinkedIn:**
• Verify professional connections through official company channels
• Be suspicious of job offers that seem too good to be true
• Check the person's full profile and connections

**WhatsApp/Telegram:**
• Verify contact identity before engaging in financial discussions
• Be cautious of group invitations from unknown numbers
• Use voice/video calls to confirm identity

**Remember:** Real friends and family will understand if you need to verify their identity before sending money. Legitimate businesses and celebrities don't randomly contact individuals for financial requests.`
			}
		]
	}
];
