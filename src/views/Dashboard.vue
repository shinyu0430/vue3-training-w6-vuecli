<template>
  <div>
    <div id="nav">
      <h1>後台</h1>
    </div>
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">前台首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/products" class="nav-link"
              >後台產品列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/orders" class="nav-link"
              >後台訂單</router-link
            >
          </li>
          <li class="nav-item">
            <a href="#" @click.prevent="signOut" class="nav-link">登出</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view> </router-view>
  </div>
</template>
<script>
export default {
  methods: {
    signOut () {
      const api = `${process.env.VUE_APP_API}/logout`
      this.$http
        .post(api)
        .then((res) => {
          if (res.data.success) {
            document.cookie = 'hexToken=;expires=;'
            this.$router.push('../login')
          }
        })
        .catch(() => {
          alert('登出失敗')
        })
    }
  },
  created () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    this.$http.defaults.headers.common.Authorization = `${token}`
    const api = `${process.env.VUE_APP_API}/api/user/check`
    this.$http
      .post(api)
      .then().catch((e) => {
        this.$router.push('../login')
      })
  }
}
</script>
