// import criarPersonagem from "./criarPersonagem.js"
// import visualizarPersonagem from "./visualizarPersonagem.js"
// export 
const personagens = []

function criarPersonagem() {
    let option = ""

    const personagem = {}
    personagem.Nome = prompt("Escolha o Nome do seu personagem: ")

    option = prompt(
        "Escolha seu personagem: "+

        "\n1. Guerreiro" +
        "\nVida: 100 | Ataque : 50  |  Defesa : 30 | poder : 0" +

        "\n\n2. Mago" +
        "\nVida: 80 | Ataque : 35  | Defesa : 60 | poder : 60"
        )
    
    switch(option){
        case "1" :
            personagem.Vida = 100
            personagem.Ataque = 50
            personagem.Defesa = 30
            personagem.Poder = 0
            personagem.Tipo = "Guerreiro"
            break
        case "2" :
            personagem.Vida = 80
            personagem.Ataque = 35
            personagem.Defesa = 60
            personagem.Poder = 60
            personagem.Tipo = "Mago"
            break
        default:
            alert("Opção Invalida")
            break
    }

    const confirmacao = confirm(
        "Tem certeza que deseja Escolher este personagem ?" +
        "\nNome: " + personagem.Nome + " Tipo: " + personagem.Tipo
        )
        
    if (confirmacao) {
            personagens.push(personagem)
            alert ("Cadastro Realizado")
    } else {
            alert("Personagem Excluído")
        }
} 

function exibirPersonagem(personagens) {
    personagens.forEach((personagens)=>{
        console.log(i + personagens.name + personagens.Tipo)
    })
}


function exibirMenu() {
    const option = prompt (
        "Selecione uma Opção " +
        "\n1. Criar Personagens" +
        "\n2. Alterar de Personagem" +
        "\n3. Entrar para luta" +
        "\n4. Sair do jogo"
        )

    return option
}

function menuInicial() {
    let opcao = ""

    do{
        opcao = exibirMenu()
        switch(opcao) {
            case "1":
                criarPersonagem()
                break
            case "2" :
                if (personagens.length != 0) {
                 exibirPersonagem()}
                 else{
                    alert("Você ainda não tem nenhum personagem criado")
                 }

                break
            case "4" :
                alert("Saindo . . .")
                break
            default :
                alert("Opção indisponivel")
                break
             } 
            
    }while(opcao !== "4")
}

menuInicial()


