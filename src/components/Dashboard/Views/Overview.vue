<template>
  <div>
    <!--Stats cards-->
    <div class="row">
      <div
        class="col-lg-4 col-sm-12"
        v-for="stats in statsCards"
        :key="stats.id"
        @click="toTablelist(stats.id)"
      >
        <stats-card>
          <div class="numbers" slot="content">
            {{stats.name}}
            <div class="logo-img">
              <img src="static/img/logo.png" alt>
            </div>
          </div>
        </stats-card>
      </div>
    </div>
     <!-- Loading -->
    <loading :show="loading"></loading>
  </div>
</template>
<script>
import StatsCard from 'components/UIComponents/Cards/StatsCard.vue'
import ChartCard from 'components/UIComponents/Cards/ChartCard.vue'
import API from '../../API/httpCommon'
import Loading from 'vue-full-loading'

export default {
  components: {
    StatsCard,
    ChartCard,
    Loading
  },
  /**
   * Chart data used to render stats, charts. Should be replaced with server data
   */
  data () {
    return {
      places: [],
      statsCards: [],
      loading: false
    }
  },
  methods: {
    toTablelist: function (id) {
      this.$router.push({ path: 'place/' + id })
    }
  },
  async beforeMount () {
    try {
      this.loading = true
      let branches = await API.allBranches()
      this.statsCards = branches.data
      this.loading = false
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
<style>
</style>
