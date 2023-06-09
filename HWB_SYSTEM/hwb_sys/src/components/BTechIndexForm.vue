<template>
  <v-card elevation="9" :disabled="loading">
    <v-card-title primary-title>
      技术指标
    </v-card-title>
    <v-form style="margin: 24px; padding: 12px; overflow: auto; max-height: 50vh;" ref="form" v-model="valid"
      lazy-validation>

      <v-row>
        <v-col>
          <v-text-field readonly :value="bridge.b_no" label="桥梁编号" outlined :rules="[rules.required]"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field v-model="BTechIndex.b_length" label="桥梁全长(m)" type="number" outlined :rules="[rules.required]"
            clearable></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="BTechIndex.b_width" label="桥面总宽(m)" type="number" outlined :rules="[rules.required]"
            clearable></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="BTechIndex.b_car_width" label="车道宽度(m)" type="number" outlined :rules="[rules.required]"
            clearable></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="BTechIndex.b_man_width" label="人行道宽度(m)" type="number" outlined :rules="[rules.required]"
            clearable></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field v-model="BTechIndex.guard_height" label="护栏或防撞墙高度(m)" type="number" outlined :rules="[rules.required]"
            clearable></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="BTechIndex.center_width" label="中央分隔带宽度(m)" type="number" outlined :rules="[rules.required]"
            clearable></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="BTechIndex.b_standard_clear" label="桥面标准净空(m)" type="number" outlined :rules="[rules.required]"
            clearable></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="BTechIndex.b_actual_clear" label="桥面实际净空(m)" type="number" outlined :rules="[rules.required]"
            clearable></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field v-model="BTechIndex.b_understandard_level" label="桥下通航等级及标准净空(m)" type="number" outlined
            :rules="[rules.required]" clearable></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="BTechIndex.b_underactual_clear" label="桥下实际净空(m)" type="number" outlined :rules="[rules.required]"
            clearable></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="BTechIndex.approach_width" label="引道总宽(m)" type="number" outlined :rules="[rules.required]"
            clearable></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="BTechIndex.approach_radius" label="引道线形或曲线半径(m)" type="number" outlined :rules="[rules.required]"
            clearable></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field v-model="BTechIndex.design_waterlevel" label="设计洪水频率及其水位" outlined :rules="[rules.required]"
            clearable></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="BTechIndex.historical_waterlevel" label="历史洪水位" outlined :rules="[rules.required]"
            clearable></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="BTechIndex.design_peak_acceleration" label="设计地震动峰值加速度系数" type="number" outlined
            :rules="[rules.required]" clearable></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="BTechIndex.max_pan" label="最大跨径(m)" type="number" outlined :rules="[rules.required]"
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
  name: 'BTechIndexForm',
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
      max_pan: ''
    }
  }),
  props: {
    bridge: {
      immediate: true,
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true
        console.log(this.BTechIndex);
        ajax.GET(`/insert/btechindex?${ajax.parseParamString(this.BTechIndex)}`)
          .then(res => {
            this.loading = false
            if(res.code === 1) {
              this.$globalEventBus.$emit('reload_bridge_detail')
              this.$globalEventBus.$emit('show_alert', {type: 'success', message: '添加成功'})
              this.close()
            } else {
              this.$globalEventBus.$emit('show_alert', { type: 'error', message: '添加失败' })
            }
          })
          .catch(reason => {
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
  created() {
    this.BTechIndex.b_no = this.bridge.b_no
  }
}
</script>

<style></style>