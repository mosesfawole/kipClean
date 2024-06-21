/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				orange: '#cc5500',
				secondary: '#fff4ec',
				dark: '##2F2F2F',
				ash: '#595f66',
			},
			backgroundImage: {
				img1: "url('/img1.avif')",
				img2: "url('/img2.avif')",
				img3: "url('/img3.avif')",
			},
		},
		screens: {
			xs: '350px',
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
};
