<template>
<div>
    <!-- Inputformulär -->
    <form v-on:submit.prevent="addCard">

        <input type="number" class="number-input" placeholder="xxxx xxxx xxxx xxxx"
        v-model="inputNumber">

        <input type="text" class="holder-input" placeholder="xxxx xxxx xxxx xxxx"
        v-model="inputHolder">

        <input type="text" class="ccv-input" placeholder="xxxx xxxx xxxx xxxx"
        v-model="inputCCV">

        <input type="text" class="vendor-input" placeholder="vendor"
        v-model="inputVendor">

        <button>SUBMIT!!</button>

    </form>
    <!-- Listan där jag vill skriva ut input -->
    <p>Card Number: {{inputNumber}}</p>
    <p>Card Holder: {{inputHolder}}</p>
        <p>Card Holder: {{inputCCV}}</p>
    <p>Card Holder: {{inputVendor}}</p>

</div>
</template>
 
<script>
export default {
 
    data: function(){
        return {
            inputNumber: 0,
            inputHolder: '',
            inputCCV: '',
            inputVendor: ''
        }
    },
    computed: {
        getCardStackArray(){
            return this.$root.$data.cardStackArray
        }
    },
    methods: {
        addCard() {
            this.$root.cardStackArray.push({
                id: this.inputNumber,
                holder: this.inputHolder,
                ccv: this.inputCCV,
                vendor: this.inputVendor
            })
            console.log("ADD CARD")
        },
    }
}
</script>