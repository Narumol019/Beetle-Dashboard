<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <link href="//cdn.bootcss.com/pure/0.6.0/pure-min.css" rel="stylesheet">
                <form class="pure-form pure-form-stacked" v-on:submit.prevent="doLogin" id="form">
  <fieldset>
    <legend>Login</legend>

    <label for="username">Username</label>
    <input id="username" v-model="user.username" type="text" placeholder="Username">

    <label for="password">Password</label>
    <input id="password" v-model="user.password" type="password" placeholder="Password">

    <button type="submit" class="pure-button pure-button-primary">Login</button>
    <p v-if="submitData">{{submitData|json}}</p>
  </fieldset>
</form>

            </div>
        </div>
    </div>
</template>

<script src="//cdn.bootcss.com/vue/1.0.11/vue.min.js">
new Vue({
  el: '#form',
  data: {
    user: {
      username: null,
      password: null,
    },
    submitData: null
  },
  methods: {
    doLogin: function() {
      this.submitData = this.user;
    }
  }
});
</script>

<style>

</style>
