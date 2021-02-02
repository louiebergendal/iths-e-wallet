<template>
<div>

    <!-- Skriver ut kort med data från cardStackArray i main.js -->
    <div class="flex-container" v-for="card in this.$root.cardStackArray" v-bind:key="card.id">

        <div class="flex-container" v-on:click="selectCard(card)">
            <CardItem v-bind:cardItemData="card" /> <!-- fyller varje CardItem med data från respektive card i cardStackArray (i main.js) -->
        </div>
        
        <button v-if="card.isSelected" v-on:click="removeCard(card)">DISITEGRATE CARD</button>

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
            // Man kan bara ha ett kort selected.
            // Om man klickar på kortet igen så släpps selection.
            
            if(card.isSelected == false) {
                this.$root.cardStackArray.forEach(element => {
                    element.isSelected = false;
                });
                card.isSelected = true;
            } else {
                card.isSelected = false;
            }
        },
        removeCard(card) {
            
            // "Är-du-säker"-popup
            let confirmation = confirm("Meh asså, skarru verklien ta bort kortet?")
            if (confirmation == false) {

                return card.isSelected = false;
            }

            this.$root.cardStackArray.splice(this.$root.cardStackArray.indexOf(card), 1) 
            // Hittar och tar bort card från cardStackArray
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


