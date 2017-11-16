<template>
  <v-ons-page>
    <custom-toolbar title="Home" :action="toggleMenu"></custom-toolbar>
    <p style="text-align: center">
      Welcome
    </p>

    <v-ons-button @click="openModal">Open modal</v-ons-button>
    <v-ons-button @click="openConfirmDialog">Open confirm dialog</v-ons-button>
    <v-ons-button @click="openDialog">Open dialog</v-ons-button>
    <v-ons-button @click="changePage">Change page</v-ons-button>


    <v-ons-modal :visible="modalVisible" @click="modalVisible = false">
      <p style="text-align: center">
        Loading <v-ons-icon icon="fa-spinner" spin></v-ons-icon>
        <br><br>
        Click to close
      </p>
    </v-ons-modal>

    <v-ons-dialog cancelable :visible.sync="dialogVisible">
      <p style="text-align: center">Lorem ipsum</p>
    </v-ons-dialog>

  </v-ons-page>
</template>

<script type="text/javascript">
import customToolbar from '@/components/CustomToolbar';

export default {
  props: ['toggleMenu', 'auth'],

  components: { customToolbar },

  data() {
    return {
      modalVisible: false,
      dialogVisible: false,
    }
  },

  methods: {
    openModal() {
      this.modalVisible = true;
    },
    openDialog() {
      this.dialogVisible = true;
    },
    openConfirmDialog() {
      this.$ons.notification.confirm('Are you ready?')
    },
    changePage() {
      this.$emit('open-page', 'About')
    }
  }
}
</script>
