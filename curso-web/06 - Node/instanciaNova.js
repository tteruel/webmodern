//Uma factory retorna uma nova instancia ou novo objeto
module.exports = () => {
    return{
        valor: 1,
        inc(){
            this.valor++
        }
    }
}