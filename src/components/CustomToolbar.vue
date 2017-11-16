<template>
  <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button @click="action">
        <v-ons-icon icon="md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
    <div class="center">{{ title }}</div>
  </v-ons-toolbar>
</template>

<script>
export default {
  props: ['title', 'action']
}
</script>
