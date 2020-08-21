<template>
  <div class="contact-list__tab">
    <FilterForm />
    <template
         v-for="item in items"
         >
      <div v-if="item.show" class="contact-list__item" :key="item.id">
        <component v-bind:is="item.edit?'EditForm':'ContactInfo'" :item="item"></component>
        <div class="contact-list__edit">
          <img class="contact-list__edit-btn" v-on:click="editContact(item.id)" title="Редактировать" :src="require(`@/assets/images/icons/edit.svg`)" />
          <img class="contact-list__delete-btn" v-on:click="deleteContact(item.id)" title="Удалить" :src="require(`@/assets/images/icons/close.svg`)" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Alert from "./Alert/Alert";
import FilterForm from "./FilterForm/FilterForm";
import ContactInfo from "./ContactItem/ContactInfo";
import EditForm from "./ContactItem/EditForm";
export default {
  computed: {
    items() {
      return this.$store.state.contactList.items;
    }
  },
  methods: {
    deleteContact(id) {
      this.$store.dispatch('deleteContact', {id} );
    },
    editContact(id) {
      this.items.forEach((item) => {
        if(item.id === id) {
          item.edit = !item.edit;
        }
      });
    },
    onSubmit: function (id) {

      let thisItem = this.items.filter((item) => {
        return item.id === id;
      });
      this.$store.dispatch('editContact', thisItem[0]);

    }
  },
  mounted() {
    this.$store.dispatch('getContacts', this.$router );
  },
  components: {
    Alert, FilterForm, ContactInfo, EditForm
  }
}
</script>

<style src="./style.css" >

</style>