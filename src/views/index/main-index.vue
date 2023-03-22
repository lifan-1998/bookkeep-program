<template>
  <div :class="$style['main-index']">
    Index
  </div>
</template>

<script setup lang="ts">
import {ref, reactive, onMounted} from "vue"
import {useRouter} from "vue-router"
const a = ref(0)
const touter = useRouter()
const emit = defineEmits([""])
</script>

<style lang="less" module>
 .main-index {
 }
</style>
