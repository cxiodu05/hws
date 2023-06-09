<template>
    <v-row>
        <v-col>
            <v-card elevation="5" color="#f0f8ff">
                <v-card-title primary-title>
                    <span style="font-size: 24px; font-weight: 700;">{{ bridge.b_name }}</span>
                </v-card-title>

                <v-card-text style="color: black;">
                    <v-divider></v-divider>
                    桥梁编号：{{ bridge.b_no }}<br>
                    <v-divider></v-divider>
                    桥梁类型：{{ bridge.feature_type }}<br>
                    <v-divider></v-divider>
                    路线编号：{{ bridge.route_no }}<br>
                    <v-divider></v-divider>
                    路线名称：{{ bridge.route_name }}<br>
                    <v-divider></v-divider>
                    路线等级：{{ bridge.route_level }}<br>
                    <v-divider></v-divider>
                    桥位桩号：{{ bridge.b_pile }}<br>
                    <v-divider></v-divider>
                    被跨越道路：{{ bridge.crossed_name }}<br>
                    <v-divider></v-divider>
                    被跨越道路桩号：{{ bridge.crossed_pile }}<br>
                    <v-divider></v-divider>
                    建成时间：{{ bridge.compl_time }}<br>
                    <v-divider></v-divider>
                    设计单位：{{ bridge.design_unit }}<br>
                    <v-divider></v-divider>
                    施工单位：{{ bridge.building_unit }}<br>
                    <v-divider></v-divider>
                    监理单位：{{ bridge.sup_unit }}<br>
                    <v-divider></v-divider>
                    业主单位：{{ bridge.owner_unit }}<br>
                    <v-divider></v-divider>
                    管养单位：{{ bridge.custody_unit }}<br>
                    <v-divider></v-divider>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="success" text dark @click="display_detail">查看</v-btn>
                    <v-btn color="blue" text dark @click="display_detail">修改</v-btn>
                    <DeleteDialog type="bridge" :whereObj="{b_no: data.b_no}"></DeleteDialog>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import ajax from '@/assets/js/ajax'
import DeleteDialog from './DeleteDialog.vue'
export default {
    name: 'BridgeItem',
    data: () => ({
        dialog: false,
    }),
    props: {
        data: {
            immediate: true
        }
    },
    computed: {
        bridge() {
            return this.data
        },
    },
    methods: {
        display_detail() {
            this.$emit('load_bridge_detail', this.bridge)
        },
    },
    components: {
        DeleteDialog
    }
}
</script>

<style></style>