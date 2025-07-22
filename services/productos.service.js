// Producto Service

import { getAllProducts, getProductById, storeProducto } from '../models/productos.model.js';

const productoService = {
    getAllProducts: async () => {
        return await getAllProducts();
    },

    getProductById: async (id) => {
        return await getProductById(id);
    },

    storeProducto: async (product) => {
        return await storeProducto(product);
    }
};

export default productoService;