import { Line } from './BaseCharts'

// const tailwindConfig = require('../../tailwind.config') // Or wherever the file is
// import {bg-background-primary} from "../../assets/css/tailwind.css";
// console.log('var(--bg-background-primary)');

// import '../../assets/css/tailwind.css';

// document.documentElement.style.setProperty('--bg-background-primary', 'blue');
// getter
// document.documentElement.style.getPropertyValue('--bg-background-primary');



// import resolveConfig from '../../resolveConfig';
import { theme } from "../../tailwind.config";
console.log(theme);


export default {

  extends: Line,

  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          fontColor: "#fffa00",
          // backgroundColor: 'var(--bg-background-primary)',
          // backgroundColor: theme('var(--bg-background-primary)'),
          backgroundColor: theme('themecolors.white'),
          data: [40, 39, 10, 40, 39, 80, 40]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false, showTooltips: false})
  }
}
