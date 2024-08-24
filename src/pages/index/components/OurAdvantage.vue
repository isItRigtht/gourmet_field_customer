<script setup lang="ts"></script>

<template>
  <view class="our-advantage">
    <view class="advantage">
      <!-- icon -->
      <uni-icons type="checkmarkempty" color="#54e330" size="18" />
      <text>绿色放心</text>
    </view>
    <view class="advantage">
      <!-- icon -->
      <uni-icons type="location" color="#54e330" size="18" />
      <text>新鲜直达</text>
    </view>
    <view class="advantage">
      <!-- icon -->
      <uni-icons type="eye" color="#54e330" size="18" />
      <text>透明可靠</text>
    </view>
    <view class="advantage">
      <!-- icon -->
      <uni-icons type="vip" color="#54e330" size="18" />
      <text>品质甄选</text>
    </view>
  </view>
</template>

<style scoped lang="scss">
.our-advantage {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  .advantage {
    text-align: center;
    background-color: rgba(215, 215, 207, 0.206);
    text {
      color: rgb(31, 158, 29);
      font-weight: bold;
      font-size: 12px;
    }
  }
}
</style>
