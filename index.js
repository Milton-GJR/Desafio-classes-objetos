class herois {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
  
    atacar() {
      if (this.tipo === "mago"){
         console.log(`O ${this.tipo} atacou usando magia`)
         }else if (this.tipo === "guerreiro"){
          console.log(`O ${this.tipo} atacou usando espada`)
          }else if (this.tipo === "monge"){
           console.log(`O ${this.tipo} atacou usando artes marciais`)
           }else{
            console.log(`O ${this.tipo} atacou usando shuriken`)
            }
    }
  }
  
  let personagem_1 = new herois("merlin", 503, "mago")
  
  personagem_1.atacar()
  
  let personagem_2 = new herois("Daleon", 100, "guerreiro")
  
  personagem_2.atacar()
  
  let personagem_3 = new herois("Jiraia", 20, "ninja")
  
  personagem_3.atacar()
  
  