<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="d-flex justify-content-between">
          <h2>我的購物車</h2>
          <div class="input-group w-50 ms-auto">
            <input v-model="coupon" type="text" class="form-control" />
            <button
              @click="addCoupon"
              class="btn btn-secondary input-group-text"
              :disabled="!coupon"
            >
              套用優惠碼
            </button>
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>品名</th>
              <th>數量</th>
              <th>單價</th>
              <th>合計</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="cart.carts.length">
              <tr v-for="item in cart.carts" :key="item.id">
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="delCartItem(item.id)"
                  >
                    <i class="fas fa-spinner fa-pulse"></i>
                    移除購物車
                  </button>
                </td>
                <td>
                  {{ item.product.title }}
                  <div class="text-success" v-if="item.coupon">
                    已套用優惠券：{{item.coupon.code}}
                  </div>
                </td>
                <td>
                  <div class="input-group input-group-sm w-50">
                    <input
                      type="number"
                      class="form-control"
                      v-model="item.qty"
                      @change="putCartQty(item)"
                    />
                  </div>
                </td>
                <td>
                  $ {{item.product.price}}
                </td>
                <td>
                  $ {{ item.total }}
                </td>
              </tr>
            </template>
            <template v-else>
              <td colspan="5" class="text-center">購物車目前沒有商品</td>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" class="text-end">總計</td>
              <td class="text-end">$ {{ cart.total }}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="4" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">$ {{ Math.round(cart.final_total) }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2 class="text-center">我的資料</h2>
        <Form ref="form" v-slot="{ errors }" @submit="createOrder">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              rules="email|required"
              v-model="form.user.email"
            ></Field>
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名</label>
            <Field
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              rules="required"
              v-model="form.user.name"
            ></Field>
            <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="tel" class="form-label">收件人電話</label>
            <Field
              id="tel"
              name="電話"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              rules="required"
              v-model="form.user.tel"
            ></Field>
            <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <Field
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              rules="required"
              v-model="form.user.address"
            ></Field>
            <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea
              name="留言"
              id="message"
              class="form-control"
              cols="30"
              rows="6"
              v-model="form.message"
            ></textarea>
          </div>
          <div class="text-end">
            <button
              type="submit"
              class="btn btn-danger"
              :disabled="!cart.carts.length"
            >
              送出訂單
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cart: {
        carts: []
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      coupon: ''
    }
  },
  created () {
    this.getCart()
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/cart`
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.cart = res.data.data
        } else {
          alert('取得商品失敗')
        }
      })
    },
    delCartItem (id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/cart/${id}`
      this.$http
        .delete(url)
        .then((res) => {
          alert(res.data.message)
          this.getCart()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    putCartQty (item) {
      if (item.qty < 1) {
        alert('商品數量不能小於 1')
        item.qty = 1
        return
      }
      const cart = {
        data: {
          product_id: item.id,
          qty: item.qty
        }
      }
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/cart/${item.id}`
      this.$http
        .put(url, cart)
        .then((res) => {
          alert(res.data.message)
          this.getCart()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    // 新增折扣碼
    addCoupon () {
      const url = 'https://vue3-course-api.hexschool.io/v2/api/record-product/coupon'
      const coupon = {
        data: {
          code: this.coupon
        }
      }
      this.$http
        .post(url, coupon)
        .then((res) => {
          alert(res.data.message)
          this.getCart()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    createOrder () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/order`
      const order = { data: this.form }
      this.$http
        .post(url, order)
        .then((res) => {
          alert(res.data.message)
          this.$refs.form.resetForm()
          this.form.message = ''
          this.getCart()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  }
}
</script>
