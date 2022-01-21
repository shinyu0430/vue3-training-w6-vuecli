<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-5" style="height:100vh;overflow:scroll">
        <Card :product='item' @show-product="showProduct" v-for='item in products' :key='item.id'></Card>
      </div>
      <div class="col-3" >
          <div v-if ="temp.id" >
            <div  >
                <img :src="temp.imageUrl" class="card-img-top">
                <div class="card-body">
                  <div class="card-text">
                    <h3>{{temp.title}}<span class="badge bg-primary">{{temp.category}}</span></h3>
                    <p>商品描述：{{temp.description}}</p>
                    <p>商品內容：{{temp.content}}</p>
                    <p>{{temp.price}} <del class="text-muted ">{{temp.origin_price}}</del> 個/元</p>
                  </div>
                </div>
              </div>
            <div class="d-flex flex-wrap" >
                <img :src="url" alt="" class="w-50 img-fluid" v-for="(url,i) in temp.imagesUrl" :key="i">
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from '@/components/Card.vue'

export default {
  data () {
    return {
      products: [],
      temp: {}
    }
  },
  components: { Card },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/products/all`
      this.$http
        .get(api)
        .then((res) => {
          this.products = res.data.products
          this.temp = res.data.products[0]
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    showProduct (product) {
      this.temp = product
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
