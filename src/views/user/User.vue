<!--  -->
<template>
  <div>
    <!-- 顶部新增按钮及搜索框 -->
    <div class="top_area">
      <el-button
        type="primary"
        icon="el-icon-document-add"
        @click="handleCreate()"
        >新增</el-button
      >
      <div class="top_right">
        <el-input class="top_input"></el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
    </div>
    <!-- dialog弹窗 -->
    <el-dialog :visible.sync="isShow" :title="dialogMethod" :closeOnClickModal="false"
      ><CommonForm
        @emitClose="handleClose"
        @emitupdate="updated"
        @emitadd="add"
        :inputData="userMessage"
      ></CommonForm
    ></el-dialog>
    <!-- 用户数据表格 -->
    <el-card shadow="hover" style="">
      <el-table style="height: 100%" :data="userData">
        <el-table-column prop="id" label="卡号"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="sex" label="性别"></el-table-column>
        <el-table-column prop="age" label="年龄"></el-table-column>
        <el-table-column prop="birth" label="出生日期"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
        <el-table-column prop="addr" label="住址"></el-table-column>
      </el-table>
    </el-card>
    <!-- 底部分页器 -->
    <div class="pagination">
      <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CommonForm from "../../components/CommonForm.vue";
import { MessageBox, Message } from "element-ui";
export default {
  data() {
    return {
      userData: [],
      isShow: false,
      dialogMethod: "添加用户",
      userMessage: {},
      cur:0
    };
  },
  mounted() {
    axios
      .get("/api/user/getUser")
      .then((res) => {
        this.userData = res.data.list;
        console.log(this.userData);
      })
      .catch((err) => console.log(err));
  },
  components: { CommonForm },
  methods: {
    handleEdit(index, row) {
      this.dialogMethod = "编辑用户";
      this.userMessage = {...row};
      this.isShow = true;
      this.cur = index;
    },
    handleDelete(index, row) {
      MessageBox.confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        closeOnClickModal:false,
        center: true,
      })
        .then(() => {
          Message({
            type: "success",
            message: "删除成功!",
          });
          this.userData.splice(index,1);
          console.log('deleted');
        })
        .catch(() => {
          Message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    handleClose() {
      this.isShow = false;
    },
    handleCreate() {
      this.dialogMethod = "新增用户";
      this.userMessage = {};
      this.isShow = true;
    },
    add(data){
      this.userData.unshift(data);
    },
    updated(data,index){
      console.log(index);
    },
  },
};
</script>
<style lang='less' scoped>
.top_area {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  .top_right {
    display: flex;
    align-items: center;
    button {
      margin-left: 20px;
    }
  }
  button {
    width: 88px;
    height: 42px;
  }
  .top_input {
    width: 200px;
  }
}
.el-pagination {
  margin: 24px;
  display: flex;
  justify-content: flex-end;
}
</style>