<template>
    <div class="row">
      <div class="col-md-12">
          <div>
              <input type="text" v-model="search" placeholder="Filter"/>
            </div>
        <div class="card">
          <paper-table :title="table1.title" :sub-title="table1.subTitle" :data="table1.data" :columns="table1.columns">

          </paper-table>
        </div>
      </div>

    </div>
   
</template>
<script>
  import {firestore} from './firebase.js'
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  const tableColumns = ['Name', 'Place', 'Open', 'Colse', 'Price']
  const tableData = [{
    name: 'beetle 1',
    place: 'Patong',
    open: '14:30:05',
    colse: '14:32:55',
    price: 20
  },
  {
    name: 'beetle 2',
    place: 'Patong',
    open: '14:30:05',
    colse: '14:32:55',
    price: 20
  },
  {
    name: 'beetle 3',
    place: 'Patong',
    open: '14:30:05',
    colse: '14:32:55',
    price: 20
  },
  {
    name: 'beetle 4',
    place: 'Patong',
    open: '14:30:05',
    colse: '14:32:55',
    price: 20
  },
  {
    name: 'beetle 5',
    place: 'Patong',
    open: '14:30:05',
    colse: '14:32:55',
    price: 20
  },
  {
    name: 'beetle 1',
    place: 'Rawai',
    open: '14:30:05',
    colse: '14:32:55',
    price: 20
  },
  {
    name: 'beetle 2',
    place: 'Rawai',
    open: '14:30:05',
    colse: '14:32:55',
    price: 20
  },
  {
    name: 'beetle 3',
    place: 'Rawai',
    open: '14:30:05',
    colse: '14:32:55',
    price: 20
  },
  {
    name: 'beetle 4',
    place: 'Rawai',
    open: '14:30:05',
    colse: '14:32:55',
    price: 20
  },
  {
    name: 'beetle 5',
    place: 'Rawai',
    open: '14:30:05',
    colse: '14:32:55',
    price: 20
  },
  {
    name: 'beetle 1',
    place: 'Kata',
    open: '14:30:05',
    colse: '14:32:55',
    price: 20
  },
  {
    name: 'beetle 2',
    place: 'Kata',
    open: '14:30:05',
    colse: '14:32:55',
    price: 20
  },
  {
    name: 'beetle 3',
    place: 'Kata',
    open: '14:30:05',
    colse: '14:32:55',
    price: 20
  },
  {
    name: 'beetle 4',
    place: 'Kata',
    open: '14:30:05',
    colse: '14:32:55',
    price: 20
  },
  {
    name: 'beetle 5',
    place: 'Kata',
    open: '14:30:05',
    colse: '14:32:55',
    price: 20
  },
  {
    name: 'beetle 1',
    place: 'Nai-yang',
    open: '14:30:05',
    colse: '14:32:55',
    price: 20
  },
  {
    name: 'beetle 2',
    place: 'Nai-yang',
    open: '14:30:05',
    colse: '14:32:55',
    price: 20
  },
  {
    name: 'beetle 3',
    place: 'Nai-yang',
    open: '14:30:05',
    colse: '14:32:55',
    price: 20
  },
  {
    name: 'beetle 4',
    place: 'Nai-yang',
    open: '14:30:05',
    colse: '14:32:55',
    price: 20
  },
  {
    name: 'beetle 5',
    place: 'Nai-yang',
    open: '14:30:05',
    colse: '14:32:55',
    price: 20
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
    },
    firestore () {
      return {
        place: firestore.collection('place')
      }
    }
}
</script>
<style>

</style>
