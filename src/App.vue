<template>
  <div id="app">
    <keep-alive><router-view /></keep-alive>
  </div>
</template>

<style>
*{
  padding: 0;
  margin: 0;
}
body{
  min-width: 1320px;
  min-height: 600px;
}
#app {
  height: 100vh;
}
</style>