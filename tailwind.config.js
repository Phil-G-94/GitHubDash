/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                eggshell: "#F4F1DE",
                "burnt-sienna": "#E07A5F",
                "delft-blue": "#3D405B",
                "js-yellow": "#F7DF1E",
                "html-orange": "#E34F26",
                "ts-blue": "#3178C6",
            },
        },
    },
    plugins: [],
};
