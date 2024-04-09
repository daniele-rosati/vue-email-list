const { createApp } = Vue;
createApp({
    data() { // creo un arrey vuoto 
        return {
            mails: [],
        };
    },
    methods: {
        getNumberFromApi() { // creo una funzione che mi fa una chiamata axios

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) =>{
                const serverMail = response.data.response; // qui mi prende le email all'interno dell'axios e le pusha all'interno dell'array vuoto
                this.mails.push(serverMail);

            } )
        }
    },
    mounted() {
        this.getNumberFromApi(); // qui mi fa una chiamata axios all'interno del mounted

    },

}).mount('#app');