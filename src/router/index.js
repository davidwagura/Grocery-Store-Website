import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/components/HomePage.vue'

import BakeryPage from '@/components/pages/BakeryPage.vue';

import DairyProducts from '@/components/pages/DairyProducts.vue';

import FruitsPage from '@/components/pages/FruitsPage.vue';

import MeatSeafood from '@/components/pages/MeatSeaFood.vue';

import PantryStaples from '@/components/pages/PantryStaples.vue';

import VegetablePage from '@/components/pages/VegetablePage.vue';

import CartPage from '@/components/Links/CartPage.vue'

import CheckoutPage from '@/components/Links/CheckoutPage.vue'

import AboutPage from '@/components/Links/AboutPage.vue'

import ContactPage from '@/components/Links/ContactPage.vue'


const routes = [

    { path: '/', component: HomePage },

    { path: '/fruits', component: FruitsPage },

    { path: '/vegetables', component: VegetablePage },

    { path: '/dairy', component: DairyProducts },

    { path: '/meat', component: MeatSeafood },

    { path: '/bakery', component: BakeryPage },

    { path: '/pantry', component: PantryStaples },

    { path: '/cart', component: CartPage  },

    { path: '/checkout', component: CheckoutPage  },

    { path: '/about', component: AboutPage},

    { path: '/contact', component: ContactPage },

]

const router = createRouter({

    history: createWebHistory(),
 
    routes,

});

export default router;