<template>
    <v-alert :type="type" :value="alert" transition="scale-transition" dense
        style="z-index: 1000;; position: fixed; left: 50%; top: 0; transform: translate(-50%,100px);">
        <slot></slot>
    </v-alert>
</template>

<script>
export default {
    name: 'Alert',
    props: {
        type: String,
        alert: Boolean
    }
}
</script>

<style scoped>
    *{
        user-select: none;
    }
</style>