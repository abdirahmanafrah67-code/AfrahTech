/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0A4D4D', // Dark Teal (exact match to logo)
                    light: '#0D6060',   // Lighter Teal
                    dark: '#073838',    // Darker Teal
                },
                secondary: {
                    DEFAULT: '#FFD700', // Rich Gold/Yellow (premium look)
                    light: '#FFE55C',   // Lighter Gold
                    dark: '#FFC700',    // Darker Gold
                },
                accent: {
                    DEFAULT: '#FFD700', // Gold accent
                    teal: '#0A4D4D',    // Teal accent
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
                logo: ['Poppins', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'spin-slow': 'spin 8s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
