<template>
    <v-card elevation="5" width="500px" v-show="!show_main" :loading="loading" :disabled="loading">
        <v-card-title primary-title>
            {{ title }}
        </v-card-title>

        <div style="position: absolute; top:-96px; left: 50%; transform: translate(-50%,0);" v-if="alert.error || alert.failed">
            <v-alert type="error" :value="alert.failed" dense>
                用户名或密码错误!
            </v-alert>
            <v-alert type="error" :value="alert.error" dense>
                服务器异常!
            </v-alert>
        </div>

        <v-form style="margin: 24px;" ref="form" v-model="valid" lazy-validation>
            <v-row style="margin: 24px;">
                <v-col>
                    <v-text-field :rules="[rules.required, rules.userLength]" v-model="User.userName" label="账户" outlined
                        clearable></v-text-field>
                </v-col>
            </v-row>
            <v-row style="margin: 24px;">
                <v-col>
                    <v-text-field type="password" :rules="[rules.required, rules.passwordLength]" v-model="User.password"
                        label="密码" outlined clearable></v-text-field>
                </v-col>
            </v-row>
        </v-form>


        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="rgb(163, 154, 244)" x-large text dark @click="reset">重置</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="blue" x-large text dark @click="login" :loading="loading">登录</v-btn>
            <v-spacer></v-spacer>
        </v-card-actions>

    </v-card>
</template>

<script>
import ajax from '@/assets/js/ajax'
export default {
    name: 'UserLogin',
    data: () => ({
        valid: false,
        loading: false,
        title: '身份校验',
        alert: {
            failed: false,
            error: false
        },
        User: {
            userName: 'test',
            password: '12345678'
        },
        rules: {
            required: value => {
                return !!value || 'Required.'
            },
            userLength: value => {
                const regexp = new RegExp('^(.){4,8}$')
                return regexp.test(value) ? true : 'At least 4 and no more than 8 characters.'
            },
            passwordLength: value => {
                const regexp = new RegExp('^(.){8,12}$')
                return regexp.test(value) ? true : 'At least 8 and no more than 12 characters.'
            }
        }
    }),
    props: {
        show_main: {
            immediate: true,
            default: false
        }
    },
    methods: {
        login() {
            if (this.$refs.form.validate()) {
                this.loading = true
                ajax.GET(`/login?${ajax.parseParamString({ user: this.User.userName, password: this.User.password })}`)
                    .then(value => {
                        if (value.code == 1) {
                            this.loading = false
                            this.$emit('show_main')
                        } else {
                            this.alert.failed = true
                            this.loading = false
                            setTimeout(() => {
                                this.alert.failed = false
                            }, 1000);
                        }
                    })
                    .catch(reason => {
                        this.alert.error = true
                        this.loading = false
                        setTimeout(() => {
                            this.alert.error = false
                        }, 1000);
                    })
            }

        },
        reset() {
            this.$refs.form.reset()
        },
    }
}
</script>

<style></style>