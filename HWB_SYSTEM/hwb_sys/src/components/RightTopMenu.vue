<template>
    <v-menu absolute dark>
        <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </template>

        <v-container grid-list-xs>
            <v-row>
                <v-btn color="#6e6e6e" @click="logout" text tile style="background-color:white ;" x-large>登出</v-btn>
            </v-row>
            <v-row>
                <v-btn color="#6e6e6e" @click="report" text tile style="background-color:white ;" x-large>报告</v-btn>
            </v-row>
        </v-container>
    </v-menu>
</template>

<script>
export default {
    name: 'RightTopMenu',
    data: () => ({
        
    }),
    methods: {
        logout() {
            this.$emit('logout')
        },
        report(){
            
        }
    }
}
</script>

<style></style>