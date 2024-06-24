 <template>

    <div class="container mx-auto py-8">
  
      <h1 class="text-3xl flex justify-center mt-6 underline font-bold mb-8">Explore Fresh pantry Staples</h1>
    
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
  
          <div v-for="pantry in pantryStaples" :key="pantry.id" class="bg-white rounded-lg overflow-hidden shadow-lg">
  
          <img :src="require(`../../assets/${pantry.category}/${pantry.image}`)" alt="pantry" class="w-full h-64 object-cover">
  
          <div class="p-4"> 
  
            <h2 class="text-xl font-bold mb-2">{{ pantry.name }}</h2>
    
            <p class="text-gray-700">{{ pantry.description }}</p>
    
            <p class="text-gray-900 font-semibold">KSH {{ pantry.price }}</p>
    
            <button @click="addToCart(pantry)" class="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">

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
    
            const pantryStaples= ref([
        
                { id: 1, name: 'Rice', description: 'Long grain rice, perfect for a variety of dishes.', image: 'rice.jpeg', category: 'pantry', price: 50 },

                { id: 2, name: 'Pasta', description: 'Italian pasta, great for making hearty meals.', image: 'pasta.jpeg', category: 'pantry', price: 80 },

                { id: 3, name: 'Olive Oil', description: 'Extra virgin olive oil, ideal for cooking and salads.', image: 'olive-oil.jpeg', category: 'pantry', price: 120 },

                { id: 4, name: 'Flour', description: 'All-purpose flour for baking and cooking.', image: 'flour.jpeg', category: 'pantry', price: 60 },

                { id: 5, name: 'Sugar', description: 'Granulated sugar, perfect for baking and sweetening.', image: 'sugar.jpeg', category: 'pantry', price: 40 },

                { id: 6, name: 'Salt', description: 'Fine sea salt, a kitchen essential.', image: 'salt.jpeg', category: 'pantry', price: 30 },

                { id: 7, name: 'Beans', description: 'Dried beans, a great source of protein.', image: 'beans.jpeg', category: 'pantry', price: 70 },

                { id: 8, name: 'Tomato Sauce', description: 'Rich tomato sauce, perfect for pasta dishes.', image: 'tomato-sauce.jpeg', category: 'pantry', price: 50 },

                { id: 9, name: 'Canned Tuna', description: 'High-quality canned tuna, great for salads and sandwiches.', image: 'canned-tuna.jpeg', category: 'pantry', price: 90 },  

            ])

            const cartStore = useCartStore();
            
            const addToCart = (pantry) => {

                cartStore.addToCartPantry(pantry);

            }

            return {

                pantryStaples,

                addToCart

            };

        },

    }
  
</script>
