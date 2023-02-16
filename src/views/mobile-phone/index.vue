<template>
  <div class="mobile-phone">
    <section class="phone-box">
      <div class="phone-content-body">
        <StatusBar />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import StatusBar from './status-bar/index.vue'

</script>

<style lang="less" scoped>
@font-face {
  font-family: 'Helvetica';
  src: url('@assets/font/Helvetica.ttc');
}
.mobile-phone {
  * {
    font-family: Helvetica;
    box-sizing: border-box;
  }
  .phone-box {
    width: 440px;
    height: 883px;
    margin-top: 68px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    background: url('@image/mobilePhone/iphone.png');
    .backGround();
    .phone-content-body {
      width: 385px;
      height: 832px;
      margin-top: 25px;
      background-image: url('@image/mobilePhone/bgImage/fangao.jpg');
      position: relative;
      border-radius: 40px;
      .backGround();
    }
  }
}
</style>
