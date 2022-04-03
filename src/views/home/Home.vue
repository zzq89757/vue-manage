<template>
  <el-row :gutter="20" class="home">
    <el-col :span="8">
      <el-card shadow="hover">
        <div class="user">
          <img :src="usrImg" alt />
          <div class="userinfo">
            <p class="name">{{ username }}</p>
            <p class="acess">{{userPermission}}</p>
          </div>
        </div>
        <div class="login-info">
          <p>
            上次登录时间：
            <span>{{ lastLoginTime }}</span>
          </p>
          <p>
            上次登录地点：
            <span>江苏南京</span>
          </p>
        </div>
      </el-card>
      <el-card style="margin-top: 20px; height: 460px" shadow="hover">
        <el-table :data="tableData">
          <el-table-column prop="name" label="品牌"></el-table-column>
          <el-table-column prop="todayBuy" label="日销量"></el-table-column>
          <el-table-column prop="monthBuy" label="月销量"></el-table-column>
          <el-table-column prop="totalBuy" label="总销量"></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
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
      <el-card style="height: 280px; padding: 0px" shadow="hover">
        <Echart :chartData="lineData" style="line"></Echart>
      </el-card>
      <div class="graph">
        <el-card style="height: 264px" shadow="hover">
          <Echart :chart-data="userData"></Echart>
        </el-card>
        <el-card style="height: 264px" shadow="hover">
          <Echart :chart-data="videoData"></Echart>
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
.line {
  width: 100%;
}
</style>
<script>
import { getDate } from "@/utils/date";
import axios from "axios";
import a from "@/api/axios";
import Echart from "@/components/Echart.vue";
import { mapState } from "vuex";
export default {
  created() {
    a.request({
      method: "get",
      url: "/my/userinfo",
    })
      .then((res) => {
        this.$store.commit("setUserInfo", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  mounted() {
    axios
      .get("/api/home/getData")
      .then((res) => {
        // console.log(res);
        //获取表格数据
        this.tableData = res.data.data.tableData;

        //获取折线图数据并处理
        let undealData = res.data.data.orderData.data;
        let series = [];
        let Xais = res.data.data.orderData.date;
        //获取各品牌列表
        const brand = Object.keys(undealData[0]);
        //整合各个品牌数据
        brand.forEach((key) => {
          series.push({
            name: key,
            type: "line",
            data: undealData.map((item) => item[key]),
          });
        });
        this.lineData = { Xais, series };

        //处理用户数据
        let uData = res.data.data.userData;
        this.userData = {
          Xais: uData.map((item) => item.date),
          series: [
            {
              name: "新增用户",
              data: uData.map((item) => item.new),
              type: "bar",
            },
            {
              name: "活跃用户",
              data: uData.map((item) => item.active),
              type: "bar",
            },
          ],
        };

        //处理饼图数据
        this.videoData = { series: res.data.data.videoData };
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
      lineData: {},
      //柱状图数据
      userData: {},
      //饼图数据
      videoData: {},
    };
  },
  computed: {
    ...mapState({
      user_info:(state)=>state.user.user_info
    }),
    //随机生成上次登录的时间
    lastLoginTime() {
      return getDate(Date.now(), 0);
    },
    // 获取用户信息
    username() {
      return this.user_info.username;
    },
    userPermission() {
      if(this.user_info.permission) return '超级管理员'
      return '普通用户';
    },
  },
  components: { Echart },
};
</script>