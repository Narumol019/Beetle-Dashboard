<template>
  <div>
    <div class="row" style="margin-bottom: 15px">
      <div class="col-md-4 col-lg-4" style="text-align: right"></div>
      <div class="col-md-4 col-lg-4" style="text-align: right"></div>
      <div class="col-md-4 col-lg-4" style="text-align: right">
        <input @keyup="search" class="form-control" v-model="filter" placeholder="Filter">
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
<<<<<<< HEAD
          <paper-table :title="table1.title" :sub-title="table1.subTitle" :data="table1.data" :columns="table1.columns"/>
=======
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
>>>>>>> 60596bad8bd922a76fe1fdb70e2b1767eecc09db
        </div>
      </div>
    </div></div>
</template>
<script>
<<<<<<< HEAD
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  import API from '../../API/httpCommon'
  const tableColumns = ['Name', 'Branch', 'Checkin', 'Checkout', 'Price', 'Status']
=======

  import PaperTable from 'components/UIComponents/PaperTable.vue'
  const tableColumns = ['Branch', 'Boxs', 'Number Phone', 'Checkin', 'Checkout', 'Pice', 'Status']
>>>>>>> 60596bad8bd922a76fe1fdb70e2b1767eecc09db
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
        transactions: [],
        boxs: [],
        filter: ''
      }
    },
<<<<<<< HEAD
    async beforeMount () {
      let transactions = await API.transactions()
      this.transactions = transactions.data
      this.table1.data = this.transactions
      console.log(transactions)
    },
    methods: {
      search: function () {
        if (this.filter.length > 0) {
          let data = this.transactions
          let filter = this.filter
          let filterd = data.filter((e) => {
            if (e.name.toLowerCase().startsWith(filter)) {
              console.log(e)
              return e
            }
          })
          console.log(filterd)
          this.table1.data = filterd
        } else if (this.filter.length === 0) {
          this.table1.data = this.transactions
        }
=======
    computed: {
      filteredList () {
        return this.postList.filter(post => {
          return post.title.toLowerCase().includes(this.search.toLowerCase())
        })
>>>>>>> 60596bad8bd922a76fe1fdb70e2b1767eecc09db
      }
    }
}
</script>
<style>

</style>
