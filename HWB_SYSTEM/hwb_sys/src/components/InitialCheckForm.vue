<template>
    <v-card elevation="9" :disabled="loading">
        <v-card-title primary-title>
            桥梁初始检查记录表
        </v-card-title>
        <v-form style="margin: 24px; padding: 12px; overflow: auto; max-height: 50vh;" ref="form" v-model="valid"
            lazy-validation>

            <v-row>
                <v-col>
                    <v-text-field label="公路管理机构名称" outlined :rules="[rules.required]" clearable></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field v-model="route_number" label="1.路线编号" outlined :rules="[rules.required]"
                        clearable></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field v-model="route_name" label="2.路线名称" outlined :rules="[rules.required]"
                        clearable></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field v-model="bridge_pile" label="3.桥位桩号" outlined :rules="[rules.required]"
                        clearable></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field v-model="bridge_number" label="4.桥梁编号" outlined :rules="[rules.required]"
                        clearable></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field v-model="bridge_name" label="5.桥梁名称" outlined :rules="[rules.required]"
                        clearable></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field v-model="crossed_road_name" label="6.被跨越道路(通道)名称" outlined :rules="[rules.required]"
                        clearable></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field v-model="crossed_road_Pile" label="7.被跨越道路(通道)桩号" outlined :rules="[rules.required]"
                        clearable></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field v-model="bridge_length" label="8.桥梁全长" outlined :rules="[rules.required, rules.number]"
                        suffix="m" clearable></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field v-model="maxSpan" label="9.最大跨径" outlined :rules="[rules.required, rules.number]"
                        suffix="m" clearable></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-textarea v-model="upper_lower_tructural_forms" label="10.上、下部结构形式" auto-grow rows="1" outlined
                        :rules="[rules.required]" clearable></v-textarea>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-textarea v-model="bridge_division_and_span_combination" label="11.桥梁分联及跨径组合" auto-grow rows="1"
                        outlined :rules="[rules.required]" clearable></v-textarea>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-textarea v-model="bridge_construction_methods" label="12.桥梁施工方法" auto-grow rows="1" outlined
                        :rules="[rules.required]" clearable></v-textarea>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-textarea v-model="Rework_repair_or_reinforcement_during_new_bridge_construction"
                        label="13.新建桥梁在施工过程中返工、维修或加固情况" auto-grow rows="1" outlined :rules="[rules.required]"
                        clearable></v-textarea>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-textarea v-model="reinforcement_and_retrofit_condition" label="14.加固改造后的桥梁,加固改造情况" auto-grow rows="1"
                        outlined :rules="[rules.required]" clearable></v-textarea>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-textarea v-model="maintenance_and_reinforcement_condition_of_incomplete_archives_bridge"
                        label="15.档案资料不齐全的桥梁,维修加固情况" auto-grow rows="1" outlined :rules="[rules.required]"
                        clearable></v-textarea>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field v-model="design_unit_name" label="16.设计单位名称" outlined :rules="[rules.required]"
                        clearable></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field v-model="construction_unit_name" label="17.施工单位名称" outlined :rules="[rules.required]"
                        clearable></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field v-model="custodial_unit_name" label="18.管养单位名称" outlined :rules="[rules.required]"
                        clearable></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field v-model="delivery_time" label="19.交工时间" outlined :rules="[rules.required]"
                        clearable></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field v-model="initail_check_time" label="20.初始检查时间" outlined :rules="[rules.required]"
                        clearable></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field v-model="climate_and_ambient_temperature_during_initail" label="21.初始检查时的气候和环境温度" outlined
                        :rules="[rules.required]" clearable></v-text-field>
                </v-col>
            </v-row>
        </v-form>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue" text dark class="mr-4" @click="close">
                取消
            </v-btn>

            <v-btn color="rgb(163, 154, 244)" text dark class="mr-4" @click="reset">
                重置
            </v-btn>

            <v-btn :disabled="!valid && loading" color="success" text dark class="mr-4" :loading="loading" @click="submit">
                提交
            </v-btn>
        </v-card-actions>

        <v-overlay :value="overlay.success" style="opacity: 0.9;" opacity="1" dark>
            <v-alert type="success" :value="true" dense>
                提交成功!
            </v-alert>
        </v-overlay>
        <v-overlay :value="overlay.failed" style="opacity: 0.9;" opacity="1" dark>
            <v-alert type="error" :value="true" dense>
                服务器异常!
            </v-alert>
        </v-overlay>
    </v-card>
</template>

<script>
import ajax from '@/assets/js/ajax'
export default {
    name: 'FirstCheckForm',
    data: () => ({
        valid: true,
        loading: false,
        overlay: {
            success: false,
            failed: false
        },
        rules: {
            required(value) {
                return !!value || 'Required.'
            },
            number(value) {
                return isNaN(Number(value)) ? 'Required type of number' : true
            }
        },
    }),
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.loading = true
                ajax.GET('https://api.apiopen.top/api/getShortVideo?page=0&size=100')
                    .then(value => {
                        this.loading = false
                        this.overlay.success = true
                        setTimeout(() => {
                            this.$emit('close')
                            this.overlay.success = false
                        }, 1000);
                    })
                    .catch(reason => {
                        this.loading = false
                        this.overlay.failed = true
                        setTimeout(() => {
                            this.overlay.failed = false
                        }, 1000);
                    })
            }
        },
        reset() {
            this.$refs.form.reset()
        },
        close() {
            this.$emit('close')
        }
    },
}
</script>

<style></style>