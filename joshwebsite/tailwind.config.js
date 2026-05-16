/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', 'Monaco', 'monospace'],
            },
            fontSize: {
                'hero': ['clamp(2rem,5vw,4rem)', { lineHeight: '1.2' }],
                'section': ['clamp(1.5rem,3.5vw,2.5rem)', { lineHeight: '1.3' }],
                'subtitle': ['clamp(1.25rem,2.5vw,1.875rem)', { lineHeight: '1.4' }],
            },
        },
    },
    plugins: [
        require("daisyui"),
    ],
};