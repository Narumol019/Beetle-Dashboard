<template>
  <div>

    <!--Stats cards-->
    <div class="row">
      <div class="col-lg-4 col-sm-12" v-for="stats in statsCards" :key="stats.title" @click="toTablelist">
        <stats-card>
          <div class="numbers" slot="content">
            <router-link :to="{name : 'place'}">
             {{stats.title}}
               <div class="logo-img">
                <img src="static/img/logo.png" alt="">
               </div>
             <p>{{stats.value}}</p>
            </router-link>
          </div>
        </stats-card>
      </div>
    </div>
   
  </div>
</template>
<script>
  import StatsCard from 'components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'components/UIComponents/Cards/ChartCard.vue'
  import {firestore} from './firebase.js'
  export default {
    components: {
      StatsCard,
      ChartCard
    },
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data () {
      return {
        places: [],
        statsCards: [
          {
            type: 'warning',
            title: 'Patong',
            value: 'Beetle'
          },
          {
            type: 'success',
            title: 'Rawai',
            value: 'Beetle'
          },
          {
            type: 'danger',
            title: 'Kata',
            value: 'Beetle'
          },
          {
            type: 'danger',
            title: 'Karon',
            value: 'Beetle'
          },
          {
            type: 'danger',
            title: 'Nai-yang',
            value: 'Beetle'
          }
        ]
      }
    },
    firestore () {
      return {
        places: firestore.collection('place')
      }
    },
    methods: {
      toTablelist: function () {
        this.$routes.push({name: 'place'})
      }
    }
  }

</script>
<style>

</style>
