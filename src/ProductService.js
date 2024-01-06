import axios from "axios";

const url = 'api/products/';

class ProductService {
    //get products from local DB
    static getProducts() {
        return axios.get(url)
            .then((res) => {
                const data = res.data;
                const dataArray = Object.values(data);
                return dataArray.map(product => ({
                    id: product._id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    qty: product.qty,
                    createdAt: new Date(product.createdAt)
                }));
            })
            .catch((err) => {
                throw err;
            });
        }
    
    //get products from warehouse
    static getWarehouse() {
        return axios.post(url)
    }
    

    //Update product qty
    static updateProductQty(id) {
        return axios.post(`${url}${id}`);
    }
    //Delete all products
    static deleteProducts() {
        return axios.delete(url)
    }
}

export default ProductService