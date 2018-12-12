<template>
  <div v-if="loading == false">

    <!-- Detail -->

    <div class="row">
      <div class="col-lg-3 col-md-3">
        <stats-card style="text-align: center">
          <div style="font-size: 150%" slot="header">
            Name
          </div>
          <div slot="content">
            {{name}}
          </div>
        </stats-card>
      </div>

      <div class="col-lg-3 col-md-3">
        <stats-card style="text-align: center">
          <div style="font-size: 150%" slot="header">
            Price
          </div>
          <div slot="content">
            {{price}}
          </div>
        </stats-card>
      </div>

      <div class="col-lg-3 col-md-3">
        <stats-card style="text-align: center">
          <div style="font-size: 150%" slot="header">
            Status
          </div>
          <div slot="content">
            {{status}}
          </div>
        </stats-card>
      </div>

       <div class="col-lg-3 col-md-3">
        <stats-card style="text-align: center">
          <div style="font-size: 150%" slot="header">
            Total income
          </div>
          <div slot="content">
            {{totalincome}}
          </div>
        </stats-card>
      </div>
    </div>

    <!-- button -->

    <div style="margin-bottom: 20px" class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <button @click="openBox" type="button" style="width: 100%" class="btn btn-success">Open a box</button>
      </div>
      <div class="col-md-3"></div>
    </div>

    <!-- Chart -->

    <div class="row">
      <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
        <chart-card :chart-data="chart.data" :chart-options="chart.options">
          <h4 class="title" slot="title">Usage</h4>
        </chart-card>
      </div>
    </div> 

    <!-- Table -->

    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <paper-table :title="table.title" :sub-title="table.subTitle" :data="table.data" :columns="table.columns"/>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import StatsCard from 'components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'components/UIComponents/Cards/ChartCard.vue'
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  import API from '../../API/httpCommon'
  const tableColumns = ['Name', 'Branch', 'Checkin', 'Checkout', 'Price', 'Status']

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
        loading: true,
        data: null,
        name: null,
        branch: null,
        price: null,
        status: null,
        totalincome: null,
        table: {
          columns: [...tableColumns],
          data: []
        },
        chart: {
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
        usage: []
      }
    },
    methods: {
      initialBox: function () {
        let box = this.data[0]
        this.name = box.boxname
        this.branch = box.branch
        this.price = box.boxprice
        this.status = box.boxstatus
      },
      initailChart: function () {
        this.usage.forEach((e, i) => {
          let label = e.checkin.split('T')[0]
          let count = e.totalrows
          this.chart.data.labels[i] = label
          this.chart.data.series[0][i] = count
        })
      },
      openBox: function () {
        microgear.publish('/1/remoteOpen', this.$route.params.id)
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
      let details = await API.boxDetails(this.$route.params.id)
      console.log(details)
      this.data = details.data.details
      this.table.data = details.data.details
      this.usage = details.data.usage
      this.totalincome = details.data.total[0].sum
      this.initialBox()
      this.initailChart()
      this.loading = false
    }
  }

</script>
<style>

</style>
