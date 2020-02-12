Vue.component('card', {
    template: '#card-template',
    props: {
        title: String,
        price: Number
    }
})

new Vue({ 
    el: '#componente',
    data: {
        titles : ['Hello Everyone', 'Hello World', 'Hello Guys']
    }
 })``