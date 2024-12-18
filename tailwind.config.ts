import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
    darkMode: ["class"],
    content: ["./src/**/*.tsx"],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'var(--font-geist-sans)',
                    ...fontFamily.sans
                ]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
			inputBackground: '#09090B',
			inputBorderBackground: '#27272A',
			inputText: '#52525B',
			inputContainerBg: '#18181B',
			inputLabel: '#A1A1AA',
			inputFocus: '#10B981',
			inputValid: '#022C22',
			inputError: '#450A0A',
			inputInfo: '#06B6D4',
			inputInfoBg: '#083344',
			inputErrorBorder: '#EF4444',
			inputWarning: '#F97316',
			inputWarningForeGround: '#431407',
			inputMutedForeGround: '#A1A1AA',
			buttonPrimary: '#10B981',
			buttonPrimaryHover: '#34D399',
			buttonPrimaryBorder: '#064E3B',
			buttonPrimaryText: '#022C22',
			buttonOutline: '#52525B',
			buttonOutlineHover: '#A1A1AA',
			buttonOutlineBorder: '#52525B',
			buttonOutlineText: '#18181B',
			buttonDestructive: '#450A0A',
			buttonDestructiveHover: '#EF4444',
			buttonWarning: '#431407',
			buttonWarningHover: '#F97316',
			buttonInfo: '#083344',
			buttonInfoHover: '#06B6D4',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
