import Link from "next/link";

export const Nav = () => {
	return (
		<nav className="bg-slate-600 text-white mb-4 rounded p-2 mainnav">
			<ul className="flex gap-4 ml-1">
				<li>
					<Link href="/">Welcome</Link>
				</li>
				<li>
					<Link href="/techskills">Tech Skills</Link>
				</li>
				<li>
					<Link href="/techbooks">Tech Books</Link>
				</li>
			</ul>
		</nav>
	);
};
