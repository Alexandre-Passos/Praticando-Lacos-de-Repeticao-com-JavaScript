/*
Você está desenvolvendo uma funcionalidade para um aplicativo de finanças pessoais. 
Um dos recursos permite simular quanto uma pessoa economizaria em um 
período de tempo, iniciando em R$1 no primeiro dia e aumentando esse 
valor em R$1 a cada novo dia. Ou seja, a cada dia que passa, ela 
economiza R$1 a mais do que no anterior.
*/

const totalDias = 4
let dia = 1;
let economia = 0;
 
do {
  economia += dia;
  dia++;
} while (dia <= totalDias);
 
console.log(`Total economizado: R$ ${economia}`);