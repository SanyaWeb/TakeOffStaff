<template>
  <div class="auth-form__alert" v-if="formAlert.show" :class="'auth-form__alert_'+formAlert.className">
    <span>{{formAlert.text}}</span>
    <img class="auth-form__alert-close" v-on:click="hideAlert" title="Закрыть" :src="require(`@/assets/images/icons/close.svg`)" />
  </div>
</template>


<script>

export default {

  computed: {
    formAlert() {
      return this.$store.state.login.authAlert;
    }
  },
  methods: {
    hideAlert: function () {
      this.$store.dispatch('hideAuthAlert');
    }
  }
}
</script>

<style src="./style.css" >

</style>