<template>
  <div class="contact-list__nav-tabs">
    <div class="contact-list__nav-tab"
          v-for="item in items"
          :key="item.ident"
          :class="{'contact-list__nav-tab_active': item.active}"
          v-on:click="setTab(item.ident)"
    >{{item.name}}</div>
  </div>
</template>

<script>

export default {
  computed: {
    items() {
      return this.$store.state.tabItems.items;
    }
  },

  methods: {
    setTab: function (ident) {
      this.$store.dispatch('setTabItem', {ident: ident});
      this.$store.dispatch('hideInsertAlert');
    }
  }
}
</script>

<style src="./style.css" >

</style>