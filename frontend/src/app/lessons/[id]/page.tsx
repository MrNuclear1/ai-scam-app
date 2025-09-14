import { notFound } from "next/navigation";
import { lessons } from "@/data/lessons";
import LessonSlideNavigator from "./LessonSlideNavigator";

// Generate static params for all lessons - required for static export
export async function generateStaticParams() {
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
			<div className="min-h-screen w-full">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<div className="bg-primary-50/90 rounded-xl p-8 text-center border border-primary-200 shadow-sm">
						<h1 className="text-2xl font-bold text-text mb-4">🚨 Debug: No Slides Found</h1>
						<p className="text-primary-300 mb-6">
							Lesson ID: {lesson.id}<br/>
							Has slides property: {lesson.slides ? 'Yes' : 'No'}<br/>
							Slides length: {lesson.slides?.length || 0}<br/>
							This indicates a data structure issue.
						</p>
						<a 
							href="/lessons" 
							className="bg-gradient-to-r from-secondary-500 to-accent-500 hover:from-secondary-600 hover:to-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
						>
							← Back to Lessons
						</a>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen w-full">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* Header */}
				<div className="mb-6">
					<a href="/lessons" className="text-[#3BA4F7] hover:text-[#20C997] underline mb-4 inline-block transition-colors duration-200">
						← Back to lessons
					</a>
					<h1 className="text-3xl font-bold text-gray-800 mb-4">{lesson.title}</h1>
					<div className="flex items-center gap-4 mb-6">
						<span className={`px-3 py-1 rounded-full text-sm font-medium ${
							lesson.difficulty === 'beginner' ? 'bg-green-800 text-white' :
							lesson.difficulty === 'intermediate' ? 'bg-yellow-800 text-white' :
							'bg-red-800 text-white'
						}`}>
							{lesson.difficulty}
						</span>
						<span className="text-gray-600">{lesson.duration}</span>
					</div>
				</div>

				{/* Client-side slide navigator */}
				<LessonSlideNavigator lesson={lesson} />

				{/* Footer Navigation */}
				<div className="flex justify-between items-center">
					<a 
						href="/lessons" 
						className="text-[#3BA4F7] hover:text-[#20C997] font-medium transition-colors duration-200"
					>
						← Back to Lessons
					</a>
					<a 
						href="/simulator" 
						className="bg-gradient-to-r from-[#20C997] to-[#3BA4F7] hover:from-[#1BA085] hover:to-[#2A8EE6] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
					>
						Browse All Simulators →
					</a>
				</div>
			</div>
		</div>
	);
}