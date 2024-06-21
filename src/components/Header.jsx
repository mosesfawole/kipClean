import { useEffect, useState } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { IoIosArrowRoundBack } from 'react-icons/io';

const Header = () => {
	const slides = [
		{
			img: '/banner.jpg',
		},
		{
			img: '/banner2.png',
		},
		{
			img: '/banner3.png',
		},
		{
			img: '/banner4.png',
		},
	];
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + slides.length) % slides.length
		);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 3000); // Change slide every 3 seconds

		return () => clearInterval(interval); // Cleanup interval on component unmount
	}, []);

	return (
		<div className='relative'>
			{/* Background Image */}
			<div
				className='absolute inset-0 bg-center bg-no-repeat bg-cover sm:block'
				style={{
					backgroundImage: `url(${slides[currentIndex].img})`,
					backgroundRepeat: 'no-repeat',
					// transition: "ease-in",
					// transitionDuration: ".7s",
				}}>
				<div className='absolute inset-0 bg-black opacity-50'></div>
			</div>
			{/* Content */}
			<div className='relative flex items-center justify-center gap-24 md:gap-[12rem] px-8 py-16 md:py-0 md:min-h-screen '>
				<div
					className='hidden absolute left-4 lg:left-[4rem]   md:block border border-[#cc5500] rounded-full px-1 py-1'
					onClick={prevSlide}>
					<IoIosArrowRoundBack size={30} color='#cc5500' />
				</div>
				<div className='w-full md:w-[45rem] text-center flex flex-col items-center pt-8'>
					<h1 className='text-2xl font-bold text-center text-white md:text-4xl '>
						We provide top-notch
						<span className='block '>cleaning and plumbing services</span>
					</h1>
					<p className='mt-8 w-full sm:w-[40rem] text-center  text-white font-normal leading-relaxed md:leading-relaxed text-sm sm:text-base'>
						Kip-clean Cleaning and plumbing is your one-stop shop for all your
						household needs. From fixing a leaky faucet to cleaning your
						carpets, we've got you covered.
					</p>
					<button className='mt-8 bg-[#CC5500] text-white font-medium px-8 py-3 rounded-3xl'>
						Request a service
					</button>
					<div className='absolute -bottom-[3rem] flex items-center justify-center h-10 mt-24 w-fit'>
						{slides.map((slide, index) => (
							<div
								key={index}
								className={`w-16 h-1 rounded-sm  mx-1 cursor-pointer ${
									index === currentIndex ? 'bg-[#cc5500]' : 'bg-[#FFF4EC]'
								}`}
								onClick={() => setCurrentIndex(index)}
							/>
						))}
					</div>
				</div>
				<div
					className=' hidden absolute right-4 lg:right-[4rem] md:block border border-[#cc5500] rounded-full px-1 py-1'
					onClick={nextSlide}>
					<IoIosArrowRoundForward size={30} color='#cc5500' />
				</div>
			</div>
		</div>
	);
};

export default Header;
