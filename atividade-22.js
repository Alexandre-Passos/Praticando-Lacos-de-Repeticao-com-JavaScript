/*
Você está programando o temporizador de uma esteira 
aquecida para secagem de produtos. O sistema precisa manter a esteira 
aquecida por pelo menos 5 segundos, mesmo que a temperatura ideal já tenha sido atingida.

O painel deve exibir, segundo a segundo:

“Aquecendo... segundo X” a cada ciclo;
A mensagem "Temperatura ideal atingida." exatamente no segundo em que essa condição for alcançada;
E ao final, o total de segundos que o sistema permaneceu ligado.
Crie um programa que simule esse funcionamento do temporizador de 
aquecimento, garantindo que ele continue funcionando até atingir pelo menos 5 segundos.
*/

const tempoMinimo = 5;
const temperaturaIdealAlcancadaEm = 3;
let contador = 1
while (contador <= tempoMinimo) {
    if (contador === temperaturaIdealAlcancadaEm) {
        console.log('Temperatura ideal atingida.');
    }
    console.log('Aquecendo...', contador)
    contador++
}