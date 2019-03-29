<template>
    <v-layout row wrap>
        <stock-app v-for="stock in stocks" :stock="stock"></stock-app>
    </v-layout>
</template>

<script>
    import Stock from './Stock.vue';

    export default {
        name: "Stocks",
        components: {
            stockApp: Stock
        },
        computed: {
            stocks() {
                return this.$store.getters.stocks;
            }
        }
    }
</script>

<style scoped>

</style>