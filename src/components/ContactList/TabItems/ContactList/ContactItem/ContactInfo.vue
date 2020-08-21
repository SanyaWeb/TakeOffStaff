<template>
  <div class="contact-list__info">
    <span class="contact-list__item-name">{{item.name}}</span>
    <span class="contact-list__item-phone">{{item.phone || "Телефон не указан"}}</span>
  </div>
</template>

<script>
export default {
  props: ['item'],
}
</script>

<style src="./style.css" >

</style>