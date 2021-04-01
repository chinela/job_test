<template>
    <router-link :to="productDetailUrl" class="p-4 hover:shadow-md farmCard">
        <img :src="farm.profile_picture.url" :alt="farm.good.category.description" class="mb-6 mx-auto">
        <h4 class="farmTitle pt-4 leading-6 h-16" v-html="farm.short_desc"></h4>
        <div class="flex justify-between items-center mt-4 mb-3">
            <h1 class="font-bold text-xl">&#8358;{{ farm.amount | moneyFormat }}</h1>
            <span v-if="farm.discount_setting_id" class="bg-green-100 py-1 px-2 text-green-600 text-xs">40% OFF</span>
        </div>
        <p class="text-gray-400 text-sm" v-html="farm.good.category.description"></p>

        <div class="flex justify-between items-center mt-4">
            <div>
                <stars />
            </div>
            <button class="border border-blue-500 py-1 px-2 text-blue-500 rounded-md hover:bg-blue-100">
                <span class="">&#9829;</span> Watch
            </button>
        </div>
    </router-link>
</template>

<script>
import Stars from '@/components/Rating'
    export default {
        components: {
            Stars,
        },
        props: {
            farm: {
                required: true,
                type: Object
            }
        },
        computed: {
            productDetailUrl() {
                return `/goods/${this.farm.slug}`
            }
        }
    }
</script>

<style scoped>
img{
    width: 226px;
    height: 224px;
}
.farmCard:hover .farmTitle{
    color: #148f45;
}
</style>