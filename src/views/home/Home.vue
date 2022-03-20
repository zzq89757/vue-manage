<template>
  <el-row :gutter="20" class="home">
    <el-col span="8">
      <el-card shadow="hover">
        <div class="user">
          <img :src="usrImg" alt="" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="acess">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>
            上次登录时间：<span>{{ lastLoginTime }}</span>
          </p>
          <p>上次登录地点：<span>江苏南京</span></p>
        </div>
      </el-card>
      <el-card style="margin-top: 20px; height: 460px" shadow="hover">
        <el-table :data="tableData">
          <el-table-column prop="name" label="品牌"> </el-table-column>
          <el-table-column prop="todayBuy" label="日销量"> </el-table-column>
          <el-table-column prop="monthBuy" label="月销量"> </el-table-column>
          <el-table-column prop="totalBuy" label="总销量"> </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col span="16">
      <div class="num">
        <el-card
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
          shadow="hover"
        >
          <i
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
            class="icon"
          ></i>
          <div class="detail">
            <p class="num">{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height: 280px" shadow="hover">
        <Echart></Echart>
      </el-card>
      <div class="graph">
        <el-card style="height: 264px" shadow="hover">
          <Echart></Echart>
        </el-card>
        <el-card style="height: 264px" shadow="hover">
          <Echart></Echart>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>


<style lang="less" scoped>
@import "../../assets/less/index.less";
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.user_info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(51, 51, 51, 0.082);
  // width: 400px;
  h2 {
    font-size: 30px;
    font-weight: 400;
  }
  img {
    width: 200px;
    border-radius: 50%;
  }
}
.login_info {
  height: 46px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
<script>
import { getDate } from "../../utils/date";
import axios from "axios";
import Echart from "../../components/Echart.vue";
export default {
  mounted() {
    axios
      .get("/api/home/getData")
      .then((res) => {
        this.tableData = res.data.data.tableData;
        this.orderData = res.data.data.orderData;
        this.userData = res.data.data.userData;
        this.videoData = res.data.data.videoData;
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  },
  data() {
    return {
      usrImg: require("../../assets/images/user.png"),
      //销量表数据
      tableData: [],
      //订单数据
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
      //折线图数据
      orderData:[],
      //柱状图数据
      userData:[],
      //饼图数据
      videoData:[],

    };
  },
  computed: {
    //随机生成上次登录的时间
    lastLoginTime() {
      return getDate(Date.now(), 0);
    },
  },
  components: { Echart },
};
</script>