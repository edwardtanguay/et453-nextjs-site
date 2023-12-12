"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export const Nav = () => {
	const activeSegment = useSelectedLayoutSegment();

	return (
		<nav className="bg-slate-600 text-white mb-4 rounded p-2 mainnav">
			<ul className="flex gap-4 ml-1">
				<li>
					<Link
						href="/"
						className={
							activeSegment === null ? "text-yellow-200" : ""
						}
					>
						Welcome
					</Link>
				</li>
				<li>
					<Link
						href="/techskills"
						className={
							activeSegment === 'techskills' ? "text-yellow-200" : ""
						}
					>
						Tech Skills
					</Link>
				</li>
				<li>
					<Link
						href="/techbooks"
						className={
							activeSegment === 'techbooks' ? "text-yellow-200" : ""
						}
					>
						Tech Books
					</Link>
				</li>
			</ul>
		</nav>
	);
};
