<template>
  <div>
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight">
    </van-nav-bar>
    <van-button block @click="goAbout" type="default">默认按钮</van-button>
    <van-button
      block
      loading-type="spinner"
      :loading="isLoading"
      loading-text="加载中..."
      @click="primaryClick"
      type="primary">
      主要按钮
    </van-button>
    <van-button block type="info">
      信息按钮
    </van-button>
    <van-button block :disabled="disabled" type="warning">警告按钮</van-button>
    <van-button block plain type="primary">主要按钮</van-button>
    <van-button block type="danger">危险按钮</van-button>
    <div class="div cl">杨朝国</div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  @Provide() private name = "typescript";
  @Provide() private disabled = false;
  @Provide() private isLoading = false;

  public onClickLeft() {
    this.disabled = !this.disabled;
  }

  public primaryClick() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

  public goAbout() {
    this.$router.push({
      path: "/about"
    });
  }

  public onClickRight() {
    const data = {
      approval_order_flag: 0,
      approval_status: "",
      member_id: "067BE1779768950003D",
      page_index: 1,
      page_size: 3
    };
    this.$request(
      "/security/v1/common/getApplyOrderList",
      "POST",
      data,
      (ret: any) => {
        console.log(ret);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
</script>

<style scoped lang="less">
.div {
  width: 716px;
  height: 46px;
  color: @white;
  background: @blue;
  font-size: 12px;
  text-align: center;
  line-height: 46px;
}

.div1 {
  width: 9rem;
  height: 46px;
  color: @white;
  background: @blue;
  font-size: 12px;
  text-align: center;
  line-height: 46px;
}
</style>
