module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                'primary': '#DF5C32',
                'secondary': '#152C5B'
            },
            fontFamily: {
                'sans': ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
            },
            animation: {
                'fadein': 'fadeIn 1s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0, transform: "translateY(2rem)" },
                    '100%': { opacity: 1, transform: "translateY(0)" }, 
                },
            },
        },
    },
    plugins: [],
}