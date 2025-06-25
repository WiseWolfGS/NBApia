const config = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: ['light', 'dark'],
    }
};
export default config;
