import { useState } from 'react';
import data from './data.js';
import { FaArrowLeft, FaBars } from 'react-icons/fa';

const Tabs = () => {
	const [currentDataIndex, setCurrentDataIndex] = useState(0);
	const [selectedLocation, setSelectedLocation] = useState(null);
	const [selectedService, setSelectedService] = useState(null);
	const [activeCircles, setActiveCircles] = useState([true, false]);
	const [isSummaryVisible, setIsSummaryVisible] = useState(false);

	const handleLocationClick = (product) => {
		setSelectedLocation(product);
		console.log('Updated selectedLocation:', product);
	};

	const handleServiceClick = (product) => {
		setSelectedService(product);
		console.log('Updated selectedService:', product);
	};

	const handleArrowClick = () => {
		setCurrentDataIndex((prevIndex) => {
			const newIndex = prevIndex === 0 ? 1 : 0;
			setActiveCircles((prevCircles) => {
				return prevCircles.map((_, i) => i === newIndex);
			});
			return newIndex;
		});
	};

	const toggleSummaryVisibility = () => {
		setIsSummaryVisible(!isSummaryVisible);
	};

	const currentData = data[currentDataIndex];

	return (
		<div className='w-full flex flex-col items-center px-4 mb-20'>
			<h1 className='sm:text-2xl md:text-4xl font-bold text-center uppercase'>
				Book a service
			</h1>
			<div className='w-full relative mt-10'>
				<div className='w-full flex flex-col md:flex-row relative'>
					<div className='w-[70%] hidden md:flex bg-orange p-8 items-center flex-col text-center gap-4 text-white'>
						<div className='flex gap-8 pt-4'>
							{data.map((_, index) => (
								<div
									key={index}
									className={`w-1 aspect-[1/1] rounded-full active-circle ${
										activeCircles[index] ? 'bg-black' : 'bg-white'
									}`}></div>
							))}
						</div>

						<img src={currentData.banner} alt='' width={70} />
						<h1 className='text-xl '>{currentData.heading}</h1>
						<p className='text-sm '>{currentData.paragraph}</p>
						<div className='mt-[10rem]'>
							<h1 className='text-xl font-semibold '>Got a question?</h1>
							<p className='pt-3 text-sm '>
								Use the live chat or email <br />
								<span className='font-bold text-black'>
									bookings@kipclean.com
								</span>
							</p>
						</div>
					</div>
					<div className='w-full bg-secondary p-4 relative'>
						{currentData.name === 'Location' && (
							<>
								<h1>Select a location</h1>
								<hr />
								<div className='mt-8 flex flex-col gap-4 w-full'>
									{currentData.products.map((product, index) => (
										<div
											key={index}
											className={`cursor-pointer flex items-center gap-4 border border-gray-400 hover:bg-gray-200 rounded-lg px-2 py-1 w-full ${
												selectedLocation === product ? 'bg-gray-200' : ''
											}`}
											onClick={() => handleLocationClick(product)}>
											<img src={product.img} alt='' width={50} />
											<p className='w-full'>{product.name}</p>
										</div>
									))}
								</div>
							</>
						)}
						{currentData.name === 'Service' && (
							<>
								<h1>Select a service</h1>
								<hr />
								<div className='mt-8 flex flex-col gap-4 w-full'>
									{currentData.products.map((product, index) => (
										<div
											key={index}
											className={`cursor-pointer flex gap-4 border border-gray-400 hover:bg-gray-200 rounded-xl px-2 py-2 w-full items-center ${
												selectedService === product ? 'bg-gray-200' : ''
											}`}
											onClick={() => handleServiceClick(product)}>
											<img src={product.img} alt='' width={50} />
											<p className='w-full font-semibold'>{product.name}</p>
										</div>
									))}
								</div>
							</>
						)}
						<hr className='mt-[4rem]' />
						<div className='flex left-0 justify-between items-center absolute bottom-[10px] w-full px-4'>
							<div
								className={`${
									currentDataIndex > 0 ? 'block cursor-pointer' : 'hidden'
								}`}>
								<FaArrowLeft onClick={handleArrowClick} />
							</div>
							<button
								onClick={() => handleArrowClick()}
								className='bg-orange text-white py-1 px-4 rounded-full'>
								Proceed
							</button>
						</div>
					</div>
					<div className='w-full md:w-[70%] min-h-56 bg-orange p-4 text-white'>
						<h1 className='text-center text-xl'>Summary</h1>
						<div className='bg-secondary rounded-b-lg mt-7 py-8 px-4 text-black border-b'>
							<h1 className='text-xl font-semibold'>Flat</h1>
							<p className='text-orange text-semibold'>30 April, 10:00</p>
							<p className='text-white text-sm p-1 bg-orange rounded w-[10rem]'>
								Estate 3Bedroom Flat
							</p>

							<h2 className='mt-7 text-[#D9D9D9]'>
								LOCATION__________________
								{selectedLocation && (
									<span className='font-semibold text-black'>
										{selectedLocation.name}
									</span>
								)}
							</h2>
							<h2 className='mt-7 text-[#D9D9D9] border-b-2 pb-7'>
								SERVICE__________________
								{selectedService && (
									<span className='font-semibold text-black'>
										{selectedService.name}
									</span>
								)}
							</h2>

							<div className='text-black mt-7'>
								<h1 className=' font-semibold border-b'>COST BREAKDOWN</h1>

								<div className='border-b'>
									<p className='flex justify-between items-center w-full mt-4'>
										Flat <span className='font-semibold'>N0.00</span>
									</p>
									<p className='flex justify-between items-center w-full mt-4'>
										3 Bedroom Flat <span className='font-semibold'>N0.00</span>
									</p>
								</div>

								<p className='flex justify-between text-lg items-center w-full mt-2'>
									Total Price <span className='font-semibold'>N0.00</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tabs;
