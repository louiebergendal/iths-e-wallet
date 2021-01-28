<template>
  <div class="addCard">
    <h1>ADD CARD PAGE</h1>
        <CardForm />
        <CommitButton />
  </div>
</template>

<script>
// @ is an alias to /src
import CardForm from '../components/CardForm.vue';
import CommitButton from '../components/CommitButton.vue';

export default {
  name: "AddCard",
  components: {
    CardForm,
    CommitButton
  }
};
</script>