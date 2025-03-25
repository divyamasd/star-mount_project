module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accentred-500": "var(--accentred-500)",
        "background-color": "var(--background-color)",
        "background-gray": "var(--background-gray)",
        "foundation-greygrey-100": "var(--foundation-greygrey-100)",
        "foundation-greygrey-400": "var(--foundation-greygrey-400)",
        "foundation-greygrey-500": "var(--foundation-greygrey-500)",
        "foundation-primary-blueprimary-blue-500":
          "var(--foundation-primary-blueprimary-blue-500)",
        "foundation-successsuccess-50": "var(--foundation-successsuccess-50)",
        "foundation-successsuccess-500": "var(--foundation-successsuccess-500)",
        "foundationgreygrey-100": "var(--foundationgreygrey-100)",
        "foundationgreygrey-300": "var(--foundationgreygrey-300)",
        "foundationprimay-blueblue-100": "var(--foundationprimay-blueblue-100)",
        "foundationprimay-blueblue-500": "var(--foundationprimay-blueblue-500)",
        "foundationprimay-blueblue-700": "var(--foundationprimay-blueblue-700)",
        "gray-100": "var(--gray-100)",
        "gray-50": "var(--gray-50)",
        hostbooksbackground: "var(--hostbooksbackground)",
        lightgoten: "var(--lightgoten)",
        "pure-white": "var(--pure-white)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "mulish-12-sp-medium": "var(--mulish-12-sp-medium-font-family)",
        "mulish-12-sp-regular": "var(--mulish-12-sp-regular-font-family)",
        "mulish-14-sp-medium": "var(--mulish-14-sp-medium-font-family)",
        "mulish-14-sp-regular": "var(--mulish-14-sp-regular-font-family)",
        "mulish-18-sp-medium": "var(--mulish-18-sp-medium-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "small-card-shadow1": "var(--small-card-shadow1)",
        "web-large-cards": "var(--web-large-cards)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
