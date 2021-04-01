<template>
    <ul id="sidebar__wrapper">
        <li class="mb-4 cursor-pointer" id="isFirstDropDown">
            <div class="flex items-center ">
                <i class="fa fa-chevron-right text-xs w-6 text-blue-500"></i>
                <div class="flex flex-col">
                    <h6 class="text-sm font-medium">All Categories</h6>
                    <span class="text-gray-500 text-xs">Ecommerce Patterns</span>
                </div>
            </div>
            <ul id="firstDropDown" class="ml-6 mt-3">
                <li class="flex items-center mb-4 cursor-pointer">
                    <i class="fa fa-chevron-right text-xs w-6 text-blue-500"></i>
                    <div class="flex flex-col">
                        <h6 class="text-sm font-medium">Business & Industrial</h6>
                    </div>
                </li>
            </ul>
        </li>
        <li class="flex items-center mb-4 cursor-pointer">
            <i class="fa fa-chevron-right text-xs w-6 text-blue-500"></i>
            <div class="flex flex-col">
                <h6 class="text-sm font-medium">Business & Industrial</h6>
            </div>
        </li>
        <li class="flex items-center mb-4 cursor-pointer">
            <i class="fa fa-chevron-right text-xs w-6 text-blue-500"></i>
            <div class="flex flex-col">
                <h6 class="text-sm font-medium">Consumer Electronics</h6>
            </div>
        </li>
        <li class="flex items-center mb-4 cursor-pointer">
            <i class="fa fa-chevron-right text-xs w-6 text-blue-500"></i>
            <div class="flex flex-col">
                <h6 class="text-sm font-medium">Computers</h6>
                <span class="text-gray-500 text-xs">Tablets & Networking</span>
            </div>
        </li>
        <li class="flex items-center mb-4 cursor-pointer">
            <i class="fa fa-chevron-right text-xs w-6 text-blue-500"></i>
            <div class="flex flex-col">
                <h6 class="text-sm font-medium">Home & Garden</h6>
            </div>
        </li>
        <div class="bg-blue-100 inline-block rounded-sm ml-6">
            <h6 class="text-sm p-2 text-blue-600 font-semibold">Expand</h6>
        </div>
    </ul>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#firstDropDown{
    display: none;
}
#isFirstDropDown:hover #firstDropDown{
    display: block;
}
</style>