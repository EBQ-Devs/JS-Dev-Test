const superHeroes = require('./super-heroes.json');

/**
 * Will find all of the marvel characters in the data and return them as an array
 * @returns [
 *  {
 *    ...hero,
 *    publisher: 'Marvel'
 *  }
 * ]
 */
const getDCHeroes = (heroes) => {
  const result = heroes.filter(hero => hero.publisher == "DC Comics")
  return result
}

/**
 * Converts the character property into an array
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const convertCharactersToArray = (heroes) => {

  heroes.forEach(hero => hero.characters.split(','))
  // for(let i = 0; i < heroes.length; i++) {
  //  heroes[i].characters.split(',')
  // }
  return heroes;
}

/**
 * Coverts super hero data so it is grouped the publisher property
 * @returns {
 *   "publisher 1": [
 *     { ...hero }
 *     ...
 *   ],
 *   "publisher 2" :[
 *     {... hero}
 *     ...
 *   ]
 * }
 */
const groupByPublisher = (heroes) => {
  const publisher1 = []
  const publisher2 = []
  const sorted = []
  for(let i =0; i < heroes.length; i++){
   if(heroes[i].publisher === "DC Comics"){
     publisher1.push(heroes[i])
   }else{
     publisher2.push(heroes[i])
   }
  }
   sorted.push(publisher1)
   sorted.push(publisher2)

 return sorted;
}

/**
 * Returns and array of DC Comic heroes that have more than 1 character
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const getDCHeroesWithMoreThanOneCharacter = (heroes) => {
  const multipleCharacters = []

  for(let i = 0; i < heroes.length;i++ ){
    let currentCharacters = heroes[i].characters.split(',')
    if(currentCharacters.length >= 1) {
      multipleCharacters.push(heroes[i])
    }
  }
  return multipleCharacters;
}

module.exports = {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
}
