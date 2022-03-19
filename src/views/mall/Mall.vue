<!--  -->
<template>
  <div>
    <Echart></Echart>
    <Echart :chartOption="video"></Echart>
  </div>
</template>

<script>
import Echart from "@/components/Echart";
export default {
  data() {
    return {
    };
  },

  components: { Echart },

  computed: {},

  mounted: {},

  methods: {},
};
</script>
<style lang='scss' scoped>
</style>