let enter = document.getElementById('enter')
let tarjeta=document.getElementById('tarjeta')


enter.addEventListener('click', () => {
  tarjeta.classList.add('show');
})

$("#boton").hover(function () {
  $("#boton").css("top", `${Math.random() * 100}%`);
  $("#boton").css("left", `${Math.random() * 100}%`);
});
