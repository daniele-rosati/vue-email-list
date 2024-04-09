const { createApp } = Vue;
createApp({
    data() {
        return {
            mails: [],
        };
    },
    methods: {
        getNumberFromApi() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) =>{
                const serverMail = response.data.response;
                this.mails.push(serverMail);

            } )
        }
    },
    mounted() {
        this.getNumberFromApi();

    },

}).mount('#app');