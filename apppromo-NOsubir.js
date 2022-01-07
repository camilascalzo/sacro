// const detail = document.querySelectorAll(".promo-detail");
// const detailArr = Array.from(detail).entries();
// const text = document.querySelectorAll(".promo-item-text-wrapper");
// const btn = document.querySelectorAll(".promo-comprar-btn");
// const btnArr = Array.from(btn).entries();
// const modal = document.getElementById("modal");
// const closeModal = document.getElementById("close-modal");
// const cotizacion = document.getElementById("cotizacionBtn");
// const cotizacionP = document.querySelector(".cotizacion-p");
// const select = document.getElementById("select-cuotas");
// const option = document.getElementsByName("cant-cuotas");
// const optionArr = Array.from(option);
// const cantCuotasDetalle0 = document.querySelector("#cant-cuotas-detalle-0");
// const cantCuotasDetalle1 = document.querySelector("#cant-cuotas-detalle-1");
// const cantCuotasDetalle2 = document.querySelector("#cant-cuotas-detalle-2");
// const cantCuotasDetalle3 = document.querySelector("#cant-cuotas-detalle-3");
// const checkTD = document.querySelectorAll(".check-td");
// const checkTC = document.querySelectorAll(".check-tc");
// const span = document.getElementById("confirmar-compra");

// let index = 0;
// let precio = 0;
// let precioOriginal = 0;
// let tipoCompra = "";
// let cuota = 0;
// let cuotaValor = 0;
// let itemValue = 0;


// for (let [index, view] of detailArr) {
//     const verDetalle = function (e) {
//             text[index].style.display = "block";
//             detail[index].style.display = "none";
//             e.preventDefault();
//     };

//     view.addEventListener("click", verDetalle);
// }

// function abrirModal(id) {
//     index = id;
//     modal.style.display = "block";
//     pasarPrecio();
// }

// function pasarPrecio() {
//     switch(index) {
//         case 0: precio=2900;
//         break;
//         case 1: precio = 3700;
//         break;
//         case 2: precio = 7300;
//         break;
//     }
//     activarTipoPago();
// }

// function activarTipoPago() {
//     checkTD.forEach(item => {item.addEventListener("click", function(){
//     tipoCompra = "td";
//     confirmarCompra();
// })});

//     checkTC.forEach(item => {item.addEventListener("change", function(){

//         if(checkTC.checked = true) {
//             select.style.display ="block";
//         }
//         tipoCompra = "tc";
        
//     })});
// }


// option.forEach(item => {item.addEventListener("change", function(){

//     itemValue = parseInt(item.value);
//     switch(itemValue) {
//         case 1: cuota=1;
//         break;
//         case 2: cuota = 2;
//         break;
//         case 3: cuota = 3;
//         break;
//     }
  
//     cuotaValor = precio/cuota;
//     confirmarCompra();
// })});


// function confirmarCompra(){
    
//     const par = document.createElement("p");
//     const btn = document.createElement("button");
//     btn.innerHTML = "Confirmar compra";
    

//     if(tipoCompra == "td") {

//         par.appendChild(document.createTextNode(`El costo total es de $${precio-(precio*0.1)}. Por favor, confirmá tu compra.`));
//         par.className="p-confirmar";
//         cantCuotasDetalle0.appendChild(par);
//         span.appendChild(btn);
//     }

//     if(tipoCompra == "tc") {

//         switch(itemValue) {
//             case 1: cuota=1;
//             par.appendChild(document.createTextNode(`El costo total es de $${precio} y lo pagarás en ${cuota} cuota/s de ${cuotaValor.toFixed(2)}. Por favor, confirmá tu compra.`));
//             par.className="p-confirmar";
//             cantCuotasDetalle1.appendChild(par);
//             break;

//             case 2: cuota = 2;
//             par.appendChild(document.createTextNode(`El costo total es de $${precio} y lo pagarás en ${cuota} cuota/s de ${cuotaValor.toFixed(2)}. Por favor, confirmá tu compra.`));
//             par.className="p-confirmar";
//             cantCuotasDetalle2.appendChild(par);
//             break;

//             case 3: cuota = 3;
//             par.appendChild(document.createTextNode(`El costo total es de $${precio} y lo pagarás en ${cuota} cuota/s de ${cuotaValor.toFixed(0)}. Por favor, confirmá tu compra.`));
//             par.className="p-confirmar";
//             cantCuotasDetalle3.appendChild(par);
//             break;
//         }
//         span.appendChild(btn);
//     }


//     btn.addEventListener("click", function(e){
//         const par = document.createElement("p");
//         par.className = "contact-par";
//         par.appendChild(document.createTextNode(`¡Muchas gracias por tu compra! Podés retirarla en 1 hora. ¡Te esperamos!`));
//         document.querySelector("body").appendChild(par);
//         par.style.zIndex=100;
       
//         e.preventDefault();
//     });
// }

// closeModal.addEventListener("click", function() {
//     modal.style.display="none";
//     location.reload();
// });


// cotizacion.addEventListener("click", function() {

//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://www.dolarsi.com/api/api.php?type=valoresprincipales", true);
    
//     xhr.onload = function() {
//         const valorCompra = JSON.parse(this.responseText)[1].casa.compra;
//         const valorVenta = JSON.parse(this.responseText)[1].casa.venta;
//         cotizacionP.appendChild(document.createTextNode(`Compra: ${valorCompra}  `));
//         cotizacionP.appendChild(document.createTextNode(` | Venta: ${valorVenta} `));
//         cotizacionP.style.display = "block";
//         cotizacion.style.display = "none";
//     }
//     xhr.send();
// });





