<template>
  <div class="detail">
    <Breadcrumb page="Detail" />
    
    <!-- Product Shop Section Begin -->
    <section class="product-shop spad page-details">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="product-pic-zoom">
                                <img class="product-big-img image-scope" :src="imageProduct" alt=""/>
                            </div>
                            <div class="product-thumbs" v-if="product.galleries">
                                <carousel class="product-thumbs-track ps-slider" :margin="10" :nav="false" :dots="false">
                                    <div class="pt" :class="imageProduct == gallery.image ? 'active' : ''" v-for="gallery in product.galleries" :key="gallery.id">
                                        <img :src="gallery.image" :alt="gallery.image" @click="changeImage(gallery.image)" />
                                    </div>
                                </carousel>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="product-details">
                                <div class="pd-title">
                                    <span>{{ product.type }}</span>
                                    <h3>{{ product.name }}</h3>
                                </div>
                                <div class="pd-desc">
                                    <span v-html="product.description"></span>
                                    <h4>{{ product.price | currency }}</h4>
                                </div>
                                <div class="quantity">
                                    <button type="button" class="primary-btn pd-cart" @click="$emit('addCart', product.id, product.name, product.price, product.galleries[0].image)">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Product Shop Section End -->

    <!-- Related Products Section End -->
    <div class="related-products spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>Related Products</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="product-item">
                        <div class="pi-pic">
                            <img src="@/assets/img/products/women-1.jpg" alt="product.name" />
                            <ul>
                                <li class="w-icon active">
                                    <a href="#"><i class="icon_bag_alt"></i></a>
                                </li>
                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                            </ul>
                        </div>
                        <div class="pi-text">
                            <div class="catagory-name">Coat</div>
                            <a href="#">
                                <h5>Pure Pineapple</h5>
                            </a>
                            <div class="product-price">
                                $14.00
                                <span>$35.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="product-item">
                        <div class="pi-pic">
                            <img src="@/assets/img/products/women-2.jpg" alt="" />
                            <ul>
                                <li class="w-icon active">
                                    <a href="#"><i class="icon_bag_alt"></i></a>
                                </li>
                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                            </ul>
                        </div>
                        <div class="pi-text">
                            <div class="catagory-name">Shoes</div>
                            <a href="#">
                                <h5>Guangzhou sweater</h5>
                            </a>
                            <div class="product-price">
                                $13.00
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="product-item">
                        <div class="pi-pic">
                            <img src="@/assets/img/products/women-3.jpg" alt="" />
                            <ul>
                                <li class="w-icon active">
                                    <a href="#"><i class="icon_bag_alt"></i></a>
                                </li>
                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                            </ul>
                        </div>
                        <div class="pi-text">
                            <div class="catagory-name">Towel</div>
                            <a href="#">
                                <h5>Pure Pineapple</h5>
                            </a>
                            <div class="product-price">
                                $34.00
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="product-item">
                        <div class="pi-pic">
                            <img src="@/assets/img/products/women-4.jpg" alt="" />
                            <ul>
                                <li class="w-icon active">
                                    <a href="#"><i class="icon_bag_alt"></i></a>
                                </li>
                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                            </ul>
                        </div>
                        <div class="pi-text">
                            <div class="catagory-name">Towel</div>
                            <a href="#">
                                <h5>Converse Shoes</h5>
                            </a>
                            <div class="product-price">
                                $34.00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Related Products Section End -->
  </div>
</template>

<script>
// @ is an alias to /src
import carousel from 'vue-owl-carousel'
import Breadcrumb from '@/components/Breadcrumb.vue'
import axios from 'axios'

export default {
    name: 'Detail',
    components: {
        carousel,
        Breadcrumb,
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/products', {
            params: {
                slug: this.$route.params.slug
            }
        })
        .then(response => {
            this.imageProduct = response.data.data.galleries[0].image
            this.product = response.data.data
            })
        .catch(error => {console.log(error)})
    },
    data: function(){
        return {
            imageProduct: '',
            product: {}
        }
    },
    methods: {
        changeImage: function(url){
        this.imageProduct = url;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .image-scope {
        height:600px; 
        object-fit:cover
    }
</style>>