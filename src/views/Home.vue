<template>
  <div class="home">
    <el-button @click="alert()">按钮</el-button>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      isAlert: false,
    };
  },
  components: {
    HelloWorld,
  },
  methods: {
    alert() {
      this.$message({
        message: "恭喜你，这是一条成功消息",
        type: "success",
      });
      // this.isAlert = true;
    },
  },
};
</script>
