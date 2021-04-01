<template>
    <div class="loading">
        <div class="spinner">
            <h4 class="text-3xl">Loading...</h4>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .loading{
        background: #fff;
        position: fixed;
        /* top: 0; */
        right: 0;
        bottom: 0;
        left: 0;
        height: 300px;
    }
    .spinner{
        position: absolute;
        /* top: 50%; */
        left: 50%;
    }
        
</style>