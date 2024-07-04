import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';

import { RiBriefcase4Fill, RiTeamFill, RiTodoFill, RiArrowDownSLine } from 'react-icons/ri';

// components
import DevImg from './DevImg';
import Badge from './Badge';
// import Socials from './Socials';

const Hero = () => {
	return (
		<section className='py-12 xl:py-24 h-[84vh] xl:pt-28'>
			<div className='container mx-auto'>
				<div className='flex justify-between gap-x-8'>
					<div className='flex max-w-[700px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
						<h4 className='text-sm uppercase font-semibold mb-4 text-primary tracking-[3px]'>Front-End Web Developer</h4>
						<h1 className='h1 mb-4'>Hello, my name is Felipe</h1>
						<p className='subtitle max-w-[490px] mx-auto xl:mx-0'>Building simple and beautiful things for complex interfaces is what I enjoy most.</p>

						{/* buttons */}
						<div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
							<Link href='/contact'>
								<Button className='gap-x-2'>
									Contact me <Send size={18} />
								</Button>
							</Link>
							<Button variant='secondary' className='gap-x-2'>
								Download Resume <Download size={18} />
							</Button>
						</div>
						{/* <Socials containerStyles='flex gap-x-5 mx-auto xl:mx-0' iconsStyles='text-foreground text-[25px] hover:text-primary transition-all' /> */}
					</div>
					<div className='hidden xl:flex relative'>Image</div>
				</div>
				<div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
					<RiArrowDownSLine className='text-3xl text-primary' />
				</div>
			</div>
		</section>
	);
};

export default Hero;
