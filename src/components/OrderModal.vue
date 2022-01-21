<template>
  <div
    ref="modal"
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">訂單詳細資訊</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h3>顧客資料</h3>
          <table class="table table-sm" v-if="order.id">
            <tbody>
              <tr>
                <td>姓名</td>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <td>地址</td>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr>
                <td>信箱</td>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <td>電話</td>
                <td>{{ order.user.tel }}</td>
              </tr>
            </tbody>
          </table>
          <h3>訂單資料</h3>
          <table class="table table-sm" v-if="order.id">
            <tbody>
              <tr>
                <td>訂單日期</td>
                <td colspan="2">{{ showDate(order.create_at) }}</td>
              </tr>
              <tr colspan="2">
                <td>訂單狀態</td>
                <td colspan="2">{{ order.is_paid ? "已付款" : "未付款" }}</td>
              </tr>
              <tr>
                <td colspan="3" class="fw-bold">商品</td>
              </tr>
              <tr v-for="(item, i) in order.products" :key="i">
                  <td>{{ item.product.title }}</td>
                  <td>*{{ item.qty }}</td>
                  <td>${{ item.final_total }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-end">總金額：${{ order.total }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  data () {
    return {}
  },
  props: ['order'],
  mounted () {
    this.modal = new Modal(this.$refs.modal, {
      keyboard: false,
      backdrop: 'static'
    })
  },
  methods: {
    openModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    },
    showDate (time) {
      const day = new Date(time * 1000)
      const year = day.getFullYear()
      const month = day.getMonth() + 1
      const date = day.getDate()
      return `${year}/${month}/${date}`
    }
  }
}
</script>
