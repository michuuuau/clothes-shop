import data from "./data.json" assert { type: "json" };

class ProductService {
  async getProducts(category, name) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (category === "all") {
          if (name) {
            resolve(
              data.products.filter((item) =>
                item.name.toLowerCase().includes(name.toLowerCase())
              )
            );
          }
          resolve(data.products);
        } else {
          resolve(data.products.filter((item) => item.category === category));
        }
      }, 2000);
    });
  }
}

export const productService = new ProductService();
