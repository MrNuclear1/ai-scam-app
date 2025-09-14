/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				sage: {
					DEFAULT: '#ccd2b4', // Light Sage Green
					50: '#fefefe', // Near White
					100: '#fbf9e3', // Cream
					200: '#f0ebce', // Pale Beige-Green
					300: '#ccd2b4', // Light Sage Green
					400: '#cba279', // Warm Tan
					500: '#ccd2b4',
					600: '#b8c19f',
					700: '#a4b08a',
					800: '#909f75',
					900: '#7c8e60',
				},
				primary: {
					DEFAULT: '#cba279', // Warm Tan
					50: '#fefefe', // Near White
					100: '#fbf9e3', // Cream
					200: '#f0ebce', // Pale Beige-Green
					300: '#ccd2b4', // Light Sage Green
					400: '#cba279', // Warm Tan
					500: '#cba279',
					600: '#b5926b',
					700: '#9f825d',
					800: '#89724f',
					900: '#736241',
				},
				secondary: {
					DEFAULT: '#ccd2b4', // Light Sage Green
					50: '#fefefe', // Near White
					100: '#fbf9e3', // Cream
					200: '#f0ebce', // Pale Beige-Green
					300: '#ccd2b4', // Light Sage Green
					400: '#cba279', // Warm Tan
					500: '#ccd2b4',
					600: '#b8c19f',
					700: '#a4b08a',
					800: '#909f75',
					900: '#7c8e60',
				},
				accent: {
					DEFAULT: '#cba279', // Warm Tan
					50: '#fefefe', // Near White
					100: '#fbf9e3', // Cream
					200: '#f0ebce', // Pale Beige-Green
					300: '#ccd2b4', // Light Sage Green
					400: '#cba279', // Warm Tan
					500: '#cba279',
					600: '#b5926b',
					700: '#9f825d',
					800: '#89724f',
					900: '#736241',
				},
				background: '#f0ebce', // Pale Beige-Green
				text: '#5a5a5a', // Darker gray for better contrast
			},
			animation: {
				'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'bounce': 'bounce 1s infinite',
			},
			backdropBlur: {
				xs: '2px',
			}
		},
	},
	plugins: [],
}
