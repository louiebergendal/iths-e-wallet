<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TopHeader />
    <CardItem />
    <CardStack />
    <AddCardButton />
  </div>
</template>

<script>
// @ is an alias to /src
import TopHeader from '../components/TopHeader.vue'
import CardItem from '../components/CardItem.vue'
import CardStack from '../components/CardStack.vue'
import AddCardButton from '../components/AddCardButton.vue'

export default {
  name: "Home",
  components: {
    TopHeader
    , CardItem
    , CardStack
    , AddCardButton
  }
};
</script>
