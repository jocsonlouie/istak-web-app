/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          01: "var(--color-forestgreen-01)",
          02: "var(--color-forestgreen-02)",
          03: "var(--color-forestgreen-03)",
          04: "var(--color-forestgreen-04)",
          05: "var(--color-forestgreen-05)",
          06: "var(--color-forestgreen-06)",
          07: "var(--color-forestgreen-07)",
          08: "var(--color-forestgreen-08)",
          09: "var(--color-forestgreen-09)",
          10: "var(--color-forestgreen-10)",
        },

        brandDark: {
          01: "var(--color-autumnpinegreen-01)",
          02: "var(--color-autumnpinegreen-02)",
          03: "var(--color-autumnpinegreen-03)",
          04: "var(--color-autumnpinegreen-04)",
          05: "var(--color-autumnpinegreen-05)",
          06: "var(--color-autumnpinegreen-06)",
          07: "var(--color-autumnpinegreen-07)",
          08: "var(--color-autumnpinegreen-08)",
          09: "var(--color-autumnpinegreen-09)",
          10: "var(--color-autumnpinegreen-10)",
        },

        secondary: {
          01: "var( --color-sunlightgreen-01)",
          02: "var( --color-sunlightgreen-02)",
          03: "var( --color-sunlightgreen-03)",
          04: "var( --color-sunlightgreen-04)",
          05: "var( --color-sunlightgreen-05)",
          06: "var( --color-sunlightgreen-06)",
          07: "var( --color-sunlightgreen-07)",
          08: "var( --color-sunlightgreen-08)",
          09: "var( --color-sunlightgreen-09)",
          10: "var( --color-sunlightgreen-10)",
        },

        secondaryLight: {
          01: "var( --color-springyellow-01)",
          02: "var( --color-springyellow-02)",
          03: "var( --color-springyellow-03)",
          04: "var( --color-springyellow-04)",
          05: "var( --color-springyellow-05)",
          06: "var( --color-springyellow-06)",
          07: "var( --color-springyellow-07)",
          08: "var( --color-springyellow-08)",
          09: "var( --color-springyellow-09)",
          10: "var( --color-springyellow-10)",
        },

        neutrals: {
          01: "var( --color-neutrals-01)",
          02: "var( --color-neutrals-02)",
          03: "var( --color-neutrals-03)",
          04: "var( --color-neutrals-04)",
          05: "var( --color-neutrals-05)",
          06: "var( --color-neutrals-06)",
          07: "var( --color-neutrals-07)",
          08: "var( --color-neutrals-08)",
          09: "var( --color-neutrals-09)",
          10: "var( --color-neutrals-10)",
        },

        info: {
          01: "var( --color-info-01)",
          02: "var( --color-info-02)",
          03: "var( --color-info-03)",
          04: "var( --color-info-04)",
          05: "var( --color-info-05)",
          06: "var( --color-info-06)",
          07: "var( --color-info-07)",
          08: "var( --color-info-08)",
          09: "var( --color-info-09)",
          10: "var( --color-info-10)",
        },

        success: {
          01: "var( --color-success-01)",
          02: "var( --color-success-02)",
          03: "var( --color-success-03)",
          04: "var( --color-success-04)",
          05: "var( --color-success-05)",
          06: "var( --color-success-06)",
          07: "var( --color-success-07)",
          08: "var( --color-success-08)",
          09: "var( --color-success-09)",
          10: "var( --color-success-10)",
        },

        warning: {
          01: "var( --color-warning-01)",
          02: "var( --color-warning-02)",
          03: "var( --color-warning-03)",
          04: "var( --color-warning-04)",
          05: "var( --color-warning-05)",
          06: "var( --color-warning-06)",
          07: "var( --color-warning-07)",
          08: "var( --color-warning-08)",
          09: "var( --color-warning-09)",
          10: "var( --color-warning-10)",
        },

        error: {
          01: "var( --color-error-01)",
          02: "var( --color-error-02)",
          03: "var( --color-error-03)",
          04: "var( --color-error-04)",
          05: "var( --color-error-05)",
          06: "var( --color-error-06)",
          07: "var( --color-error-07)",
          08: "var( --color-error-08)",
          09: "var( --color-error-09)",
          10: "var( --color-error-10)",
        },
      },
      fontFamily: {
        sans: [
          '"Roboto"',
          'sans-serif',
          ...fontFamily.sans,
        ],
        roboto: "'Roboto', sans-serif",
        jost: "'Jost', sans-serif"
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
