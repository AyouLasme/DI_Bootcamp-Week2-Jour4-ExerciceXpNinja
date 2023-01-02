/**
 * @author: LASME Ayou Emeline
 */


/**************************** EXERCI4C1: DEBUT ***********************************/
/**
 * @description : obtenir un nombre aleatoire entre 1 et 100 et aficcher tous les nombres pairs de 0 au nombre aléatoire
 */

const min = 1;
const max = 100;
// gererer nombre aleatoire
const a = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(a);
// afichage des nombres pairs jusqu'au nombre aleatoire
for (let i = 0; i < a; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
    
}

/**************************** EXERCI4C1: fin ***********************************/


/**************************** EXERCI4C2: DEBUT ***********************************/
/**
 * @description : 
 */
function fonctionChaine(chaine){
    let chaineMin = chaine.toLowerCase();
    let table = chaineMin.split("");
    let motFinalMajPair = "";
    let motFinalMajImpair = "";
    for (let i = 0; i < table.length; i++) {
        if (i % 2 == 0) {
            motFinalMajPair = motFinalMajPair.concat(table[i].toUpperCase());
            motFinalMajImpair = motFinalMajPair.concat(table[i]);
        }else{
            motFinalMajPair = motFinalMajPair.concat(table[i]);
            motFinalMajImpair = motFinalMajPair.concat(table[i].toUpperCase());
        }
    }
    return {motFinalMajPair, motFinalMajImpair};
}
fonctionChaine("abcdef");



/* ****************************** Exercice 3 : Debut ****************************** */

// Écrivez une fonction JavaScript qui vérifie si une chaîne est un palindrome ou non.

function isPalindrome(chaine) {

    /**
     * @description : cette fonction permet de vérifier si une chaine de caractère
     * est un palindrome, elle se base sur la parité du nombre de caratère de cette chaine
     * afin de savoir quel  traitement éffectué sur la chaine pour déterminer si
     * c'est un palindrome ou non.
     * @param milieuDeChaine
     * @param premierePartieDeLaChaine
     * @param dernierePartieDeLaChaine
     * @param lastPartStringReverse
     * @returns 
     */

    let milieuDeChaine = chaine.length / 2;
    let premierePartieDeLaChaine;
    let dernierePartieDeLaChaine;
    let dernierePartieDeLaChaineRenverser;

    if(chaine.length % 2 == 0) {

        premierePartieDeLaChaine = chaine.toLowerCase().slice(0, milieuDeChaine);
        dernierePartieDeLaChaine = chaine.toLowerCase().slice(milieuDeChaine);
        dernierePartieDeLaChaineRenverser = dernierePartieDeLaChaine.split("").reverse().join("");

    }
    else {

        premierePartieDeLaChaine = chaine.toLowerCase().slice(0, milieuDeChaine);
        dernierePartieDeLaChaine = chaine.toLowerCase().slice(milieuDeChaine + 1);
        dernierePartieDeLaChaineRenverser = dernierePartieDeLaChaine.split("").reverse().join("");

    }

    if(premierePartieDeLaChaine == dernierePartieDeLaChaineRenverser) {

        console.log("The entry is a palindrome");
        return true;

    }
    return false;
}

isPalindrome("madam");

/* ******************************  Exercice 3 : fin *********************************** */

/* *************************** Exercice 4 : Debut ************************ */

// Créez une fonction appelée biggestNumberInArray(arrayNumber)qui prend un tableau comme paramètre et renvoie le plus grand nombre.

function biggestNumberInArray(arrayNumber) {
    /**
     * @description : cette fonction permet retourner la plus grande valeur dans un tableau
     * @param : arrayNumber represente le tableau à trier
     * @param : biggestNumber  
     */

    if(arrayNumber.length > 0) {
        let biggestNumber = 0;
        for(let i of arrayNumber) {
            if(i > biggestNumber) {
                biggestNumber = i;
            }
        }
        return biggestNumber;
    }
    return 0;
}

biggestNumberInArray(['a', 3, 4, 2]);

/* ******************************* Exercice 4 : Fin ****************************** */

/* ********************************* Exercice 5 : Debut ************************** */

// Écrivez une fonction JS qui prend un tableau et renvoie un nouveau tableau avec uniquement des éléments uniques.
/**
* @description cette fonction permet de supprimer les elements a valeur double dans une liste
*/

function elementsUnique(array) {
    let ListeElementsUnique = array.filter((x, i) => array.indexOf(x) === i);
    return ListeElementsUnique;
}
elementsUnique([1,2,3,3,3,3,4,5]);

/* **************************** Exercice 5 :Fin ************************************ */



