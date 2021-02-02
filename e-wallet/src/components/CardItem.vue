<template>

    <div :class="'card -' + cardItemData.vendorClass">

        <!-- Skriver ut kortdatan -->
        {{cardItemData.holder}}
        {{cardItemData.number}}
        {{cardItemData.ccv}}
        {{cardItemData.vendor}}

        <!-- Bild på chip -->
        <div class="chip-wrapper" >
            <img alt="Chip" src='../assets/chip-dark.svg' />
        </div>

        <!-- Bild på logan -->
        <div class="logo-wrapper">
            <!-- Ser till att korten får rätt logga -->
            <img v-if="cardItemData.vendorClass == 'bitcoin'" alt="Bitcoin logo" src='../assets/vendor-bitcoin.svg' />
            <img v-if="cardItemData.vendorClass == 'ninja-bank'" alt="Ninja Bank logo" src='../assets/vendor-ninja-bank.svg' />
            <img v-if="cardItemData.vendorClass == 'block-chain'" alt="Blockchain inc logo" src='../assets/vendor-block-chain.svg' />
            <img v-if="cardItemData.vendorClass == 'evil-corp'" alt="Evil Corp logo" src='../assets/vendor-evil-corp.svg' />
        </div>

    </div>

</template>

<script>
export default {
    props: [

        'cardItemData'
    ]
}
</script>

<style scoped>
    .card {
        height: 150px;
        width: 250px;

        padding: 10px;
        margin: 10px;
        border-radius: 25px;
        box-shadow: 2px 2px 5px grey;
    }
     
    /* Vendor-egenskaper */
    .card.-bitcoin {
        background-color: rgb(255, 238, 0);
    }
    .card.-ninja-bank {
        background-color: black;
        color: lightgray;
    }
    .card.-block-chain {
        background-color: purple;
        color: white;
    }
    .card.-evil-corp {
        background-color: red;
        color: white;
    }

    .chip-wrapper {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }


</style>

