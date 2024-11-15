const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}
function getLatinCharacterList (latin){
  return latin.split('')
}
// console.log(getLatinCharacterList("Hello, world"))

function translateLatinCharacter (latin, latinToMorse){
  return latinToMorse[latin]
  
}
// console.log(translateLatinCharacter("Z",latinToMorse))


/* Ajouter une nouvelle fonction encode qui prend en paramètre du texte et qui va utiliser la fonction de l’étape 1, pour chaque caractère, appliquer la fonction de l’étape 2 et ainsi récupérer son équivalent morse.

Attention: la table de correspondance ne contient que des caractères majuscules.*/

function encode (latin,latinToMorse){
const encodeLatin = getLatinCharacterList (latin);
 let encodemorse= encodeLatin.map(char => latinToMorse[char])
  return encodemorse
}
console.log(encode("HELLO,WORLD", latinToMorse));

