<template>
    <div class="layout">
        <!-- 橫條 先註解起來再看看要不要用-->
        <!-- <div class="layout-header"></div> -->
        <Row type="flex" class="row-flex" style="height: 100%">
            <i-col style="width: 170px;" class="layout-menu-left not-print" >
                <div class="layout-logo-left">
                    <span style="font-size: 24px;color:White">BackEnd</span>
                </div>
                <Menu ref="main-menu" id="main-menu" active-name="1-2" width="auto" >
                    <Menu-item name="" :to="{ path: '/center' }">
                        <Icon type="md-rose"></Icon>
                        <span class="layout-text">首頁拉</span>
                    </Menu-item>
                    <Submenu name="base">
                        <template slot="title">
                            <Icon type="ios-beer"></Icon>
                            基本款
                        </template>
                        <Menu-item name="1-1">选项 1</Menu-item>
                        <Menu-item name="1-2">选项 2</Menu-item>
                    </Submenu>
                    <Submenu name="robot">
                        <template slot="title">
                            <Icon type="ios-game-controller-b"></Icon>
                            機八人
                        </template>
                        <Menu-item name="2-1">选项 1</Menu-item>
                        <Menu-item name="2-2">选项 2</Menu-item>
                    </Submenu>
                    <Menu-item name="think">
                        <Icon type="ios-analytics"></Icon>
                        <span class="layout-text">還在想</span>
                    </Menu-item>
                </Menu>
            </i-col>
            <i-col id="main-content-area">
                <div class="layout-content">
                    <div class="layout-content-main">
                        <router-view ref="mainContent"></router-view>
                    </div>
                </div>
                <div class="layout-copy">
                    2022 &copy; Benji is your God
                </div>
            </i-col>
        </Row>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    jumpPage () {
      console.log('test')
      this.$router.push('/center')
    }
  }
}
</script>

<style scoped>
    #main-content-area {
        width: calc(100% - 170px);
    }
    @media print {
        #main-content-area {
            width: 100%;
        }
        .not-print {
            display: none;
        }
    }
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        height: 100%;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #3c3e3f;
        height: 100%;
    }
    .layout-header{
        height: 60px;
        background: rgb(42, 53, 99);
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 40px;
        background: #9b6912;
        border-radius: 3px;
        margin: 15px auto;
        text-align:center;
    }
    .layout-menu-left.ivu-col.ivu-col-span-5 {
        height: 100%;
    }
    .ivu-menu.ivu-menu-light.ivu-menu-vertical{
        background: #3c3e3f;
        color: rgb(255, 255, 255);
    }
    .ivu-menu-item.ivu-menu-item-active.ivu-menu-item-selected{
        background: #3c3e3f;
        color: rgb(255, 255, 255);
    }
    .ivu-menu-item{
        background: #3c3e3f;
        color: rgb(255, 255, 255);
    }
    #main-menu .ivu-menu-submenu .ivu-menu-item,
    #main-menu .ivu-menu-submenu-has-parent-submenu .ivu-menu-submenu-title {
        padding-top: 7px;
        padding-bottom: 7px;
        padding-right: 0;
    }
    #main-menu .ivu-menu-submenu-has-parent-submenu .ivu-menu-item {
        padding-left: 60px;
    }
</style>
