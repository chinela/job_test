<template>
    <div class="paging">
        <ul>
            <li class="first"><a :class="[currentPage == 1 ? 'text-gray-300 cursor-not-allowed' : 'cursor-pointer']" @click="gotoPrev" >Previous</a></li>
            <li v-for="(page, index) in totalPages" :key="index"><a @click.prevent="fetchData(page)"  class="font-bold cursor-pointer" :class="activeLink(page)">{{ page }}</a></li>
            <li class="last"><a :class="[currentPage == totalPages ? 'text-gray-300 cursor-not-allowed' : 'cursor-pointer']" @click="gotoNext" >Next</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
      props: ['totalPages', 'currentPage'],
        methods: {
            fetchData(page) {
                this.$root.$emit('paginated', page)
            },
            activeLink(page) {
              if(this.currentPage == page) {
                return 'text-green-500'
              }

              return 'text-gray-500'
            },
            gotoNext() {
              if(this.currentPage < this.totalPages) {
                this.$root.$emit('paginated', this.currentPage + 1)
              }
            },
            gotoPrev() {
              if(this.currentPage > 1) {
                this.$root.$emit('paginated', this.currentPage - 1)
              }
            }
        },
    }
</script>

<style scoped>
.paging {
  margin: 100px auto;
}
.paging ul {  
  width: 100%;
  text-align: center;
  list-style: none;
  padding: 10px;
  margin: 0 auto;
  background: #fff;
}
.paging ul li {
  display:inline-block;
  border-right: 1px solid #d8d8d8;
}
.paging ul li a {
  text-decoration: none;
  padding: 0 12px;
}
.paging ul li a:hover {
  color: #4b4a4a;
}
.paging ul li.last {
  border-right: 0;
}
</style>