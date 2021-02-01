<template>
<div>
    <!-- FUNDERING Skriver ut kort med data från ett objekt (Motsvarande ett "card") i main.js ? -->


    <!-- Skriver ut kort med data från cardStackArray i main.js -->
    <div class="flex-container" v-for="card in this.$root.cardStackArray" v-bind:key="card.id">

        <div v-on:click="selectCard(card)">
            <CardItem v-bind:cardItemData="card" />
        </div>
        <!-- fyller varje CardItem med data från respektive card i cardStackArray (i main.js) -->

        <button v-if="card.isSelected" v-on:click="removeCard(card)">Disintegrate Card</button>
        {{ card }}

    </div>

</div>
</template>

<script>
import CardItem from '../components/CardItem.vue'

export default {

    components: {
        CardItem
    },
    methods: {

        selectCard(card) {
            // Lyfta upp selected card från cardStack
            // - visa SelectedCard någon annan stanns
            // - Ta bort kort från cardstack


            // Klicka på kort --- DONE ---
            // Få knapp:
            //  - Skriver ut knappar med klassen hidden ("display:none")
            //  - Om kortet är selected så tas "hidden" bort 
            // som kan döda komponent:
            //  - knappen har v-on:click=Splicea från main.js med hjälp av id
            // Knapp för att komma tillbaks.
            //  - Använder samma knappscript som de befintliga knapparna. 

            // ===========
            // Använd kortets id.

            // Skriv ut två knappar utanför kortet.
            // - En "Edit Card" och en "Remove Card"

            // removeCard:
            // - removeCard() ligger i CardStack? 
            // - Emittar från "remove-button"?
            // - Tar emot id som parameter?
            // - Går igenom cardStackArray och hittar kort med parameter-id
            // - Splicear det kortet
            // - Remove Card skall ha en liten varning.

            card.isSelected = !card.isSelected;
        },
        removeCard(card) {
            let confirmation = confirm("Meh asså, skarru verklien ta bort kortet?")
            if (confirmation == false) {
                return
            }
            console.log(confirmation)
            this.$root.cardStackArray.splice(this.$root.cardStackArray.indexOf(card), 1)
        }
    }
}
</script>


<style scoped>
    .flex-container {
        display: flex;
        justify-content: center;
    }

</style>


