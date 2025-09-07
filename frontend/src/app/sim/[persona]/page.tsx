import { notFound } from "next/navigation";
import ScamChat from "@/components/ScamChat";
import { personas, type PersonaId } from "@/data/personas";

// Generate static params for all personas
export function generateStaticParams() {
	return Object.keys(personas).map((persona) => ({
		persona: persona,
	}));
}

export default function SimulatorPersonaPage({ params }: { params: { persona: string } }) {
	const personaId = params.persona as PersonaId;
	const persona = personas[personaId];
	if (!persona) notFound();

	return (
		<div className="min-h-screen w-full bg-[#0B0F14]">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="mb-6">
					<a href="/simulator" className="text-[#3BA4F7] hover:text-[#20C997] underline mb-4 inline-block transition-colors duration-200">
						← Back to persona selection
					</a>
					<h1 className="text-2xl sm:text-3xl font-bold text-[#E8EEF6] mb-2">{persona.title} Simulator</h1>
					<p className="text-[#CBD5E1]">
						Practice identifying {persona.title.toLowerCase()} tactics in a safe environment.
					</p>
				</div>
				<ScamChat personaId={personaId} />
			</div>
		</div>
	);
}
