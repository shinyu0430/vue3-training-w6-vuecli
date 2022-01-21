<template>
  <div class="container">
    <div class="row">
      <div class="text-end">
      <button class="btn btn-secondary" @click="addProduct">新增產品</button>
      </div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">商品名稱</th>
            <th scope="col">原價</th>
            <th scope="col">售價</th>
            <th scope="col">狀態</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="(item,key,index) in products" :key="item.id">
            <th scope="row">{{index+1}}</th>
            <td>{{item.title}}</td>
            <td>{{item.origin_price}}</td>
            <td>{{item.price}}</td>
            <td>{{item.is_enabled?'啟用':'未啟用'}}</td>
            <td>
              <button class="btn btn-secondary" @click="editProduct (item)">編輯</button>
              <button class="btn btn-danger" @click="delProduct(item.id)">刪除</button>
            </td>
            </tr>
        </tbody>
      </table>
    </div>
    <ProductModal :product="tempProduct" ref="productModal" @get-products="getProducts"></ProductModal>
  </div>
</template>
<script>
import ProductModal from '@/components/ProductModal.vue'

export default {
  data () {
    return {
      products: {},
      tempProduct: {}
    }
  },
  components: { ProductModal },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/admin/products/all`
      this.$http
        .get(api)
        .then((res) => {
          this.products = res.data.products
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
      this.tempProduct = {}
    },
    addProduct () {
      this.tempProduct = {}
      setTimeout(() => { this.$refs.productModal.openModal() }, 0)
    },
    editProduct (item) {
      this.tempProduct = item
      setTimeout(() => { this.$refs.productModal.openModal() }, 0)
    },
    delProduct (id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/admin/product/${id}`
      this.$http
        .delete(api)
        .then((res) => {
          alert(res.data.message)
          this.getProducts()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
