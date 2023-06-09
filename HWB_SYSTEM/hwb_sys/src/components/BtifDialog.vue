<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="1000px" min-width="1000px">
      <template v-slot:activator="{ on, attrs }">

        <v-btn color="primary" dark v-bind="attrs" v-on="on" block>
          新增技术指标项
        </v-btn>
      </template>
      <BTechIndexForm :bridge="bridge" @close="dialog = false"></BTechIndexForm>
    </v-dialog>
  </v-row>
</template>

<script>
import BTechIndexForm from './BTechIndexForm.vue';
export default {
  name: 'BtifDialog',
  data: () => ({
    dialog: false,
  }),
  props: {
    bridge: {
      immediate: true
    }
  },
  components: {
    BTechIndexForm,
  }
}
</script>

<style></style>