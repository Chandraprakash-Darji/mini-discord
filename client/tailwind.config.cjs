/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                bgDark: "#202225",
                grayText: "rgb(150,152,157)",
                text: "rgb(255,255,255)",
            },
        },
    },
    plugins: [],
};
