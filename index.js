// title (nombre del producto)
// description (descripción del producto)
// price (precio)
// thumbnail (ruta de imagen)
// code (código identificador)
// stock (número de piezas disponibles)

class ProductManager {
    constructor(){
        this.products = [];
        this.nextId = 1;
    }
    addProduct(title,description,price,thumbnail,code,stock){
        let newId;
        if(this.products.length==0){
            newId = 1;
        }else{
            newId = this.products[this.products.length-1].id+1
        }

        const newProduct = {
            id: newId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }
        this.products.push(newProduct);
        
        //Validar campos
        if(!title || !description || !price || !thumbnail || !code || !stock ){
            console.log("Todos los campos son obligatorios")
        }
        //Validar code
        let newCode;
        if (newCode === this.products.code){
            console.log("Ya existe este codigo")
        }

    }

    getProducts(){
        console.log(this.products);
    }

    getProductById(){
        const productId = this.products.find(product => product.id === id)
        if (!productId){
            console.error("Not Found");

        }
    }

}

const manager1 = new ProductManager();
manager1.addProduct("Iphone","Celular","$1000","url", 10 , 19 );
manager1.addProduct("Iphone","Celular","$1000","url", 10 , 19 );


manager1.getProducts();