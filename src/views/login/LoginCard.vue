<!--  -->
<template>
  <div>
    <div class="login_box"></div>
    <div class="login_box box2"></div>
    <el-card class="card">
      <h3>欢迎使用后台管理系统</h3>
      <el-input v-model="uname"></el-input>
      <el-input
        v-model="password"
        type="password"
        autofocus
        @keyup.enter.native="handleLogin()"
      ></el-input>
      <el-button type="primary" @click="handleLogin()">登录</el-button>
    </el-card>
  </div>
</template>
<script>
import { Message } from "element-ui";
import axios from "axios";
import qs from "qs";
export default {
  name: "LoginCard",
  data() {
    return {
      uname: "test1",
      password: "1111111",
    };
  },
  methods: {
    handleLogin() {
      const nameReg = /^[a-zA-Z0-9]{1,10}$/;
      const pwdReg = /^[\S]{6,12}$/;
      // 简单验证用户名密码格式
      if (!nameReg.test(this.uname)) {
        Message({
          type: "error",
          message: "请输入1-10位由字母和数字组成的用户名",
        });
        return;
      }
      if (!pwdReg.test(this.password)) {
        Message({
          type: "error",
          message: "密码长度不能小于6位",
        });
        return;
      }
      axios
        .post(
          "http://127.0.0.1/api/login",
          qs.stringify({
            username: this.uname,
            password: this.password,
          })
        )
        .then((res) => {
          if (res.data.status === 1) {
            Message({
              type: "error",
              message: res.data.message,
            });
          } else {
            // 登录成功 
            this.$store.commit('setToken',res.data.token);
            Message({
              type: "success",
              message: "登录成功!",
            });
            // console.log(res);
            this.$router.push('home');
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang='less' scoped>
.card {
  width: 580px;
  height: 390px;
  background-color: #fffcfce6;
  outline: none;
  position: absolute;
  top: calc(50% + 195px);
  left: calc(50% - 290px);
  z-index: 1000;
  /deep/ .el-card__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 54px;
    * {
      margin-bottom: 20px;
    }
  }
  h3 {
    color: #409eff;
    font-size: 26px;
    font-weight: 400;
  }
  /deep/ .el-input {
    width: 300px;
    .el-input__inner {
      height: 120px;
      height: 46px;
    }
  }
  button {
    width: 300px;
    height: 46px;
  }
}
.login_box {
  width: 580px;
  height: 390px;
  position: absolute;
  top: calc(50% + 184px);
  left: calc(50% - 276px);
  background-color: rgba(240, 248, 255, 0.294);
  border-radius: 4px;
  z-index: 999;
}
.box2 {
  top: calc(50% + 172px);
  left: calc(50% - 264px);
}
</style>