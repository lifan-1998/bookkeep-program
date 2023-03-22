<!--
 * @Author: lfan
 * @Date: 2023-03-21 20:47:10
 * @Description: 首页
-->
<template>
  <div class="login">
      <div class="login-name">
          总得叫个名字吧
      </div>
      <div class="login-btns">
        <div class="btns-login" @click="toLogin">登录</div>
        <div class="btns-register">还没账号？<span class="link">点击注册</span></div>
      </div>
  </div>
</template>

<script setup lang="ts" name="login">
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import {useRouter} from 'vue-router'
/**
* props
*/
const props = defineProps({});
//console.log('1-开始创建组件-setup')
/**
* 数据部分
*/
const data = reactive({})
const router = useRouter()
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

const toLogin = () => {
  console.log('点击我了')
  router.push({
    name: 'login'
  })
}

</script>
<style scoped lang='scss'>
.login{
    width: 100vw;
    height: 100vh;
    background: url('../../assets/bg-img.jpg') no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    .login-name{
        margin-top: 120px;
        writing-mode: vertical-lr;
        font-size: 26px;
        font-weight: bold;
        color: #fff;
    }
    .login-btns {
        position: fixed;
        bottom: 90px;
        text-align: center;
        .btns-login {
            width: 220px;
            color: #fff;
            background: var(--theme-color);
            font-size: 16px;
            font-weight: 600;
            padding: 10px 0;
            text-align: center;
            border-radius: 20px;

        }

        .btns-register {
            margin-top: 15px;
            color: #fff;
            .link {
                color: var(--theme-color);
                text-decoration-line: underline;

            }
        }
    }
}
</style>