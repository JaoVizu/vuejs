Vue.component('etiqueta', {
    template: '#etiqueta-temp',
    props : {
        titulo : String,
        index: Number
    }
})

new Vue({ 
    el: '#app',
    data : {
        novoPlano: '',
        titulos : [
            { id: 1, titulo: 'Sou o primeiro plano'},
            { id: 2, titulo: 'Sou o segundo plano'}
        ],
        proximoId: 3,
    },
    methods: {
        adicionarPlano(){
            this.titulos.push({
                id: this.proximoId++,
                titulo : this.novoPlano
            })
            this.novoPlano = ''
        }
    }
});