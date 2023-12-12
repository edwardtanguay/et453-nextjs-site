"use client";
import { AppContext } from "@/AppContext";
import { useContext } from "react";

export default function HowtoId({ params }: { params: { id: string } }) {
	const { id } = params;
	const { techSkills } = useContext(AppContext);
	const techSkill = techSkills.find((m) => String(m.id) === id);

	return (
		<>
			{techSkill && (
				<div>
					<p className="text-xl">{techSkill.name}</p>
					<p className="italic">{techSkill.description}</p>
					<p><a className="underline" target="_blank" href={techSkill.url}>more info</a></p>
				</div>
			)}
		</>
	);
}
