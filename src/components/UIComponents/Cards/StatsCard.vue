<template>
  <div class="card">
    <div class="content">
      <div class="row">
        <div class="col-xs-12">
          <slot name="header"></slot>
        </div>
        <div class="col-xs-12">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'stats-card'
}
</script>
<style>
</style>
