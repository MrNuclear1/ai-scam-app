"use client";
import Link from "next/link";
import Image from "next/image";
import { lessons } from "@/data/lessons";

export default function LessonsPage() {
	if (!lessons || lessons.length === 0) {
		return (
			<div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-2xl">
					<h1 className="text-4xl font-bold text-text mb-4">Loading Lessons...</h1>
					<p className="text-xl text-gray-600">Please wait while we load the lesson content.</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen w-full">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
				<div className="text-center mb-8 sm:mb-12 lg:mb-16">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 leading-tight">
						<span className="text-gray-800">
							Scam Awareness Lessons
						</span>
					</h1>
					<p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Learn to identify and protect yourself from various types of scams through our interactive lessons.
					</p>
				</div>

				{/* Lessons Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
					{lessons.map((lesson) => (
						<Link
							key={lesson.id}
							href={`/lessons/${lesson.id}`}
							className="group bg-white hover:bg-gray-50 border border-gray-200 hover:border-blue-300 rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-lg"
						>
							{/* Thumbnail Image */}
							{lesson.thumbnail && (
								<div className="relative h-48 w-full overflow-hidden">
									<Image
										src={lesson.thumbnail}
										alt={lesson.title}
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-300"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
									<div className="absolute top-3 right-3">
										<span className={`px-2 py-1 rounded-full text-xs font-medium ${
											lesson.difficulty === 'beginner' ? 'bg-green-600 text-white' :
											lesson.difficulty === 'intermediate' ? 'bg-yellow-600 text-white' :
											'bg-red-600 text-white'
										}`}>
											{lesson.difficulty}
										</span>
									</div>
								</div>
							)}
							
							<div className="p-6">
								<div className="flex items-center justify-between mb-3">
									<span className="text-gray-500 text-sm">{lesson.duration}</span>
									<span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
										{lesson.slides.length} slides
									</span>
								</div>
								
								<h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
									{lesson.title}
								</h3>
								
								<p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
									{lesson.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-4">
									<span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
										Interactive Slides
									</span>
									<span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
										Knowledge Check
									</span>
									<span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
										Practice Scenarios
									</span>
								</div>
								
								<div className="bg-blue-600 hover:bg-blue-700 text-white text-center font-medium py-3 px-4 rounded-lg transition-colors duration-300">
									Start Lesson →
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
