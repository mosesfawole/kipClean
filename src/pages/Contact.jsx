import Assurance from '../components/ContactUs/Assurance';
import ContactHeader from '../components/ContactUs/ContactHeader';
import Newsletter from '../components/ContactUs/Newsletter';
import ReachUs from '../components/ContactUs/ReachUs';

const Contact = () => {
	return (
		<div className='max-w-7xl mx-auto'>
			<ContactHeader />
			<ReachUs />
			<Assurance />
			<Newsletter />
		</div>
	);
};

export default Contact;
