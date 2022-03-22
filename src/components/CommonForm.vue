<!-- 用户管理顶部新增用户和搜索模块组件 -->
<template>
  <div>
    <div class="message">
      <div>
        <span>姓名</span>
        <el-input v-model="inputData.name"></el-input>
      </div>
      <div>
        <span>年龄</span>
        <el-input v-model="inputData.age"></el-input>
      </div>
      <div>
        <span>性别</span>
        <el-select v-model="inputData.sex" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div>
        <span>生日</span>
        <el-date-picker
          v-model="inputData.birth"
          type="date"
          placeholder="选择日期"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
      </div>
      <div class="addr">
        <span>住址</span>
        <el-input v-model="inputData.addr"></el-input>
      </div>
    </div>
    <div class="btn_box">
      <el-button type="primary" @click="commitChange()">确认</el-button>
      <el-button @click="emitClose()">取消</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Message } from "element-ui";
export default {
  //   watch: {
  //   inputData: {
  //     deep: true
  //   }
  // },
  data() {
    return {
      birthDate: "",
      options: [
        {
          label: "男",
          value: "男",
        },
        {
          label: "女",
          value: "女",
        },
      ],
    };
  },
  props: {
    inputData: {
      type: Object,
      requied: false,
      default() {
        return {
          id: "",
          name: "",
          age: "",
          birth: "",
          sex: "",
          addr: "",
        };
      },
    },
  },
  methods: {
    //向父组件发射事件以关闭弹窗

    emitClose() {
      this.$emit("emitClose");
    },
    //新增或编辑用户
    commitChange() {
      if (
        Object.values(this.inputData).length < 5 ||
        Object.values(this.inputData).find((item) => item == "") == ""
      ) {
        Message({
          type: "warning",
          message: "用户信息填写不完整",
        });
        return;
      }
      console.log(Object.values(this.inputData).find((item) => item == ""));
      const commitType =
        this.$parent.$refs.dialog.ariaLabel === "编辑用户"
          ? "编辑成功"
          : "添加成功";
      if (commitType === "编辑成功") {

        this.$emit("emitupdate", this.inputData);
      } else {
        this.$emit("emitadd", this.inputData);
      }
      this.emitClose();
      Message({
        type: "success",
        message: commitType,
      });
      if (this.$parent.$refs.dialog.ariaLabel === "编辑用户") {
        axios
          .post("/api/user/edit", this.inputData)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        console.log(this.$parent.$refs.dialog.ariaLabel);
      } else {
        axios
          .post("/api/user/add", this.inputData)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>
<style lang='less' scoped>
.message {
  display: flex;
  flex-wrap: wrap;
  div {
    width: 48%;
    display: flex;
    align-items: center;
    span {
      margin: 20px;
    }
  }
}
.btn_box {
  margin: 4px;
  display: flex;
  justify-content: flex-end;
  button {
    margin: 8px;
  }
}
</style>