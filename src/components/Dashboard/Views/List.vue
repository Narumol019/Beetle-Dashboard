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
  const tableColumns = ['Beetle_No', 'Place', 'Date', 'Open', 'Colse', 'Rent', 'Total']
  const tableData = [{
    beetle_no: 1,
    place: 'Patong',
    date: '2017-07-04',
    open: '14:30:05',
    colse: '14:32:55',
    rent: 2.50,
    total: 20
  },
  {
    beetle_no: 2,
    place: 'Patong',
    date: '2017-07-04',
    open: '14:30:05',
    colse: '14:32:55',
    rent: 2.50,
    total: 20
  },
  {
    beetle_no: 3,
    place: 'Patong',
    date: '2017-07-04',
    open: '14:30:05',
    colse: '14:32:55',
    rent: 2.50,
    total: 20
  },
  {
    beetle_no: 4,
    place: 'Patong',
    date: '2017-07-04',
    open: '14:30:05',
    colse: '14:32:55',
    rent: 2.50,
    total: 20
  },
  {
    beetle_no: 5,
    place: 'Patong',
    date: '2017-07-04',
    open: '14:30:05',
    colse: '14:32:55',
    rent: 2.50,
    total: 20
  },
  {
    beetle_no: 1,
    place: 'Rawai',
    date: '2017-08-06',
    open: '14:30:05',
    colse: '14:32:55',
    rent: 2.50,
    total: 20
  },
  {
    beetle_no: 2,
    place: 'Rawai',
    date: '2017-08-06',
    open: '14:30:05',
    colse: '14:32:55',
    rent: 2.50,
    total: 20
  },
  {
    beetle_no: 3,
    place: 'Rawai',
    date: '2017-08-06',
    open: '14:30:05',
    colse: '14:32:55',
    rent: 2.50,
    total: 20
  },
  {
    beetle_no: 4,
    place: 'Rawai',
    date: '2017-08-06',
    open: '14:30:05',
    colse: '14:32:55',
    rent: 2.50,
    total: 20
  },
  {
    beetle_no: 5,
    place: 'Rawai',
    date: '2017-08-06',
    open: '14:30:05',
    colse: '14:32:55',
    rent: 2.50,
    total: 20
  },
  {
    beetle_no: 1,
    place: 'Kata',
    date: '2018-09-11',
    open: '14:30:05',
    colse: '14:32:55',
    rent: 2.50,
    total: 20
  },
  {
    beetle_no: 2,
    place: 'Kata',
    date: '2018-09-11',
    open: '14:30:05',
    colse: '14:32:55',
    rent: 2.50,
    total: 20
  },
  {
    beetle_no: 3,
    place: 'Kata',
    date: '2018-09-11',
    open: '14:30:05',
    colse: '14:32:55',
    rent: 2.50,
    total: 20
  },
  {
    beetle_no: 4,
    place: 'Kata',
    date: '2018-09-11',
    open: '14:30:05',
    colse: '14:32:55',
    rent: 2.50,
    total: 20
  },
  {
    beetle_no: 5,
    place: 'Kata',
    date: '2018-09-11',
    open: '14:30:05',
    colse: '14:32:55',
    rent: 2.50,
    total: 20
  },
  {
    beetle_no: 1,
    place: 'Nai-yang',
    date: '2018-09-03',
    open: '14:30:05',
    colse: '14:32:55',
    rent: 2.50,
    total: 20
  },
  {
    beetle_no: 2,
    place: 'Nai-yang',
    date: '2018-09-03',
    open: '14:30:05',
    colse: '14:32:55',
    rent: 2.50,
    total: 20
  },
  {
    beetle_no: 3,
    place: 'Nai-yang',
    date: '2018-09-03',
    open: '14:30:05',
    colse: '14:32:55',
    rent: 2.50,
    total: 20
  },
  {
    beetle_no: 4,
    place: 'Nai-yang',
    date: '2018-09-03',
    open: '14:30:05',
    colse: '14:32:55',
    rent: 2.50,
    total: 20
  },
  {
    beetle_no: 5,
    place: 'Nai-yang',
    date: '2018-09-03',
    open: '14:30:05',
    colse: '14:32:55',
    rent: 2.50,
    total: 20
  }]

  export default {
    components: {
      PaperTable
    },
    data () {
      return {
        table1: {
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    }
}
</script>
<style>

</style>
