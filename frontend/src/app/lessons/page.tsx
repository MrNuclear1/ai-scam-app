"use client";
import Link from "next/link";
import { lessons } from "@/data/lessons";

export default function LessonsPage() {
	if (!lessons || lessons.length === 0) {
		return (
			<div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-2xl">
					<h1 className="text-4xl font-bold text-[#E8EEF6] mb-4">Loading Lessons...</h1>
					<p className="text-xl text-[#CBD5E1]">Please wait while we load the lesson content.</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen w-full">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
				<div className="text-center mb-8 sm:mb-12 lg:mb-16">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#E8EEF6] mb-6 leading-tight">
						<span className="bg-gradient-to-r from-[#20C997] via-[#3BA4F7] to-[#7C5CFC] bg-clip-text text-transparent">
							Scam Awareness Lessons
						</span>
					</h1>
					<p className="text-lg sm:text-xl text-[#CBD5E1] max-w-3xl mx-auto leading-relaxed">
						Learn to identify and protect yourself from various types of scams through our interactive lessons.
					</p>
				</div>

				{/* Lessons Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
					{lessons.map((lesson) => (
						<Link
							key={lesson.id}
							href={`/lessons/${lesson.id}`}
							className="group bg-[#1E293B]/50 backdrop-blur-sm hover:bg-[#1E293B]/70 border border-[#334155] hover:border-[#3BA4F7] rounded-xl p-6 transition-all duration-300 transform hover:scale-105"
						>
							<div className="mb-4">
								<div className="flex items-center justify-between mb-3">
									<span className={`px-3 py-1 rounded-full text-xs font-medium ${
										lesson.difficulty === 'beginner' ? 'bg-green-900 text-green-300' :
										lesson.difficulty === 'intermediate' ? 'bg-yellow-900 text-yellow-300' :
										'bg-red-900 text-red-300'
									}`}>
										{lesson.difficulty}
									</span>
									<span className="text-[#94A3B8] text-sm">{lesson.duration}</span>
								</div>
								<h3 className="text-xl font-bold text-[#E8EEF6] mb-3 group-hover:text-[#3BA4F7] transition-colors duration-300">
									{lesson.title}
								</h3>
								<p className="text-[#94A3B8] mb-4 line-clamp-3">
									{lesson.description}
								</p>
							</div>

							<div className="space-y-2">
								<h4 className="text-sm font-semibold text-[#CBD5E1]">Key Topics:</h4>
								<div className="flex flex-wrap gap-2">
									{lesson.content.keyTakeaways.slice(0, 2).map((takeaway, index) => (
										<span
											key={index}
											className="text-xs bg-[#374151] text-[#94A3B8] px-2 py-1 rounded"
										>
											{takeaway.length > 25 ? `${takeaway.substring(0, 25)}...` : takeaway}
										</span>
									))}
									{lesson.content.keyTakeaways.length > 2 && (
										<span className="text-xs bg-[#374151] text-[#94A3B8] px-2 py-1 rounded">
											+{lesson.content.keyTakeaways.length - 2} more
										</span>
									)}
								</div>
							</div>

							<div className="mt-6 pt-4 border-t border-[#374151]">
								<div className="flex items-center justify-between">
									<span className="text-sm text-[#3BA4F7] font-medium group-hover:text-[#20C997] transition-colors duration-300">
										Start Lesson →
									</span>
									{lesson.quiz && (
										<span className="text-xs bg-[#7C5CFC] text-white px-2 py-1 rounded">
											Quiz Included
										</span>
									)}
								</div>
							</div>
						</Link>
					))}
				</div>

				{/* Back to Home */}
				<div className="text-center mt-12">
					<Link
						href="/"
						className="inline-flex items-center text-[#3BA4F7] hover:text-[#20C997] font-medium transition-colors duration-200"
					>
						← Back to Home
					</Link>
				</div>
			</div>
		</div>
	);
}
