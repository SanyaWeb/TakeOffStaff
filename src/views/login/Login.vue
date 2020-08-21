<template>
  <form class="auth-form" action="" v-on:submit.prevent="onSubmit">
    <div class="auth-form__row">
      <div class="auth-form__item">
        <label>
          <span class="auth-form__item-name">Логин:</span>
          <input class="auth-form__text-input auth-form__text-input" type="text" name="login" v-model="fields.login" />
        </label>
      </div>
    </div>

    <div class="auth-form__row">
      <div class="auth-form__item">
        <label>
          <span class="auth-form__item-name">Пароль:</span>
          <input class="auth-form__text-input" type="password" name="password" v-model="fields.password" />
        </label>
      </div>
    </div>
    <Alert />
    <div class="auth-form__row">
      <button class="auth-form__send-btn">Войти</button>
    </div>
  </form>
</template>

<script>
import Alert from "./Alert/Alert";

export default {
  computed: {
    fields() {
      return this.$store.state.login.form;
    }
  },
  methods : {
    onSubmit: function () {
      this.$store.dispatch('testAuth', {
        login: this.fields.login,
        password: this.fields.password,
        router: this.$router
      });
    }
  },
  components: {
    Alert
  }
}
</script>


<style src="./style.css" >

</style>

