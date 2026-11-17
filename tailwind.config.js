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
                    DEFAULT: '#1a7a1a', // Deep Green
                    light: '#4CAF50',   // Medium Green
                    dark: '#0d5c0d',    // Dark Forest Green
                },
                secondary: {
                    DEFAULT: '#e8f500', // Bright Yellow-Green
                    light: '#f5ff4d',   // Light Yellow
                    dark: '#b8c200',    // Darker Yellow-Green
                },
                accent: {
                    DEFAULT: '#d4e600', // Yellow-Green accent
                    green: '#2a9a2a',   // Vibrant Green accent
                },
                brand: {
                    'logo-dark': '#0A2E28',
                    'green-dark': '#0d5c0d',
                    'green': '#1a7a1a',
                    'green-mid': '#4CAF50',
                    'yellow-green': '#8dc63f',
                    'yellow': '#d4e600',
                    'yellow-light': '#e8f500',
                }
            },
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', '"Segoe UI"', 'sans-serif'],
                heading: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"Segoe UI"', 'sans-serif'],
                logo: ['Poppins', 'sans-serif'],
            },
            backgroundImage: {
                'brand-gradient': 'radial-gradient(ellipse at 30% 20%, #d4e600 0%, #4CAF50 35%, #1a7a1a 60%, #0d5c0d 100%)',
                'brand-gradient-linear': 'linear-gradient(135deg, #0d5c0d 0%, #1a7a1a 20%, #4CAF50 45%, #8dc63f 65%, #d4e600 85%, #e8f500 100%)',
                'brand-gradient-radial': 'radial-gradient(ellipse at 25% 30%, #e8f500 0%, #8dc63f 30%, #4CAF50 55%, #1a7a1a 75%, #0d5c0d 100%)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'spin-slow': 'spin 8s linear infinite',
                'gradient-shift': 'gradientShift 8s ease infinite',
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
                gradientShift: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
        },
    },
    plugins: [],
}
