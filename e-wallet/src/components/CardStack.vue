<template>
<div>

    <!-- Skriver ut kort med data från cardStackArray -->
    <div class="flex-container" v-for="card in this.$root.cardStackArray" v-bind:key="card.id">

        <div class="flex-container" v-on:click="selectCard(card)">
            <CardItem v-bind:cardItemData="card" /> <!-- fyller varje CardItem med data från respektive card i cardStackArray (i main.js) -->
        </div>

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
            
            // Säger att Active card ska hämta data från det här indexet istället.
            this.$root.activeCardIndex = this.$root.cardStackArray.indexOf(card);
        },
    }
}
</script>


<style scoped>
    .flex-container {
        display: flex;
        justify-content: center;
    }

</style>


