<template>
    <v-dialog v-model="dialog" persistent max-width="1000px" min-width="1000px">
        <template v-slot:activator="{ on, attrs }">

            <v-btn class="mx-2" fab dark color="indigo" v-bind="attrs" v-on="on" fixed right bottom>
                <v-icon dark>
                    mdi-plus
                </v-icon>
            </v-btn>

        </template>
        <BridgeBasicForm @close="dialog = false"></BridgeBasicForm>
    </v-dialog>
</template>

<script>
import BridgeBasicForm from './BridgeBasicForm.vue';
export default {
    name: 'BbfDialog',
    data: () => ({
        dialog: false,
    }),
    components: {
        BridgeBasicForm
    }
}
</script>

<style></style>