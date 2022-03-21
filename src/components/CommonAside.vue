<!--  -->
<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
  >
    <h3 class="title">{{isCollapse? '后台':'通用后台管理系统'}}</h3>
    <!-- 不含子菜单部分 -->
    <el-menu-item
      :index="item.path"
      v-for="item in nosub"
      :key="item.path"
      @click="goTo(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <!-- 含子菜单部分 -->
    <el-submenu :index="item.label" v-for="item in hassub" :key="item.path">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :index="sub.path"
          v-for="sub in item.children"
          :key="sub.path"
          @click="goTo(sub)"
          >{{ sub.label }}</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 62px;
    font-weight: 300;
  }
}
</style>

<script>
export default {
  data() {
    return {
      menu: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  computed: {
    nosub() {
      return this.menu.filter((item) => !item.children);
    },
    hassub() {
      return this.menu.filter((item) => item.children);
    },
    isCollapse() {
      return this.$store.state.menu.isCollapse;
    },
  },
  methods: {
    goTo(item) {
      this.$router.push(item.name);
    },
  },
};
</script>