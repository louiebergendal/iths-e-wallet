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

    <!-- Listan där jag vill skriva ut input // DET HÄR SKA BLI ETT CARDITEM // -->
    <p>Card Number: {{inputNumber}}</p>
    <p>Card Holder: {{inputHolder}}</p>
    <p>Card CCV: {{inputCCV}}</p>
    <p>Card Vendor: {{inputVendor}}</p>

</div>
</template>
 
<script>
export default {

    data: function(){
        return { // Deklarerar variabler för att kunna använda v-bind //
            inputNumber: '',
            inputHolder: '',
            inputCCV: '',
            inputVendor: '',


        }
    },
    computed: {
        cardStackArray: function(){ // Hämtar cardStackArray från main.js //
            return this.$root.$data.cardStackArray
        },

            // ----- EXPERIMENT ----- //
            // Jag vill ha ett CardItem i AddCard-vyn.
            // Kortet skall uppdateras i realtid medan man skriver in värden i inputfält.

            vendorClass: function(){
                return this.getVendorClass(this.inputVendor)
            },
            id: function(){
                return Date.now().toString() // I princip random.
            }    
    },
    methods: {
        getVendorClass(vendor) { // Ser till att kortet får vendor som CSS-klass
            switch(vendor) {     // Borde egentligen fixa en algoritm som löser det istället för att hårdkoda.
                case "Bitcoin": return "bitcoin";
                case "Ninja Bank": return "ninja-bank";
                case "Blockchain inc": return "block-chain";
                case "Evil Corp": return "evil-corp";
            }
        },
        addCard() { // Pushar fixad data från inputfälten till main.js
            this.$root.cardStackArray.push({
                id: this.id,
                vendorClass: this.vendorClass,
                number: this.inputNumber,
                holder: this.inputHolder,
                ccv: this.inputCCV,
                vendor: this.inputVendor
            })
            console.log("VENDOR_CLASS: " + this.vendorClass)
        }
    }
}
</script>