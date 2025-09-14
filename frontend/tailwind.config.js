/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#2C3E50', // Soft Navy
					50: '#F8FAFC',
					100: '#F1F5F9',
					200: '#E2E8F0',
					300: '#CBD5E1',
					400: '#94A3B8',
					500: '#2C3E50',
					600: '#1E293B',
					700: '#0F172A',
					800: '#0B0F14',
					900: '#020617',
				},
				secondary: {
					DEFAULT: '#3CAEA3', // Teal Green
					50: '#F0FDFA',
					100: '#CCFBF1',
					200: '#99F6E4',
					300: '#5EEAD4',
					400: '#2DD4BF',
					500: '#3CAEA3',
					600: '#0D9488',
					700: '#0F766E',
					800: '#115E59',
					900: '#134E4A',
				},
				accent: {
					DEFAULT: '#EE6C4D', // Warm Coral
					50: '#FEF2F2',
					100: '#FEE2E2',
					200: '#FECACA',
					300: '#FCA5A5',
					400: '#F87171',
					500: '#EE6C4D',
					600: '#DC2626',
					700: '#B91C1C',
					800: '#991B1B',
					900: '#7F1D1D',
				},
				background: '#F5F5F5', // Soft Warm Gray
				text: '#444444', // Charcoal Gray
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
