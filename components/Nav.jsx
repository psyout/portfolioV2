import Link from 'next/link';

import { usePathname } from 'next/navigation';

const links = [
	{ path: '/', name: 'home' },
	{ path: '/projects', name: 'projects' },
	{ path: '/contact', name: 'contact' },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
	const path = usePathname();
	return (
		<nav className={`${containerStyles}`}>
			{links.map((link, index) => {
				return (
					<Link href={link.path} key={index} className={`capitalize ${linkStyles}`}>
						{link.name}
					</Link>
				);
			})}
		</nav>
	);
};

export default Nav;
