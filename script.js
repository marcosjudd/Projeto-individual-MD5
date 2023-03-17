const { ok } = require('assert');
let armazenarPropriedades = [];

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.setPrompt('Insira uma propriedade CSS: ');
rl.prompt()
rl.on('line', (age) => {
  if(age == 'sair'){
    console.log(armazenarPropriedades.sort().join(''))
    rl.close;
  }else{
    armazenarPropriedades.push(`${age}\n`); 
    rl.setPrompt('Insira uma propriedade CSS: ');
    rl.prompt()
  }
});