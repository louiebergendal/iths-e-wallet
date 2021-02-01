<template>

    <div :class="'card -' + cardItemData.vendorClass" v-on:click="selectCard()">
        <!-- Skriver ut kortdatan -->
        {{cardItemData.holder}}
        {{cardItemData.number}}
        {{cardItemData.ccv}}
        {{cardItemData.vendor}}

        <div class="chip-wrapper" >
            <img alt="Chip" src='../assets/chip-dark.svg' />
        </div>

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
    ], // Är beredd att ta emot data som heter "cardItemData".
    methods: {

        selectCard() {
            // Använd kortets id.

            // Skriv ut kortet i en "display card"-div i Home-vyn.
            // Splicea bort kortet från cardStackArray?

            // Skriv ut två knappar utanför kortet.
            // - En "Edit Card" och en "Remove Card"
            // - Remove Card skall ha en liten varning.

            console.log(this.cardItemData.id)
        }
    }
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

    .chip-wrapper {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }


</style>

