import { IoSearch } from 'react-icons/io5';
const Search = () => {
	return (
		<div className='my-10 px-4 md:px-16 w-full relative'>
			<input
				type='text'
				name='search'
				placeholder='Search location service... '
				className=' bg-secondary border-none outline-none w-full p-4 rounded-xl text-black placeholder:text-black relative'
			/>
			<div className=' absolute bottom-[45%] right-[10%]'>
				<IoSearch />
			</div>
		</div>
	);
};

export default Search;
