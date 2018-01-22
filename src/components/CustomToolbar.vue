<template>
  <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button @click="">
        <v-ons-icon icon="fa-user-circle-o"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
    <div class="center">{{ title }}</div>
    <div class="right">
      <v-ons-toolbar-button @click="">
        <v-ons-icon icon="fa-bell"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
  </v-ons-toolbar>
</template>

<script>
export default {
  props: ['title']
}
</script>
