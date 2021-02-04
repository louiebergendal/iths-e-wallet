<template>
  <div class="home">

    <TopHeader />

    <!-- Visar selectedCard. -->
    <div v-if="this.$root.activeCardIndex !=null" class="flex-container">
        <h4>ACTIVE CARD</h4>
        <CardItem v-bind:cardItemData="card" /> 

        <button v-on:click="removeCard(card)">REMOVE CARD</button>
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
  }, 
  methods: {

        removeCard(card) {

            console.log(this.$root.activeCardIndex)
            
            // "Är-du-säker"-popup
            let confirmation = confirm("Meh asså, skarru verklien ta bort kortet?")
            if (confirmation == false) {

                return
            }

            this.$root.cardStackArray.splice(this.$root.cardStackArray.indexOf(card), 1)
            this.$root.activeCardIndex = null;
            // Hittar och tar bort card från cardStackArray
        }
  }
};
</script>

<style scoped>

</style>

