<!--
 * @Description: 底部切换页tab栏
 * @Author: lfan
 * @Date: 2023-03-22 22:46:01
 * @LastEditTime: 2023-03-23 17:16:26
 * @LastEditors: Please set LastEditors
-->
<template>
  <div class="bottom-tab">
    <div :class="activeIndex === tabIndex ? 'tab tab-active' : 'tab'" v-for="(tab, tabIndex) in tabData" :key="tabIndex" @click="handelerTab(tab, tabIndex)">
      <div class="tab-icon">
        <van-icon name="setting" />
      </div>
      <div class="tab-title">
        {{tab.name}}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive, onMounted} from "vue"
import {useRouter} from "vue-router"

interface TabData {
  name: string
}

const a = ref(0)
const touter = useRouter()
const emit = defineEmits([""])
let activeIndex = ref(0)
const tabData = ref([
  {
    name: '首页'
  },
  {
    name: '数额'
  }
])

// 点击tab栏
const handelerTab = (tab:TabData, tabIndex: number) => {
   activeIndex.value = tabIndex
}
</script>

<style lang="scss">
 .bottom-tab {
    display: flex;
    justify-content: space-between;
   .tab {
     text-align: center;
     margin: auto;
     font-size: 14px;
      .tab-icon {

      }

      .tab-title {

      }
    }
    .tab-active{  
      color: var(--theme-color);
    }
 }
</style>
