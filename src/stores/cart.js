import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {

  state: () => ({

    cart: []

  }),

  actions: {

    addToCart(fruit) {

      this.cart.push(fruit);

    },

    addToCartItem(item) {

      this.cart.push(item);

    },

    addToCartProduct(product) {

      this.cart.push(product);

    },


    placeOrder() {

      this.cart = [];

    }
    
  }

});
