// ----------- Html -----------

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Sandbox</title>
//     <meta charset="UTF-8" />
//     <link rel="stylesheet" href="src/styles.css" />
//   </head>

//   <body>
//     <div id="app"></div>

//     <script src="src/index.js"></script>
//     <input type="range" value="10" id="inputhandler" />
//     <div class="piechart" style="--percentage: 10%;"></div>
//   </body>
// </html>


// ----------- CSS -----------

// input {
//     font-size: 20px;
//     margin: 20px;
//     width: 400px;
// }
  
// .piechart {
// width: 200px;
// height: 200px;
// margin: 20px 110px;
// background-image: conic-gradient(green var(--percentage), lightgreen 0);
// border-radius: 50%;
// }

// ----------- js -----------

// const pieChart = document.querySelector('.piechart');

// document.querySelector('#inputhandler').addEventListener('input',(e) => {
//   pieChart.style = `--percentage:${e.target.value}%`
// });