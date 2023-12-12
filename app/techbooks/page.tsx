/* eslint-disable @next/next/no-img-element */
"use client";
import { AppContext } from "@/AppContext";
import { useContext } from "react";

export default function PageTechBooks() {
	const { techBooks } = useContext(AppContext);

	return (
		<>
			<p className="mb-4">There are {techBooks.length} tech books:</p>
			{techBooks.map((techBook) => {
				return (
					<div className="mb-5 flex gap-3 w-1/3" key={techBook.id}>
						<img className="w-32 h-fit" src={`images/techBooks/${techBook.idCode}.jpg`} alt="book"/>
						<div>
							<p className="font-bold text-xl">{techBook.title}</p>
							<p className="italic">{techBook.description}</p>
						</div>
					</div>
				);
			})}
		</>
	);
}
