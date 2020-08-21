<template>
  <div class="contact-list__info">
    <form action="" class="edit-contact" v-on:submit.prevent="onSubmit()">
      <div class="edit-contact__row">
        <label>
          <span class="edit-contact__lbl-name">Имя: *</span>
          <input type="text" name="contact-name" class="edit-contact__text-input" v-model="item.name" />
        </label>
      </div>
      <div class="edit-contact__row">
        <label>
          <span class="edit-contact__lbl-name">Телефон:</span>
          <input type="text" name="contact-phone" class="edit-contact__text-input" v-model="item.phone" />
        </label>
      </div>
      <Alert />
      <div class="edit-contact__row">
        <button class="edit-contact__send-btn">Редактировать</button>
      </div>
    </form>
  </div>
</template>

<script>
import Alert from "../Alert/Alert";
export default {
  props: ['item'],
  methods: {
    onSubmit: function () {
      this.$store.dispatch('editContact', this.item);
    }
  },
  components: {
    Alert
  }
}
</script>

<style src="./style.css" >

</style>