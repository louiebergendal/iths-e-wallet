<template>
  <div class="home">

    <TopHeader />

    <!-- Visar selectedCard. -->
    <div class="flex-container">
        <h4>ACTIVE CARD</h4>
        <CardItem v-bind:cardItemData.sync="card" />
    </div>

    <CardStack />
    <AddCardButton />

  </div>
</template>

<script>
// @ is an alias to /src
import TopHeader from '../components/TopHeader.vue'
import CardStack from '../components/CardStack.vue'
import AddCardButton from '../components/AddCardButton.vue'
import CardItem from '../components/CardItem.vue'

export default {
  name: "Home",

  components: {
    TopHeader
    , CardStack
    , AddCardButton
   , CardItem
  },
  computed: {
    card: function(){
      return this.$root.cardStackArray[this.$root.activeCardIndex];
    }

  }
};
</script>

<style scoped>

</style>

