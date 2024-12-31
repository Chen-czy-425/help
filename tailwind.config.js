/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['思源黑体', 'sans-serif'], // 添加 Microsoft YaHei 到无衬线字体列表中
      }
    },
  },
  plugins: [],
}

