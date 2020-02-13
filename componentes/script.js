Vue.component('card', {
    template: '#card-template',
    data: () => {
        return{
            info: {}
        }
    },
    created() {
        this.getInfos()
    },
    methods: {
        getInfos(){
            fetch('https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_6b128a8b653349a59bfcac7332466bd6')
                .then(r => r.json())
                .then(data => this.info = data )
        }
    }
})

new Vue({ el: '#componente' })

 // https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_6b128a8b653349a59bfcac7332466bd6
 // simbolo - symbol
 // nome - companyName
 // valor da companhia - marketCap