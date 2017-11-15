<template>
  <v-ons-page>
    <custom-toolbar title="About" :action="toggleMenu"></custom-toolbar>
    <p style="text-align: center">
      About us
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
