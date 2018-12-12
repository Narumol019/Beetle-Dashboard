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
          <paper-table :title="table1.title" :sub-title="table1.subTitle" :data="table1.data" :columns="table1.columns"/>
        </div>
      </div>
    </div></div>
</template>
<script>
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  import API from '../../API/httpCommon'
  const tableColumns = ['Name', 'Branch', 'Checkin', 'Checkout', 'Price', 'Status']
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
      }
    }
}
</script>
<style>

</style>
