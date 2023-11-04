class classeheroi{
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo 
        this.ataque = ""

    if (this.tipo === "mago"){
        this.ataque = "magia"
    } else if (this.tipo === "guerreiro"){
        this.ataque = "espada"
    }else if (this.tipo === "monge"){
        this.ataque === "artes marciais"
    }else if (this.tipo === "ninja"){
        this.ataque = "shuriken"
    }else {
        console.log("tipo inválido")
    }   
    }
    escrever()
    {console.log(`O ${this.tipo} ${this.nome} atacou usando ${this.ataque}`)}
}

let heroi = new classeheroi("Pepino Perigoso", 2, "mago")
heroi.escrever()