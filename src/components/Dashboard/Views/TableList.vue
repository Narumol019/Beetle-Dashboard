<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
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
  import {firestore} from './firebase.js'
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  const tableColumns = ['Name', 'Place', 'Open', 'Close', 'Price']
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
    async created () {
      const collections = await firestore.collection('place').get()
      collections.forEach(async (collection) => {
        const place = await firestore.collection('place').doc(collection.id).collection('boxs').get()
        place.forEach(async (x) => {
          console.log(x.data())
          this.places.push(x.data())
        })
      })
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
