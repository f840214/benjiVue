<template>
  <div class="size">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.size{
  width: 100%;
  height: 100%;
}
html,
body {
    height: 100%;
    padding: 0;
    margin: 0;
}

.left {
    height: 100vh;
    width: 50%;
    background-color: rgb(91, 91, 255);
    float: left;
}

.right {
    height: 100vh;
    width: 50%;
    background-color: rgb(248, 85, 85);
    float: right;
}
</style>
