Vue.component('etiqueta', {
    template: '#etiqueta-temp',
    props : {
        titulo : String
    }
})

new Vue({ 
    el: '#app',
    data : {
        titulos : [
            { id: 1, titulo: 'Sou o primeiro plano'},
            { id: 2, titulo: 'Sou o segundo plano'}
        ]
    }

});