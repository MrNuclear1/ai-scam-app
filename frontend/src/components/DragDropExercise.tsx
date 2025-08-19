"use client";
import { useState, useCallback } from "react";

interface DragDropItem {
	id: string;
	text: string;
	category?: string;
}

interface Category {
	name: string;
	items: string[];
}

interface DragDropData {
	title: string;
	instructions: string;
	items: string[];
	categories: Category[];
}

interface DragDropExerciseProps {
	data: DragDropData;
}

export default function DragDropExercise({ data }: DragDropExerciseProps) {
	const [draggedItems, setDraggedItems] = useState<{ [categoryName: string]: string[] }>({});
	const [availableItems, setAvailableItems] = useState<string[]>(data.items);
	const [draggedElement, setDraggedElement] = useState<string | null>(null);
	const [isComplete, setIsComplete] = useState(false);
	const [score, setScore] = useState(0);
	const [showResults, setShowResults] = useState(false);

	// Create a mapping of correct answers
	const correctAnswers = data.categories.reduce((acc, category) => {
		category.items.forEach(item => {
			acc[item] = category.name;
		});
		return acc;
	}, {} as { [item: string]: string });

	const handleDragStart = (e: React.DragEvent, item: string) => {
		e.dataTransfer.setData("text/plain", item);
		setDraggedElement(item);
	};

	const handleDragEnd = () => {
		setDraggedElement(null);
	};

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault();
	};

	const handleDrop = useCallback((e: React.DragEvent, categoryName: string) => {
		e.preventDefault();
		const item = e.dataTransfer.getData("text/plain");
		
		if (!item) return;

		// Remove item from available items
		setAvailableItems(prev => prev.filter(availableItem => availableItem !== item));
		
		// Remove item from other categories first
		setDraggedItems(prev => {
			const newItems = { ...prev };
			Object.keys(newItems).forEach(cat => {
				newItems[cat] = newItems[cat].filter(i => i !== item);
			});
			return newItems;
		});

		// Add item to the target category
		setDraggedItems(prev => ({
			...prev,
			[categoryName]: [...(prev[categoryName] || []), item]
		}));

		setDraggedElement(null);
	}, []);

	const moveItemToAvailable = (item: string, fromCategory: string) => {
		setDraggedItems(prev => ({
			...prev,
			[fromCategory]: prev[fromCategory].filter(i => i !== item)
		}));
		setAvailableItems(prev => [...prev, item]);
	};

	const checkAnswers = () => {
		let correctCount = 0;
		const totalItems = data.items.length;

		Object.entries(draggedItems).forEach(([categoryName, items]) => {
			items.forEach(item => {
				if (correctAnswers[item] === categoryName) {
					correctCount++;
				}
			});
		});

		setScore(correctCount);
		setShowResults(true);
		setIsComplete(correctCount === totalItems);
	};

	const resetExercise = () => {
		setDraggedItems({});
		setAvailableItems(data.items);
		setIsComplete(false);
		setScore(0);
		setShowResults(false);
		setDraggedElement(null);
	};

	const getItemStatus = (item: string, categoryName: string) => {
		if (!showResults) return 'neutral';
		return correctAnswers[item] === categoryName ? 'correct' : 'incorrect';
	};

	const allItemsPlaced = availableItems.length === 0;

	return (
		<div className="mt-6 p-6 bg-[#0F172A] rounded-lg">
			<div className="mb-6">
				<h3 className="text-xl font-bold text-[#E8EEF6] mb-2">{data.title}</h3>
				<p className="text-[#CBD5E1] mb-4">{data.instructions}</p>
				
				{showResults && (
					<div className="mb-4 p-4 bg-[#1E293B] rounded-lg">
						<div className="flex items-center justify-between">
							<div>
								<span className={`text-lg font-semibold ${
									isComplete ? 'text-green-400' : 'text-yellow-400'
								}`}>
									Score: {score}/{data.items.length}
								</span>
								<span className="text-sm text-[#94A3B8] ml-2">
									({Math.round((score / data.items.length) * 100)}%)
								</span>
							</div>
							{isComplete ? (
								<span className="text-green-400">🎉 Perfect! All correct!</span>
							) : (
								<span className="text-yellow-400">💪 Keep practicing!</span>
							)}
						</div>
					</div>
				)}
			</div>

			{/* Available Items */}
			{availableItems.length > 0 && (
				<div className="mb-6">
					<h4 className="text-lg font-semibold text-[#E8EEF6] mb-3">
						Drag these items to the correct categories:
					</h4>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
						{availableItems.map((item) => (
							<div
								key={item}
								draggable={!showResults}
								onDragStart={(e) => handleDragStart(e, item)}
								onDragEnd={handleDragEnd}
								className={`p-3 rounded-lg border-2 transition-all duration-200 cursor-move ${
									draggedElement === item
										? 'border-[#3BA4F7] bg-[#3BA4F7]/20 scale-105'
										: 'border-[#374151] bg-[#1E293B] hover:border-[#3BA4F7] hover:bg-[#374151]'
								} ${showResults ? 'cursor-default opacity-60' : ''}`}
							>
								<span className="text-[#CBD5E1] text-sm">{item}</span>
							</div>
						))}
					</div>
				</div>
			)}

			{/* Drop Zones */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{data.categories.map((category) => (
					<div
						key={category.name}
						onDragOver={handleDragOver}
						onDrop={(e) => handleDrop(e, category.name)}
						className={`min-h-[200px] p-4 rounded-lg border-2 border-dashed transition-all duration-200 ${
							draggedElement 
								? 'border-[#3BA4F7] bg-[#3BA4F7]/10' 
								: 'border-[#374151] bg-[#1E293B]'
						}`}
					>
						<h4 className="text-lg font-semibold text-[#E8EEF6] mb-3 text-center">
							{category.name}
						</h4>
						
						<div className="space-y-2">
							{draggedItems[category.name]?.map((item) => {
								const status = getItemStatus(item, category.name);
								return (
									<div
										key={item}
										className={`p-3 rounded-lg border transition-all duration-200 ${
											status === 'correct' 
												? 'border-green-500 bg-green-900/30 text-green-100'
												: status === 'incorrect'
													? 'border-red-500 bg-red-900/30 text-red-100'
													: 'border-[#4B5563] bg-[#374151] text-[#CBD5E1]'
										} ${!showResults ? 'cursor-pointer hover:bg-[#4B5563]' : ''}`}
										onClick={() => !showResults && moveItemToAvailable(item, category.name)}
									>
										<div className="flex items-center justify-between">
											<span className="text-sm">{item}</span>
											{showResults && (
												<span className="text-lg">
													{status === 'correct' ? '✓' : '✗'}
												</span>
											)}
											{!showResults && (
												<span className="text-xs text-[#94A3B8]">
													Click to remove
												</span>
											)}
										</div>
									</div>
								);
							})}
							
							{(!draggedItems[category.name] || draggedItems[category.name].length === 0) && (
								<div className="text-center py-8 text-[#6B7280] text-sm">
									Drop items here
								</div>
							)}
						</div>
					</div>
				))}
			</div>

			{/* Action Buttons */}
			<div className="flex justify-center gap-4 mt-6">
				{allItemsPlaced && !showResults && (
					<button
						onClick={checkAnswers}
						className="bg-gradient-to-r from-[#20C997] to-[#3BA4F7] hover:from-[#1BA085] hover:to-[#2A8EE6] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
					>
						Check Answers
					</button>
				)}
				
				{showResults && (
					<button
						onClick={resetExercise}
						className="bg-gradient-to-r from-[#374151] to-[#4B5563] hover:from-[#4B5563] hover:to-[#6B7280] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
					>
						Try Again
					</button>
				)}
			</div>

			{/* Instructions */}
			{!allItemsPlaced && !showResults && (
				<div className="mt-4 text-center text-sm text-[#94A3B8]">
					💡 Drag items from the top section into the correct categories below. 
					Click items in categories to move them back.
				</div>
			)}
		</div>
	);
}
