<template>
<div>
    <p>{{cardStackArray}}</p>
    
    <!-- Inputformulär -->
    <form v-on:submit.prevent="addCard">

        <h4>CARD NUMBER</h4> <!-- Allt som skrivs i fältet laddas in i "InputNumber" -->
        <input type="text" class="number-input" placeholder="xxxx xxxx xxxx xxxx"
        v-model="inputNumber" required pattern="^[0-9]*$"> 
        <!-- 
            "required" ser till så att fältet måste vara ifyllt innan commit.
            "pattern" ser till att det bara kan skrivas siffror. 
        -->

        <h4>CARD HOLDER</h4> <!-- Skall vara required.  -->
        <input type="text" class="holder-input" placeholder="xxxx xxxx xxxx xxxx"
        v-model="inputHolder" required> <!-- Allt som skrivs i fältet laddas in i "InputHolder" -->

        <span>CCV</span> <!-- Bara siffror skrivs in, max 3 tecken och skall vara required.  -->
        <input type="text" class="ccv-input" placeholder="xxxx xxxx xxxx xxxx"
        v-model="inputCCV" required pattern="^[0-9]*$"> <!-- Allt som skrivs i fältet laddas in i "InputCCV" -->

        <span>VENDOR</span> <!-- Bara siffror skrivs in, max 3 tecken och skall vara required.  -->
        <select v-model="inputVendor" class="vendor-input" required>
            <option disabled value="">Please select one</option>
            <option>Bitcoin</option>
            <option>Ninja Bank</option>
            <option>Blockchain inc</option>
            <option>Evil Corp</option>
        </select> <!-- Det som väljs från dropdown-menyn laddas in i "InputVendor" -->

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