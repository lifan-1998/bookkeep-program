<!--
 * @Author: lfan
 * @Date: 2023-03-24 17:20:12
 * @Description: 账单组件
-->
<template>
    <div class="bill-page">
        <div>
            <div>近3日账单</div>
            <div>按时间</div>
        </div>
        <div>
            <div>
            <div>3月24日 今天</div>
            <div>支：12.22 收：12.99</div>
            </div>
            <div>
            <div>
                <div>图片</div>
                <div>
                <div>类型</div>
                <div>备注</div>
                </div>
            </div>
            <div>￥12.33</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
/**
* props
*/
const props = defineProps({});
//console.log('1-开始创建组件-setup')
/**
* 数据部分
*/
const data = reactive({})
onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
watchEffect(()=>{
})
// 使用toRefs解构
// let { } = { ...toRefs(data) } 
defineExpose({
  ...toRefs(data)
})

</script>
<style scoped lang='scss'>
</style>