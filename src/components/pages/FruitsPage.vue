<template>
  <div class="container mx-auto py-8">

    <h1 class="text-3xl font-bold mb-8">Explore Fresh Fruits</h1>
  
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <!-- Fruits Card -->
        <div v-for="fruit in fruits" :key="fruit.id" class="bg-white rounded-lg overflow-hidden shadow-lg">

          <img :src="require(`../../assets/images/${image}`)" alt="Fruit" class="w-full h-64 object-cover">

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

          { id: 1, name: 'Apple', description: 'Crisp and juicy apples from local orchards.', image: 'fruits.jpeg' },
          // { id: 2, name: 'Orange', description: 'Sweet and tangy oranges bursting with vitamin C.', image: 'orange.jpg' },
          // { id: 3, name: 'Banana', description: 'Nutritious and delicious bananas perfect for a quick snack.', image: 'banana.jpg' },

        ]

      };

    }

  };
</script>
  