<template>
  <div class="container mx-auto py-8">

    <h1 class="text-3xl font-bold mb-8">Explore Fresh Fruits</h1>
  
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <!-- Fruits Card -->
        <div v-for="fruit in fruits" :key="fruit.id" class="bg-white rounded-lg overflow-hidden shadow-lg">

          <img :src="require(`../../assets/fruits/${fruit.image}`)" alt="Fruit" class="w-full h-64 object-cover">

        <div class="p-4"> 

        <h2 class="text-xl font-bold mb-2">{{ fruit.name }}</h2>

        <p class="text-gray-700">{{ fruit.description }}</p>

      <a href="#" class="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Shop Now</a>

      </div>

    </div>

    </div>

  </div>

</template>
  
<script>

  export default {

    data() {

      return {

        fruits: [

          { id: 1, name: 'Apple', description: 'Crisp and juicy apples from local orchards.', image: 'apples.jpeg' },

          { id: 2, name: 'Orange', description: 'Sweet and tangy oranges bursting with vitamin C.', image: 'oranges.jpeg' },

          { id: 3, name: 'Banana', description: 'Nutritious and delicious bananas perfect for a quick snack.', image: 'bananas.jpeg' },

          { id: 4, name: 'Strawberry', description: 'Fresh and sweet strawberries, perfect for desserts.', image: 'strawberry.jpeg' },

          { id: 5, name: 'Grapes', description: 'Juicy grapes that are great for snacking and wine-making.', image: 'grapes.jpeg' },

          { id: 6, name: 'Pineapple', description: 'Tropical pineapples with a sweet and tangy flavor.', image: 'pineapple.jpeg' },

          { id: 7, name: 'Watermelon', description: 'Refreshing watermelons perfect for hot summer days.', image: 'watermelon.jpeg' },

          { id: 8, name: 'Mango', description: 'Sweet and juicy mangoes from tropical regions.', image: 'mangos.jpeg' },

          { id: 9, name: 'Blueberry', description: 'Antioxidant-rich blueberries perfect for snacks and baking.', image: 'blueberry.jpeg' },
      
        ]

      };

    }

  };

</script>
  