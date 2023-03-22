<!--
 * @Author: lfan
 * @Date: 2023-03-22 10:22:13
 * @Description: 注册页面
-->
<template>
  <div class="login">
      <div class="login-name">
          总得叫个名字吧
      </div>
      <div class="login-btns">
        <div class="btns-field">
          <!-- 输入手机号，调起手机号键盘 -->
          <van-field class="field" v-model="tel" type="tel" label="手机号" clearable label-width="50" label-class="field-label" maxlength="11" 
          :error-message="telErrMsg" @blur="telBlur" @focus="telFocus"/>
          <!-- 输入密码 -->
          <van-field class="field" v-model="password" type="password" label="密码" clearable label-width="50" label-class="field-label" 
          :error-message="pswordErrMsg" @blur="pswordBlur" @focus="pswordFocus"/>
          <van-field class="field" v-model="passwordConfirm" type="password" label="确认密码" clearable label-width="50" label-class="field-label" 
          :error-message="pswordConErrMsg" @blur="pswordConBlur" @focus="pswordConFocus"/>
        </div>
        <div class="btns-login" @click="handlerLogin">注册</div>
      </div>
  </div>
</template>

<script setup lang="ts" name="login">
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

let tel = ref('')
let password = ref('')
let passwordConfirm = ref('')

let telErrMsg = ref('')
let pswordErrMsg = ref('')
let pswordConErrMsg = ref('')
// 进行手机号码校验
const telBlur = () => {
  telErrMsg.value = ''
   const re = /^1[3,4,5,6,7,8,9][0-9]{9}$/
   let result = re.test(tel.value)
   if(!result){
     telErrMsg.value = '请输入正确的手机号码'
     return false
   }
   return true
}
// 进行密码校验
const pswordBlur = () => {
  pswordErrMsg.value = ''
   if(!password.value){
     pswordErrMsg.value = '请输入密码'
     return false
   }
   return true
}
// 进行确认密码校验
const pswordConBlur = () => {
  pswordConErrMsg.value = ''
   if(!passwordConfirm.value){
     pswordConErrMsg.value = '请再次输入密码确认'
     return false
   }
   return true
}
const telFocus = () => {
  telErrMsg.value = ''
}
const pswordFocus = () => {
  pswordErrMsg.value = ''
}
const pswordConFocus = () => {
  pswordConErrMsg.value = ''
}
// 点击登录按钮
const handlerLogin = () => {
  if(!tel.value && !password.value && !passwordConfirm.value){
    pswordErrMsg.value = '请输入密码'
    telErrMsg.value = '请输入正确的手机号码'
    pswordConErrMsg.value = '请再次输入密码确认'
  }
  if(!telErrMsg.value && !pswordErrMsg.value && !pswordConErrMsg.value && tel.value && password.value && passwordConfirm.value){
    console.log('可以点击了')
  }
}
defineExpose({
  ...toRefs(data)
})

</script>
<style lang='scss'>
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
            width: 264px;
            color: #fff;
            background: var(--theme-color);
            font-size: 16px;
            font-weight: 600;
            padding: 10px 0;
            text-align: center;
            border-radius: 20px;
            margin: auto;

        }

        .btns-field{
          .field{
            width: 264px;
            border-radius: 20px;
            margin-bottom: 20px;
            background: rgba(#fff, 0.5);
            .field-label{
              color: #333;
              font-weight: bold;
            }
          }
        }
    }
}
</style>