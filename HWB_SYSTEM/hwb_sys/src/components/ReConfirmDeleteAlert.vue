<template>
    <v-card :disabled="loading">
        <v-card-title class="text-h5">
            确认删除?
        </v-card-title>
        <v-card-text>本次操作不可撤销</v-card-text>
        <v-card-actions>
            <v-btn color="blue" text dark @click="close">
                取消
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="error" text dark @click="deleteSomething(type, whereObj)" :loading="loading">
                删除
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import ajax from '@/assets/js/ajax'
import Alert from './Alert.vue'
export default {
    name: 'ReConfirmDeleteAlert',
    data: () => ({
        dialog: false,
        loading: false,
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
        close() {
            this.$emit('close')
        },
        deleteSomething(type, whereObj) {
            ajax.GET(`/delete/${type}?${ajax.parseParamString(whereObj)}`)
                .then(res => {
                    if (res.code == 1) {
                        this.$globalEventBus.$emit('show_alert', { type: 'success', message: '删除成功' })
                        setTimeout(() => {
                            this.$globalEventBus.$emit('get_bridges')
                            this.$globalEventBus.$emit('reload_bridge_detail')
                        }, 500);
                        this.$emit('close')

                    } else {
                        this.$globalEventBus.$emit('show_alert', { type: 'error', message: '删除失败' })
                        setTimeout(() => {
                            this.$globalEventBus.$emit('get_bridges')
                        }, 500);
                        this.$emit('close')
                    }
                })
                .catch(err => {
                    this.$globalEventBus.$emit('show_alert', { type: 'error', message: '服务器异常' })
                    this.$emit('close')
                })
        }
    },
    components: {
        Alert
    }
}
</script>

<style></style>