<template>

    <div class="min-h-screen flex flex-col">

        <nav class="mb-8  text-center font-bold fixed top-0 w-full bg-white p-2 z-10">

            <div class="flex justify-center mt-4">

                <router-link class="pl-6" to="/">Home</router-link>

                <router-link class="pl-6" to="/about">About</router-link>

                <router-link class="pl-6" to="/contact">Contact Us</router-link>

                <router-link class="pl-6" to="/offers">Offers</router-link>

            </div>

    
            <div class="flex justify-end -mt-4 pr-4 space-x-5">

                <router-link class="hover:text-white-200" to="/wishlist">

                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />

                    </svg>

                </router-link>

                <router-link class="flex items-center hover:text-white-200" to="/cart">

                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />

                    </svg>

                    <span class="flex absolute -mt-5 ml-4">

                        <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>

                        <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>

                    </span>

                </router-link>

                    <!-- Sign In / Register Section -->

                <button v-if="''" class="flex items-center hover:text-white-200" to="/login">

                    <!-- Login icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-white-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />

                    </svg>

                </button>


                <router-link v-else class="flex items-center hover:text-white-200" to="/user-account">

                    <!-- Login icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-white-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />

                    </svg>

                </router-link>

            </div>
            
        </nav>

  
        <div id="app" class="flex-grow mt-2">

            <router-view></router-view>

        </div>
  
        <footer class="border bg-red-800 text-white p-4">

            <div class="flex justify-center">

                <div class="flex flex-col items-center mt-3">

                    <h1 class="font-bold mb-4">Quick Links</h1>

                    <div>

                        <router-link to="/" class="hover:underline inline">Home</router-link>

                        <span class="mx-2">|</span>

                        <router-link to="/about" class="hover:underline inline">About Us</router-link>

                        <span class="mx-2">|</span>

                        <router-link to="/contact" class="hover:underline inline">Contact Us</router-link>

                        <span class="mx-2">|</span>

                        <router-link to="/offers" class="hover:underline inline">Offers</router-link>

                    </div>

                </div>

                <div class="flex flex-col items-center ml-16 mt-3">

                    <h1 class="font-bold mb-4">Grocery Departments</h1>

                    <div>
                        
                        <router-link to="/fruits" class="hover:underline inline">Fruits</router-link>

                        <span class="mx-2">|</span>

                        <router-link to="/vegetables" class="hover:underline inline">Vegetables</router-link>

                        <span class="mx-2">|</span>

                        <router-link to="/dairy" class="hover:underline inline">Dairy Products</router-link>

                        <span class="mx-2">|</span>

                        <router-link to="/meat" class="hover:underline inline">Meat and Seafood</router-link>

                        <span class="mx-2">|</span>

                        <router-link to="/bakery" class="hover:underline inline">Bakery</router-link>

                        <span class="mx-2">|</span>

                        <router-link to="/pantry" class="hover:underline inline">Pantry Staples</router-link>

                    </div>
                    
                </div>
            
            </div>

        </footer>

    </div>

</template>
  