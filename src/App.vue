<template>
  <div id="app">
    <router-view />
    <van-number-keyboard safe-area-inset-bottom />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class App extends Vue {
}
</script>

<style lang="less" scoped>
</style>
