// Immutable polkemon array
// the (.freeze) method is used to make the array immutable
const pokemon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

// An array of pokémon objects where the id is evenly divisible by 3
// * filter method is an example of higher-order function in JavaScript
//  filter method takes in a callback function as an argument
//  callback function is the arrow function in this case, which takes in a pokemon object as an argument
console.log("An array of pokémon objects where the id is evenly divisible by 3:")
const pokemonDivisibleBy3 = pokemon.filter(pokemon => pokemon.id % 3 === 0);
console.log(pokemonDivisibleBy3)

// An array of pokémon objects that are "fire" type
console.log("\n An array of pokémon objects that are 'fire' type:")
const pokemonThatAreFireType = pokemon.filter(pokemon => pokemon.types.includes("fire"));
console.log(pokemonThatAreFireType)

// An array of pokémon objects that have more than one type
console.log("\n An array of pokémon objects that have more than one type:")
const pokemonThatHaveMoreThanOneType = pokemon.filter(pokemon => pokemon.types.length > 1);
console.log(pokemonThatHaveMoreThanOneType)

// An array with just the names of the pokémon
console.log("\n An array with just the names of the pokémon:")
const justTheNamesOfThePokemon = pokemon.map(pokemon => pokemon.name)
console.log(justTheNamesOfThePokemon)

// An array with just the names of pokémon with an id greater than 99
console.log("\n An array with just the names of pokémon with an id greater than 99:")
const pokemonWithIdGreaterThan99 = pokemon.filter(pokemon => pokemon.id > 99)
console.log(pokemonWithIdGreaterThan99)

// An array with just the names of the pokémon whose only type is poison
console.log("\n An array with just the names of the pokémon whose only type is poison:")
const pokemonWhoseOnlyTypeIsPoison = pokemon.filter(pokemon => pokemon.types.length == 1 && pokemon.types.includes("poison"));
console.log(pokemonWhoseOnlyTypeIsPoison)

// An array containing just the first type of all the pokémon whose second type is "flying"
// When we use the .map method, it is another callback function that takes in a pokemon object as an argument
console.log("\n An array containing just the first type of all the pokémon whose second type is 'flying':")
const pokemonWhoseSecondTypeIsFlying = pokemon.filter(pokemon => pokemon.types[1] && pokemon.types.includes("flying")).map(pokemon => pokemon.types[0])
console.log(pokemonWhoseSecondTypeIsFlying)

// A count of the number of pokémon that are "normal" type
console.log("\n A count of the number of pokémon that are 'normal' type:")
const countOfPokemonThatAreNormalType = pokemon.filter(pokemon => pokemon.types.includes("normal")).length;
console.log(countOfPokemonThatAreNormalType)


