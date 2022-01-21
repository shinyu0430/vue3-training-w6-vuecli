<template>
 <div id="productModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
           aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
              <h5 id="productModalLabel" class="modal-title">
                <span>新增產品</span>
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" >
              <div class="row">
                <div class="col-sm-4">
                  <div class="mb-1">
                    <div class="form-group">
                      <label for="imageUrl">輸入圖片網址</label>
                      <input v-model="tempProduct.imageUrl" type="text" class="form-control"
                             placeholder="請輸入圖片連結" >
                    </div>
                    <img class="img-fluid" :src="tempProduct.imageUrl" alt="" referrerpolicy="no-referrer">
                  </div>
                </div>
                <div class="col-sm-8">
                  <div class="form-group">
                    <label for="title">標題</label>
                    <input v-model="tempProduct.title" id="title" type="text" class="form-control" placeholder="請輸入標題">
                  </div>

                  <div class="row">
                    <div class="form-group col-md-6">
                      <label for="category">分類</label>
                      <input v-model="tempProduct.category" id="category" type="text" class="form-control"
                             placeholder="請輸入分類">
                    </div>
                    <div class="form-group col-md-6">
                      <label for="price">單位</label>
                      <input v-model="tempProduct.unit" id="unit" type="text" class="form-control" placeholder="請輸入單位">
                    </div>
                  </div>

                  <div class="row">
                    <div class="form-group col-md-6">
                      <label for="origin_price">原價</label>
                      <input v-model.number="tempProduct.origin_price" id="origin_price" type="number" min="0" class="form-control" placeholder="請輸入原價">
                    </div>
                    <div class="form-group col-md-6">
                      <label for="price">售價</label>
                      <input v-model.number="tempProduct.price" d="price" type="number" min="0" class="form-control"
                             placeholder="請輸入售價">
                    </div>
                  </div>
                  <hr>

                  <div class="form-group">
                    <label for="description">產品描述</label>
                    <textarea v-model="tempProduct.description" id="description" type="text" class="form-control"
                              placeholder="請輸入產品描述">
                    </textarea>
                  </div>
                  <div class="form-group">
                    <label for="content">說明內容</label>
                    <textarea v-model="tempProduct.content" id="content" type="text" class="form-control"
                              placeholder="請輸入說明內容">
                    </textarea>
                  </div>
                  <div class="form-group">
                    <div class="form-check">
                      <input id="is_enabled" class="form-check-input" type="checkbox"
                             :true-value="1" :false-value="0" v-model="tempProduct.is_enabled">
                      <label class="form-check-label" for="is_enabled">是否啟用</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
              </button>
              <button type="button" class="btn btn-primary" @click="addProduct">
                確認
              </button>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  data () {
    return {
      tempId: 'test',
      tempProduct: {}
    }
  },
  props: ['product'],
  mounted () {
    this.modal = new Modal(this.$refs.productModal, {
      keyboard: false,
      backdrop: 'static'
    })
  },
  methods: {
    openModal () {
      this.modal.show()
      this.tempProduct = JSON.parse(JSON.stringify(this.product))
      this.tempId = this.product.id
    },
    hideModal () {
      this.modal.hide()
      this.tempProduct = {}
    },
    addProduct () {
      const data = {
        data: { ...this.tempProduct }
      }
      if (this.tempId) {
        this.$http.put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/admin/product/${this.tempId}`, data)
          .then((res) => {
            alert(res.data.message)
            this.hideModal()
            this.$emit('get-products')
          })
          .catch((err) => {
            alert(err.response.data.message)
          })
      } else {
        this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/admin/product/`, data)
          .then((res) => {
            alert(res.data.message)
            this.hideModal()
            this.$emit('get-products')
          })
          .catch((err) => {
            alert(err.response.data.message)
          })
      }
    }
  }
}
</script>
