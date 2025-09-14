"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-sage-600/95 backdrop-blur-sm border-b border-sage-700 sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-2">
					<span className="text-2xl font-bold text-white">
						Scamproof
					</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-8">
							<Link href="/lessons" className="text-white hover:text-sage-100 px-3 py-2 text-sm font-medium transition-colors duration-200">
									Lessons
								</Link>
								<Link href="/simulator" className="text-white hover:text-sage-100 px-3 py-2 text-sm font-medium transition-colors duration-200">
									Simulator
								</Link>
							<Link href="/games" className="text-white hover:text-sage-100 px-3 py-2 text-sm font-medium transition-colors duration-200">
								Games
							</Link>
							<Link href="/link-recognition" className="text-white hover:text-sage-100 px-3 py-2 text-sm font-medium transition-colors duration-200">
									Link Recognition
								</Link>
							<a 
								href="https://www.services.rcmp-grc.gc.ca/chooser-eng.html?ipeReferer=CAFCFRS" 
								target="_blank" 
								rel="noopener noreferrer"
								className="text-white hover:text-sage-100 px-3 py-2 text-sm font-medium transition-colors duration-200"
							>
								Report a Scam/Fraud
							</a>
							<Link href="/reviews" className="text-white hover:text-sage-100 px-3 py-2 text-sm font-medium transition-colors duration-200">
									Reviews
								</Link>
						</div>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
								<button
									onClick={() => setIsOpen(!isOpen)}
										className="text-white hover:text-sage-100 p-2"
						>
							<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								{isOpen ? (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								) : (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div className="md:hidden">
								<div className="px-2 pt-2 pb-3 space-y-1 border-t border-sage-700">
										<Link href="/lessons" className="text-white hover:text-sage-100 block px-3 py-2 text-base font-medium transition-colors duration-200">
										Lessons
									</Link>
											<Link href="/simulator" className="text-white hover:text-sage-100 block px-3 py-2 text-base font-medium transition-colors duration-200">
										Simulator
									</Link>
										<Link href="/games" className="text-white hover:text-sage-100 block px-3 py-2 text-base font-medium transition-colors duration-200">
								Games
							</Link>
											<Link href="/link-recognition" className="text-white hover:text-sage-100 block px-3 py-2 text-base font-medium transition-colors duration-200">
										Link Recognition
									</Link>
											<a 
												href="https://www.services.rcmp-grc.gc.ca/chooser-eng.html?ipeReferer=CAFCFRS" 
												target="_blank" 
												rel="noopener noreferrer"
														className="text-white hover:text-sage-100 block px-3 py-2 text-base font-medium transition-colors duration-200"
							>
								Report a Scam/Fraud
							</a>
											<Link href="/reviews" className="text-white hover:text-sage-100 block px-3 py-2 text-base font-medium transition-colors duration-200">
										Reviews
									</Link>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
