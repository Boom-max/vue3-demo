<template>
  <div class="status-bar">
    <span class="times">
      {{ nowTime }}
    </span>
    <div class="battery">
      <div
        class="electric-quantity"
        :style="{ width: `${batterys.electricQuantity}%` }"
      >
        <img
          v-show="batterys.ischarge"
          class="lightning"
          src="@image/mobilePhone/battery/inCharge.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Obj } from '@popperjs/core'
import moment from 'moment'
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'

const nowTime = ref<string>(moment().format('HH:mm')) //获取当前的时分
const timer = ref<Function | null>(null)
let batterys = reactive<Object>({
  ischarge: false as Boolean,
  electricQuantity: 0 as Number,
})

onMounted(() => {
  listenBattery()
  timer.value = setInterval(() => {
    nowTime.value = moment().format('HH:mm')
  }, 1000 * 30)
})

onBeforeUnmount(() => {
  timer.value = null
})

// 监听设备电池状态
const listenBattery = () => {
  // charging: 是否在充电
  // chargingTime: 充满电还需要的时间(秒)
  // dischargingTime:  电池剩余可用时间(秒)
  // level: 剩余电量百分比,最大电量就是1
  // onchargingchange:  充电状态改变时触发该监听函数
  // onchargingtimechange:  充满还需时间改变时触发该监听函数
  // ondischargingtimechange:  电池剩余可用时间改变时触发该监听函数
  // onlevelchange:  电量改变时触发该监听函数
  const changeBatterys = (val: Object) => {
    batterys.ischarge = val?.charging
    batterys.electricQuantity = val?.level * 100
  }
  window.navigator.getBattery().then((fn: Object) => {
    changeBatterys(fn as Object)
    fn.onchargingchange = () => {
      changeBatterys(fn as Object)
    }
  })
}
</script>

<style lang="less" scoped>
.status-bar {
  width: 100%;
  padding: 15px 20px 0;
  display: flex;
  align-items: center;
  .times {
    font-size: 14px;
    color: #ffffff;
  }
  .battery {
    width: 24px;
    height: 13px;
    margin-left: auto;
    padding: 1px 2px 1px 1px;
    background-image: url('@image/mobilePhone/battery/default.png');
    position: relative;
    .backGround();
    .electric-quantity {
      height: 100%;
      background: #6bbc86;
      border-radius: 2px;
    }
    .lightning {
      width: 12px;
      height: 12px;
      position: absolute;
      top: 50%;
      left: 52%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
