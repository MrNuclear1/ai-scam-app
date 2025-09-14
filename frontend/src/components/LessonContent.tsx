"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface LessonContentProps {
	content: string;
	image?: string;
}

// Accessible markdown renderer that promotes standalone bold lines to headings
export default function LessonContent({ content, image }: LessonContentProps) {
	return (
		<div className="prose max-w-none mb-8">
			{image && (
				<div className="mb-6">
					<img 
						src={image} 
						alt="Lesson illustration" 
						className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
						onError={(e) => {
							console.error('Image failed to load:', image);
							e.currentTarget.style.display = 'none';
						}}
					/>
				</div>
			)}
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				components={{
					p: ({ node, children }) => {
						// If a paragraph is only a single <strong>, treat it like a section heading
						const onlyStrong = Array.isArray((node as any)?.children)
							&& (node as any).children.length === 1
							&& (node as any).children[0]?.type === 'strong';
						if (onlyStrong) {
								return (
									<h3 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 mb-3">
										{children}
									</h3>
								);
						}
							return (
								<p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line mb-4">
									{children}
								</p>
							);
					},
					strong: ({ children }) => (
						<strong className="font-semibold text-gray-800">{children}</strong>
					),
					ul: ({ children }) => (
						<ul className="list-disc pl-6 text-gray-700">{children}</ul>
					),
					ol: ({ children }) => (
						<ol className="list-decimal pl-6 text-gray-700">{children}</ol>
					),
					li: ({ children }) => (
						<li className="mb-1">{children}</li>
					),
					h1: ({ children }) => (
						<h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-6 mb-4">{children}</h1>
					),
					h2: ({ children }) => (
						<h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 mb-4">{children}</h2>
					),
					h3: ({ children }) => (
						<h3 className="text-xl font-bold text-gray-800 mt-5 mb-3">{children}</h3>
					),
				}}
			>
				{content}
			</ReactMarkdown>
		</div>
	);
}


