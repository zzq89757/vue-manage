<!--  -->
<template>
  <div>
    <el-input
      v-model="oldPwd"
      type="password"
      placeholder="请输入旧密码"
    ></el-input>
    <el-input
      v-model="newPwd"
      type="password"
      placeholder="请输入新密码"
    ></el-input>
    <el-button @click="updatePwd()">更改密码</el-button>
  </div>
</template>

<script>
import axios from "@/api/axios";
import QueryString from "qs";
import { msg } from "../../utils/message";
import Cookie from 'js-cookie';
export default {
  data() {
    return {
      oldPwd: "",
      newPwd: "",
    };
  },
  methods: {
    updatePwd() {
      // 新旧密码验证
      const Pwd=/^[\S]{6,12}$/;
      if(!Pwd.test(this.oldPwd)||!Pwd.test(this.newPwd)) return msg('请输入6-12位密码')
      axios
        .request({
          method: "post",
          url: "/my/updatepwd",
          data: QueryString.stringify({
            oldPwd: this.oldPwd,
            newPwd: this.newPwd,
          }),
        })
        .then((res) => {console.log(res);
        const type = res.status? 'error':'success';
        msg(res.message,type);
        // 清除cookies 并跳转到登录页
        if(!res.status){
          Cookie.remove('token')
          this.$router.push('/login')
        }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style lang='scss' scoped>
</style>