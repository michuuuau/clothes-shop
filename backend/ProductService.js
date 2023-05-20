import data from "./data.json" assert { type: "json" };

class ProductService {
  async getProducts(category) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (category === "all") {
          resolve(data.products);
        } else {
          resolve(data.products.filter((item) => item.category === category));
        }
      }, 2000);
    });
  }
}

export const productService = new ProductService();
