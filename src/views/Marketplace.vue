<template>
    <div class="rounded-lg shadow-md mx-auto p-6" id="market__wrapper">
        <loading v-if="farms.length < 1" />
        <farm-component v-else :farms="farms.data" :current-page="farms.current_page" :total-pages="farms.last_page"/>
    </div>
</template>

<script>
import FarmComponent from '@/components/Farms'
import Loading from '@/components/Loading'

    export default {
        components: {
            FarmComponent,
            Loading
        },
        data() {
            return {
                farms: [],
                defaultPage: 1
            }
        },
        created() {
            this.fetchFarms()
        },
        mounted() {
            this.$root.$on('paginated', (data) => {
                this.defaultPage = data
                this.fetchFarms()
            })
        },
        methods: {
            fetchFarms() {
                this.farms = []
                axios
                .get(`https://agriple.com/api/search?max_amount=100000&page=${this.defaultPage}`)
                .then(({data}) => {
                    this.farms = data
                })
            }
        }
    }
</script>

<style scoped>
#market__wrapper{
    height: 100%;
}
</style>