var registros=[];//arrays sempre antes das funçõesssssssssssssssssssss

function menu(){
let seleção=(prompt("Escolha uma das opções abaixo: \n1)Cadastramento \n2)Apresentar registros\n3)Apresentar média \n4)Sair"));
switch(seleção){    
case "1":
cadastro();
break;
case "2":
apresentar();
break;
case "3":
apresentarMedia();
break;
case "4":
alert("Saindo...");
break;
default:
alert("Opção inválida");
menu();
break;
}
}
function cadastro(){
for(i=0; i<15; i++){

let nome=prompt('Digite o nome ' + (i+1) + ' que deseja cadastrar');
let altura=prompt('Qual a altura que deseja cadastrar?');

while(isNaN(altura) || altura < 0 || altura > 3){
    alert("Por favor, insira uma altura válida (entre 0 e 3).");
    altura=prompt('Qual a altura que deseja cadastrar?');
}
alert(nome + ' foi cadastrado com sucesso!');
alert(nome + " possui uma altura de "+ altura + "m");

registros.push({nome:nome, altura: parseFloat ( altura)});

}
    
menu();
}
function apresentar(){
    var pessoas_menores=registros.filter(r=>r.altura<=1.5);
    var pessoa_maior=registros.filter(r=>r.altura>=1.5);

    var alerta=alert("Pessoas com altura menor que 1,5m:\n");
    if( pessoas_menores.length===0){
        alerta=alert("Nenhuma pessoa com altura menor que 1,5m foi encontrada");
    }else{
        
        pessoas_menores.forEach(pessoa=>{
            alerta=alert(pessoa.nome + " possui uma altura de "+ pessoa.altura + " m");
        });
    }
    alerta=alert("\nPessoas com altura maior que 1,5m:\n");
    if( pessoa_maior.length===0){
        alerta=alert("Nenhuma pessoa com altura maior que 1,5m foi encontrada");
    }else{
        pessoa_maior.forEach(pessoa=>{
            alerta=alert(pessoa.nome + " possui uma altura de "+ pessoa.altura + "m");
        });
    };
menu();
}
function apresentarMedia(){
if(registros.length===0){
    alert("Nenhum registro encontrado");
}else{
    var media=registros.reduce((a,b)=>a+b.altura,0);
    var divisão=media/registros.length;
    alert("Media das alturas: "+ divisão.toFixed(2));
    
}

menu();


}
menu ();