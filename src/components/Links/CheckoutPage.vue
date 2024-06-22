<template>

  <div class="container mx-auto py-8">

    <h1 class="text-3xl font-bold mb-8">Checkout</h1>

    <div v-if="cart.length === 0" class="text-center text-gray-700">

      Your cart is empty.

    </div>

    <div v-else>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-1">

        <div v-for="item in cart" :key="item.id" class="bg-white rounded-lg overflow-hidden shadow-lg">

          <img :src="require(`../../assets/fruits/${item.image}`)" alt="Fruit" class="w-full h-64 object-cover">

          <div class="p-4">

            <h2 class="text-xl font-bold mb-2">{{ item.name }}</h2>

            <p class="text-gray-700">{{ item.description }}</p>

            <p class="text-gray-900 font-semibold">KSH {{ item.price }}</p>

          </div>

        </div>

      </div>

      <div class="mt-8">

        <button @click="placeOrder" class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">

          Place Order

        </button>

      </div>

    </div>

  </div>

</template>

<script>

  import { useCartStore } from '@/stores/cart';

  import { computed } from 'vue';

  export default {

    setup() {

      const cartStore = useCartStore();

      const cart = computed(() => cartStore.cart);

      const placeOrder = () => {

        cartStore.placeOrder();

        alert('Order placed successfully!');

      };

      return {

        cart,

        placeOrder

      };

    }

  };
  
</script>
