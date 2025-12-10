import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'picto-primary': '#9929fb',
                'picto-primary-dark': '#650fa0',
                'soft-white': '#f0f1f3',
                'soft-dark': '#87909d',
            },
            screens: {
                xxs: '340px',
                xs: '363px',
                xxl: '1320px',
            },
        },
    },

    plugins: [forms, daisyui],
    daisyui: {
        themes: ['light', 'dark', 'cupcake'],
    },
};
