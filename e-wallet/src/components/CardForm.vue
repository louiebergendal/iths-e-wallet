<template>
<div>
    <!-- Första (och i nuläget enda) inputfältet -->
    <input type="text" class="card-input" placeholder="xxxx xxxx xxxx xxxx"
    v-model="inputText" @keyup.enter="addCard">

    <!-- Listan där jag vill skriva ut "inputText", utan att passera main.js -->
    <p>{{inputText}}</p>

</div>
</template>
 
<script>
export default {
 
    data: function(){
        return {
            inputText: ''
        }
    },
    computed: {
        getCardStackArray(){
            return this.$root.$data.CardStackArray
        }
    },
    methods: {
        addCard() {
            this.$root.$data.cardStackArray.push({
                id: this.inputText
            })
            console.log("ADD CARD")
        },

    }
}
</script>