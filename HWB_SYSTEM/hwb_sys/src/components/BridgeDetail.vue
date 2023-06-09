<template>
    <v-card elevation="5">
        <v-card-actions style="background-color: aliceblue;">
            <v-btn color="error" text dark @click="back_to_bridge_items" fixed>返回</v-btn>
            <v-spacer></v-spacer>
            <v-card-title primary-title>
                <span style="font-size: 24px; font-weight: 700;">{{ bridge.b_name }}</span>
            </v-card-title>
            <v-spacer></v-spacer>
        </v-card-actions>
        <v-divider></v-divider>

        <v-card-text style="height: 70vh; overflow-y: scroll;" ref="inner">
            <v-card elevation="2" style="margin: 24px; bottom: 24px;" color="#f0f8ff">
                <v-card-title primary-title style="background-color: #d4ebff;">
                    基本信息
                    <v-spacer></v-spacer>
                    <v-btn color="success" dark text @click="updateBridge">应用</v-btn>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-row align="center" justify="center" style="gap: 24px;" no-gutters>
                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBridgeData(key, value)" label="路线编号"
                                :default-value="Bridge.route_no" :required="true" keyName="route_no" />
                        </v-col>
                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBridgeData(key, value)" label="路线名称"
                                :default-value="Bridge.route_name" :required="true" keyName="route_name" />
                        </v-col>
                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBridgeData(key, value)" label="路线等级"
                                :default-value="Bridge.route_level" :required="true" keyName="route_level" />
                        </v-col>
                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBridgeData(key, value)" label="桥梁编号"
                                :default-value="Bridge.b_no" :required="true" keyName="b_no" />
                        </v-col>
                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBridgeData(key, value)" label="桥梁名称"
                                :default-value="Bridge.b_name" :required="true" keyName="b_name" />
                        </v-col>
                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBridgeData(key, value)" label="桥位桩号"
                                :default-value="Bridge.b_pile" :required="true" keyName="b_pile" />
                        </v-col>
                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBridgeData(key, value)" label="桥梁类型"
                                :default-value="Bridge.feature_type" :required="true" keyName="feature_type" />
                        </v-col>
                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBridgeData(key, value)" label="被跨越道路(通道)名称"
                                :default-value="Bridge.crossed_name" :required="true" keyName="crossed_name" />
                        </v-col>
                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBridgeData(key, value)" label="被跨越道路(通道)桩号"
                                :default-value="Bridge.crossed_pile" :required="true" keyName="crossed_pile" />
                        </v-col>
                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBridgeData(key, value)" label="设计荷载"
                                :default-value="Bridge.design_loads" :required="true" keyName="design_loads" />
                        </v-col>
                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBridgeData(key, value)" label="桥梁坡度"
                                :default-value="Bridge.b_slope" :required="true" keyName="b_slope" />
                        </v-col>
                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBridgeData(key, value)" label="桥梁平曲线半径"
                                :default-value="Bridge.b_radius" :required="true" keyName="b_radius" />
                        </v-col>
                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBridgeData(key, value)" label="建成时间"
                                :default-value="Bridge.compl_time" :required="true" keyName="compl_time" />
                        </v-col>
                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBridgeData(key, value)" label="设计单位"
                                :default-value="Bridge.design_unit" :required="true" keyName="design_unit" />
                        </v-col>
                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBridgeData(key, value)" label="施工单位"
                                :default-value="Bridge.building_unit" :required="true" keyName="building_unit" />
                        </v-col>
                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBridgeData(key, value)" label="监理单位"
                                :default-value="Bridge.sup_unit" :required="true" keyName="sup_unit" />
                        </v-col>
                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBridgeData(key, value)" label="业主单位"
                                :default-value="Bridge.owner_unit" :required="true" keyName="owner_unit" />
                        </v-col>
                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBridgeData(key, value)" label="管养单位"
                                :default-value="Bridge.custody_unit" :required="true" keyName="custody_unit" />
                        </v-col>
                    </v-row>

                </v-card-text>


            </v-card>
            <v-card v-if="existBTechIndex" elevation="2" style="margin: 24px; bottom: 24px;" color="#f0f8ff">
                <v-card-title primary-title style="background-color: #d4ebff;">
                    技术指标
                    <v-spacer></v-spacer>
                    <v-btn color="success" text @click="updateBTechIndex">应用</v-btn>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-row align="center" justify="center" style="gap: 24px; margin: 24xp; bottom: 24px;" no-gutters>

                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBTechIndexData(key, value)" label="桥梁编号"
                                :default-value="BTechIndex.b_no" :required="true" keyName="b_no" />
                        </v-col>

                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBTechIndexData(key, value)" label="桥梁全长(m)"
                                :default-value="BTechIndex.b_length" :required="true" keyName="b_length" />
                        </v-col>
                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBTechIndexData(key, value)" label="桥面总宽(m)"
                                :default-value="BTechIndex.b_width" :required="true" keyName="b_width" />
                        </v-col>

                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBTechIndexData(key, value)" label="车道宽度(m)"
                                :default-value="BTechIndex.b_car_width" :required="true" keyName="b_car_width" />
                        </v-col>

                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBTechIndexData(key, value)" label="人行道宽度(m)"
                                :default-value="BTechIndex.b_man_width" :required="true" keyName="b_man_width" />
                        </v-col>

                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBTechIndexData(key, value)" label="护栏或防撞墙高度(m)"
                                :default-value="BTechIndex.guard_height" :required="true" keyName="guard_height" />
                        </v-col>

                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBTechIndexData(key, value)" label="中央分隔带宽度(m)"
                                :default-value="BTechIndex.center_width" :required="true" keyName="center_width" />
                        </v-col>

                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBTechIndexData(key, value)" label="桥面标准净空(m)"
                                :default-value="BTechIndex.b_standard_clear" :required="true" keyName="b_standard_clear" />
                        </v-col>

                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBTechIndexData(key, value)" label="桥面实际净空(m)"
                                :default-value="BTechIndex.b_actual_clear" :required="true" keyName="b_actual_clear" />
                        </v-col>

                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBTechIndexData(key, value)" label="桥下通航等级及标准净空(m)"
                                :default-value="BTechIndex.b_understandard_level" :required="true"
                                keyName="b_understandard_level" />
                        </v-col>

                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBTechIndexData(key, value)" label="桥下实际净空(m)"
                                :default-value="BTechIndex.b_underactual_clear" :required="true"
                                keyName="b_underactual_clear" />
                        </v-col>

                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBTechIndexData(key, value)" label="引道总宽(m)"
                                :default-value="BTechIndex.approach_width" :required="true" keyName="approach_width" />
                        </v-col>

                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBTechIndexData(key, value)" label="引道线形或曲线半径(m)"
                                :default-value="BTechIndex.approach_radius" :required="true" keyName="approach_radius" />
                        </v-col>

                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBTechIndexData(key, value)" label="设计洪水频率及其水位"
                                :default-value="BTechIndex.design_waterlevel" :required="true"
                                keyName="design_waterlevel" />
                        </v-col>

                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBTechIndexData(key, value)" label="历史洪水位"
                                :default-value="BTechIndex.historical_waterlevel" :required="true"
                                keyName="historical_waterlevel" />
                        </v-col>

                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBTechIndexData(key, value)" label="设计地震动峰值加速度系数"
                                :default-value="BTechIndex.design_peak_acceleration" :required="true"
                                keyName="design_peak_acceleration" />
                        </v-col>

                        <v-col cols="auto">
                            <SetableInput @set="(key, value) => compareBTechIndexData(key, value)" label="最大跨径(m)"
                                :default-value="BTechIndex.max_pan" :required="true" keyName="max_pan" />
                        </v-col>
                    </v-row>

                    <v-card elevation="2" style="gap: 24px; margin: 24px; top: 24px;" color="#f0f8ff">
                        <v-card-title primary-title style="background-color: #d4ebff;">
                            桥面高程

                        </v-card-title>
                        <v-row align="center" justify="start" style="margin: 24px;">
                            <v-col cols="auto" v-for="i in BTechIndex.b_elevation" :key="i.lines_no">
                                <SetableInput @set="(key, value) => compareBTechIndexData(key, value)"
                                    :label="`测点${i.lines_no}`" :default-value="i.b_elevation" :required="true"
                                    :deleteable="true" keyName="b_elevation" />
                            </v-col>
                        </v-row>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="success" text>添加</v-btn>
                        </v-card-actions>
                    </v-card>



                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <DeleteDialog type="btechindex" :whereObj="{b_no: BTechIndex.b_no}"></DeleteDialog>
                </v-card-actions>
            </v-card>
            <v-card v-show="false" elevation="2" style="margin: 24px; bottom: 24px;" color="#f0f8ff">
                <v-card-title primary-title>
                    定期检查表
                </v-card-title>
                <v-card-text>
                    ...
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <DeleteDialog></DeleteDialog>
                </v-card-actions>
            </v-card>
        </v-card-text>

        <v-divider></v-divider>
    </v-card>
</template>

<script>
import ajax from '@/assets/js/ajax';
import DeleteDialog from './DeleteDialog.vue';
import SetableInput from './SetableInput.vue';
export default {
    name: 'BridgeDetail',
    data: () => ({
        Bridge: {
            route_no: '',
            route_name: '',
            route_level: '',
            b_no: '',
            b_name: '',
            b_pile: '',
            feature_type: '',
            crossed_name: '',
            crossed_pile: '',
            design_loads: '',
            b_slope: '',
            b_radius: '',
            compl_time: '',
            design_unit: '',
            building_unit: '',
            sup_unit: '',
            owner_unit: '',
            custody_unit: ''
        },
        bridgeSet: {},
        existBTechIndex: false,
        BTechIndex: {
            b_no: '',
            b_length: '',
            b_width: '',
            b_car_width: '',
            b_man_width: '',
            guard_height: '',
            center_width: '',
            b_standard_clear: '',
            b_actual_clear: '',
            b_understandard_level: '',
            b_underactual_clear: '',
            approach_width: '',
            approach_radius: '',
            design_waterlevel: '',
            historical_waterlevel: '',
            design_peak_acceleration: '',
            max_pan: '',
            b_elevation: [
                {
                    b_no: '',
                    lines_no: '',
                    b_elevation: '',
                }
            ]
        },
        bTechIndexSet: {},
    }),
    props: {
        bridge: {
            immediate: true
        },
        scrollTop: {
            immediate: true,
            default: 0
        }
    },
    computed: {

    },
    methods: {
        back_to_bridge_items() {
            this.$emit('back_to_bridge_items')
        },
        compareBridgeData(key, value) {
            if (this.bridgeSet[key] != undefined || this.bridge[key] != value) {
                if (key == 'b_no') return
                this.bridgeSet[key] = value
            }
        },
        compareBTechIndexData(key, value) {
            if (this.bTechIndexSet[key] != undefined || this.BTechIndex[key] != value) {
                if (key == 'b_no') return
                this.bTechIndexSet[key] = value
            }
        },
        updateBridge() {
            this.$globalEventBus.$emit('start_loading')
            ajax.GET('/update/bridge?' + ajax.parseParamString(this.bridgeSet))
                .then(value => {
                    if (value.code == 1) {
                        this.$globalEventBus.$emit('stop_loading')
                        this.$globalEventBus.$emit('show_alert', { type: 'success', message: '更新成功' })
                    } else {
                        this.$globalEventBus.$emit('stop_loading')
                        this.$globalEventBus.$emit('show_alert', { type: 'error', message: '更新失败' })
                    }
                }).catch(reason => {
                    this.$globalEventBus.$emit('stop_loading')
                    this.$globalEventBus.$emit('show_alert', { type: 'error', message: '服务器异常' })
                })
        },
        updateBTechIndex() {
            this.$globalEventBus.$emit('start_loading')
            ajax.GET('/update/btechindex?' + ajax.parseParamString(this.bTechIndexSet))
                .then(value => {
                    if (value.code == 1) {
                        this.$globalEventBus.$emit('stop_loading')
                        this.$globalEventBus.$emit('show_alert', { type: 'success', message: '更新成功' })
                    } else {
                        this.$globalEventBus.$emit('stop_loading')
                        this.$globalEventBus.$emit('show_alert', { type: 'error', message: '更新失败' })
                    }
                }).catch(reason => {
                    this.$globalEventBus.$emit('stop_loading')
                    this.$globalEventBus.$emit('show_alert', { type: 'error', message: '服务器异常' })
                })
        }
    },
    components: {
        DeleteDialog,
        SetableInput
    },
    updated() {
        this.$refs.inner.scrollTop = this.scrollTop
    },
    created() {
        this.bridgeSet.b_no = this.bridge.b_no
        this.bTechIndexSet.b_no = this.bridge.b_no
        this.$globalEventBus.$emit('start_loading')
        //开始获取bridge数据
        ajax.GET('/select/bridge?' + ajax.parseParamString({ b_no: this.bridge.b_no }))
            .then(value => {
                this.$globalEventBus.$emit('stop_loading')
                if (value.code == 1) {
                    //获取到bridge数据
                    this.Bridge = value.data
                    //开始获取btectindex数据
                    ajax.GET('/select/btechindex?' + ajax.parseParamString({ b_no: this.bridge.b_no }))
                        .then(value => {
                            if (value.code == 1) {
                                let bti = value.data.bTechIndex
                                bti.b_elevation = value.data.bElevation
                                this.BTechIndex = bti
                                console.log(this.BTechIndex.b_elevation);
                                this.existBTechIndex = true
                            } else {
                                this.existBTechIndex = false
                            }
                        })
                        .catch(reason => {
                            alert(reason)
                            this.$globalEventBus.$emit('show_alert', { type: 'error', message: '服务器异常' })
                        })
                } else {
                    this.$globalEventBus.$emit('back_to_bridge_items')
                    this.$globalEventBus.$emit('show_alert', { type: 'error', message: '获取失败' })
                    this.$globalEventBus.$emit('get_bridges')
                }

            })
            .catch(reason => {
                this.$globalEventBus.$emit('stop_loading')
                this.$globalEventBus.$emit('show_alert', { type: 'error', message: '服务器异常' })
            })
    }
}
</script>

<style></style>