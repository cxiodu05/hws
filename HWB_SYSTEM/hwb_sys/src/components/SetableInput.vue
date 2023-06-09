<template>
  <v-card elevation="2" style="background: #f6fbff;">
    <v-card-title primary-title>
      {{ label }}
      <v-spacer></v-spacer>
    </v-card-title>
    <v-container>
      <v-row dense>
        <v-form ref="form" lazy-validation>
          <v-text-field v-model="value" outlined dense :ref="keyName"
              :rules="[required ? value => !!value || 'Required' : value => true]" :disabled="disabled"></v-text-field>
        </v-form>
          
      </v-row>
      <v-row dense>
        <v-btn v-if="deleteable && disabled" color="error" text @click="remove">删除</v-btn>
        <v-spacer v-if="disabled"></v-spacer>
        <v-btn v-if="disabled" color="primary" text @click="change">修改</v-btn>
        <v-btn v-if="!disabled" color="error" text @click="cancel">取消</v-btn>
        <v-spacer v-if="!disabled"></v-spacer>
        <v-btn v-if="!disabled" color="rgb(163, 154, 244)" text @click="set">设置</v-btn>
      </v-row>

    </v-container>
  </v-card>
  
</template>

<script>
export default {
  name: 'SetableInput',
  data: () => ({
    value: '',
    oldValue: '',
    disabled: true,
  }),
  props: {
    label: {
      type: String,
      immediate: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    keyName: {
      type: String,
      immediate: true,
    },
    defaultValue: {
      immediate: true,
    },
    deleteable: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    defaultValue(newValue) {
      this.value = newValue
      this.oldValue = newValue
    }
  },
  methods: {
    change() {
      this.disabled = false
      setTimeout(() => {
      this.$refs[this.keyName].focus()

      }, 100);
    },
    cancel() {
      this.disabled = true
      this.value = this.oldValue
    },
    set() {
      if (this.$refs.form.validate()) {
        this.oldValue = this.value
        this.disabled = true
        this.$emit('set', this.keyName, this.value)
      }
    },
    remove() {
      
    }
  },
  mounted() {
    this.value = this.defaultValue
    this.oldValue = this.defaultValue
  }
}
</script>

<style></style>