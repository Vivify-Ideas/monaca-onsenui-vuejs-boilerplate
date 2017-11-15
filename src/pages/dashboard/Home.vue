<template>
  <v-ons-page>
    <custom-toolbar title="Home" :action="toggleMenu"></custom-toolbar>
    <p style="text-align: center">
      Welcome home.
    </p>
  </v-ons-page>
</template>

<script type="text/javascript">
import customToolbar from '@/components/CustomToolbar';

export default {
  props: ['toggleMenu'],
  components: { customToolbar }
}
</script>
