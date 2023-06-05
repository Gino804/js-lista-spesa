console.log('JS OK');

// Recupero l'elemento della lista dal DOM
const listPlaceholder = document.getElementById('list');
console.log(listPlaceholder);

// Creo un array per la lista
const list = ['pane', 'uova', 'latte', 'cereali', 'caffè'];
console.log(list);

// Stampo in pagina la lista (ciclo for)
/*for(let i = 0; i < list.length; i++)
{
    listPlaceholder.innerHTML += `<li>${list[i]}</li>`;
}*/

// Stampo in pagina la lista (ciclo while)
let i = 0;
while(i < list.length)
{
    listPlaceholder.innerHTML += `<li>${list[i]}</li>`;
    i++;
}