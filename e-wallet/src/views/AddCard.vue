<template>
  <div class="addCard">
    <h1>ADD CARD PAGE</h1>
        <CardForm />
        <CardStack />
  </div>
</template>

<script>
// @ is an alias to /src
import CardForm from '../components/CardForm.vue';
import CardStack from '../components/CardStack.vue';

export default {
  name: "AddCard",
  components: {
    CardForm,
    CardStack
  }
};
</script>