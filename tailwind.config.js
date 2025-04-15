/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#fffaee",
                accent: {
                    1: "#fddd62",
                    2: "#fe9687",
                    3: "#d1adfe",
                },
                light: "#ffffff",
                dark: "#0a0a0a",
            },
        },
    },
    plugins: [],
};
