"use client";
import { useState } from "react";

interface QuizQuestion {
	id: string;
	question: string;
	options: string[];
	correctAnswer: number;
	explanation: string;
}

interface InteractiveQuizProps {
	questions: QuizQuestion[];
}

export default function InteractiveQuiz({ questions }: InteractiveQuizProps) {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number | null }>({});
	const [showExplanation, setShowExplanation] = useState<{ [key: number]: boolean }>({});
	const [quizComplete, setQuizComplete] = useState(false);
	const [score, setScore] = useState(0);

	const currentQuestion = questions[currentQuestionIndex];
	const totalQuestions = questions.length;
	const hasAnsweredCurrent = selectedAnswers[currentQuestionIndex] !== undefined;
	const showingExplanation = showExplanation[currentQuestionIndex] || false;

	const handleAnswerSelect = (optionIndex: number) => {
		if (hasAnsweredCurrent) return; // Prevent changing answer once selected

		// Update selected answers
		setSelectedAnswers(prev => ({
			...prev,
			[currentQuestionIndex]: optionIndex
		}));

		// Show explanation immediately after selection
		setShowExplanation(prev => ({
			...prev,
			[currentQuestionIndex]: true
		}));

		// Update score if correct
		if (optionIndex === currentQuestion.correctAnswer) {
			setScore(prev => prev + 1);
		}
	};

	const handleNext = () => {
		if (currentQuestionIndex < totalQuestions - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		} else {
			setQuizComplete(true);
		}
	};

	const handlePrevious = () => {
		if (currentQuestionIndex > 0) {
			setCurrentQuestionIndex(currentQuestionIndex - 1);
		}
	};

	const resetQuiz = () => {
		setCurrentQuestionIndex(0);
		setSelectedAnswers({});
		setShowExplanation({});
		setQuizComplete(false);
		setScore(0);
	};

	const goToQuestion = (index: number) => {
		setCurrentQuestionIndex(index);
	};

	if (quizComplete) {
		const percentage = Math.round((score / totalQuestions) * 100);
		return (
			<div className="mt-6 p-8 bg-[#0F172A] rounded-lg text-center">
				<h3 className="text-2xl font-bold text-[#E8EEF6] mb-4">🎉 Quiz Complete!</h3>
				<div className="mb-6">
					<div className="text-4xl font-bold text-[#20C997] mb-2">{score}/{totalQuestions}</div>
					<div className="text-lg text-[#CBD5E1]">{percentage}% Correct</div>
				</div>
				<div className="mb-6">
					{percentage >= 80 ? (
						<div className="text-green-400">🏆 Excellent! You're mastering scam detection!</div>
					) : percentage >= 60 ? (
						<div className="text-yellow-400">👍 Good work! Review the explanations to improve further.</div>
					) : (
						<div className="text-orange-400">💪 Keep learning! Practice makes perfect at spotting scams.</div>
					)}
				</div>
				<div className="flex gap-4 justify-center">
					<button
						onClick={resetQuiz}
						className="bg-gradient-to-r from-[#20C997] to-[#3BA4F7] hover:from-[#1BA085] hover:to-[#2A8EE6] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
					>
						Retake Quiz
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className="mt-6 p-6 bg-[#0F172A] rounded-lg">
			{/* Progress and Navigation */}
			<div className="mb-6">
				<div className="flex justify-between items-center mb-4">
					<h3 className="text-xl font-bold text-[#E8EEF6]">Knowledge Check</h3>
					<div className="text-sm text-[#94A3B8]">
						Question {currentQuestionIndex + 1} of {totalQuestions} | Score: {score}/{Object.keys(selectedAnswers).length}
					</div>
				</div>
				
				{/* Progress Bar */}
				<div className="w-full bg-[#374151] rounded-full h-2 mb-4">
					<div 
						className="bg-gradient-to-r from-[#20C997] to-[#3BA4F7] h-2 rounded-full transition-all duration-300"
						style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
					></div>
				</div>

				{/* Question Navigation Dots */}
				<div className="flex justify-center space-x-2 mb-4">
					{questions.map((_, index) => {
						const isAnswered = selectedAnswers[index] !== undefined;
						const isCorrect = isAnswered && selectedAnswers[index] === questions[index].correctAnswer;
						const isCurrent = index === currentQuestionIndex;
						
						return (
							<button
								key={index}
								onClick={() => goToQuestion(index)}
								className={`w-3 h-3 rounded-full transition-all duration-200 ${
									isCurrent 
										? 'bg-[#3BA4F7] scale-125' 
										: isAnswered
											? isCorrect 
												? 'bg-green-500 hover:bg-green-400' 
												: 'bg-red-500 hover:bg-red-400'
											: 'bg-[#374151] hover:bg-[#4B5563]'
								}`}
								title={`Question ${index + 1}`}
							/>
						);
					})}
				</div>
			</div>

			{/* Current Question */}
			<div className="mb-6">
				<h4 className="text-lg font-semibold text-[#E8EEF6] mb-4">
					{currentQuestion.question}
				</h4>
				
				{/* Answer Options */}
				<div className="space-y-3 mb-6">
					{currentQuestion.options.map((option, index) => {
						const isSelected = selectedAnswers[currentQuestionIndex] === index;
						const isCorrect = index === currentQuestion.correctAnswer;
						const showResults = showingExplanation;
						
						let buttonClass = "p-4 rounded-lg text-left transition-all duration-300 border-2 cursor-pointer ";
						
						if (!showResults) {
							// Before answering - normal hover states
							buttonClass += isSelected 
								? "border-[#3BA4F7] bg-[#3BA4F7]/20 text-[#E8EEF6]"
								: "border-[#374151] hover:border-[#3BA4F7] bg-[#1E293B] hover:bg-[#374151] text-[#CBD5E1]";
						} else {
							// After answering - show correct/incorrect
							if (isCorrect) {
								buttonClass += "border-green-500 bg-green-900/30 text-green-100";
							} else if (isSelected && !isCorrect) {
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
								disabled={hasAnsweredCurrent}
							>
								<div className="flex items-center justify-between">
									<div className="flex items-center">
										<div className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center text-sm font-bold ${
											showResults
												? isCorrect 
													? 'bg-green-600 text-white' 
													: isSelected 
														? 'bg-red-600 text-white'
														: 'bg-[#4B5563] text-[#9CA3AF]'
												: 'bg-[#4B5563] text-[#E8EEF6]'
										}`}>
											{String.fromCharCode(65 + index)}
										</div>
										<span className="font-medium">{option}</span>
									</div>
									{showResults && (
										<div className="ml-2">
											{isCorrect && <span className="text-green-400 text-lg">✓</span>}
											{isSelected && !isCorrect && <span className="text-red-400 text-lg">✗</span>}
										</div>
									)}
								</div>
							</button>
						);
					})}
				</div>
			</div>

			{/* Explanation */}
			{showingExplanation && (
				<div className="mb-6 p-4 bg-[#1E293B] rounded-lg border-l-4 border-[#3BA4F7]">
					<div className="flex items-start mb-2">
						<div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white text-lg ${
							selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer 
								? 'bg-green-600' 
								: 'bg-red-600'
						}`}>
							{selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer ? '✓' : '✗'}
						</div>
						<div>
							<div className={`font-semibold text-lg ${
								selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer 
									? 'text-green-400' 
									: 'text-red-400'
							}`}>
								{selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer 
									? 'Correct!' 
									: 'Incorrect'}
							</div>
						</div>
					</div>
					<p className="text-[#CBD5E1] leading-relaxed">{currentQuestion.explanation}</p>
				</div>
			)}

			{/* Navigation Controls */}
			<div className="flex justify-between items-center">
				<button
					onClick={handlePrevious}
					disabled={currentQuestionIndex === 0}
					className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
						currentQuestionIndex === 0
							? 'bg-[#374151] text-[#6B7280] cursor-not-allowed'
							: 'bg-[#374151] hover:bg-[#4B5563] text-[#E8EEF6]'
					}`}
				>
					← Previous
				</button>

				{hasAnsweredCurrent && (
					<button
						onClick={handleNext}
						className="bg-gradient-to-r from-[#20C997] to-[#3BA4F7] hover:from-[#1BA085] hover:to-[#2A8EE6] text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
					>
						{currentQuestionIndex < totalQuestions - 1 ? 'Next Question →' : 'View Results →'}
					</button>
				)}

				{!hasAnsweredCurrent && (
					<div className="text-sm text-[#94A3B8] italic">
						Select an answer to continue
					</div>
				)}
			</div>
		</div>
	);
}
