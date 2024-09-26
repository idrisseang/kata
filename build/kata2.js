"use strict";
/**
 * 1 - Écris une fonction sumOfEvenNumbers(numbers) qui prend en
 * entrée un tableau d'entiers numbers et retourne la somme de tous
 * les nombres pairs présents dans le tableau.
 */
const numbers = [1, 2, 3, 4, 5, 6];
// your code here
const sumOfEvenNumbers = (numbers) => {
    const pairNumbers = numbers.filter(number => number % 2 === 0);
    //[2,4,6]
    return pairNumbers.reduce((acc, curr) => {
        //premier tour acc = 0 curr = 2 acc devient 2
        //second tour acc = 2 curr = 4 acc devient 6
        //3e tour acc = 6 curr = 6 acc devient 12
        /* total itérations : 3 */
        return acc += curr;
    }, 0);
};
console.log("La somme des nombres pairs = ", sumOfEvenNumbers(numbers));
/**
 * 2 - Écris une fonction maxNumber(numbers) qui prend en
 * entrée un tableau d'entiers numbers et retourne le plus grand
 * nombre présent dans le tableau.
 */
const numbers2 = [12, 21, 67, 36, 49, 51];
// your code here
const maxNumber = (numbers) => {
    /*
    spread op ...
    si numbers = [1,2,3,4] permet d'éclater le tab et récup que les valeurs
    ce qui donne => Math.max(1,2,3,4) => 4
    */
    return (Math.max(...numbers));
};
console.log("Le plus grand est : ", maxNumber(numbers2));
