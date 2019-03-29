<template>
    <v-flex xs4 class="px-2 my-2">
        <v-card dark>
            <v-card-text class="px-4">
                <div class="panel-title subheading">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }}) | Quantity: {{ stock.quantity }}</small>
                </div>
                <v-layout row wrap class="panel-body">
                    <v-flex xs8>
                        <input type="number" placeholder="Number" v-model.number="quantity">
                    </v-flex>
                    <v-flex xs4 class="pl-2">
                        <v-btn depressed dark
                               @click="sellStock"
                               :disabled="insufficientQuantity || quantity <= 0">
                            {{ insufficientQuantity ? 'ins. Quantity' : 'Sell'}}
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    stockQuantity: this.quantity
                };
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        },
        computed: {
            insufficientQuantity() {
                return this.quantity > this.stock.quantity;
            }
        }
    }
</script>

<style scoped>
    .panel-body {
        margin-top: 10px;
    }

    .panel-body .v-btn {
        margin: 0;
        max-width: 100%;
        width: 100%;
    }

    input {
        max-width: 100%;
        width: 100%;
        height: 36px;
        border: 1px solid #535353;
        border-radius: 5px;
        overflow: hidden;
        padding: 5px 15px;
    }
</style>