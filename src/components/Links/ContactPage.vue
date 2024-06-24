<template>

    <div class="bg-gray-100 min-h-screen py-8 mt-3 flex flex-col items-center">

        <h1 class="text-4xl font-bold mb-8 underline text-center mt-3">Contact Us</h1>

        <div class="bg-white rounded-lg overflow-hidden shadow-lg p-8 w-full max-w-4xl text-center mb-6">

            <h2 class="text-2xl font-bold mb-4">Get in Touch</h2>

            <p class="text-gray-700 text-lg">
    
                Address: 123 Grocery Lane, Cityville, State, ZIP<br>

                Phone: +1 234 567 890<br>

                Email: <a href="mailto:info@grocerymart.com" class="text-blue-500 hover:underline">info@grocerymart.com</a>

            </p>

        </div>
  
        <div class="bg-white rounded-lg overflow-hidden shadow-lg p-8 w-full max-w-4xl text-center mb-6">

            <h2 class="text-2xl font-bold mb-4">Contact Form</h2>

            <form @submit.prevent="submitForm">

                <div class="mb-4">

                    <label for="name" class="block text-left text-gray-700 mb-2">Name</label>

                    <input type="text" id="name" v-model="form.name" class="w-full p-2 border border-gray-300 rounded" required>

                </div>

                <div class="mb-4">

                    <label for="email" class="block text-left text-gray-700 mb-2">Email</label>

                    <input type="email" id="email" v-model="form.email" class="w-full p-2 border border-gray-300 rounded" required>

                </div>

                <div class="mb-4">

                    <label for="message" class="block text-left text-gray-700 mb-2">Message</label>

                    <textarea id="message" v-model="form.message" class="w-full p-2 border border-gray-300 rounded" rows="4" required></textarea>

                </div>

                <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Submit</button>

            </form>

        </div>
  
        <div class="bg-white rounded-lg overflow-hidden shadow-lg p-8 w-full max-w-4xl text-center mb-6">

            <h2 class="text-2xl font-bold mb-4">Our Location</h2>

            <div class="w-full h-64">

                <iframe

                    class="w-full h-full rounded"

                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0924089042896!2d-122.41941548468271!3d37.77492977975966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c0c000001%3A0x8f3e7b7bdbd9067b!2sGrocery%20Store!5e0!3m2!1sen!2sus!4v1625248836342!5m2!1sen!2sus"

                    allowfullscreen=""

                    loading="lazy"

                ></iframe>

            </div>

        </div>

    </div>

</template>
  
<script setup>

    import { ref } from 'vue';
  
    const form = ref({

        name: '',

        email: '',

        message: ''

    });
  
    const submitForm = async () => {

        console.log('Form submitted:', form.value);

    };

  </script>
  
