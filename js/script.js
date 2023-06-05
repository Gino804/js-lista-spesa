console.log('JS OK');

// Recupero l'elemento della lista dal DOM
const listPlaceholder = document.getElementById('list');
console.log(listPlaceholder);

// Creo un array per la lista
const list = ['pane', 'uova', 'latte', 'cereali', 'caffè'];
console.log(list);

// Stampo in pagina la lista
for(let i = 0; i < list.length; i++)
{
    listPlaceholder.innerHTML += `<li>${list[i]}</li>`;
}