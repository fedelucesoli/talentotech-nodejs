
// Controller de productos

//import from services
import productoService from '../services/productos.service.js';

const productoController = {
    getAllProducts: async (req, res) => {
        try {
            const products = await productoService.getAllProducts();
            res.json(products);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getProductById: async (req, res) => {
        try {
            const product = await productoService.getProductById(req.params.id);
            if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
            res.json(product);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    storeProducto: async (req, res) => {
        const product = req.body;

        // Validar que se reciban los datos necesarios
        if (!product.titulo || !product.precio) {
            return res.status(400).json({ message: 'Faltan datos del producto' });
        }
    
        try {
            const newProduct = await productoService.storeProducto(product);
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json({ message: "Error al guardar el producto: " + error.message });
        }
    }
};

export default productoController;