<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="1000px" min-width="1000px">
      <template v-slot:activator="{ on, attrs }">

        <v-btn color="primary" dark v-bind="attrs" v-on="on" block>
          新增初始检查表
        </v-btn>
      </template>
      <InitialCheckForm @close="dialog = false"></InitialCheckForm>
    </v-dialog>
  </v-row>
</template>

<script>
import InitialCheckForm from './InitialCheckForm.vue';
export default {
  data: () => ({
    dialog: false,
  }),
  components: {
    InitialCheckForm,
}
}
</script>

<style></style>