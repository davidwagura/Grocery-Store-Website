<template>

  <div class="container mx-auto py-8">

    <h1 class="text-3xl font-bold mb-8 underline flex justify-center mt-3">Checkout</h1>

    <div v-if="cart.length === 0" class="text-center text-gray-700">

      Your cart is empty

    </div>

    <div v-else class="grid grid-cols-1 gap-8 p-1">

      <div v-for="item in cart" :key="item.id" class="bg-white rounded-lg overflow-hidden shadow-lg p-4">

        <div class="flex items-center">

          <img :src="require(`../../assets/${item.category}/${item.image}`)" alt="Item" class="w-24 h-24 object-cover">

          <div class="ml-4 flex-1">

            <h2 class="text-xl font-bold mb-2">{{ item.name }}</h2>

            <p class="text-gray-700">{{ item.description }}</p>

            <p class="text-gray-900 font-semibold">KSH {{ item.price }}</p>

          </div>

          <button @click="removeFromCart(item.id)" class="ml-4 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded">

            Remove

          </button>

        </div>

      </div>

      <div class="bg-white rounded-lg overflow-hidden shadow-lg p-4">

        <h2 class="text-xl font-bold mb-2">Order Summary</h2>

        <p class="text-gray-700">Total Price: KSH {{ totalPrice }}</p>

        <p class="text-gray-700">Tax (16%): KSH {{ tax }}</p>

        <p class="text-gray-900 font-semibold">Total Amount: KSH {{ totalAmount }}</p>

        <a href="/payment" class="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">

          Proceed to Payment

        </a>

      </div>

    </div>

  </div>

</template>

<script>

  import { computed } from 'vue';

  import { useCartStore } from '@/stores/cart.js';

  export default {

    setup() {

      const cartStore = useCartStore();

      const totalPrice = computed(() => {

        return cartStore.cart.reduce((acc, item) => acc + item.price, 0);

      });

      const tax = computed(() => {

        return totalPrice.value * 0.16;

      });

      const totalAmount = computed(() => {

        return totalPrice.value + tax.value;

      });

      const removeFromCart = (itemId) => {

        cartStore.removeFromCart(itemId);

      };

      return {

        cart: cartStore.cart,

        totalPrice,

        tax,

        totalAmount,

        removeFromCart,

      };

    },

  };
  
</script>
