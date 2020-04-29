<template>
  <div class="home">
    <hello-world></hello-world>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import HelloWorld from "../components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  @Provide() private name = "yzg";
}
</script>
