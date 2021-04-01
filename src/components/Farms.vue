<template>
    <div>
        <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-6 gap-x-3">
            <farm-card v-for="(farm, index) in farms" :key="index" :farm="farm"/>
        </div>

        <div class="mt-10">
            <pagination :current-page="currentPage" :total-pages="totalPages"/>
        </div>
    </div>
</template>

<script>
import FarmCard from './FarmCard'
import Pagination from './Pagination'
    export default {
        components: {
            FarmCard,
            Pagination,
        },
        props: {
            farms: {
                required: true
            },
            totalPages: {
                required: true
            },
            currentPage: {
                required: true
            }
        }
    }
</script>

<style scoped>

</style>