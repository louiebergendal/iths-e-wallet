<template>
<div>
    <p>{{cardStackArray}}</p>
    
    <!-- Inputformulär -->
    <form v-on:submit.prevent="addCard">
        <!-- 
            "required" ser till så att fältet måste vara ifyllt innan commit.
            "pattern" ser till att det bara kan skrivas siffror. 
            "v-model" ser till att allt som skrivs i fältet laddas in i ett variabelnamn.
        -->

        <h4>CARD NUMBER</h4>
        <input type="text" class="number-input" placeholder="xxxx xxxx xxxx xxxx"
        v-model="inputNumber" required pattern="^[0-9]*$"> 


        <h4>CARD HOLDER</h4>
        <input type="text" class="holder-input" placeholder="xxxx xxxx xxxx xxxx"
        v-model="inputHolder" required>

        <span>CCV</span>
        <input type="text" class="ccv-input" placeholder="xxxx xxxx xxxx xxxx"
        v-model="inputCCV" required pattern="^[0-9]*$">

        <span>VENDOR</span>
        <select v-model="inputVendor" class="vendor-input" required>
            <option disabled value="">Please select one</option>
            <option>Bitcoin</option>
            <option>Ninja Bank</option>
            <option>Blockchain inc</option>
            <option>Evil Corp</option>
        </select>

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
            inputNumber: '',
            inputHolder: '',
            inputCCV: '',
            inputVendor: ''
        }
    },
    computed: {

        cardStackArray: function(){
            return this.$root.$data.cardStackArray
        }
    },
    methods: {
        getVendorClass(vendor) {
            switch(vendor) {
                case "Bitcoin":
                    return "bitcoin";

                case "Ninja Bank":
                    return "ninja-bank";

                case "Blockchain inc":
                    return "block-chain";

                case "Evil Corp":
                    return "evil-corp";
            }
        },
        addCard() {
            this.$root.cardStackArray.push({
                id: Date.now().toString(), // I princip random.
                number: this.inputNumber,
                holder: this.inputHolder,
                ccv: this.inputCCV,
                vendor: this.inputVendor,
                vendorClass: this.getVendorClass(this.inputVendor)
            })
        },
    }
}
</script>