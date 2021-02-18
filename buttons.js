
//HTML 
// <!DOCTYPE html>
// <html>
//     <head>
//         <meta charset="utf-8">
//         <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css">
//         <title>Buttons Grid</title>
//     </head>
//     <body>
//         <div id="btns">
//             <button id="btn1" class="btn">1</button>
//             <button id="btn2" class="btn">2</button>
//             <button id="btn3" class="btn">3</button>
//             <button id="btn4" class="btn">4</button>
//             <button id="btn5" class="btn">5</button>
//             <button id="btn6" class="btn">6</button>
//             <button id="btn7" class="btn">7</button>
//             <button id="btn8" class="btn">8</button>
//             <button id="btn9" class="btn">9</button>
//         </div>
//         <script src="js/buttonsGrid.js" type="text/javascript"></script>
//     </body>
// </html>
// CSS
// #btns {
//     width: 75%;
// }

// .btn {
//     width: 30%;
//     height: 48px;
//     font-size: 24px;
// }

const id = document.getElementById('btn5');
id.addEventListener('click',function(){
    let temp = btn1.innerHTML;
    btn1.innerHTML = btn4.innerHTML;
    btn4.innerHTML = btn7.innerHTML;
    btn7.innerHTML = btn8.innerHTML;
    btn8.innerHTML = btn9.innerHTML;
    btn9.innerHTML = btn6.innerHTML;
    btn6.innerHTML = btn3.innerHTML;
    btn3.innerHTML = btn2.innerHTML;
    btn2.innerHTML = temp;
} )