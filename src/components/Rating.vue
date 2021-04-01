<template>
    <div>
        <div
            v-for="(star, index) in highestRate"
            :key="index"
            class="inline"
        >
            <span v-if="star <= rating" class="text-yellow-500">&#9733;</span>
            <span v-else class="text-gray-400">&#9733;</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        computed: {
            rating() {
                return Math.floor(Math.random() * (5)) + 1
            }
        },
        data() {
            return {
                highestRate: 5
            }
        },
    }
</script>

<style scoped>

</style>