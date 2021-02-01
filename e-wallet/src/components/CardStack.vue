<template>
<div>
    <!-- FUNDERING Skriver ut kort med data från ett objekt (Motsvarande ett "card") i main.js ? -->


    <!-- Skriver ut kort med data från cardStackArray i main.js -->
    <div class="flex-container" v-for="card in this.$root.cardStackArray" v-bind:key="card.id">

        <!-- fyller varje CardItem med data från respektive card i cardStackArray (i main.js) -->
        <CardItem v-bind:cardItemData="card" />

    </div>

</div>
</template>

<script>
import CardItem from '../components/CardItem.vue'

export default {

    components: {
        CardItem
    }
}
</script>


<style scoped>
    .flex-container {
        display: flex;
        justify-content: center;
    }

</style>


