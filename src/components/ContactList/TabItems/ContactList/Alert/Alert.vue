<template>
  <div class="new-contact__alert" v-if="formAlert.show" :class="'new-contact__alert_'+formAlert.className">
    <span>{{formAlert.text}}</span>
    <img class="new-contact__alert-close" v-on:click="hideAlert" title="Закрыть" :src="require(`@/assets/images/icons/close.svg`)" />
  </div>
</template>

<script>

export default {

  computed: {
    formAlert() {
      return this.$store.state.contactList.insertFormAlert;
    }
  },
  methods: {
    hideAlert: function () {
      this.$store.dispatch('hideInsertAlert');
    }
  }
}
</script>

<style src="./style.css" >

</style>