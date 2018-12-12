<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <paper-table :title="table1.title" :sub-title="table1.subTitle" :data="table1.data" :columns="table1.columns">

          </paper-table>
        </div>
      </div>

    </div>
   
</template>
<script>
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  const tableColumns = ['Name', 'Place', 'Open', 'Close', 'Price']

  export default {
    props: {
      data: Array
    },
    components: {
      PaperTable
    },
    data () {
      return {
        table1: {
          columns: [...tableColumns]
          // data: [...tableData]
        }
      }
    },
    mounted () {
      console.log('...')
    }
}
</script>
<style>

</style>
