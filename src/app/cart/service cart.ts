export class CartService {
    items = [];
  
    addToCart(menu) {
      this.items.push(menu);
    }
  
    getItems() {
      return this.items;
    }
  
    clearCart() {
      this.items = [];
      return this.items;
    }
  }