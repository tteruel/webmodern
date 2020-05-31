function pessoa () {
    this.idade = 0

    const self = this  // pode remover isso e utilizar o bind da linha 8 também, sempre remover o self --- ou bind ou esse self
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) 
}

new pessoa
