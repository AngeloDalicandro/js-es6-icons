// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
// BONUS
// 1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
// 2- popolare le options della select della milestone 3 dinamicamente.
 
 const allIcons  = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// Cambio il colore alle icone tramite una funzione
changeColor(allIcons);

// Seleziono il contenitore delle card
const cardContainer = document.querySelector('.card-container');

// Con una funzione stampo tutte le icone nel DOM
printCardsDom(allIcons, cardContainer);

// Seleziono la select
const typeSelector = document.getElementById('icon-type');

// Creo un array dove salvare i tipi di icone e lo popolo con una funzione
const iconTypes = getTypes(allIcons);

// Seleziono la select
const selectMenu = document.getElementById('icon-type');

// Aggiungo a mano la value all
selectMenu.innerHTML += `<option value="all">All</option>`

// Con un ciclo popolo il select menù
iconTypes.forEach((thisType) => {
	selectMenu.innerHTML += `<option value="${thisType}">${capitalizeFirstLetter(thisType)}</option>`;
})

// Imposto cosa accade al cambio della select
typeSelector.addEventListener('change',
	function() {
		// Resetto il container
		cardContainer.innerHTML = '';
		
		// Seleziono il valore
		const thisType = this.value;

		// Stampo in base al valore
		if( thisType === 'all') {
			printCardsDom(allIcons, cardContainer);
		} else {
			cardFilter(allIcons, cardContainer, thisType);
		}
	}
)

// ----------
// FUNZIONI
// ----------

// FUNZIONE PER STAMPARE LE CARD NEL DOM (due argomenti: l'array con gli oggetti da stampare e il contenitore in cui stampare)
// Ho utilizzato .append() per facilitare l'implementezione del colore generato randomicamente
function printCardsDom (anArray, aContainer) {
	anArray.forEach((thisIcon) => {
		// Destrutturo gli oggetti
		const {name, prefix, type, family, color} = thisIcon;
		
		const newCard = document.createElement('div');
		// Imposto il template con le variabili opportune e rimuovo la classe per il colore
		const newCardContent = `
			<i class="${family} ${prefix}${name}"></i>
			<span>${name}</span>
		`;

		newCard.innerHTML += newCardContent;
		newCard.classList.add('card');
		newCard.style.color = `${color}`;
		aContainer.append(newCard);
	})
}

// FUNZIONE PER FILTRARE GLI OGGETTI DA STAMPARE NEL DOM (tre argomenti: l'array con gli oggetti da stampare, il contenitore in cui stampare e il filtro da applicare)
function cardFilter (anArray, aContainer, aFilter) {
	const filteredArray = anArray.filter((thisIcon) => {
		return thisIcon.type === aFilter;
	});

	printCardsDom(filteredArray, aContainer);
}

// FUNZIONE PER GENERARE UN NUMERO RANDOM ( Da W3schools )
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min) ) + min;
  }

// FUNZIONE PER GENERARE UN COLORE RANDOM
function getRandomHexColor() {
	// Creo un array con i valori per costruire gli HEX
	const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

	let myColor = '#';

	// Imposto un ciclo con 6 ripetizioni per generare randomicamente i dati del formato hex
	for(let i = 1; i <= 6; i++) {
		myColor += hexArray[getRndInteger(0, hexArray.length - 1)];
	}

	return myColor;
}

// FUNZIONE PER CAMBIARE COLORE IN BASE AL TIPO
function changeColor(anArray) {
	anArray.forEach((thisIcon) => {
		thisIcon.color = getRandomHexColor();
	})
}

// FUNZIONE PER ESTRARRE I TIPI 
function getTypes (inputArray) {
	const outputArray = [];
	inputArray.forEach((thisIcon) => {
		
		const thisKey = thisIcon.type;
		if(!outputArray.includes(thisKey)) {
			outputArray.push(thisKey)
		} 
	})

	return outputArray;
}

// FUNZIONE PER FARE L'UPPERCASE DELLA PRIMA LETTERA DI UNA PAROLA
function capitalizeFirstLetter (aWord) {
	return aWord.charAt(0).toUpperCase() + aWord.slice(1);
}