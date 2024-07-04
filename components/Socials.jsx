'use client';

import { RiLinkedinFill, RiGithubFill, RiFacebookFill, RiInstagramFill } from 'react-icons/ri';

import Link from 'next/link';

const icons = [
	{
		path: 'https://www.linkedin.com/in/felipegonzalezcare/',
		name: <RiLinkedinFill />,
	},
	{
		path: 'https://github.com/psyout',
		name: <RiGithubFill />,
	},
	{
		path: 'https://www.facebook.com/fegonzalezcare/',
		name: <RiFacebookFill />,
	},
	{
		path: 'https://www.instagram.com/psyout/',
		name: <RiInstagramFill />,
	},
];

const Socials = ({ containerStyles, iconsStyles }) => {
	return (
		<div className={`${containerStyles}`}>
			{icons.map((icon, index) => {
				return (
					<Link href={icon.path} key={index} target='_blank'>
						<div className={`${iconsStyles}`}>{icon.name}</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Socials;
