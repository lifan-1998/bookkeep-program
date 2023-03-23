<!--
 * @Author: lfan
 * @Date: 2023-03-23 09:23:22
 * @Description: file content
-->
<template>
  <div :class="$style['main-index']">
    
    <!-- <van-skeleton title avatar :row="3" :loading="loading"> -->
      <div :class="$style['main-index-content']">
        <router-view></router-view>
      </div>
      <BottomTab></BottomTab>
    <!-- </van-skeleton> -->
  </div>
</template>

<script setup lang="ts">
import {ref, reactive, onMounted} from "vue"
import {useRouter} from "vue-router"
import BottomTab from '../../components/bottom-tab.vue'
const a = ref(0)
const touter = useRouter()
const emit = defineEmits([""])
let loading:Boolean = ref(false)
</script>

<style lang="scss" module>
 .main-index {
  //  padding: 20px;
  width: 100vw;
  height: 100vh;
  .main-index-content{
    height: calc(100vh - 42px);
  }
 }
</style>
