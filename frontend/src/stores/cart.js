import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cartItems = ref([]);

  const itemsInCart = computed(() => {
    return cartItems.value.reduce(
      (current, next) => current + next.quantity,
      0
    );
  });

  const cartTotal = computed(() => {
    let sum = 0;
    cartItems.value.forEach((item) => (sum += item.price * item.quantity));
    return sum.toFixed(2);
    0;
  });

  const setCartItems = (items) => {
    cartItems.value = items;
  };

  const addProductToCart = (product) => {
    const alreadyInCart = cartItems.value.findIndex(
      (item) => item.id === product.id
    );
    if (alreadyInCart >= 0) {
      cartItems.value[alreadyInCart].quantity++;
    } else {
      cartItems.value.push({
        ...product,
        quantity: 1,
      });
    }
  };

  const removeProductFromCart = (productId) => {
    const productToRemoveIndex = cartItems.value.findIndex(
      (item) => item.id === productId
    );
    if (productToRemoveIndex >= 0) {
      cartItems.value.splice(productToRemoveIndex, 1);
    }
  };

  const incrementProductQuantity = (productId) => {
    const product = cartItems.value.find((item) => item.id === productId);
    if (product) {
      product.quantity++;
    }
  };

  const decrementProductQuantity = (productId) => {
    const product = cartItems.value.find((item) => item.id === productId);
    
    if (product && product.quantity >= 2) {
      product.quantity--;
    }

  };

  return {
    cartItems,
    itemsInCart,
    cartTotal,
    setCartItems,
    addProductToCart,
    removeProductFromCart,
    incrementProductQuantity,
    decrementProductQuantity,
  };
});
