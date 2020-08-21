<template>
  <div class="contact-list__filter">
    <input type="text"
           class="contact-list__filter-input"
           v-on:input="onChange" name="filter-contacts"
           v-model="filterWord.text"
           placeholder="Фильтр по имени" />
  </div>
</template>

<script>

export default {
  computed: {
    filterWord() {
      return this.$store.state.contactList.filterWord;
    }
  },
  methods: {
    onChange: function () {
      this.$store.dispatch('changeFilter', this.filterWord.text);
    }
  },
}
</script>

<style src="./style.css" >

</style>