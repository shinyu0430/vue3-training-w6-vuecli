<template>
  <div class="container">
    <div class="row">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">顧客名稱</th>
            <th scope="col">顧客信箱</th>
            <th scope="col">顧客電話</th>
            <th scope="col">顧客地址</th>
            <th scope="col">訂單日期</th>
            <th scope="col">狀態</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in orders" :key="item.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ item.user.name }}</td>
            <td>{{ item.user.email }}</td>
            <td>{{ item.user.tel }}</td>
            <td>{{ item.user.address }}</td>
            <td>{{ item.is_paid?'已付款':'未付款' }}</td>
            <td>{{ showDate(item.create_at * 1000) }}</td>
            <td>
              <button class="btn btn-secondary" @click="tempOrder = item" data-bs-toggle="modal" data-bs-target="#exampleModal">詳細資訊</button>
              <button class="btn btn-danger" @click="delOrder(item.id)">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <OrderModal :order="tempOrder"></OrderModal>
  </div>
</template>
<script>
import OrderModal from '@/components/OrderModal.vue'

export default {
  data () {
    return {
      orders: [],
      tempOrder: {}
    }
  },
  components: { OrderModal },
  methods: {
    getOrders () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/admin/orders`
      this.$http
        .get(api)
        .then((res) => {
          this.orders = res.data.orders
        })
        .catch((err) => {
          alert(err)
        })
    },
    delOrder (id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/admin/order/${id}`
      this.$http
        .delete(url)
        .then((res) => {
          alert(res.data.message)
          this.getOrders()
        })
        .catch(() => {
          alert('刪除失敗')
        })
    },
    showDate (time) {
      const day = new Date(time)
      const year = day.getFullYear()
      const month = day.getMonth() + 1
      const date = day.getDate()
      return `${year}/${month}/${date}`
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
