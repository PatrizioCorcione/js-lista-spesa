const listaSpesa = [
"Pompelmi",
"Latte",
"Arance", 
"Mozzarella",
"Mandarini", 
"Parmigiano",
"Mele", 
"Crescenza",
"Pere" 
];
const mainStamp = document.getElementById("main");
let limit = 0;
while (limit < listaSpesa.length) {
  mainStamp.innerHTML += "<li>" + listaSpesa[limit] + "</li>";
  limit++;
  
}
