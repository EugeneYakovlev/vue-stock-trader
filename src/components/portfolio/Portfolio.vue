<template>
    <v-layout row wrap>
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </v-layout>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Stock from './Stock.vue';

    export default {
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        },
        components: {
            appStock: Stock
        }
    }
</script>