let listaDeAtletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];




//Função que apresenta ao usuário o nome de cada atleta, seguido das notas e da média calculada.
function exibeNomeENotasEmediaDasNotas(listaDeAtletas){


    //Cria o for para percorrer matriz de objetos atletas
     for (let i = 0; i < listaDeAtletas.length; i++) {


        //Variável que mostra o nome do atleta
        let exibeNomeDoAtleta = listaDeAtletas[i].nome;


        //Variável que cria uma nova matriz de notas e guarda as notas dos atletas
        let novaMatrizNotas = listaDeAtletas[i].notas;


        //Ordena a matriz de notas
        novaMatrizNotas.sort((a, b) => a - b);


        //Cria uma nova matriz sem a menor e a maior notas do atleta
        let matrizNovaComTresNotas = novaMatrizNotas.slice(1, 4);


        //Variável que pega o quantidade total de notas
        let quantidadeDeNotas = matrizNovaComTresNotas.length;


        //Variável usada para calcular o total das notas
        let somaDasNotas = 0;


        //Variável usada para calcular a média das notas
        let mediaDasNotas = 0;
        
        //Função que calcula a soma de todas as notas
        function exibeMediaDasNotas(){
            matrizNovaComTresNotas.forEach(function(numero){
            somaDasNotas = somaDasNotas + numero
        })
            return mediaDasNotas = somaDasNotas / quantidadeDeNotas
        }


        console.log(`Atleta: ${exibeNomeDoAtleta}`);
        console.log(`Notas Obtidas: ${listaDeAtletas[i].notas.sort()}`);
        console.log(`Média Válida: ${exibeMediaDasNotas()}`)
        console.log("\n")
     }
}



console.log(exibeNomeENotasEmediaDasNotas(listaDeAtletas));
