<template>
    <!-- Women Banner Section Begin -->
    <section class="women-banner spad">
        <div class="container-fluid">
            <div class="row" v-if="products.length > 0">
                <div class="col-lg-12 mt-5">
                    <carousel class="product-slider" :margin="25" :nav="false" :autoplay="true" :dots="false">
                        <div class="product-item" v-for="product in products" :key="product.id">
                            <div class="pi-pic">
                                <img :src="product.galleries[0].image" :alt="product.name" />
                                <ul>
                                    <li class="w-icon active">
                                        <a href="#" @click.prevent="$emit('passingCart', product.id, product.name, product.price, product.galleries[0].image)"><i class="icon_bag_alt"></i></a>
                                    </li>
                                    <li class="quick-view"><router-link :to="'/product/' + product.slug">+ Quick View</router-link></li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="catagory-name">Shayna</div>
                                <a href="#">
                                    <h5>{{ product.name }}</h5>
                                </a>
                                <div class="product-price">
                                    {{ product.price | currency }}
                                    <span>$35.00</span>
                                </div>
                            </div>
                        </div>
                    </carousel>
                </div>
            </div>
            <div class="text-center" v-else>Product is not available at this time</div>
        </div>
    </section>
    <!-- Women Banner Section End -->
</template>

<script>
// @ is an alias to /src
import carousel from 'vue-owl-carousel'

export default {
    name: 'Product',
    props: ['products'],
    components: {
        carousel
    },
}
</script>