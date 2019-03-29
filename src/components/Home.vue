<template>
    <div>
        <h1 class="display-2">Trade or view your Portfolio</h1>
        <h6 class="title my-2">You may Save & Load your Data</h6>
        <h6 class="title my-2">Click on 'End day' to begin a New Day!</h6>
        <p class="subheading mt-4">Your Funds: {{funds | currency}}</p>
    </div>
</template>

<script>
    export default {
        name: "Home",
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        }
    }
</script>

<style scoped>

</style>