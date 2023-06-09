<template>
  <v-card elevation="9" :disabled="loading">
    <v-card-title primary-title>
      桥梁基本状况表
    </v-card-title>
    <v-form style="margin: 24px; padding: 12px; overflow: auto; max-height: 50vh;" ref="form" v-model="valid"
      lazy-validation>

      <v-row>
        <v-col>
          <v-text-field v-model="Bridge.route_no" label="路线编号" outlined :rules="[rules.required]"
            clearable></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="Bridge.route_name" label="路线名称" outlined :rules="[rules.required]"
            clearable></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="Bridge.route_level" label="路线等级" outlined :rules="[rules.required]"
            clearable></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field v-model="Bridge.b_no" label="桥梁编号" outlined :rules="[rules.required]" clearable></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="Bridge.b_name" label="桥梁名称" outlined :rules="[rules.required]" clearable></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="Bridge.b_pile" label="桥位桩号" outlined :rules="[rules.required]" clearable></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-select v-model="Bridge.feature_type" :items="['桥梁', '隧道', '涵洞', '其他']" label="功能类型" outlined
            :rules="[rules.required]" clearable></v-select>
        </v-col>
        <v-col>
          <v-select v-model="Bridge.design_loads" :items="['A级', 'B级', 'C级', 'D级', 'E级']" label="设计荷载" outlined
            :rules="[rules.required]" clearable></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field v-model="Bridge.crossed_name" label="被跨越道路（通道）名称" outlined :rules="[rules.required]"
            clearable></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="Bridge.crossed_pile" label="被跨越道路（通道）桩号" outlined :rules="[rules.required]"
            clearable></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field v-model="Bridge.b_slope" label="桥梁坡度" type="number" outlined :rules="[rules.required]"
            clearable></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="Bridge.b_radius" label="桥梁平曲线半径" type="number" outlined :rules="[rules.required]"
            clearable></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field v-model="Bridge.design_unit" label="设计单位" outlined :rules="[rules.required]"
            clearable></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="Bridge.building_unit" label="施工单位" outlined :rules="[rules.required]"
            clearable></v-text-field>
        </v-col>
        <v-col>
          <v-menu v-model="compl_time_menu" :close-on-content-click="false" :nudge-right="40"
            transition="scale-transition" offset-y min-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="Bridge.compl_time" label="建成时间" outlined :rules="[rules.required]" clearable readonly
                v-bind="attrs" v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="Bridge.compl_time" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="compl_time_menu = false;">
                确定
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field v-model="Bridge.sup_unit" label="监理单位" outlined :rules="[rules.required]"
            clearable></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="Bridge.owner_unit" label="业主单位" outlined :rules="[rules.required]"
            clearable></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="Bridge.custody_unit" label="管养单位" outlined :rules="[rules.required]"
            clearable></v-text-field>
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

  </v-card>
</template>

<script>
import ajax from '@/assets/js/ajax'
export default {
  name: 'BridgeBasicForm',
  data: () => ({
    valid: true,
    loading: false,
    rules: {
      required(value) {
        return !!value || 'Required.'
      },
      number(value) {
        return isNaN(Number(value)) ? 'Required type of number' : true
      }
    },
    compl_time_menu: false,
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
      custody_unit: '',
    }
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true
        ajax.GET('/insert/bridge?' + ajax.parseParamString(this.Bridge))
          .then(res => {
            this.loading = false
            if (res.code == 1) {
              this.$globalEventBus.$emit('show_alert', { type: 'success', message: '添加成功' })
              this.$emit('close')
              this.$refs.form.reset()
              this.$globalEventBus.$emit('get_bridges')
            } else {
              this.$globalEventBus.$emit('show_alert', { type: 'error', message: '添加失败' })
            }
          }).catch(err => {
            this.loading = false
            this.$globalEventBus.$emit('show_alert', { type: 'error', message: '服务器异常' })
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