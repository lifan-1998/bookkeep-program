<!--
 * @Author: lfan
 * @Date: 2023-03-22 10:22:13
 * @Description: 登录、注册页面
-->
<template>
  <div class="login">
      <div class="login-name">
          总得叫个名字吧
      </div>
      <div class="login-btns">
        <div class="btns-field">
          <van-form ref="loginForm">
              <van-cell-group inset class="form-field">
                <van-field
                 class="field"
                 label-class="field-label" 
                  v-model="form.tel"
                  name="pattern"
                  label="手机号"
                  placeholder="请输入手机号" 
                  maxlength="11"
                  clearable
                  type="tel"
                  :rules="[{ pattern: telPattern, message: '请输入正确的手机号' }]"
                />
                <van-field
                 class="field"
                 label-class="field-label" 
                  v-model="form.password"
                  name="validator"
                  label="密码"
                  placeholder="请输入密码"
                  maxlength="20"
                  clearable
                  type="password"
                  :rules="[{ required: true, message: '请输入密码' }]"
                />
                <van-field
                v-if="!isLogin"
                 class="field"
                 label-class="field-label" 
                  v-model="passwordCon"
                  name="validator"
                  label="确认密码"
                  placeholder="请输入确认密码"
                  maxlength="20"
                  clearable
                  type="password"
                  :rules="[{ validator: passwordConfirm, message: '两次输入密码不相同' }]"
                />
              </van-cell-group>
            </van-form>
        </div>
        <div class="btns-login" @click="handlerLogin">{{ isLogin ? '登录' : '注册' }}</div>
      </div>
  </div>
</template>

<script setup lang="ts" name="login">
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed, toRaw  } from 'vue';
import type { FormInstance } from 'vant';
import { useRoute, useRouter} from 'vue-router'

import {Login} from './api/interface.ts'

const route = useRoute()
const router = useRouter()
let isLogin = ref<Boolean>(false)
onMounted(() => {
  const query = toRaw(route).query.value
  if(query){
    isLogin.value = query.login
  }
})
let passwordCon:string = ref('')
let form = reactive<Login.RepLoginForm>({
  tel: '',
  password: ''
})

// 手机号正则校验
const telPattern = /^1[3,4,5,6,7,8,9][0-9]{9}$/
const loginForm = ref<FormInstance>()
// 点击登录按钮
const handlerLogin = () => {
  loginForm.value?.validate().then(res => {
    console.log('非常棒，验证通过！')
    if(!isLogin.value){
      isLogin.value = true
      form.tel = ''
      form.password = ''
      router.push({
        name: 'login',
        query: {
          login: true
        }
      })
    }else{
      router.push({
        name: 'home',
      })
    }
  }).catch(() => {
    console.log('报错')
  })
}

// 校验确认密码
const passwordConfirm = (val) => {
   if(val && val === form.password){
     return true
   }
   return false
}

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
          .form-field{
            background: unset;
          }
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