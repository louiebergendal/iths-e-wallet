<template>
    <!-- Experimenterar med CSS-klasser -->
    <div :class="'card -' + cardItemData.vendorClass">
        {{cardItemData.holder}}
        {{cardItemData.number}}
        {{cardItemData.ccv}}
        {{cardItemData.vendor}}
        
        <img v-if="cardItemData.vendorClass == 'bitcoin'" alt="Bitcoin logo" src='../assets/vendor-bitcoin.svg' />
        <img v-if="cardItemData.vendorClass == 'ninja-bank'" alt="Ninja Bank logo" src='../assets/vendor-ninja-bank.svg' />
        <img v-if="cardItemData.vendorClass == 'block-chain'" alt="Blockchain inc logo" src='../assets/vendor-block-chain.svg' />
        <img v-if="cardItemData.vendorClass == 'evil-corp'" alt="Evil Corp logo" src='../assets/vendor-evil-corp.svg' />
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
        height: 150px;
        width: 250px;

        padding: 10px;
        margin: 10px;
        border-radius: 25px;
    }

    .card.-evil-corp {
        background-color: red;
    }
    .card.-bitcoin {
        background-color: rgb(255, 238, 0);
    }
    .card.-ninja-bank {
        background-color: black;
    }
    .card.-block-chain {
        background-color: purple;
    }

</style>

