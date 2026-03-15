/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'deep-black': '#0b0b0b',
                'soft-blue': '#3b82f6',
                'subtle-gold': '#d4af37',
                'dark-gray': '#121212',
                'carbon': '#2E2E2E',
                'carbon-light': '#393939',
                'white-light': '#e5e5e5',
                'muted-text': '#9ca3af',
                'green-sorted': '#22c55e'
            },
            fontFamily: {
                sans: ['Inter', 'Poppins', 'sans-serif'],
                mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
            }
        },
    },
    safelist: ["bg-soft-blue", "bg-subtle-gold", "bg-red-500", "bg-green-500", "bg-yellow-500", "text-soft-blue", "text-subtle-gold", "border-soft-blue"],
    plugins: [],
};
