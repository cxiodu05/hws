<template>
    <v-dialog v-model="dialog" persistent width="300px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn text dark color="error" v-bind="attrs" v-on="on">
                删除
            </v-btn>
        </template>
        <ReConfirmDeleteAlert @close="dialog = false" :type="type" :whereObj="whereObj"></ReConfirmDeleteAlert>
    </v-dialog>
</template>

<script>
import ReConfirmDeleteAlert from './ReConfirmDeleteAlert.vue'
export default {
    name: 'DeleteDialog',
    data: () => ({
        dialog: false
    }),
    props: {
        type: {
            immediate: true
        },
        whereObj: {
            immediate: true
        },
    },
    methods: {
        
    },
    components: {
        ReConfirmDeleteAlert
    }
}
</script>

<style></style>