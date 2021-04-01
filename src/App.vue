<template>
  <div id="app">
    <header class="py-6">
      <div class="container mx-auto">
        <div class="flex justify-between items-center">
          <img src="@/assets/images/logo.png" alt="Agriple Logo" class="w-20">
          <search-market />
          <div class="flex items-center">
            <router-link to="/" class="py-2 px-3 font-bold rounded-md text-blue-700 border border-blue-500">Sign in</router-link>
            <router-link to="/" class="py-2 px-3 font-bold rounded-md text-blue-700 ml-3 signUpBtn">
              <span>My Cart</span>
              <span class="absolute">
                <span id="cartCount" class="bg-red-600 text-white">5</span>
              </span>
            </router-link>
            <div class="w-12 rounded-full h-12 bg-red-500 ml-6">
              <img src="@/assets/images/8.png" alt="Avatar" class="rounded-full ">
            </div>
          </div>
        </div>
      </div>
    </header>
    
    <header-categories :categories="categories"/>
    <div class="w-11/12 mx-auto mt-20">

    <!-- Sidebar -->
    <div class="flex">
      <div class="w-1/4 mr-24">
        <button class="w-full py-3 px-4 border border-blue-300 rounded-lg text-left">
          <i class="fa fa-filter text-blue-600 font-bold w-24"></i>
          <span class="font-bold text-blue-600 text-lg">Departments</span>
        </button>

        <div class="mt-10">
          <div class="ml-6">
            <sidebar />
          </div>
        </div>
      </div>
      <div class="w-3/4">
        <router-view/>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import SearchMarket from '@/components/SearchMarket'
import HeaderCategories from  '@/components/HeaderCategories'
import Sidebar from  '@/components/Sidebar'
export default {
  name: 'App',
  components: {
    SearchMarket,
    HeaderCategories,
    Sidebar
  },
  data() {
    return {
      categories: [
        {
          name: 'Clothing & Shoes',
          icon: 'tshirt',
          active: true
        },
        {
          name: 'Music',
          icon: 'music',
          active: false
        },
        {
          name: 'Kitchen Accessories',
          icon: 'utensil-spoon',
          active: false
        },
        {
          name: 'Entertain',
          icon: 'photo-video',
          active: false
        },
        {
          name: 'Tavel Euipment',
          icon: 'compass',
          active: false
        },
      ]
    }
  },
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.signUpBtn{
    box-shadow: 0px 4px 8px 0px #2979ff30;
}
#cartCount{
  background: #F44336 !important;
    position: relative;
    top: -11px;
    font-size: 12px;
    height: 18px;
    width: 18px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    right: 4px;
}
</style>
