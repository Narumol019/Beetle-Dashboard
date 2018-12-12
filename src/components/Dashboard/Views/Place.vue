<template>
  <div v-if="loading == false">

    <!--Stats cards-->

    <div class="row">

      <div class="col-lg-4 col-sm-4">
        <stats-card style="text-align: center">
          <div slot="header">
            Branch
          </div>
          <div slot="content">
            {{branch}}
          </div>
        </stats-card>
      </div>

      <div class="col-lg-4 col-sm-4" v-for="stats in statsCards" :key="stats.title">
        <stats-card style="text-align: center">
          <div slot="header">
            {{stats.title}}
          </div>
          <div slot="content">
            {{stats.value}}
          </div>
        </stats-card>
      </div>

      <div class="col-lg-4 col-sm-4">
        <stats-card style="text-align: center">
          <div slot="header">
            Total income
          </div>
          <div slot="content">
            {{total}}
          </div>
        </stats-card>
      </div>
    </div>

    <!--Charts-->
    <div class="row">
      <div class="col-md-12 ">
        <div class="card" >
          <paper-table style="font-size: 150%" :title="'Box list'" :sub-title="boxes.subTitle" :data="boxes.data" :columns="boxes.columns">
            
          </paper-table>
        </div>
      </div>
    </div> 


    <div class="row">
      <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
        <chart-card :chart-data="usageChart.data" :chart-options="usageChart.options">
          <h4 class="title" slot="title">Usage</h4>
        </chart-card>
      </div>
    </div> 

    <!-- Loading -->
  </div>
</template>
<script>
  import StatsCard from 'components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'components/UIComponents/Cards/ChartCard.vue'
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  import API from '../../API/httpCommon'

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
        boxes: {
          columns: ['Name', 'Price', 'Size', 'Status'],
          data: []
        },
        statsCards: [],
        usageChart: {
          data: {
            labels: [],
            series: [[]]
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: '245px'
          }
        },
        transactions: [],
        loading: true,
        usage: [],
        total: null,
        branch: null
      }
    },
    methods: {
      initialCard: function () {
        let nob = {
          type: 'warning',
          icon: 'ti-server',
          title: 'Number of box',
          value: this.boxes.data.length.toString()
        }
        this.statsCards.push(nob)
      },
      initailChart: function () {
        this.usage.forEach((e, i) => {
          let label = e.checkin.split('T')[0]
          let count = e.totalrows
          this.usageChart.data.labels[i] = label
          this.usageChart.data.series[0][i] = count
        })
      }
    },
    computed: {
      placeName: function () {
        const name = this.$route.params.title
        return name
      }
    },
    async mounted () {
      this.loading = true
      const id = this.$route.params.id
      let branchDetail = await API.branch(id)
      this.boxes.data = branchDetail.data.boxes
      this.usage = branchDetail.data.usage
      this.transactions = branchDetail.data.transactions
      this.total = branchDetail.data.total[0].sum
      this.branch = branchDetail.data.branch[0].name
      this.initialCard()
      this.initailChart()
      this.loading = false
    }
  }

</script>
<style>

</style>
