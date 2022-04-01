<!--  -->
<template>
  <div>
    <el-button @click="updatePwd()">更改密码</el-button>
  </div>
</template>

<script>
import axios from '@/api/axios';
import QueryString from 'qs';
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    updatePwd(){
      axios.request({method:'post',url:'/api/updatepwd',data:QueryString.stringify({
        oldPwd:'111111',
        newPwd:'111111a',
      })}).then(res=>console.log(res)).catch(err=>console.log(err))
    }
  }
}

</script>
<style lang='scss' scoped>
</style>