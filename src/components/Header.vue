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
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn dark v-on="on" flat="">
                        Save & Load
                    </v-btn>
                </template>
                <v-list>
                    <v-list-tile>
                        <v-list-tile-title v-on:click="loadData" style="cursor: pointer;">Load Data</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-title v-on:click="saveData" style="cursor: pointer;">Save Data</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "Header",
        data() {
            return {
                items: ['Save Data', 'Load Data'],
                saved: false,
            }
        },
        methods: {
            ...mapActions({
                randomizeStocks: 'randomizeStocks',
                fetchData: 'loadData'
            }),
            endDay() {
                this.randomizeStocks();
            },
            saveData() {
                const data = {
                    funds: this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks
                };
                this.$http.put('data.json', data);
            },
            loadData() {
                this.fetchData();
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