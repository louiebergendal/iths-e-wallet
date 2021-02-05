<template>
  <div class="home">

    <TopHeader />

    <!-- Visar selectedCard. -->
    <div v-if="this.$root.activeCardIndex !=null" class="flex-container">
        <CardItem v-bind:cardItemData="activeCard" /> 

        <button v-on:click="removeCard(activeCard)">REMOVE CARD</button>
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
    activeCard: function(){
      return this.$root.cardStackArray[this.$root.activeCardIndex]; // Hämtar kortdata till card
    }
  }, 
  methods: {

        removeCard(cardArgument) {
            
            // "Är-du-säker"-popup
            let confirmation = confirm("Meh asså, skarru verklien ta bort kortet?")
            if (confirmation == false) {

                return
            }

            // Hittar och tar bort card från cardStackArray
            this.$root.cardStackArray.splice(this.$root.cardStackArray.indexOf(cardArgument), 1)
            this.$root.activeCardIndex = null;
        }
  }
};
</script>

<style scoped>
    .flex-container {
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
    }
</style>

