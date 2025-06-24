/*
Você é uma pessoa desenvolvedora de interface em uma startup de tecnologia aeroespacial e precisa criar 
uma contagem regressiva automática para o painel de lançamento. A contagem 
deve começar de 10 até 0, exibindo “Lançar!” ao final.

Crie um programa que conte de 10 até 0 e exiba a mensagem “Lançar!” ao final.
*/

for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log(0, 'Lançar');
        break
    }
    console.log(i)

}