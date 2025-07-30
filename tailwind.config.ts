import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					light: '#FFFFFF',
					dark: '#1D2F6F',
				},
				secondary: {
					light: '#FFD700',
					dark: '#FFB800',
				},
				accent: {
					light: '#D32F2F',
					dark: '#9A1B1B',
				},
				neutral: '#F3F4F6',
				info: '#60A5FA',
				success: '#34D399',
				warning: '#FBBF24',
				error: '#EF4444',
				dark: '#212129',
				light: '#787c82',
				main: '#0073FF',
				white: '#FFFFFF',
			},
		},
	},
}