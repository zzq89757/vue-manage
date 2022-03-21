<!--  -->
<template>
  <div>
    <!-- 顶部按钮搜索框 -->
    <div class="top_area">
      <el-button type="primary" icon="el-icon-document-add">新增</el-button>
      <div class="top_right">
        <el-input class="top_input"></el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
    </div>
    <!-- 用户数据表格 -->
    <el-card shadow="hover" style="">
      <el-table style="height:100%" :data="userData">
          <el-table-column prop="id" label="卡号"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="sex" label="性别"></el-table-column>
          <el-table-column prop="age" label="年龄"></el-table-column>
          <el-table-column prop="birth" label="出生日期"></el-table-column>
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
import axios from 'axios';
export default {
  data() {
    return {
      userData:[]
    };
  },
  mounted() {
    axios
      .get('/api/user/getUser')
      .then(res => {this.userData=res.data.list;console.log(this.userData);})
      .catch(err => console.log(err))
      
  },
}

</script>
<style lang='less' scoped>
.top_area {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  .top_right {
    display: flex;
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
.pagination {
  margin-top: 20px;
  float: right;
}
</style>