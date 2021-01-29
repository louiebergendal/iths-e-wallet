<template>
<div>
    <!-- Inputformulär -->
    <form v-on:submit.prevent="addCard">

        <h4>CARD NUMBER</h4>
        <input type="number" class="number-input" placeholder="xxxx xxxx xxxx xxxx"
        v-model="inputNumber"> <!-- Allt som skrivs i fältet laddas in i "InputNumber" -->

        <h4>CARD HOLDER</h4>
        <input type="text" class="holder-input" placeholder="xxxx xxxx xxxx xxxx"
        v-model="inputHolder"> <!-- Allt som skrivs i fältet laddas in i "InputHolder" -->

        <span>CCV</span>
        <input type="text" class="ccv-input" placeholder="xxxx xxxx xxxx xxxx"
        v-model="inputCCV"> <!-- Allt som skrivs i fältet laddas in i "InputNumber" -->

        <span>VENDOR</span>
        <select v-model="inputVendor" class="vendor-input" >
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select> <!-- Det som väljs från dropdownmenyn laddas in i "InputNumber" -->

        <button>SUBMIT!!</button> <!-- Knappen autofunkar eftersom att den ligger i en form-tag -->

    </form>

    <!-- Listan där jag vill skriva ut input -->
    <p>Card Number: {{inputNumber}}</p>
    <p>Card Holder: {{inputHolder}}</p>
    <p>Card CCV: {{inputCCV}}</p>
    <p>Card Vendor: {{inputVendor}}</p>

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
        CardStackArray(){
            return this.$root.$data.cardStackArray
        }
    },
    methods: { 

        addCard() {
            this.$root.cardStackArray.push({
                id: Date.now().toString(), // I princip random.
                number: this.inputNumber,
                holder: this.inputHolder,
                ccv: this.inputCCV,
                vendor: this.inputVendor
            })  
        },
    }
}
</script>