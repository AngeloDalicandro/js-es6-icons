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

// Seleziono il contenitore delle card
const cardContainer = document.querySelector('.card-container');

// Con una funzione stampo tutte le icone nel DOM
printCardsDom(allIcons, cardContainer);

// Seleziono la select
const typeSelector = document.getElementById('icon-type');

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
function printCardsDom (anArray, aContainer) {
	anArray.forEach((thisIcon) => {
		// Destrutturo gli oggetti
		const {name, prefix, type, family, color} = thisIcon;
	
		// Imposto il template con le variabili opportune
		const newCard = `
		<div class="card color-${color}">
			<i class="${family} ${prefix}${name}"></i>
			<span>${name}</span>
		</div>	
		`;

		aContainer.innerHTML += newCard;
	})
}

// FUNZIONE PER FILTRARE GLI OGGETTI DA STAMPARE NEL DOM (tre argomenti: l'array con gli oggetti da stampare, il contenitore in cui stampare e il filtro da applicare)
function cardFilter (anArray, aContainer, aFilter) {
	const filteredArray = anArray.filter((thisIcon) => {
		return thisIcon.type === aFilter;
	});

	printCardsDom(filteredArray, aContainer);
}