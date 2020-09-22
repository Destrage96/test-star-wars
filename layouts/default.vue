<template>
  <div class="layout">
    <Layout>
      <Header :style="{width: '100%'}">
        <div class="layout-logo">
          <span>Star Wars Search</span>
        </div>
      </Header>
      <Content :style="{margin: '20px', padding: '20px', background: '#fff'}">
        <nuxt/>
      </Content>
      <Footer class="layout-footer-center">2020 - {{ year }} &copy; Anna Sergeeva</Footer>
    </Layout>
  </div>
</template>


<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    }
  },
}
</script>

<style lang="less">
@import '~assets/css/main';

.layout {
  height: 100%;
  background: #f5f7f9;
  position: relative;
  overflow: hidden;

  .ivu-layout-header {
    background-color: #2d2c2c;

    .layout-logo {
      width: 150px;
      height: 30px;
      padding-top: 7px;
      line-height: 25px;
      color: yellow;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
    }
  }

  .layout-content {
    height: 100%;
    padding: 20px;
  }

  .layout-footer-center {
    text-align: center;
    background-color: #2d2c2c;
  }
}
</style>

