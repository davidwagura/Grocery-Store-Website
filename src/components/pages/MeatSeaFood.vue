<template>

  <div class="container mx-auto py-8">

    <h1 class="text-3xl flex justify-center mt-6 underline font-bold mb-8">Explore Fresh foods</h1>
  
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">

        <div v-for="food in seaFoods" :key="food.id" class="bg-white rounded-lg overflow-hidden shadow-lg">

        <img :src="require(`../../assets/${food.category}/${food.image}`)" alt="food" class="w-full h-64 object-cover">

        <div class="p-4"> 

          <h2 class="text-xl font-bold mb-2">{{ food.name }}</h2>
  
          <p class="text-gray-700">{{ food.description }}</p>
  
          <p class="text-gray-900 font-semibold">${{ food.price }}</p>

          <div v-if="food.showMessage" class="text-green-500 mt-2">

            {{ food.message }}

          </div>
            
          <button @click="addToCart(food)" class="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">

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

    setup() {
  
      const seaFoods= ref([
      
        { id: 1, name: 'Salmon', description: 'Fresh and juicy salmon fillets, perfect for grilling.', image: 'salmon.jpeg', category: 'food', price: 2.5 },

        { id: 2, name: 'Shrimp', description: 'Succulent shrimp, great for cocktails or stir-fries.', image: 'shrimp.jpeg', category: 'food', price: 18 },

        { id: 3, name: 'Lobster', description: 'Premium lobster, ideal for special occasions.', image: 'lobster.jpeg', category: 'food', price: 5 },

        { id: 4, name: 'Tuna', description: 'Fresh tuna steaks, perfect for searing or sushi.', image: 'tuna.jpeg', category: 'food', price: 30 },

        { id: 5, name: 'Crab', description: 'Delicious crab legs, great for steaming or boiling.', image: 'crab.jpeg', category: 'food', price: 22 },

        { id: 6, name: 'Chicken Breast', description: 'Lean and tender chicken breast, perfect for grilling or baking.', image: 'chicken-breast.jpeg', category: 'food', price: 12 },

        { id: 7, name: 'Beef Steak', description: 'Juicy and flavorful beef steak, ideal for grilling.', image: 'beef-steak.jpeg', category: 'food', price: 30 },

       { id: 8, name: 'Pork Chops', description: 'Tender pork chops, great for pan-frying or grilling.', image: 'pork-chops.jpeg', category: 'food', price: 15 },

        { id: 9, name: 'Lamb Chops', description: 'Succulent lamb chops, perfect for grilling.', image: 'lamb-chops.jpeg', category: 'food', price: 35 },

      ])

      const cartStore = useCartStore();
          
      const addToCart = (food) => {

        cartStore.addToCartFood(food);

        food.message = 'Item added to cart';

        food.showMessage = true;

        setTimeout(() => {

          food.showMessage = false;

        }, 800);

      }

      return {

        seaFoods,

        addToCart

      };
         
    },

  }

</script>
