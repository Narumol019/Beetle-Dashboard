<template>
  <div>

    <!--Stats cards-->
    <div class="row">
      <div class="col-lg-4 col-sm-6" v-for="stats in statsCards" :key="stats.title" @click="toTablelist">
        <stats-card>
          <div class="numbers" slot="content">
            <router-link :to="{name : 'list'}">
            <p>{{stats.title}}</p>
            {{stats.value}}
            </router-link>
          </div>
        </stats-card>
      </div>
    </div>

    <!--Charts-->
    <div class="row">

      <div class="col-md-6 ">
        <div class="card" >
          <paper-table :title="table1.title" :sub-title="table1.subTitle" :data="table1.data" :columns="table1.columns">
            
          </paper-table>
        </div>
      </div>

      <div class="col-md-6 col-xs-12">
        <chart-card :chart-data="activityChart.data" :chart-options="activityChart.options">
          <h4 class="title" slot="title">Usage</h4>
          <span slot="subTitle"> Channel one news viewing figures </span>
        </chart-card>
      </div>

    </div> 
  </div>
</template>
<script>
  import StatsCard from 'components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'components/UIComponents/Cards/ChartCard.vue'
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  import {firestore} from './firebase.js'
  const itemColumns = ['Name']

  export default {
    components: {
      StatsCard,
      ChartCard,
      PaperTable
    },
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data () {
      return {
        table1: {
          columns: [...itemColumns],
          data: []
        },
        statsCards: [
          {
            type: 'warning',
            icon: 'ti-server',
            title: 'Number of box',
            value: '15'
          },
          {
            type: 'success',
            icon: 'ti-wallet',
            title: 'Today Used',
            value: '150'
          },
          {
            type: 'danger',
            icon: 'ti-pulse',
            title: 'Peek Time',
            value: '11:30 AM'
          }
        ],
        usersChart: {
          data: {
            labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
            series: [
              [287, 385, 490, 562, 594, 626, 698, 895, 952],
              [67, 152, 193, 240, 387, 435, 535, 642, 744],
              [23, 113, 67, 108, 190, 239, 307, 410, 410]
            ]
          },
          options: {
            low: 0,
            high: 1000,
            showArea: true,
            height: '245px',
            axisX: {
              showGrid: false
            },
            lineSmooth: this.$Chartist.Interpolation.simple({
              divisor: 3
            }),
            showLine: true,
            showPoint: false
          }
        },
        activityChart: {
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
              [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
              [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
            ]
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: '245px'
          }
        }

      }
    },
    methods: {
      toTablelist: function () {
        this.$routes.push({name: 'list'})
      }
    },
    computed: {
      placeName: function () {
        const name = this.$route.params.title
        return name
      }
    },
    async beforeMount () {
      const collections = await firestore.collection('place').doc(this.placeName).collection('boxs').get()
      collections.forEach(async (data) => {
        this.table1.data.push(data.data())
        console.log(this.table1.data)
      })
    }
  }

</script>
<style>

</style>
