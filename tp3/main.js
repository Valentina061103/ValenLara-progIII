//punto1
const a = 5;
const b = 10;
const c = (a+b);
console.log("la suma de " + a + " y "+ b + " es: " + c);

//punto2
// let nombre = prompt("Por favor, ingrese tu nombre");
// console.log("Hola, " + nombre + "!");

//punto3
const A = 20;
const B = 10;
const C = 15;
if(A>B && A>C){
  console.log("el numero mayor de los tres es: " + A);
} else if(B>A && B>C){
  console.log("el numero mayor de los tres es: " + B);
}else{
  console.log("el numero mayor de los tres es: " + C);
}

//punto4
// let numb = prompt("Ingresa un numero y te diresi es par o impar");
// if(numb%2==0){
//   console.log("El numero " + numb + " es par");
// }else{
//   console.log("El numero " + numb + " es impar");
// }

//punto5
let num2 = 10;
while(num2>0){
  console.log(num2);
  num2--;
}

//punto6
// let num3 = 0;
// do{
//   num3 = prompt("Ingrese un numero mayor a 100:")
// }while(num3 <100);
// console.log("Ingresaste un numero mayor a 100: " + num3)

//punto7
// let num4 = prompt("Ingrese un numero")
// const esPar = (num4) =>{
//   if(num4%2==0){
//     return true;
//   }else{
//     return false;
//   }
// };
// let result = esPar(num4);
// console.log("el numero " + num4 + " es par: " + result);

//punto8
// let gradosOriginal = prompt("ingrese un valor es grados Celsius");
// const convertirCelsiusAFahrenheit = (gradosOriginal) =>{
//   let gradosCambio = gradosOriginal*1.8 +32;
//   return gradosCambio;
// };
// let gradosFahrenheit = convertirCelsiusAFahrenheit(gradosOriginal);
// console.log(gradosOriginal + "°C son equivalentes a " + gradosFahrenheit + "°F");

//punto9
// let persona = {
//   nombre: "valentina",
//   edad: 22,
//   ciudad: "Mendoza",
//   cambiarCiudad: function(){
//     let pregunta = prompt("desea actualizar la ciudad? ingrese 1 para 'si' y 2 para 'no'");
//     if (pregunta == 1){
//       let nuevaCiudad = prompt("ingrese su nueva ciudad:");
//       this.ciudad = nuevaCiudad;
//       console.log("sus datos actualizados:\nnombre: " + this.nombre + "\nedad: " + this.edad + "\nciudad: " + this.ciudad);
//     }else{
//       alert("Gracias!");
//     }
//   }
// };
// persona.cambiarCiudad();

//punto10
let libro = {
  titulo: "El Quijote",
  autor: "Miguel de Cervantes",
  año: 1605,
  CantidadAños: function(){
    if((2024 - this.año) >= 10){
      return true;
    }else{
      return false;
    }
  }
}
let results2 = libro.CantidadAños();
console.log("El libro " + " 'El Quijote' es antiguo: " + results2);

//punto11
let numeros = [1,2,3,4,5,6,7,8,9,10];
let numerosMulti = numeros.map((elemento)=>{
  let mult = elemento *2;
  return mult;
});
console.log("numeros multiplicados por 2: " + numerosMulti);

//punto12
let arrayVacio = [];
let arrayPares = [];
for(let i = 0; i < 20; i++){
  if(i%2==0){
    arrayPares.push(i);
  }
}
console.log("Array numeros pares: " + arrayPares);

//punto13
const elemento = document.getElementById("element");
const button = document.getElementById("button");

const blueFunction = ()=>{
  if(elemento.classList.contains("blueText")){
    elemento.classList.remove("blueText");
  }else{
    elemento.classList.add("blueText");
  }
};
button.addEventListener("click", ()=>{
  blueFunction();
});

//punto14
const button2 = document.getElementById("button2");
const textFuction = () =>{
  const mensaje = document.getElementById("input1").value;
  alert("Has ingresado: " + mensaje);
}
button2.addEventListener("click",()=>{
  textFuction();
})

//punto15
let item = document.getElementsByTagName("li");
Array.from(item);
for(let i = 0; i < item.length; i++){
  item[i].addEventListener("click",()=>{
    console.log(item[i].textContent);
    item[i].classList.add("styleText");
  });
}

//punto 16
const DesahbilitarButton = document.getElementById("DeshabilitarButton");
const HabilitarButton = document.getElementById("HabilitarButton");
const input2 = document.getElementById("input2");

const buttonFuction = ()=>{
  input2.disabled = true;
}
const buttonFuction2 = ()=>{
  input2.disabled = false;
}
DesahbilitarButton.addEventListener("click", ()=>{
  buttonFuction();
});
HabilitarButton.addEventListener("click", ()=>{
  buttonFuction2();
});

//punto 17
const guardarButton = document.getElementById("guardarButton");
const eliminarButton = document.getElementById("eliminarButton");
const correoGuardadoText = document.getElementById("correoGuardadoText");

const mostrarCorreoGuardado = ()=>{
  const correoGuardado = localStorage.getItem("correo");
  if(correoGuardado){
    correoGuardadoText.textContent = "Correo Guardado: " + correoGuardado;
    eliminarButton.style.display = "block";
  }else{
    correoGuardadoText.textContent = "";
    eliminarButton.style.display = "none";
  }
}

const infoCorreo = () => {
  const input3 = document.getElementById("input3").value;
  localStorage.setItem("correo", input3);
}

guardarButton.addEventListener("click", ()=>{
  infoCorreo();
  mostrarCorreoGuardado();
});

eliminarButton.addEventListener("click", ()=>{
  localStorage.removeItem("correo");
  mostrarCorreoGuardado();
});



