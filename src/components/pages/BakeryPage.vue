<template>

    <div class="container mx-auto py-8">
  
      <h1 class="text-3xl font-bold mb-8">Explore Fresh items</h1>
    
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-1">
  
          <!-- items Card -->
          <div v-for="item in bakeryItems" :key="item.id" class="bg-white rounded-lg overflow-hidden shadow-lg">
  
          <img :src="require(`../../assets/${item.category}/${item.image}`)" alt="item" class="w-full h-64 object-cover">
  
          <div class="p-4"> 
  
            <h2 class="text-xl font-bold mb-2">{{ item.name }}</h2>
    
            <p class="text-gray-700">{{ item.description }}</p>
    
            <p class="text-gray-900 font-semibold">KSH {{ item.price }}</p>
    
            <button @click="addToCart(item)" class="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">

              Add To Cart

            </button>
  
          </div>
  
        </div>
  
      </div>
  
    </div>
  
  </template>
    
<script>
import { ref } from 'vue';

import { useCartStore } from '@/stores/cart';

  export default {
  //composition api
    setup() {
  
      const bakeryItems = ref([
    
        { id: 1, name: 'Sourdough Bread', description: 'Artisan sourdough bread with a crispy crust and chewy interior.', image: 'cakes.jpeg',category: 'bakery', price: 250 },

        { id: 2, name: 'Croissant', description: 'Flaky and buttery croissants, perfect for breakfast or a snack.', image: 'cakes.jpeg',category: 'bakery', price: 150 },

        { id: 3, name: 'Chocolate Cake', description: 'Rich and moist chocolate cake with a decadent ganache.', image: 'cakes.jpeg',category: 'bakery', price: 500 },

        { id: 4, name: 'Blueberry Muffin', description: 'Freshly baked blueberry muffins bursting with flavor.', image: 'cakes.jpeg',category: 'bakery', price: 120 },

        { id: 5, name: 'Cinnamon Roll', description: 'Sweet and gooey cinnamon rolls with a cream cheese frosting.', image: 'cakes.jpeg',category: 'bakery', price: 200 },

        { id: 6, name: 'Bagel', description: 'Chewy bagels perfect for breakfast or sandwiches.', image: 'cakes.jpeg',category: 'bakery', price: 80 },

        { id: 7, name: 'Apple Pie', description: 'Classic apple pie with a flaky crust and spiced filling.', image: 'cakes.jpeg',category: 'bakery', price: 300 },

        { id: 8, name: 'Brownie', description: 'Fudgy brownies with a rich chocolate flavor.', image: 'cakes.jpeg',category: 'bakery', price: 180 },

        { id: 9, name: 'Macaron', description: 'Delicate French macarons in a variety of flavors.', image: 'cakes.jpeg',category: 'bakery', price: 350 },
        
      ])

      const cartStore = useCartStore();
    
      const addToCart = (item) => {

        cartStore.addToCartItem(item);

      }

      return {

        bakeryItems,

        addToCart

      };

    },

    // methods: {

    //   addToCart(item) {

    //     const cartStore = useCartStore();

    //     cartStore.addToCart(item);

    //   }

    // }


  }
  
</script>
    