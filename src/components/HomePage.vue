
<template>

    <div class="mt-16 text-white">
    
        <div class="p-8 text-left m-8 bg-cover bg-center relative rounded-xl" id="fruits">
       
            <router-link to="/fruits">
            
                <h2 class="font-bold">Fresh Fruits</h2>
            
            </router-link><br>
            
            <p class="mb-6">Discover a delightful selection of fresh fruits, sourced for their quality and flavor. From seasonal favorites to exotic varieties, our fruits are perfect for adding freshness to your meals or enjoying as a healthy snack.</p>
            
            <router-link class="bg-blue-500 border rounded-full w-1/4 mt-3 p-4" to="/fruits">Shop Now</router-link>
        
        </div>

        <div class="flex flex-col">
            
            <div class="inline-flex md:w-fit">
                
                <div class="flex flex-col p-8 m-8 rounded-lg" id="vegetables">
                    
                    <router-link to="/vegetables">
                        
                        <h2 class="font-bold mb-4">Vegetables</h2>
                    
                    </router-link>
                    
                    <p>Explore our garden-fresh vegetables, packed with nutrients and flavor. From leafy greens to crunchy peppers, our selection ensures your meals are vibrant and nutritious.</p>
                    
                    <router-link class="bg-blue-500 border rounded-full w-1/4 mt-3 p-4" to="/vegetables">Shop Now</router-link>
                
                </div>

            
                <div class="flex rounded-lg flex-col p-8 m-8" id="dairy">
                    
                    <router-link to="/dairy">
                        
                        <h1 class="font-bold mb-4">Dairy Products</h1>
                    
                    </router-link>
                    
                    <p>Indulge in our range of dairy products, sourced from local farms to ensure freshness and quality. From creamy yogurts to rich cheeses, discover dairy delights that elevate your recipes.</p>
                    
                    <router-link class="bg-blue-500 border rounded-full w-1/4 mt-3 p-4" to="/dairy">Shop Now</router-link>
                
                </div>
            
            </div>
    
        </div>

        <div class="flex flex-col">
            
            <div class="inline-flex md:w-fit md:h-1/2">
                
                <div class="flex flex-col rounded-lg p-8 m-8" id="meat-seafood">
                    
                    <router-link to="/meat">
                        
                        <h2 class="font-bold mb-4">Meat and Seafood</h2>
                    
                    </router-link>
                
                    <p>From succulent steaks to fresh seafood, our meat and seafood selection offers premium cuts and sustainable options. Enjoy restaurant-quality meals at home with our carefully sourced proteins.</p>
                    
                    <router-link class="bg-blue-500 border rounded-full w-1/4 mt-3 p-4" to="/meat">Shop Now</router-link>
                
                </div>

                
                <div class="flex flex-col rounded-lg p-8 m-8 ml-auto" id="bakery">
                    
                    <router-link to="/bakery">
                        
                        <h1 class="font-bold mb-4">Bakery</h1>
                    
                    </router-link>
                    
                    <p>Experience the aroma of freshly baked goods with our bakery collection. From artisan breads to decadent pastries, our bakery items are crafted with passion and expertise to satisfy every craving.</p>
                    
                    <router-link class="bg-blue-500 border rounded-full w-1/4 mt-3 p-4" to="/bakery">Shop Now</router-link>
                
                </div>
            
            </div>
            
        </div>

        <div class="p-8 text-left rounded-lg m-8" id="pantry">

            <router-link to="/pantry">
                    
                <h2 class="font-bold">Pantry Staples</h2>
                
            </router-link><br>
                
            <p class="mb-4">Stock your pantry with essentials that form the foundation of every meal. From grains and spices to canned goods, our pantry staples ensure you're prepared for any culinary adventure.</p>
                
            <router-link class="bg-blue-500 border rounded-full w-1/4 p-4" to="/pantry">Shop Now</router-link>

        </div>

    </div>

</template>


<style>

    #fruits, #vegetables, #dairy, #meat-seafood, #bakery, #pantry {

        position: relative;

        background-size: cover;

        background-repeat: no-repeat;

        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);

    }

    #fruits::before, #vegetables::before, #dairy::before, #meat-seafood::before, #bakery::before, #pantry::before {

        content: '';

        position: absolute;

        top: 0;

        left: 0;

        width: 100%;

        height: 100%;

        background-color: rgba(30, 28, 28, 0.5); 

        z-index: 1;

    }

    #fruits > *, #vegetables > *, #dairy > *, #meat-seafood > *, #bakery > *, #pantry > * {

        position: relative;

        z-index: 2;

    }

    #fruits {

        background-image: url('../assets/images/fruits1.jpeg');

    }

    #vegetables {

        background-image: url('../assets/images/vegetables.jpeg');

    }

    #dairy {

        background-image: url('../assets/images/dairy products.jpeg');

    }

    #meat-seafood {

        background-image: url('../assets/images/meat.jpeg');

    }

    #bakery {

        background-image: url('../assets/images/bakery.jpeg');

    }

    #pantry {

        background-image: url('../assets/images/pantry.jpeg');

    }

</style>
