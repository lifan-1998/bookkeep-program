<!--
 * @Description: 
 * @Author: lfan
 * @Date: 2023-03-23 20:40:21
 * @LastEditTime: 2023-03-24 16:56:46
 * @LastEditors: Please set LastEditors
-->
<template>
    <div class="home-container">
      <div class="home-container-header">总得叫个名字吧</div>
      <van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh" class="home-container-data">
        <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
        <template #pulling="props">
          <div>下拉刷新</div>
        </template>

        <!-- 释放提示 -->
        <template #loosing>
          <div>释放刷新成功</div>
        </template>

        <!-- 加载提示 -->
        <template #loading>
          <div>加载中...</div>
        </template>
        <div class="container">
          <!-- 头部 -->
          <van-swipe class="my-swipe" indicator-color="white" :loop="false">
            <van-swipe-item>
              <div class="container-header">
                <div class="header-title">
                  本月支出(元)
                </div>
                <div class="header-main">
                  <div class="header-main-num">￥0.00</div>
                  <div><van-icon name="eye-o" /></div>
                </div>
                <div class="header-desc">
                  <div class="header-desc-income">本月收入 <span class="text-bold">0.00</span></div>
                  <div class="header-desc-surplus">月结余 <span class="text-bold">0.00</span></div>
                </div>
              </div>
            </van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
          </van-swipe>
         <!--  -->
         <!-- 按钮 -->
         <div class="container-btn">记一笔</div>
         <!--  -->
         <!-- 账单 -->
         <!--  -->
        </div>
        <!--  -->
      </van-pull-refresh>
    </div>
</template>

<script setup lang="ts">
import {ref, reactive, onMounted} from "vue"
import {useRouter} from "vue-router"
const a = ref(0)
const touter = useRouter()
const emit = defineEmits([""])

let isLoading = ref(false)
const onRefresh = () => {
  setTimeout(() => {
    isLoading.value = false
    
  }, 1000);
}
</script>

<style lang="scss" scoped>
 .home-container {
   width: 100%;
   height: 100%;
   .home-container-header{
     height: 40px;
     background: var(--theme-color);
    //  color: #fff;
     text-align: center;
     font-size: 16px;
    //  font-weight: bold;
     line-height: 40px;
   }
   .home-container-data{
     height: calc(100% - 40px);
     background: var(--theme-color);
     .my-swipe{
       background: var(--theme-color);
       border-radius: 0 0 18px 18px;
     }
     .container{
       background: #fff;
       height: 100%;
      .container-header {
        padding: 10px 10px 20px 10px;
          .header-title {

          }

          .header-main {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 60px;
            font-size: 20px;
            .header-main-num {
              font-weight: bold;

            }

          }

          .header-desc {
            display: flex;
            align-items: center;
            .header-desc-income {
              flex: 1;
            }

            .header-desc-surplus {
              flex: 1;
            }
            .text-bold{
              font-weight: bold;
            }
          }
        }
        .container-btn{
          background: var(--theme-color);
          font-size: 16px;
          text-align: center;
          padding: 10px 0 ;
          margin: 10px;
          border-radius: 16px;
        }
     }
   }
 }
</style>
