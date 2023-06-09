<template>
    <v-card elevation="9" :disabled="loading">
        <v-card-title primary-title>
            桥梁定期检查记录表
        </v-card-title>
        <v-form style="margin: 24px; padding: 12px; overflow: auto; max-height: 50vh;" ref="form" v-model="valid"
            lazy-validation>


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
    name: 'RegularCheckForm',
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