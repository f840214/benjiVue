<template>
     <div class="layout">
        <Breadcrumb>
            <Breadcrumb-item href="#">首頁</Breadcrumb-item>
            <Breadcrumb-item href="#">月子中心</Breadcrumb-item>
            <Breadcrumb-item>測試頁</Breadcrumb-item>
        </Breadcrumb>
        <div>
            <button @click="back()">test</button>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    // 返回上一页
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
</style>
