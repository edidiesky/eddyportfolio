/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        custom: "1fr 40%",
        custom_2: "40% 1fr",
        custom_3: "15% 1fr",
      },
      // Blog_Styles
      fontFamily: {
        portfolio_bold: ["Agency_Extended", "sans-serif"],
        portfolio_bold1: ["Agency_Extended", "sans-serif"],
        portfolio_italic: ["Italic", "sans-serif"],
        portfolio_semibold: ["SemiBold", "sans-serif"],
      },
      background: {
        light_grey: "#F6F5F4",
      },
      maxWidth: {
        custom: "1200px",
        custom_1: "1200px",
        custom_2: "1304px",
      },
      boxShadow: {
        custom:
          "0 0.3259259164px 0.7333333492px 0 rgba(0,0,0,.12), 0 1.5407407284px 2.8666665554px 0 rgba(0,0,0,.07), 0 4px 9px 0 rgba(0,0,0,.05)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        text_dark_1: "#000000",
        dark_grey: "#a49e99",
        light_grey: "rgb(225, 223, 221)",
        green_1: "#008A69",
        darker_green: "#007e60",
        background_light: "#fcfbf9",
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
