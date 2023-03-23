<!--
 * @Description: 
 * @Author: lfan
 * @Date: 2023-03-23 20:40:21
 * @LastEditTime: 2023-03-23 20:43:00
 * @LastEditors:  
-->
<template>
  <div :class="$style['container']">
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

<style lang="scss" module>
 .container {
 }
</style>
