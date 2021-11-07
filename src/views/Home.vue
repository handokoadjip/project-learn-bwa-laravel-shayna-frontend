<template>
  <div class="home">
    <Hero />
    <Product :products="products" @passingCart="passingCart"/>
    <Instagram />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import Product from '@/components/Product.vue'
import Instagram from '@/components/Instagram.vue'

export default {
  name: 'Home',
  props: ['products'],
  components: {
    Hero,
    Product,
    Instagram
  },
  methods: {
    passingCart(id, name, price, image) {
      this.$emit('addCart', id, name, price, image)
    }
  }
}
</script>
