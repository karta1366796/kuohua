<template>
  <div id="nav">
    <router-link to="/">人員列表</router-link> |
    <router-link to="/login">登入驗證</router-link> |
    <router-link to="/file">檔案上傳</router-link> |
    <router-link to="/position">座標截圖</router-link> |
    <router-link to="/configure">ERP對應管理</router-link> |
    <router-link to="/Identify">辨識結果</router-link>
    <span class="account">account1</span>
  </div>

  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 16px;
  text-align: center;
  a {
    font-weight: bold;
    color: #d9e2eb;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  background-color: #9099a2;
}
</style>
