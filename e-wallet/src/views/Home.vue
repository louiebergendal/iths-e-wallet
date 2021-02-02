<template>
  <div class="home">

    <TopHeader />

    <!-- Display-kort 
    <div class="flex-container">
        <CardItem v-bind:cardItemData.sync="card" />
    </div> -->

    <CardStack />
    <AddCardButton />
  </div>
</template>

<script>
// @ is an alias to /src
import TopHeader from '../components/TopHeader.vue'
import CardStack from '../components/CardStack.vue'
import AddCardButton from '../components/AddCardButton.vue'
// import CardItem from '../components/CardItem.vue'

export default {
  name: "Home",
  components: {
    TopHeader
    , CardStack
    , AddCardButton
//    , CardItem
  }
};
</script>
