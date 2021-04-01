<template>
    <div class="w-10/12 mx-auto">
        <div class="flex justify-center">
            <category-card v-for="(category,index) in categories" :key="index" :category="category"/>
        </div>
    </div>
</template>

<script>
import CategoryCard from './HeaderCategoryCard'
    export default {
        components: {
            CategoryCard
        },
        props: {
            categories: {
                required: true,
                type: Array
            }
        }
    }
</script>

<style scoped>

</style>