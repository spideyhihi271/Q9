/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                light: '#4097ff',
                hoverLight: '#f6f8fb',
                dark: '#e8e9eb',
                hoverDark: '#1c1d1f',
                bgDark: '#111214',
            },
        },
    },
    plugins: [],
};
