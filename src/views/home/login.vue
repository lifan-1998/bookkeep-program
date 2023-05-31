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
                v-if="!isLogin"
                 class="field"
                 label-class="field-label" 
                  v-model="userName"
                  name="validator"
                  label="用户名"
                  placeholder="请输入用户名"
                  maxlength="20"
                  clearable
                  :rules="[{ required: true, message: '请输入用户名' }]"
                />
                <van-field
                 class="field"
                 label-class="field-label" 
                  v-model="form.phone"
                  name="pattern"
                  label="手机号"
                  placeholder="请输入手机号" 
                  maxlength="11"
                  clearable
                  type="phone"
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
        <div class="btns-register">还没账号？<span class="link" @click="toRegister">点击注册</span></div>
      </div>
  </div>
</template>

<script setup lang="ts" name="login">
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed, toRaw  } from 'vue';
import type { FormInstance } from 'vant';
import { useRoute, useRouter} from 'vue-router'
import {showNotify, showLoadingToast, closeToast } from 'vant'

import {Login} from './api/interface'
import {login, register} from './api/login'

import { useMainStore } from '../../store'

const route = useRoute()
const router = useRouter()
let isLogin = ref<Boolean>(false)
onMounted(() => {
  const query = toRaw(route).query.value
  if(query){
    isLogin.value = query.login
  }
})
let passwordCon = ref('')
let form = reactive<Login.RepLoginForm>({
  phone: '',
  password: ''
})

let userName = ref('')

// 手机号正则校验
const telPattern = /^1[3,4,5,6,7,8,9][0-9]{9}$/
const loginForm = ref<FormInstance>()
// 点击登录按钮
const handlerLogin = () => {
  loginForm.value?.validate().then(res => {
    
    showLoadingToast({
        message: '加载中...',
        forbidClick: true,
      });
    if(!isLogin.value){
      // 注册
      let param = {
        userName: userName.value,
        ...form
      }
            
      register(param).then(res => {
        if(res.code === 200){
          isLogin.value = true
          form.phone = ''
          form.password = ''
          userName.value = ''
          showNotify({ type: 'success', message: res.msg });
          // 将token和用户信息存pinia .$patch 是pinia提供的批量修改数据的方式
          useMainStore().$patch({
            token: res.data.token || '',
            userInfo: res.data.userBasicInfo || {}
          })
          router.push({
            name: 'home',
          })

        }else{
          showNotify({ type: 'warning', message: res.msg });
          
        }
         
      }).catch(err => {
        console.log(err);
        
      }).finally( () => {
        closeToast({
          closeAll: true
        })
      })

    }else{
      // 登录
      login(form).then(res => {
        if(res.code === 200){
          showNotify({ type: 'success', message: res.msg });
          // 将token和用户信息存pinia
          useMainStore().$patch({
            token: res.data.token || '',
            userInfo: res.data.userBasicInfo || {}
          })
          router.push({
            name: 'home',
          })
        }else{
          showNotify({ type: 'warning', message: res.msg });
          
        }
        
      }).catch(err => {
        console.log(err)
      }).finally( () => {
        closeToast({
          closeAll: true
        })
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
// 注册
const toRegister = () => {
  router.push({
    name: 'register',
    query: {
      login: false
    }
  })
  isLogin.value = false
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
        .btns-register {
            margin-top: 15px;
            color: #fff;
            .link {
                color: var(--theme-color);
                text-decoration-line: underline;

            }
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