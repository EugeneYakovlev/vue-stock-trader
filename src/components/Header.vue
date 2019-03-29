<template>
    <v-toolbar flat prominent app>
        <v-toolbar-title>
            <router-link to="/" class="logo">Stock Trader</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat replace to="/stocks">Stocks</v-btn>
            <v-btn flat replace to="/portfolio">Portfolio</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <p class="subheading my-auto mx-2">Your Funds: {{funds | currency}}</p>
            <v-btn flat @click="endDay">End day</v-btn>
            <v-select flat solo :items="items" label="Load Data" class="selectWrap"></v-select>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "Header",
        data() {
            return {
                items: ['Save Data', 'Load Data']
            }
        },
        methods: {
            ...mapActions([
                'randomizeStocks'
            ]),
            endDay() {
                this.randomizeStocks();
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        }
    }
</script>

<style scoped>
    .logo {
        color: #fff;
        text-decoration: none;
    }

    .v-toolbar .v-input.selectWrap {
        max-width: 150px;
        margin-top: 4px;
        margin-left: 20px;
        height: 100%;
        align-items: center;
    }

    .v-toolbar__items button.v-btn {
        height: 100% !important;
    }
</style>