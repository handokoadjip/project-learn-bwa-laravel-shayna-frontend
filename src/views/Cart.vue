<template>
  <div class="cart">
    <Breadcrumb page="Cart" />

    <!-- Shopping Cart Section Begin -->
    <section class="shopping-cart spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
              <div class="col-lg-12">
                <div class="cart-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th class="p-name text-center">Product Name</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(cart, id) in carts" :key="cart.id">
                        <td class="cart-pic first-row">
                          <img :src="cart.image" />
                        </td>
                        <td class="cart-title first-row text-center">
                          <h5>{{ cart.name }}</h5>
                        </td>
                        <td class="p-price first-row">
                          {{ cart.price | currency }}
                        </td>
                        <td class="delete-item">
                          <a
                            href="#"
                            @click="$emit('deleteCart', id, cart.name)"
                            ><i class="material-icons"> close </i></a
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col-lg-8">
                <h4 class="mb-4">Informasi Pembeli:</h4>
                <div class="user-checkout">
                  <form>
                    <div class="form-group">
                      <label for="namaLengkap">Nama lengkap</label>
                      <input
                        type="text"
                        class="form-control"
                        id="namaLengkap"
                        aria-describedby="namaHelp"
                        placeholder="Masukan Nama"
                        v-model="checkout.name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="namaLengkap">Email Address</label>
                      <input
                        type="email"
                        class="form-control"
                        id="emailAddress"
                        aria-describedby="emailHelp"
                        placeholder="Masukan Email"
                        v-model="checkout.email"
                      />
                    </div>
                    <div class="form-group">
                      <label for="namaLengkap">No. HP</label>
                      <input
                        type="text"
                        class="form-control"
                        id="noHP"
                        aria-describedby="noHPHelp"
                        placeholder="Masukan No. HP"
                        v-model="checkout.phone"
                      />
                    </div>
                    <div class="form-group">
                      <label for="alamatLengkap">Alamat Lengkap</label>
                      <textarea
                        rows="3"
                        class="form-control"
                        id="alamatLengkap"
                        aria-describedby="alamatLengkap"
                        placeholder="Masukan Alamat Lengkap"
                        v-model="checkout.address"
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="row">
              <div class="col-lg-12">
                <div class="proceed-checkout">
                  <ul>
                    <li class="subtotal">
                      ID Transaction <span>#SH12000</span>
                    </li>
                    <li class="subtotal mt-3">
                      Subtotal <span>{{ total | currency }}</span>
                    </li>
                    <li class="subtotal mt-3">Pajak <span>10%</span></li>
                    <li class="subtotal mt-3">
                      Total Biaya <span>{{ grandTotal | currency }}</span>
                    </li>
                    <li class="subtotal mt-3">
                      Bank Transfer <span>Mandiri</span>
                    </li>
                    <li class="subtotal mt-3">
                      No. Rekening <span>2208 1996 1403</span>
                    </li>
                    <li class="subtotal mt-3">
                      Nama Penerima <span>Shayna</span>
                    </li>
                  </ul>
                  <a href="#" class="proceed-btn" @click.prevent="setCheckout"
                    >I ALREADY PAID</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Shopping Cart Section End -->
  </div>
</template>

<script>
// @ is an alias to /src
import Breadcrumb from "@/components/Breadcrumb.vue";

import axios from "axios";

export default {
  name: "Cart",
  props: ["carts", "total", "grandTotal"],
  components: {
    Breadcrumb,
  },
  data: function () {
    return {
      checkout: {
        name: "",
        email: "",
        phone: "",
        address: "",
      },
    };
  },
  methods: {
    setCheckout: function () {
      if (this.carts < 1) {
        this.$swal(
          "Please select product",
          "click add to cart in home to add product to cart",
          "error"
        );

        return;
      }

      if (
        this.checkout.name === "" ||
        this.checkout.email === "" ||
        this.checkout.phone === "" ||
        this.checkout.address === ""
      ) {
        this.$swal(
          "Please Fill Form",
          "enter the form with the correct data",
          "error"
        );

        return;
      }

      let products = this.carts.map(function (product) {
        return product.id;
      });

      this.checkout.total = this.grandTotal;
      this.checkout.status = "PENDING";
      this.checkout.details = products;

      axios
        .post("http://127.0.0.1:8000/api/checkout", this.checkout)
        .then(() => {
          localStorage.clear();
          this.$router.push("success");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

