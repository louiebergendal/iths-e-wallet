<template>
    <div>
        {{cardItemData.holder}}
        {{cardItemData.number}}
        {{cardItemData.ccv}}
        {{cardItemData.vendor}}
    </div>
</template>

<script>
export default {

    props: ['cardItemData'] // Är beredd att ta emot data som heter "cardItemData".
}
</script>

<style scoped>
    div {
        background-color: blueviolet;
        padding: 10px;
        margin: 10px;
        width: 300px;
        border-radius: 25px;
    }

</style>

