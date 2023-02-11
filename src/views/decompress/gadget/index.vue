<template>
  <div class="gadget">
    <section class="phone">
      <div class="phone-content-body">
        <div class="today-click-num">今日功德：{{ clickNum }}</div>
        <div id="clickBox" class="click-box">
          <img
            @click="clicker"
            class="clicker"
            src="@image/decompress/gadget/woodfish.jpeg"
            alt=""
          />
        </div>
      </div>
    </section>
  </div> 
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import woodfish from '@/assets/audio/decompress/gadget/woodfish.mp3'

let audios = reactive<Object>({})
const clickNum = ref<Number>(0)

const clicker = () => {
  clickNum.value += 1
  playAudio()
  insertText()
}

// 播放点击时的音效
const playAudio = () => {
  audios = new Audio(woodfish)
  audios.play()
}

// 往dom插入点击时出现的文字效果
const insertText = () => {
  let dom = document.getElementById('clickBox')
  const appendElements = document.createElement('span')
  appendElements.innerHTML = '功德+1'
  appendElements.className = 'virtue'
  dom?.append(appendElements)
  setTimeout(() => {
    const childDom = document.getElementsByClassName('virtue')[0]
    dom?.removeChild(childDom as any)
  }, 1100)
}
</script>

<style lang="less">
@keyframes virtue {
  0% {
    transform: translate(-50%, 0);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -20px);
    opacity: 1;
  }
}
.virtue {
  font-size: 14px;
  font-family: shangshoubaihushufati;
  color: #ffffff;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  animation: virtue 1s linear forwards;
}
</style>

<style lang="less" scoped>
@font-face {
  font-family: 'shangshoubaihushufati';
  src: url('@assets/font/shangshoubaihushufati.ttf');
}
.gadget {
  .phone {
    width: 800px;
    height: 965px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    background: url('@image/decompress/gadget/iphone.png');
    .backGround();
    .phone-content-body {
      width: 385px;
      height: 827px;
      margin-top: 68px;
      background: black;
      position: relative;
      border-radius: 30px;
      .today-click-num {
        margin: 30px;
        font-size: 20px;
        font-family: shangshoubaihushufati;
        color: #ffffff;
      }
      .click-box {
        width: 160px;
        height: 160px;
        position: absolute;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        .flexCenter();
        cursor: pointer;
        &:active {
          .clicker {
            width: 160px;
            height: 160px;
          }
        }

        .clicker {
          width: 150px;
          height: 150px;
        }
      }
    }
  }
}
</style>
