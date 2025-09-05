/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            width: {
                'app-container-small-width': 'calc(99.99% - 32px)',
                'app-container-medium-width': 'calc(99.99% - 80px)',
                'app-container-large-width': 'calc(99.99% - 128px)',
                'app-container-x-large-width': '1472px',
            },
            margin: {
                'app-container-x-large-margin-left': 'calc(-736px + 50%)',
            },
        },
    },
    plugins: [],
};
