<template>
  <div class="contact-list">
    <NavTab />
    <div class="contact-list__items">
      <component v-bind:is="tab"></component>
    </div>
  </div>
</template>

<script>

import NavTab from "@/components/ContactList/NavTab/NavTab"
import ContactList from "@/components/ContactList/TabItems/ContactList/ContactList"
import NewContactForm from "@/components/ContactList/TabItems/NewContactForm/NewContactForm"

export default {

  computed: {
    tab() {
      return this.$store.state.tabItems.tabActive;
    }
  },
  components: {
    NavTab, ContactList, NewContactForm
  }

}
</script>

<style src="./style.css" >

</style>