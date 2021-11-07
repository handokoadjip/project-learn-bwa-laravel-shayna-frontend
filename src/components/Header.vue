<template>
    <!-- Header Section Begin -->
    <header class="header-section">
        <div class="header-top">
            <div class="container">
                <div class="ht-left">
                    <div class="mail-service">
                        <i class=" fa fa-envelope"></i> hello.shayna@gmail.com
                    </div>
                    <div class="phone-service">
                        <i class=" fa fa-phone"></i> +628 22081996
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="inner-header">
                <div class="row">
                    <div class="col-lg-2 col-md-2">
                        <div class="logo">
                            <router-link to="/">
                                <img src="@/assets/img/logo_website_shayna.png" alt="" />
                            </router-link>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-7"></div>
                    <div class="col-lg-3 text-right col-md-3">
                        <ul class="nav-right">
                            <li class="cart-icon">
                                Keranjang Belanja &nbsp;
                                <a href="#" class="ml-2">
                                    <i class="icon_bag_alt"></i>
                                    <span>{{ carts.length }}</span>
                                </a>
                                <div class="cart-hover">
                                    <div class="select-items">
                                        <table>
                                            <tbody v-if="carts.length > 0">
                                                <tr v-for="(cart, id) in carts" :key="cart.id">
                                                    <td class="si-pic">
                                                        <img class="image-scope" :src="cart.image" :alt="cart.name" />
                                                    </td>
                                                    <td class="si-text">
                                                        <div class="product-selected">
                                                            <p>{{ cart.price | currency }} x 1</p>
                                                            <h6>{{ cart.name }}</h6>
                                                        </div>
                                                    </td>
                                                    <td class="si-close" @click="$emit('deleteCart', id, cart.name)">
                                                        <i class="ti-close"></i>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tbody v-else>
                                                <tr >
                                                    <td class="text-center">Cart's empty</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="select-total">
                                        <span>total:</span>
                                        <h5>{{ total | currency }}</h5>
                                    </div>
                                    <div class="select-button">
                                        <!-- <a href="#" class="primary-btn view-card">VIEW CARD</a> -->
                                        <router-link to="/cart" class="primary-btn checkout-btn">CHECK OUT</router-link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Header End -->
</template>

<script>
export default {
    name: 'Header',
    props: ['carts', 'total']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .image-scope {
        width:70px; 
        height:70px; 
        object-fit:cover
    }
</style>>
