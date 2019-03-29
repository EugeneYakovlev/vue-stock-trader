<template>
    <v-flex xs4 class="px-2 my-2">
        <v-card dark>
            <v-card-text class="px-4">
                <div class="panel-title">
                    Stock name
                    <small>(Price: PRICE)</small>
                </div>
                <v-layout row wrap class="panel-body">
                    <v-flex xs8>
                        <input type="text" placeholder="Number">
                    </v-flex>
                    <v-flex xs4 class="pl-1">
                        <v-btn depressed dark>Buy</v-btn>
                    </v-flex>
                </v-layout>
            </v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
    export default {
        name: "Stock"
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