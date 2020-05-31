{
    {
        {
            {
                {
                    var sera = 'Será????' // var fica visível fora do bloco (escopo)
                }
            }
        }
    }

}


console.log(sera)


function teste () {

    var local = 123 // variável visivel apenas dentro da função
    console.log(local)
}

teste()
//console.log(local)