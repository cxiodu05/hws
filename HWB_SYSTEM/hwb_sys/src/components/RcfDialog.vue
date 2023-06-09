<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="1000px" min-width="1000px">
            <template v-slot:activator="{ on, attrs }">

                <v-btn color="primary" dark v-bind="attrs" v-on="on" block>
                    新增定期检查表
                </v-btn>
            </template>
            <RegularCheckForm @close="dialog = false"></RegularCheckForm>
        </v-dialog>
    </v-row>
</template>
  
<script>
import RegularCheckForm from './RegularCheckForm.vue';
export default {
    name: 'RcfDialog',
    data: () => ({
        dialog: false,
    }),
    components: {
        RegularCheckForm
    }
}
</script>
  
<style></style>