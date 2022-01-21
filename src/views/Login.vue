<template>
  <div class="container">
    <div class="row align-items-center"  style="height:100vh">
      <div class="col-4 mx-auto">
        <h1>登入</h1>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          v-model="user.username"
          type="email"
          class="form-control"
          id="email"
          placeholder="name@example.com"
        />
        </div>
        <div class="mb-3">
        <label for="password" class="form-label">PassWord</label>
        <input v-model="user.password" type="password" class="form-control" id="password" />
        </div>
        <button class="btn btn-primary text-end" @click="signIn">Submit</button>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      const api = `${process.env.VUE_APP_API}/admin/signin`
      this.$http
        .post(api, this.user)
        .then((res) => {
          const { token, expired } = res.data
          document.cookie = `hexToken=${token};expires=${new Date(expired)};`
          this.$router.push('/dashboard/products')
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  }
}
</script>
