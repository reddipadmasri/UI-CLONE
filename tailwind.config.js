/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0F766E',
                'primary-light': '#F0FDFA',
                'primary-dark': '#0D635D',
                accent: '#D97706',
                'accent-light': '#FEF3C7',
                'text': '#1F2937',
                'text-light': '#6B7280',
                'light-bg': '#F9FAFB',
                'border': '#E5E7EB',
            },
            fontFamily: {
                'serif': ['Georgia', 'Times New Roman', 'Times', 'serif'],
            },
            boxShadow: {
                'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
                'hover': '0 20px 40px rgba(0, 0, 0, 0.1)',
            },
        },
    },
    plugins: [],
}