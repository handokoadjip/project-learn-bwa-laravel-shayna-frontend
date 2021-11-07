<template>
  <div id="app">
    <Header v-if="$route.name !== 'Success'" :carts="carts" :total="total" @deleteCart="deleteCart"/>
    <main>
      <router-view :products="products" :carts="carts" :total="total" :grandTotal="grandTotal" @addCart="addCart" @saveCart="saveCart" @deleteCart="deleteCart" />
    </main>
    <Footer v-if="$route.name !== 'Success'" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import axios from 'axios'

export default {
  components: {
    Header,
    Footer
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/products')
      .then(response => {this.products = response.data.data.data})
      .catch(error => {console.log(error)})
  },
  beforeUpdate() {
    if (localStorage.getItem('carts')) {
      try {
        this.carts = JSON.parse(localStorage.getItem('carts'))
      } catch(e) {
        localStorage.removeItem('carts')
      }
    }
  },
  data: function() {
    return {
      products: [],
      carts: [],
      cart: {},
    }
  },
  methods: {
    addCart(id, name, price, image) {
      this.cart.id = id
      this.cart.name = name
      this.cart.price = price
      this.cart.image = image
  
      this.carts.push(this.cart)
      this.$swal('Product', name + 'successfully added to cart', 'success')
      
      this.saveCart()
    },
    saveCart() {
      const parsed = JSON.stringify(this.carts);
      localStorage.setItem('carts', parsed);
    },
    deleteCart(id, name) {
      this.carts.splice(1, 1);
      
      this.$swal('Product', name + 'successfully deleted from cart', 'success')
      this.saveCart();
    }
  },
  computed: {
    total: function() {
        return this.carts.reduce((total, data) => {
            return total + data.price
        }, 0)
    },
    grandTotal: function() {
        return this.total + (this.total * 10 / 100)
    }
  }
}
</script>

<style>

</style>
