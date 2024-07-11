import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap } from 'lucide-react';

const infoData = [
	{
		icon: <User2 size={20} />,
		text: 'Felipe Gonzalez',
	},
	{
		icon: <PhoneCall size={20} />,
		text: '+1 (778) 697-7909',
	},
	{
		icon: <MailIcon size={20} />,
		text: 'fgonzalezcare@gmail.com',
	},
	{
		icon: <HomeIcon size={20} />,
		text: 'Vancouver, BC',
	},
	{
		icon: <GraduationCap size={20} />,
		text: 'Web Design Degree',
	},
	{
		icon: <GraduationCap size={20} />,
		text: 'Web Development Diploma',
	},
];

const skillsData = [
	{
		title: 'skills',
		data: [
			{
				name: 'HTML, CSS',
			},
			{
				name: 'Front-end Development',
			},
			{
				name: 'JS, React, Tailwind, Wordpress',
			},
			{
				name: 'Back-end Development, Node, Axios, Python',
			},
		],
	},
	{
		title: 'tools',
		data: [
			{
				name: 'VSCode, Nova',
			},
			{
				name: 'Photoshop, Illustrator, InDesign',
			},
			{
				name: 'Figma, XD',
			},
			{
				name: 'Terminal, Postman',
			},
		],
	},
];

const quialificationData = [
	{
		title: 'education',
		data: [
			{
				university: 'Gabriela Mistral University Chile',
				quialification: 'Crossmedia Web Designer',
				years: '2017 - 2010',
			},
			{
				institution: 'BrainStation Vancouver',
				quialification: 'Web Development Diploma',
				year: '2023',
			},
		],
	},
];

const About = () => {
	const getData = (arr, title) => {
		return arr.find((item) => item.title === title);
	};
	return (
		<section className='xl:h-[860px] pb-12 xl:py-24'>
			<div className='container mx-auto'>
				<h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>About me</h2>
				<div className='flex flex-col xl:flex-row'>
					<div className='flex-1'>
						<Tabs defaultValue='personal'>
							<TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
								<TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
									Personal Info
								</TabsTrigger>
								<TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>
									Qualifications
								</TabsTrigger>
								<TabsTrigger className='w-[162px] xl:w-auto' value='skills'>
									Skills
								</TabsTrigger>
							</TabsList>
							<div className='text-lg mt-12 xl:mt-8'>
								<TabsContent value='personal'>
									<div className='text-center xl:text-left'>
										<h3 className='h3 mb-4'>Unmatched Service Quality for over 10 years</h3>
										<p className='subtitle max-w-xl mx-auto xl:mx-0'>I specialize in crafting intuitive websites with cutting-edge technology, delivering dynamic and engagins user experiences.</p>

										<div className='grid xl:grid-cols-2 gap-3 mb-12'>
											{infoData.map((item, index) => {
												return (
													<div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
														<div className='text-primary'>{item.icon}</div>
														<div>{item.text}</div>
													</div>
												);
											})}
										</div>
									</div>
								</TabsContent>
								<TabsContent value='qualifications'>qualifications info</TabsContent>
								<TabsContent value='skills'>skills info</TabsContent>
							</div>
						</Tabs>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
