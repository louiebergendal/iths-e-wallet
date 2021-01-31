<template>
    <!-- Experimenterar med CSS-klasser -->
    <div :class="'card -' + cardItemData.vendorClass">
        {{cardItemData.holder}}
        {{cardItemData.number}}
        {{cardItemData.ccv}}
        {{cardItemData.vendor}}
    </div>
</template>

<script>
export default {

    props: [
        'cardItemData'
    ] // Är beredd att ta emot data som heter "cardItemData".
}
</script>

<style scoped>
    .card {
        padding: 10px;
        margin: 10px;
        width: 300px;
        border-radius: 25px; 
    }

    .card.-evil-corp {
        background-color: red;
    }
    .card.-bitcoin {
        background-color: yellow;
    }
    .card.-ninja-bank {
        background-color: black;
    }
    .card.-block-chain {
        background-color: purple;
    }

</style>

