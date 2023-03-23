<!--
 * @Author: lfan
 * @Date: 2023-03-22 10:22:13
 * @Description: 注册页面
-->
<template>
  <div class="register">
      <div class="register-name">
          总得叫个名字吧
      </div>
      <div class="register-btns">
        <div class="btns-field">
          <van-form ref="loginForm">
              <van-cell-group inset class="form-field">
                <!-- 通过 pattern 进行正则校验 -->
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
                <!-- 通过 validator 进行函数校验 -->
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
              </van-cell-group>
            </van-form>
        </div>
        <div class="btns-register" @click="handlerLogin">登录</div>
      </div>
  </div>
</template>

<script setup lang="ts" name="register">
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import type { FormInstance } from 'vant';

import {Login} from './api/interface.ts'

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
  }).catch(() => {
    console.log('报错')
  })
}

</script>
<style lang='scss'>
.register{
    width: 100vw;
    height: 100vh;
    background: url('../../assets/bg-img.jpg') no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    .register-name{
        margin-top: 120px;
        writing-mode: vertical-lr;
        font-size: 26px;
        font-weight: bold;
        color: #fff;
    }
    .register-btns {
        position: fixed;
        bottom: 90px;
        text-align: center;
        .btns-register {
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