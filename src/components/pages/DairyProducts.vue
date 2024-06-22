<template>

    <div class="container mx-auto py-8">
  
      <h1 class="text-3xl flex justify-center mt-3 underline font-bold mb-8">Explore Fresh products</h1>
    
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-1">
  
          <!-- products Card -->
          <div v-for="product in dairyProducts" :key="product.id" class="bg-white rounded-lg overflow-hidden shadow-lg">
  
          <img :src="require(`../../assets/${product.category}/${product.image}`)" alt="product" class="w-full h-64 object-cover">
  
          <div class="p-4"> 
  
            <h2 class="text-xl font-bold mb-2">{{ product.name }}</h2>
    
            <p class="text-gray-700">{{ product.description }}</p>
    
            <p class="text-gray-900 font-semibold">KSH {{ product.price }}</p>
    
            <button @click="addToCart(product)" class="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">

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
    
            const dairyProducts = ref([
        
                { id: 1, name: 'Milk', description: 'Fresh whole milk, perfect for drinking or using in recipes.', image: 'milk.jpeg', category: 'product', price: 60 },

                { id: 2, name: 'Cheddar Cheese', description: 'Aged cheddar cheese with a sharp and tangy flavor.', image: 'cheddar-cheese.jpeg', category: 'product', price: 300 },

                { id: 3, name: 'Yogurt', description: 'Creamy yogurt with live cultures, available in various flavors.', image: 'yogurt.jpeg', category: 'product', price: 80 },

                { id: 4, name: 'Butter', description: 'Rich and creamy butter, perfect for baking or spreading.', image: 'butter.jpeg', category: 'product', price: 150 },

                { id: 5, name: 'Cream Cheese', description: 'Smooth and spreadable cream cheese, ideal for bagels and dips.', image: 'cream-cheese.jpeg', category: 'product', price: 100 },

                { id: 6, name: 'Mozzarella Cheese', description: 'Soft and stretchy mozzarella cheese, great for pizzas and salads.', image: 'mozzarella-cheese.jpeg', category: 'product', price: 250 },

                { id: 7, name: 'Sour Cream', description: 'Tangy sour cream, perfect for topping baked potatoes and tacos.', image: 'sour-cream.jpeg', category: 'product', price: 90 },

                { id: 8, name: 'Ice Cream', description: 'Delicious and creamy ice cream available in various flavors.', image: 'ice-cream.jpeg', category: 'product', price: 200 },

                { id: 9, name: 'Parmesan Cheese', description: 'Hard and nutty Parmesan cheese, perfect for grating over pasta.', image: 'parmesan-cheese.jpeg', category: 'product', price: 400 },   

            ])

            const cartStore = useCartStore();
        
            const addToCart = (product) => {

                cartStore.addToCartProduct(product);

            }

            return {

                dairyProducts,

                addToCart

            };

        },

    }
  
</script>
    