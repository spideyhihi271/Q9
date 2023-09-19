/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                main: '#fe526d',
                hoverLight: '#f2f2f2',
                hoverDark: '#111827',
                bgDark: '#0c021c',
                bgDarkPlayer: '#080112',
                borderDark: '#242424',
                secondDark: '#111827',
            },
        },
    },
    plugins: [],
};
