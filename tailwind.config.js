/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                main: '#fe526d',
                hoverLight: '#f2f2f2',
                hoverDark: '#2F2739',
                bgDark: '#0c021c',
                borderDark: '#242424',
                secondDark: '#1d1d1d',
            },
        },
    },
    plugins: [],
};
