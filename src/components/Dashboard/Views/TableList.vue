<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="search-wrapper" align='right'> <span class="ti-search"></span>
            <input type="text" v-model="search" placeholder="Filter.."/>
          </div>
          <paper-table :title="table1.title" :sub-title="table1.subTitle" :data="places" :columns="table1.columns">

          </paper-table>
          <div v-for="place in places" :key="place.places">
              {{place.id}}
          </div>
          <div v-for="box in boxs" :key="box.boxs">
              {{box.id}}
          </div>
        </div>
      </div>

    </div>
   
</template>
<script>

  import PaperTable from 'components/UIComponents/PaperTable.vue'
  const tableColumns = ['Branch', 'Boxs', 'Number Phone', 'Checkin', 'Checkout', 'Pice', 'Status']
  const tableData = []

  export default {
    components: {
      PaperTable
    },
    data () {
      return {
        table1: {
          columns: [...tableColumns],
          data: [...tableData]
        },
        places: [],
        boxs: []
      }
    },
    computed: {
      filteredList () {
        return this.postList.filter(post => {
          return post.title.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    }
}
</script>
<style>

</style>
