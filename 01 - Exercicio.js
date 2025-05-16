let a = '    Ralf         Wolff  ';
let b = '    Bud !!!!! ';
let c = '    Rox @$#@#%@#%¨#$ ';

console.log(removeCaracteresEspeciais(a));
console.log(removeCaracteresEspeciais(b));
console.log(removeCaracteresEspeciais(c));

function removeCaracteresEspeciais(nome){
    return nome.trim().replace(/\s+/g, ' ').replace(/[^a-zA-Z0-9 ]/g, '').toUpperCase();
}