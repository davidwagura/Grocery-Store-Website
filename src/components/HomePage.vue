
<template>

    <div>

        <div >

            <img class="rounded-lg w-30px h-30px" src="../assets/images/grocery.jpg" />

        </div>

       <nav class="mt-12 mb-8 text-center font-bold">
        
            <router-link class="pl-6" to="/">Home</router-link>

            <router-link class="pl-6" to="/about">About</router-link>

            <router-link class="pl-6" to="/contact">Contact Us</router-link>

            <router-link class="pl-6" to="/offers">Offers</router-link>

       </nav> 

       <div class="justify-end flex -mt-16 pr-4 space-x-5">

            <button class="hover:text-white-200" to="/wishlist">

                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">

                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />

                </svg>
            </button>

            <button class="flex items-center hover:text-white-200" to="/cart">

                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />

                </svg>

                <span class="flex absolute -mt-5 ml-4">

                    <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>

                    <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>

                </span>

            </button>
                    <!-- Sign In / Register Section -->

            <button v-if="''" class="flex items-center hover:text-white-200" to="/login">

                        <!-- Login icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-white-200" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">

                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />

                </svg>

            </button>


            <router-link v-else class="flex items-center hover:text-white-200" to="/user-account">
                        <!-- Login icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-white-200" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">

                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />

                </svg>

            </router-link>

        </div>

    </div>

    <div class="mt-16">
    
        <div class="rounded-lg p-8 text-left m-8 bg-cover bg-center" id="fruits">
       
            <router-link to="/fruits">
            
                <h2 class="font-bold">Fresh Fruits</h2>
            
            </router-link><br>
            
            <p class="mb-6">Discover a delightful selection of fresh fruits, sourced for their quality and flavor. From seasonal favorites to exotic varieties, our fruits are perfect for adding freshness to your meals or enjoying as a healthy snack.</p>
            
            <router-link class="bg-blue-500 border rounded-full w-1/4 mt-3 p-4" to="/fruits">Shop Now</router-link>
        
        </div>

        <div class="flex flex-col">
            
            <div class="inline-flex">
                
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
            
            <div class="inline-flex">
                
                <div class="flex flex-col rounded-lg p-8 m-8" id="meat-seafood">
                    
                    <router-link to="/meat-seafood">
                        
                        <h2 class="font-bold mb-4">Meat and Seafood</h2>
                    
                    </router-link>
                
                    <p>From succulent steaks to fresh seafood, our meat and seafood selection offers premium cuts and sustainable options. Enjoy restaurant-quality meals at home with our carefully sourced proteins.</p>
                    
                    <router-link class="bg-blue-500 border rounded-full w-1/4 mt-3 p-4" to="/meat-seafood">Shop Now</router-link>
                
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

    <footer class="border bg-red-800 text-white flex-col flex">

        <div class="grid">

            <div class="flex justify-center">

                <div class="flex flex-col mt-3">

                    <h1 class="font-bold mb-4">Quick Links</h1>

                    <router-link to="/" class="hover:underline">Home</router-link><br>
                    
                    <router-link to="/about" class="hover:underline">About Us</router-link><br>

                    <router-link to="/contact" class="hover:underline">Contact Us</router-link><br>

                    <router-link to="/offers" class="hover:underline">Offers</router-link>

                </div>

                <div class="flex flex-col ml-16 pr-10">

                    <h1 class="font-bold mb-4 mt-3">Grocery Departments</h1>

                    <router-link to="/fruits" class="hover:underline">Fruits</router-link><br>

                    <router-link to="/vegetables" class="hover:underline">Vegetables</router-link><br>

                    <router-link to="/dairy" class="hover:underline">Dairy Products</router-link><br>

                    <router-link to="/meat-seafood" class="hover:underline">Meat and Seafood</router-link><br>

                    <router-link to="/bakery" class="hover:underline">Bakery</router-link><br>

                    <router-link to="/pantry" class="hover:underline">Pantry Staples</router-link>

                </div>

            </div>

        </div>

    </footer>

</template>

<style>
    #fruits {

        background-image: url('../assets/images/fruits1.jpeg');

        color: white;

    }

     #vegetables {

        background-image: url('../assets/images/vegetables.jpeg');

        color: white;

        background-size: cover;
        
    }


    #dairy {

        background-image: url('../assets/images/dairy products.jpeg');

        color: white;

        background-size: cover;

    }
 
    #meat-seafood {

        background-image: url('../assets/images/meat.jpeg');

        color: white;

        background-size: cover;

    }
   
    #bakery {

        background-image: url('../assets/images/bakery.jpeg');

        color: white;

        background-repeat: no-repeat;

        background-size: cover;

    }

    #pantry {

        background-image: url('../assets/images/pantry.jpeg');

        color: white;
 
        background-repeat: no-repeat;

        background-size: cover;

    }
</style>