<template>
  <div>
    <div class="header">
      <slot name="header">
        <h4 class="title">{{title}}</h4>
        <p class="category">{{subTitle}}</p>
      </slot>
    </div>
    <div class="content table-responsive table-full-width">
      <table class="table" :class="tableClass">
        <thead>
          <th style="text-align: center;" v-for="column in columns" :key="column.column">{{column}}</th>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.data">
            <td @click="toBoxDetail(item.id)" style="text-align: center;" v-for="column in columns" v-if="hasValue(item, column)" :key="column.colums">{{itemValue(item, column)}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      columns: Array,
      data: Array,
      type: {
        type: String, // striped | hover
        default: 'Striped'
      },
      title: {
        type: String,
        default: ''
      },
      subTitle: {
        type: String,
        default: ''

      }
    },
    computed: {
      tableClass () {
        return `table-${this.type}`
      }
    },
    methods: {
      hasValue (item, column) {
        return item[column.toLowerCase()] !== 'undefined'
      },
      itemValue (item, column) {
        return item[column.toLowerCase()]
      },
      toBoxDetail: function (boxid) {
        this.$router.push({path: '/admin/boxes/' + boxid})
      }
    }
  }

</script>
<style>

</style>
