<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img class="img-fluid" :src="product.imageUrl" :alt="product.title" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
            <span
              class="badge badge-pill badge-secondary bg-secondary"
              >{{ product.category }}</span>
          <h5 class="card-title">{{ product.title}}</h5>
          <p class="card-text">
            <small class="text-muted text-decoration-line-through">${{product.origin_price}}</small>
            <small>${{product.price}}</small>
          </p>
          <button class="btn btn-outline-success btn-sm" @click="addToCart(product.id)">加入購物車</button>
          <button class="btn btn-outline-primary btn-sm" @click="showProduct(product)">查看詳細資訊</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['product'],
  data () {
    return {}
  },
  methods: {
    addToCart (id, qty = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/cart`
      const cart = {
        data: {
          product_id: id,
          qty
        }
      }
      this.$http
        .post(url, cart)
        .then((response) => {
          alert(response.data.message)
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    showProduct (product) {
      this.$emit('showProduct', product)
    }
  }
}
</script>
