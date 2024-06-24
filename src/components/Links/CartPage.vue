<template>

    <div class="container mx-auto py-8">

        <h1 class="text-3xl font-bold mb-8 underline flex justify-center mt-3">Your Cart ({{ cartItemCount }} items)</h1>

        <h1 class="text-3xl font-bold mb-8 underline flex justify-center mt-3">Your Cart</h1>

        <div v-if="cart.length === 0" class="text-center text-gray-700">

            Your cart is empty

        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-1">

            <div v-for="item in cart" :key="item.id" class="bg-white rounded-lg overflow-hidden shadow-lg">

                <img :src="require(`../../assets/${item.category}/${item.image}`)" alt="Item" class="w-full h-64 object-cover">

                <div class="p-4">

                    <h2 class="text-xl font-bold mb-2">{{ item.name }}</h2>

                    <p class="text-gray-700">{{ item.description }}</p>

                    <p class="text-gray-900 font-semibold">KSH {{ item.price }}</p>

                </div>

            </div>

        </div>

    </div>

    <div class="flex justify-end mb-4 mr-4">

        <a href="/checkout" class="bg-blue-500 p-8 hover:bg-blue-600 text-white rounded">

            Checkout

        </a>

    </div>

</template>
  
<script>

import { useCartStore } from '@/stores/cart.js';

import { computed } from 'vue';
  
  export default {

    setup() {

        const cartStore = useCartStore();

        const cartItemCount = computed(() => cartStore.cart.length);

        return {

            cart: cartStore.cart,

            cartItemCount,

        };

    }

};

</script>
  