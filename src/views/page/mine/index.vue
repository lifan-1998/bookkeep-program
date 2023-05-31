<template>
  <div class="mine">
    <!-- 头部 -->
    <div class="mine-top">
      <div class="main-top-left">
        <img :src="getImgUrl('shezhi.png')" @click="toSetting"/>
      </div>
    </div>
    <!-- 名片 -->
    <div class="mine-info">
      <div class="mine-info-main">
        <!-- 头像 -->
        <div class="info-main-img">
          <van-uploader v-model="fileList" :after-read="afterRead" >
            <img :src="getImgUrl('shezhi.png')"/>
          </van-uploader>
        </div>
        <div class="info-main-name">
          <!-- 昵称 -->
          <div class="name">
            Hi，aya
          </div>
          <!-- 记账时间 -->
          <div class="desc">
            今天是你记账的第33天
          </div>
        </div>
        <div  class="info-main-left">
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    
    <!-- 数据模块 -->
    <div class="mine-modules">
      <div class="mine-modules-data vip">
        <div class="data-title">会员中心</div>
        <div class="data-desc">尊享特别功能</div>
      </div>
      <div class="mine-modules-data help">
        <div class="data-title">帮助中心</div>
        <div class="data-desc">疑难解答这里找</div>
      </div>
    </div>
    <!-- 常用功能 -->
    <div class="mine-usual">
      <div></div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
import {saveUserPic} from '../api/login'
const a = ref(0)
// 获取本地静态文件地址
function getImgUrl(name:string){
  return new URL(`/src/assets/icon/${name}`, import.meta.url).href
}


let fileList = ref([])
// 上传头像接口
const afterRead = (file) => {
  // {".bmp", ".jpg", ".jpeg", ".gif", ".png"};
  let formData = new FormData();
  formData.append("multipartFile",file.file);
  saveUserPic(formData).then(res => {
    console.log(res);
    
  })
  
}

// 去设置
const toSetting = () => {
  
}

</script>

<style lang="scss" scoped>
 .mine {
  width: 100%;

.mine-top {
  height: 70px;
  
  .main-top-left{
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    img {
      width: 30px;

    }

  }
  }

.mine-info {
  height: 120px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 1px 2px 4px #c8c9cc;
  margin: 0 20px;
  .mine-info-main {
    display: flex;
    align-items: center;
    padding: 10px;
    .info-main-img {
      width: 80px;
      img {
        width: 80px;
        border-radius: 80px;

      }
    }

    .info-main-name {    
      flex: 1;
      font-size: 16px;
      .name {
        font-size: 20px;
        font-weight: 600;

      }

      .desc {

      }
    }

    .info-main-left {
      van-icon {

      }
    }
  }

}

  .mine-modules {
    display: flex;
    justify-content: space-between;
    margin: 15px 20px;
    .mine-modules-data {
      padding: 15px 30px;
      box-shadow: 1px 2px 4px #c8c9cc;
      border-radius: 5px;
      background-color: #fff;
      .data-title {
        font-size: 16px;
        font-weight: bold;

      }

      .data-desc {

      }
    }

  }
}
</style>
