<template>
  <v-ons-toolbar>
    <div class="left">
      <v-ons-back-button :on-click="pop">{{ backLabel }}</v-ons-back-button>
    </div>
    <div class="center"><slot></slot></div>
  </v-ons-toolbar>
</template>

<script>
  export default {
    props: ['pop','backLabel']
  }
</script>
