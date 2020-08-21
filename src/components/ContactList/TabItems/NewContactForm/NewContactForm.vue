<template>
  <div class="contact-list__tab">
    <form action="" class="new-contact" v-on:submit.prevent="onSubmit">
      <div class="new-contact__row">
        <label>
          <span class="new-contact__lbl-name">Имя: *</span>
          <input type="text" name="contact-name" class="new-contact__text-input" v-model="fields.name" />
        </label>
      </div>
      <div class="new-contact__row">
        <label>
          <span class="new-contact__lbl-name">Телефон:</span>
          <input type="text" name="contact-phone" class="new-contact__text-input" v-model="fields.phone" />
        </label>
      </div>
      <Alert />
      <div class="new-contact__row">
        <button class="new-contact__send-btn">Создать</button>
      </div>
    </form>
  </div>
</template>

<script>

import Alert from "./Alert/Alert";

export default {

  computed: {
    fields() {
      return this.$store.state.contactList.insertForm;
    }
  },
  methods: {
    onSubmit: function () {
      this.$store.dispatch('insertContact', this.$router);
    }
  },
  components: {
    Alert
  }
}
</script>


<style src="./style.css" >

</style>