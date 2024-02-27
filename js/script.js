const listaSpesa = ["Pompelmi","Latte","Arance", "Mozzarella","Mandarini", "Parmigiano","Mele", "Crescenza","Pere" ];
const listaSpesa2 = ["Pompelmi","Latte","Arance", "Mozzarella","Mandarini", "Parmigiano","Mele", "Crescenza","Pere" ];
const listaSpesa3 = ["Pompelmi","Latte","Arance", "Mozzarella","Mandarini", "Parmigiano","Mele", "Crescenza","Pere" ];
const listaSpesa4 = ["Pompelmi","Latte","Arance", "Mozzarella","Mandarini", "Parmigiano","Mele", "Crescenza","Pere" ];

const mainStamp = document.getElementById("main");
const mainStamp2 = document.getElementById("main2");
const mainStamp3 = document.getElementById("main3");
const mainStamp4 = document.getElementById("main4");

let limit = 0;

while (!(limit == listaSpesa.length)) {

  mainStamp.innerHTML += "<li>" + listaSpesa[limit] + "</li>";
  mainStamp2.innerHTML += "<li>" + listaSpesa2[limit] + "</li>";
  mainStamp3.innerHTML += "<li>" + listaSpesa3[limit] + "</li>";
  mainStamp4.innerHTML += "<li>" + listaSpesa4[limit] + "</li>";

  limit++;
  
}
