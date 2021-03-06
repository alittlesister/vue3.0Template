module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    spacing: exportPxirelUnit([
      1,2,10,12,16,20,24,25,30,32,38,40,50,56,60,64,65,80,100,140,200,264
    ]),
    minWidth: exportPxirelUnit([800]),
    fontSize: {
      xs: '12px',
      sm: '14px',
      normal: '16px',
      ls: '18px',
      xl: '20px',
      xxl:'22px',
      xxxl:'24px'
    },
    backgroundColor: theme => ({
      ...theme("colors"),
      'checked': "#F2F6FC",
      'uploadIconBg': "#C0C4CC",
      'uploadBg':'#F5F7FA'
    }),
    textColor: theme => ({
      ...theme,
      'standard':'#606266',
      'checked': '#303133',
      'iconColor':'#C0C4CC',
      'green':'#67C23A',
      'blue':'#409EFF',
      'red': '#F56C6C'
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

function exportPxirelUnit(array) {
  let obj =  array.reduce((pre, next) => {
    pre[next] = next+'px';
    return pre;
  }, {})
  return obj
}