<!--
 * @Description: 
 * @Author: lfan
 * @Date: 2023-03-22 22:46:01
 * @LastEditTime: 2023-03-22 22:46:30
 * @LastEditors:  
-->
<template>
  <div :class="$style['bottom-tab']">
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
 .bottom-tab {
 }
</style>
