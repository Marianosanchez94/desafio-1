    const fs = require('fs');

    class ProductManager {
    constructor(filePath) {
        this.filePathpath = filePath;
    }

    readData() {
        try {
        const data = fs.readFileSync(this.filepath, 'utf8');
        return JSON.parse(data);
        } catch (error) {
        throw new error("No puede realizarse la operacion");
        }
    }

    writeData(data) {
        fs.writeFileSync(this.path, JSON.stringify(data, null, 2));
    }

    addProduct(product) {
        const products = this.readData();
        const id = products.length > 0 ? products[products.length - 1].id + 1 : 1;
        const newProduct = { ...product, id };
        products.push(newProduct);
        this.writeData(products);
    }

    getProducts() {
        return this.readData();
    }

    getProductById(id) {
        const products = this.readData();
        return products.find(product => product.id === id);
    }

    updateProduct(id, updatedFields) {
        const products = this.readData();
        const index = products.findIndex(product => product.id === id);
        
        if (index !== -1) {
        products[index] = { ...products[index], ...updatedFields };
        this.writeData(products);
        }
    }

    deleteProduct(id) {
        const products = this.readData();
        const updatedProducts = products.filter(product => product.id !== id);
        this.writeData(updatedProducts);
    }
    }

    const productManager = new ProductManager('products.json');

    productManager.addProduct({ Title: 'Producto 1',Description:'desc', price: 5000,thumbnail : 'url', code : 4 ,stock: 20});
    productManager.addProduct({ Title: 'Producto 2',Description:'desc', rice: 1000, thumbnail : 'url', code : 2, stock: 12});
    console.log(productManager.getProducts());

    const productToUpdate = productManager.getProductById(1);
    if (productToUpdate) {
    productManager.updateProduct(1, { price: 15.99 });
    }

    productManager.deleteProduct(2);
