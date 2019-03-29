<template>
    <v-layout row wrap>
        <stock-app v-for="stock in stocks"></stock-app>
    </v-layout>
</template>

<script>
    import Stock from './Stock.vue';

    export default {
        name: "Stocks",
        data() {
            return {
                stocks: [
                    {id:1, name: 'Apple', price: '120'},
                    {id:2, name: 'Samsung', price: '105'},
                    {id:3, name: 'LG', price: '100'},
                    {id:4, name: 'Sony', price: '124'}
                ]
            }
        },
        components: {
            stockApp: Stock
        }
    }
</script>

<style scoped>

</style>