import { notFound } from "next/navigation";
import { lessons } from "@/data/lessons";
import { getPersonaByLessonId } from "@/data/personas";

// Generate static params for all lessons
export function generateStaticParams() {
	return lessons.map((lesson) => ({
		id: lesson.id,
	}));
}

export default function LessonDetailPage({ params }: { params: { id: string } }) {
	const lesson = lessons.find(l => l.id === params.id);
	if (!lesson) notFound();
	
	const correspondingPersona = getPersonaByLessonId(lesson.id);

	return (
		<div className="min-h-screen w-full bg-[#0B0F14]">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

				{/* Lesson Content */}
				<div className="bg-[#1E293B] rounded-xl p-8 mb-6">
					<div className="prose prose-invert max-w-none">
						<p className="text-lg text-[#CBD5E1] mb-8 leading-relaxed">
							{lesson.content.introduction}
						</p>

						{lesson.content.sections.map((section, index) => (
							<div key={index} className="mb-8">
								<h2 className="text-2xl font-bold text-[#E8EEF6] mb-4">{section.title}</h2>
								<p className="text-[#CBD5E1] leading-relaxed">{section.content}</p>
								
								{section.interactive && section.interactive.type === 'drag-match' && (
									<div className="mt-6 p-6 bg-[#0F172A] rounded-lg">
										<h3 className="text-lg font-semibold text-[#E8EEF6] mb-4">Interactive Exercise</h3>
										<p className="text-[#94A3B8] mb-4">Drag the items to the correct categories:</p>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											{section.interactive?.data?.categories?.map((category: any) => (
												<div key={category.id} className="bg-[#1E293B] p-4 rounded-lg">
													<h4 className="text-[#E8EEF6] font-semibold mb-3">{category.name}</h4>
													<div className="space-y-2">
														{section.interactive?.data?.items
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
							</div>
						))}

						{/* Key Takeaways */}
						<div className="mt-12 p-6 bg-[#0F172A] rounded-lg">
							<h2 className="text-2xl font-bold text-[#E8EEF6] mb-6">Key Takeaways</h2>
							<ul className="space-y-3">
								{lesson.content.keyTakeaways.map((takeaway, index) => (
									<li key={index} className="flex items-start text-[#CBD5E1]">
										<span className="text-[#20C997] mr-3 mt-1">✓</span>
										{takeaway}
									</li>
								))}
							</ul>
						</div>

						{/* Quiz */}
						{lesson.quiz && lesson.quiz.length > 0 && (
							<div className="mt-8 p-6 bg-[#0F172A] rounded-lg">
								<h2 className="text-2xl font-bold text-[#E8EEF6] mb-6">Knowledge Check</h2>
								{lesson.quiz.map((question, index) => (
									<div key={question.id} className="mb-8 last:mb-0">
										<h3 className="text-lg font-semibold text-[#E8EEF6] mb-4">
											Question {index + 1}: {question.question}
										</h3>
										<div className="space-y-2 mb-4">
											{question.options.map((option, optionIndex) => (
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
				</div>

				{/* Practice Simulation Call-to-Action */}
				{correspondingPersona && (
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

				{/* Navigation */}
				<div className="flex justify-between items-center">
					<a 
						href="/lessons" 
						className="text-[#3BA4F7] hover:text-[#20C997] font-medium transition-colors duration-200"
					>
						← Back to Lessons
					</a>
					<a 
						href="/simulator" 
						className="bg-gradient-to-r from-[#3BA4F7] to-[#7C5CFC] hover:from-[#2A8EE6] hover:to-[#6D4CFC] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
					>
						Browse All Simulators →
					</a>
				</div>
			</div>
		</div>
	);
}
