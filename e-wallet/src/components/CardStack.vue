<template>
<div>

    <div v-for="card in this.$root.cardStackArray" v-bind:key="card.id">
        {{card.id}}
        {{card}}
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style>

</style>