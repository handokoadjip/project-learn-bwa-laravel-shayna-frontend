<template>
  <div class="success">
    <div class="d-flex success-checkout align-items-center justify-content-center">
        <div class="col col-lg-4 text-center">
            <img src="@/assets/img/success-buy.png" alt="" width="294">
            <h3 class="mt-4">
                Success pays off!
            </h3>
            <p class="mt-2">
                Please wait for the latest updates from us via the email you registered earlier.
            </p>
            <router-link to="/" class="primary-btn pd-cart mt-3">Back to Home</router-link>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Success'
}
</script>
