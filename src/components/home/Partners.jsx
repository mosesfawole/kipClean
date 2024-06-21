const Partners = () => {
	const images = [
		'/unilever.png',
		'/cussons.png',
		'/clorox.png',
		'/waw.png',
		'/sunlight.png',
		'/givanas.png',
		'/nittol.png',
		'/mamuda.png',
	];
	const duplicatedImages = [...images, ...images];

	return (
		<div className='logo whitespace-nowrap mt-20 md:mt-[10rem] bg-[#fff4ec]'>
			<h1 className='text-black text-4xl font-medium text-center px-4 py-4'>
				Our Partners
			</h1>
			<div className='overflow-hidden px-24 py-12 pt-4'>
				<div className='logos-slide'>
					{duplicatedImages.map((src, index) => (
						<img key={index} src={src} alt='' className='w-[7rem]' />
					))}
				</div>
			</div>
		</div>
	);
};

export default Partners;
