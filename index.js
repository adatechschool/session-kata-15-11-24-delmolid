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
  return latin.split('');
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

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
  }

  /* 
  Vous trouverez en annexe 2 le dictionnaire de correspondance inversé. 
  Ajoutez-le à votre code, 
  et appliquez les procédés similaire à ce qui a été fait pour le encode pour créer une fonction decode. 
  Dans cet exercice, on admettra que les lettres en morse sont séparées par un espace, et les mots par des “/” (slash).
  Ainsi, créer la fonction getMorseCharacterList ainsi que translateMorseCharacter.
 */


function getMorseCharacterList (morse){
    return morse.split('');
  }
  console.log(getMorseCharacterList('-..'));

  function translateMorseCharacter (latin, morseToLatin){
    return morseToLatin[latin]
  }
  console.log(translateMorseCharacter("-..", morseToLatin));

function decode (morse,morseToLatin){
    const decodeLatin = getMorseCharacterList (morse);
     let decodemorse= decodeLatin.map(char => morseToLatin[char])
      return decodemorse
    }
    console.log(decode('.', morseToLatin));

