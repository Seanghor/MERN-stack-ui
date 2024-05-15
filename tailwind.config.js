import withMT from "@material-tailwind/react/utils/withMT";
/** @type {import('tailwindcss').Config} */

export const content = [
  "./index.html",
  // "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
  "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
  "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    screens: {
      'large': '1640px', // Custom breakpoint named 'large' for 1440px
    },
    lineHeight: {
      custom: '30px'
    },
    transformOrigin: {
      'top-left-1/3-3/4': '33% 75%',
    },
    animation: {
      text: 'text 5s ease infinite',
      'infinite-scroll': 'infinite-scroll 40s linear infinite',
      'infinite-scroll-slow': 'infinite-scroll-slow 50s linear infinite'
    },

    keyframes: {
      text: {
        '0%, 100%': {
          'background-size': '200% 200%',
          'background-position': 'left center',
        },
        '50%': {
          'background-size': '200% 200%',
          'background-position': 'right center',
        },
      },
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'Angkor': ['Angkor', 'cursive'],
      'DancingScript': ['Dancing Script', 'cursive'],
      'Dangrek': ['Dangrek', 'cursive'],
      'Fasthand': ['Fasthand', 'cursive'],
    },
    fontSize: {
      '2px': '2px',
      '7px': '7px',
      '8px': '8px',
      '10px': '10px',
      '12px': '12px',
      "13px": "13px",
      '14px': '14px',
      '16px': '16px',
      '18px': '18px',
      '20px': '20px',
      '22': '22px',
      '24px': '24px',
      '32px': '32px',
      '56px': '56px',
      '64px': '64px',
      '90px': '90px',
      '100px': '100px',
      'h1': '61px',
      'h2': '49px',
      'h3': '39px',
      'h4': '31px',
      'h5': '25px',
      'h6': '20px',
      'body': '16px',
      'caption': '13px',
      'smallest': '10px',
      'p_smartphone': '11px',
      'p_meduim': '12px',
      'p_large': '1rem',
      header: "70px",
      description: '24px'
    },
    colors: {
      nav: "#111827",
      footer: "#111827",
      aba: "#015e7b",
      bg_color: "#FFFBFB",
      bg_gray: "#E2DCDC",
      bg_red: "#F5E4E4",

      primary: {
        normal: '#0e6431',
        hover: '#0d5a2c',
        active: '#0b5027'
      },
      white: {
        normal: '#FFFFFF',
        hover: '#D1CFCF',
        active: '#C0C2C2'
      },
      black: {
        normal: "#000000",
      },
      gray: {
        diable: '#E2DCDC'
      },

      red: {
        normal: '#850000',
        hover: '#F24E1E',
        active: '#cc3636'
      },
    },
  },
  plugins: [

  ],
};

