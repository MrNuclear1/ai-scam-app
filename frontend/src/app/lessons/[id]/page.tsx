"use client";
import { useState } from "react";
import { notFound } from "next/navigation";
import { lessons } from "@/data/lessons";
import { getPersonaByLessonId } from "@/data/personas";

// Kahoot-style interactive game component
function KahootStyleGame({ data }: { data: any }) {
	const [currentScenario, setCurrentScenario] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
	const [showResult, setShowResult] = useState(false);
	const [score, setScore] = useState(0);
	const [gameComplete, setGameComplete] = useState(false);

	const scenario = data.scenarios[currentScenario];
	const totalScenarios = data.scenarios.length;

	const handleAnswerSelect = (optionIndex: number) => {
		if (showResult) return;
		
		setSelectedAnswer(optionIndex);
		setShowResult(true);
		
		if (scenario.options[optionIndex].correct) {
			setScore(score + 1);
		}
	};

	const handleNext = () => {
		if (currentScenario < totalScenarios - 1) {
			setCurrentScenario(currentScenario + 1);
			setSelectedAnswer(null);
			setShowResult(false);
		} else {
			setGameComplete(true);
		}
	};

	const resetGame = () => {
		setCurrentScenario(0);
		setSelectedAnswer(null);
		setShowResult(false);
		setScore(0);
		setGameComplete(false);
	};

	if (gameComplete) {
		const percentage = Math.round((score / totalScenarios) * 100);
		return (
			<div className="mt-6 p-8 bg-[#0F172A] rounded-lg text-center">
				<h3 className="text-2xl font-bold text-[#E8EEF6] mb-4">🎉 Game Complete!</h3>
				<div className="mb-6">
					<div className="text-4xl font-bold text-[#20C997] mb-2">{score}/{totalScenarios}</div>
					<div className="text-lg text-[#CBD5E1]">{percentage}% Correct</div>
				</div>
				<div className="mb-6">
					{percentage >= 80 ? (
						<div className="text-green-400">🏆 Excellent! You're well-prepared to spot tech scams!</div>
					) : percentage >= 60 ? (
						<div className="text-yellow-400">👍 Good work! Review the red flags to improve further.</div>
					) : (
						<div className="text-orange-400">💪 Keep learning! Practice makes perfect at spotting scams.</div>
					)}
				</div>
				<button
					onClick={resetGame}
					className="bg-gradient-to-r from-[#20C997] to-[#3BA4F7] hover:from-[#1BA085] hover:to-[#2A8EE6] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
				>
					Play Again
				</button>
			</div>
		);
	}

	return (
		<div className="mt-6 p-6 bg-[#0F172A] rounded-lg">
			<div className="mb-6">
				<div className="flex justify-between items-center mb-4">
					<h3 className="text-xl font-bold text-[#E8EEF6]">{data.gameTitle}</h3>
					<div className="text-sm text-[#94A3B8]">
						Question {currentScenario + 1} of {totalScenarios} | Score: {score}/{currentScenario + (showResult ? 1 : 0)}
					</div>
				</div>
				<div className="w-full bg-[#374151] rounded-full h-2 mb-4">
					<div 
						className="bg-gradient-to-r from-[#20C997] to-[#3BA4F7] h-2 rounded-full transition-all duration-300"
						style={{ width: `${((currentScenario + 1) / totalScenarios) * 100}%` }}
					></div>
				</div>
			</div>

			<div className="mb-6">
				<h4 className="text-lg font-semibold text-[#E8EEF6] mb-4">{scenario.question}</h4>
				<div className="grid grid-cols-1 gap-3">
					{scenario.options.map((option: any, index: number) => {
						let buttonClass = "p-4 rounded-lg text-left transition-all duration-200 border-2 ";
						
						if (!showResult) {
							buttonClass += "border-[#374151] hover:border-[#3BA4F7] bg-[#1E293B] hover:bg-[#374151] text-[#CBD5E1] cursor-pointer";
						} else {
							if (option.correct) {
								buttonClass += "border-green-500 bg-green-900/30 text-green-100";
							} else if (selectedAnswer === index) {
								buttonClass += "border-red-500 bg-red-900/30 text-red-100";
							} else {
								buttonClass += "border-[#374151] bg-[#1E293B] text-[#6B7280]";
							}
						}

						return (
							<button
								key={index}
								onClick={() => handleAnswerSelect(index)}
								className={buttonClass}
								disabled={showResult}
							>
								<div className="flex items-center">
									<div className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center text-sm font-bold ${
										option.color === 'green' ? 'bg-green-600' : 'bg-red-600'
									} text-white`}>
										{index + 1}
									</div>
									<span className="font-medium">{option.text}</span>
									{showResult && option.correct && (
										<span className="ml-auto text-green-400">✓</span>
									)}
									{showResult && selectedAnswer === index && !option.correct && (
										<span className="ml-auto text-red-400">✗</span>
									)}
								</div>
							</button>
						);
					})}
				</div>
			</div>

			{showResult && (
				<div className="mb-6 p-4 bg-[#1E293B] rounded-lg">
					<div className="flex items-start mb-3">
						<div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
							scenario.options[selectedAnswer!].correct ? 'bg-green-600' : 'bg-red-600'
						} text-white text-lg`}>
							{scenario.options[selectedAnswer!].correct ? '✓' : '✗'}
						</div>
						<div>
							<div className={`font-semibold ${
								scenario.options[selectedAnswer!].correct ? 'text-green-400' : 'text-red-400'
							}`}>
								{scenario.options[selectedAnswer!].correct ? 'Correct!' : 'Incorrect'}
							</div>
							<div className="text-sm text-[#94A3B8]">Category: {scenario.category}</div>
						</div>
					</div>
					<p className="text-[#CBD5E1] text-sm leading-relaxed">{scenario.explanation}</p>
				</div>
			)}

			{showResult && (
				<div className="text-center">
					<button
						onClick={handleNext}
						className="bg-gradient-to-r from-[#20C997] to-[#3BA4F7] hover:from-[#1BA085] hover:to-[#2A8EE6] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
					>
						{currentScenario < totalScenarios - 1 ? 'Next Question →' : 'View Results →'}
					</button>
				</div>
			)}
		</div>
	);
}

// Generate static params for all lessons
export function generateStaticParams() {
	return lessons.map((lesson) => ({
		id: lesson.id,
	}));
}

export default function LessonDetailPage({ params }: { params: { id: string } }) {
	const lesson = lessons.find(l => l.id === params.id);
	if (!lesson) notFound();
	
	// FORCE slides to exist and show debugging info
	if (!lesson.slides || lesson.slides.length === 0) {
		return (
			<div className="min-h-screen w-full bg-[#0B0F14]">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<div className="bg-[#1E293B] rounded-xl p-8 text-center">
						<h1 className="text-2xl font-bold text-[#E8EEF6] mb-4">🚨 Debug: No Slides Found</h1>
						<p className="text-[#CBD5E1] mb-6">
							Lesson ID: {lesson.id}<br/>
							Has slides property: {lesson.slides ? 'Yes' : 'No'}<br/>
							Slides length: {lesson.slides?.length || 0}<br/>
							This indicates a data structure issue.
						</p>
						<a 
							href="/lessons" 
							className="bg-gradient-to-r from-[#20C997] to-[#3BA4F7] hover:from-[#1BA085] hover:to-[#2A8EE6] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
						>
							← Back to Lessons
						</a>
					</div>
				</div>
			</div>
		);
	}
	
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	const correspondingPersona = getPersonaByLessonId(lesson.id);
	const currentSlide = lesson.slides[currentSlideIndex];
	const totalSlides = lesson.slides.length;

	const nextSlide = () => {
		if (currentSlideIndex < totalSlides - 1) {
			setCurrentSlideIndex(currentSlideIndex + 1);
		}
	};

	const prevSlide = () => {
		if (currentSlideIndex > 0) {
			setCurrentSlideIndex(currentSlideIndex - 1);
		}
	};

	const goToSlide = (index: number) => {
		setCurrentSlideIndex(index);
	};

	const renderSlideContent = (slide: any) => {
		switch (slide.type) {
			case 'interactive':
				return (
					<div>
						<div className="prose prose-invert max-w-none mb-8">
							<p className="text-lg text-[#CBD5E1] leading-relaxed whitespace-pre-line">
								{slide.content}
							</p>
						</div>
						{slide.interactive && slide.interactive.type === 'drag-match' && (
							<div className="mt-6 p-6 bg-[#0F172A] rounded-lg">
								<h3 className="text-lg font-semibold text-[#E8EEF6] mb-4">Interactive Exercise</h3>
								<p className="text-[#94A3B8] mb-4">Drag the items to the correct categories:</p>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{slide.interactive?.data?.categories?.map((category: any) => (
										<div key={category.id} className="bg-[#1E293B] p-4 rounded-lg">
											<h4 className="text-[#E8EEF6] font-semibold mb-3">{category.name}</h4>
											<div className="space-y-2">
												{slide.interactive?.data?.items
													?.filter((item: any) => item.category === category.id)
													.map((item: any) => (
													<div key={item.id} className="bg-[#374151] text-[#CBD5E1] p-2 rounded text-sm">
														{item.text}
													</div>
												))}
											</div>
										</div>
									))}
								</div>
							</div>
						)}
						{slide.interactive && slide.interactive.type === 'kahoot-style' && (
							<KahootStyleGame data={slide.interactive.data} />
						)}
					</div>
				);
			case 'quiz':
				return (
					<div>
						<div className="prose prose-invert max-w-none mb-8">
							<p className="text-lg text-[#CBD5E1] leading-relaxed whitespace-pre-line">
								{slide.content}
							</p>
						</div>
						{slide.quiz && slide.quiz.length > 0 && (
							<div className="mt-8 p-6 bg-[#0F172A] rounded-lg">
								{slide.quiz.map((question: any, index: number) => (
									<div key={question.id} className="mb-8 last:mb-0">
										<h3 className="text-lg font-semibold text-[#E8EEF6] mb-4">
											Question {index + 1}: {question.question}
										</h3>
										<div className="space-y-2 mb-4">
											{question.options.map((option: string, optionIndex: number) => (
												<div 
													key={optionIndex} 
													className={`p-3 rounded-lg cursor-pointer transition-colors ${
														optionIndex === question.correctAnswer 
															? 'bg-green-900 border border-green-500 text-green-100' 
															: 'bg-[#374151] hover:bg-[#4B5563] text-[#CBD5E1]'
													}`}
												>
													{option}
												</div>
											))}
										</div>
										<div className="text-sm text-[#94A3B8] bg-[#1E293B] p-3 rounded">
											<strong>Explanation:</strong> {question.explanation}
										</div>
									</div>
								))}
							</div>
						)}
					</div>
				);
			default:
				return (
					<div className="prose prose-invert max-w-none">
						<p className="text-lg text-[#CBD5E1] leading-relaxed whitespace-pre-line">
							{slide.content}
						</p>
					</div>
				);
		}
	};

	return (
		<div className="min-h-screen w-full bg-[#0B0F14]">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* Header */}
				<div className="mb-6">
					<a href="/lessons" className="text-[#3BA4F7] hover:text-[#20C997] underline mb-4 inline-block transition-colors duration-200">
						← Back to lessons
					</a>
					<h1 className="text-3xl font-bold text-[#E8EEF6] mb-4">{lesson.title}</h1>
					<div className="flex items-center gap-4 mb-6">
						<span className={`px-3 py-1 rounded-full text-sm font-medium ${
							lesson.difficulty === 'beginner' ? 'bg-green-900 text-green-300' :
							lesson.difficulty === 'intermediate' ? 'bg-yellow-900 text-yellow-300' :
							'bg-red-900 text-red-300'
						}`}>
							{lesson.difficulty}
						</span>
						<span className="text-[#94A3B8]">{lesson.duration}</span>
					</div>
				</div>

				{/* Progress Bar */}
				<div className="mb-6">
					<div className="flex items-center justify-between mb-2">
						<span className="text-sm text-[#94A3B8]">
							Slide {currentSlideIndex + 1} of {totalSlides}
						</span>
						<span className="text-sm text-[#94A3B8]">
							{Math.round(((currentSlideIndex + 1) / totalSlides) * 100)}% Complete
						</span>
					</div>
					<div className="w-full bg-[#374151] rounded-full h-2">
						<div 
							className="bg-gradient-to-r from-[#20C997] to-[#3BA4F7] h-2 rounded-full transition-all duration-300"
							style={{ width: `${((currentSlideIndex + 1) / totalSlides) * 100}%` }}
						></div>
					</div>
				</div>

				{/* Slide Navigation Dots */}
				<div className="flex justify-center mb-6 space-x-2">
					{lesson.slides.map((slide, index) => (
						<button
							key={slide.id}
							onClick={() => goToSlide(index)}
							className={`w-3 h-3 rounded-full transition-all duration-200 ${
								index === currentSlideIndex 
									? 'bg-[#3BA4F7]' 
									: 'bg-[#374151] hover:bg-[#4B5563]'
							}`}
							title={slide.title}
						/>
					))}
				</div>

				{/* Current Slide Content */}
				<div className="bg-[#1E293B] rounded-xl p-8 mb-6 min-h-[500px]">
					<div className="mb-6">
						<h2 className="text-2xl font-bold text-[#E8EEF6] mb-2">{currentSlide.title}</h2>
						<div className="w-16 h-1 bg-gradient-to-r from-[#20C997] to-[#3BA4F7] rounded-full"></div>
					</div>
					
					{renderSlideContent(currentSlide)}
				</div>

				{/* Navigation Controls */}
				<div className="flex justify-between items-center mb-6">
					<button
						onClick={prevSlide}
						disabled={currentSlideIndex === 0}
						className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
							currentSlideIndex === 0
								? 'bg-[#374151] text-[#6B7280] cursor-not-allowed'
								: 'bg-[#374151] hover:bg-[#4B5563] text-[#E8EEF6]'
						}`}
					>
						← Previous
					</button>

					<div className="text-center">
						<span className="text-sm text-[#94A3B8] block">
							{currentSlide.type.charAt(0).toUpperCase() + currentSlide.type.slice(1)} Slide
						</span>
					</div>

					<button
						onClick={nextSlide}
						disabled={currentSlideIndex === totalSlides - 1}
						className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
							currentSlideIndex === totalSlides - 1
								? 'bg-[#374151] text-[#6B7280] cursor-not-allowed'
								: 'bg-gradient-to-r from-[#20C997] to-[#3BA4F7] hover:from-[#1BA085] hover:to-[#2A8EE6] text-white'
						}`}
					>
						Next →
					</button>
				</div>

				{/* Practice Simulation Call-to-Action (Only on last slide) */}
				{currentSlideIndex === totalSlides - 1 && correspondingPersona && (
					<div className="bg-gradient-to-r from-[#3BA4F7]/10 to-[#7C5CFC]/10 border border-[#3BA4F7]/30 rounded-xl p-6 mb-6">
						<div className="flex items-center justify-between">
							<div>
								<h3 className="text-xl font-bold text-[#E8EEF6] mb-2">🎯 Ready to Practice?</h3>
								<p className="text-[#CBD5E1] mb-4">
									Test your knowledge with a live simulation of this scam type. 
									Chat with an AI scammer and see if you can spot the red flags!
								</p>
							</div>
							<div className="flex flex-col gap-3">
								<a 
									href={`/sim/${correspondingPersona}`}
									className="bg-gradient-to-r from-[#20C997] to-[#3BA4F7] hover:from-[#1BA085] hover:to-[#2A8EE6] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center whitespace-nowrap"
								>
									Start Simulation →
								</a>
								<span className="text-xs text-[#94A3B8] text-center">
									Live AI scammer chat
								</span>
							</div>
						</div>
					</div>
				)}

				{/* Footer Navigation */}
				<div className="flex justify-between items-center">
					<a 
						href="/lessons" 
						className="text-[#3BA4F7] hover:text-[#20C997] font-medium transition-colors duration-200"
					>
						← Back to Lessons
					</a>
					{currentSlideIndex === totalSlides - 1 && (
						<a 
							href="/simulator" 
							className="bg-gradient-to-r from-[#3BA4F7] to-[#7C5CFC] hover:from-[#2A8EE6] hover:to-[#6D4CFC] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
						>
							Browse All Simulators →
						</a>
					)}
				</div>
			</div>
		</div>
	);
}