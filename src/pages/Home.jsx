// import Cleaning from "../components/Cleaning";
import ChooseUs from '../components/ChooseUs';
import CleaningServices from '../components/CleaningServices';
import Header from '../components/Header';
import Faq from '../components/home/Faq';
import Partners from '../components/home/Partners';
import Statistics from '../components/home/Statistics';
import Testimonial from '../components/home/Testimonial';

const Home = () => {
	return (
		<div className='max-w-[1440px] mx-auto'>
			<Header />
			<ChooseUs />
			<CleaningServices />
			<div className='w-full text-center mt-20 bg-[#494949] text-white py-14'>
				<h1 className=' text-xl md:text-4xl font-bold'>
					Do you need any of our services?
				</h1>
				<p className='mt-7 text-lg font-medium'>
					Kip-clean Cleaning and plumbing is your one-stop for all your
					household needs.
				</p>
				<p className='text-lg font-medium'>
					From fixing a leaky faucet to cleaning your carpets, we've got you
					covered.
				</p>
				<button className='mt-8 border border-red-400 rounded-full p-4 font-medium text-lg'>
					Book a service
				</button>
			</div>
			<Testimonial />
			<Partners />
			<Faq />
			<Statistics />
		</div>
	);
};

export default Home;
