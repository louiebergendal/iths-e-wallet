<template>
<div>
    <!-- Skriver ut kort från arrayen i main.js -->
    <div class="flex-container" v-for="card in this.$root.cardStackArray" v-bind:key="card.id">

        <!-- fyller varje CardItem med data från varje card i cardStackArray (i main.js) -->
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
