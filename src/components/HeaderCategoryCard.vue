<template>
    <router-link to="" class="cat-width flex flex-col items-center p-2 mr-1" :class="[category.active ? 'bg-blue-100 rounded-lg' : '']">
        <i class="fa text-lg text-gray-500 mb-2" :class="[icon, category.active ? 'text-blue-600' : 'text-gray-500']"></i>
        <p class="text-center text-sm" :class="[category.active ? 'text-blue-600' : 'text-gray-500']">{{ category.name }}</p>
    </router-link>
</template>

<script>
    export default {
        props: {
            category: {
                required: true,
                type: Object
            }
        },
        computed:{
            icon() {
                return `fa-${this.category.icon}`;
            }
        }
    }
</script>

<style scoped>
.cat-width{
  width: 180px
}
</style>