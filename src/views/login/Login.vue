<!--  -->
<template>
  <div class="login">
    <login-card></login-card>
    <bubble-bg></bubble-bg>
  </div>
</template>

<script>
import LoginCard from "./LoginCard.vue";
import BubbleBg from "./BubbleBg.vue";
export default {
    components: { LoginCard, BubbleBg },
};
</script>
<style lang='less' scoped>
html,body{
  height: 100%;
  min-height: 614px;
}
.login {
  position: relative;
}
</style>