const AboutHeader = () => {
	const offers = [
		{
			heading: 'Who we are',
			paragraph:
				'We are a Nigeria-based company comprised of professional cleaner and plumbers, who have over a decade of combined experience. We are well-skilled and knowledgeable of both residential and commercial cleaning and plumbing services and also have a fleet of service vehicles to cater to any onsite repairs.',
		},
		{
			heading: 'What we do',
			paragraph:
				'Our highly skilled employees are confident that every job completed exceeds expectations. From emergency works to major cleaning and plumbing renovations, small or large projects, we have the right resources. With professional training and years of experience, we are able to keep our business running smoothly 24/7.',
		},
	];

	return (
		<>
			<div
				className='relative w-full h-[60vh] md:h-screen px-4 sm:px-8 text-white bg-center bg-no-repeat bg-cover '
				style={{
					background: 'url(/aboutbanner.png)',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
				}}>
				{/* overlay */}
				<div className='absolute h-[60vh] md:h-screen w-full inset-0 left-0 top-0 bg-black/50'></div>
				{/*  */}
				<div className='relative flex items-center justify-center h-full '>
					<div className='flex flex-col items-center gap-8 '>
						<h1 className='text-xl sm:text-2xl font-bold text-white '>
							Excellence is our standard
						</h1>
						<p className=' max-w-[35rem] text-center'>
							Your go-to hub for all cleaning and plumbing needs.we're dedicated
							to keeping your home and business clean, safe, and running
							smoothly. With our expert cleaning and plumbing services, you can
							trust us to handle all your maintenance needs with professionalism
							and care.
						</p>
						<button className='px-3 py-2 font-semibold border border-orange rounded-3xl'>
							Contact us now
						</button>
					</div>
				</div>
			</div>
			<div className='flex flex-col h-full gap-8 m-4 sm:m-8 text-white bg-white md:flex-row'>
				{offers.map((offer, index) => (
					<div
						key={index}
						className='flex flex-col gap-8 px-4 py-12 bg-orange rounded-xl'>
						<h1 className='text-lg font-semibold'>{offer.heading}</h1>
						<p className='text-sm sm:text-base'>{offer.paragraph}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default AboutHeader;
