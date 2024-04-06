// function factoriel(num){
//   let counter = 1;
//   for(let i = 2; i <= num; i++){
//    counter *= i;   
// }
//   return counter;

// } 
// console.log(factoriel(8))

// function facto(x){
//   if(x == 1){
//     return 1;
//   }
//   else {
//    return x * facto(x - 1);
//   }
// }
// console.log(facto(8));
// variable et DOM
const num = prompt(("choisi un nombre!").value);
const container = document.createElement("div");
document.body.appendChild(container);
container.classList = "container";
const containerSup = document.createElement("div");
containerSup.id = "ctn";

for(let i = 0; i < num; i++){
    const row = document.createElement("div");
    container.appendChild(row)
    row.classList = "row";
    for(let j = 0; j < num; j++){
        const div = document.createElement("div");
        row.appendChild(div);
        div.classList = "white";
        if((i+j)%2 === 0){
        div.classList = "black";
        }
    } 
}



// //style.css
