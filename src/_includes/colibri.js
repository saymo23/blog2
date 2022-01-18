//Obtenermos el arreglo de los elementos de cada pieza del tangram
const c_layers = document.getElementsByClassName('layer_c')
//Creamos una libreria de los colores que deseamos usar
const colors = [
  '#61946D', '#D0E562', '#B6D369', '#C2E812', '#91F5AD', '#59A96A',
  '#06BCC1', '#12263A', '#65AFFF',
  '#22ab24', '#cd0e66', '#18aa93', '#6f27cc', '#0f82f2', '#fd8c00'
]
//Le damos a cada pieza del tangram un color aleatorio
for(let layer of c_layers){
  const random = Math.floor(Math.random() * colors.length);
  layer.style.fill = colors[random]
}