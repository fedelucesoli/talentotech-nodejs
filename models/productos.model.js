// Model de Producto en Firebase -- usando config/db.js

import { collection, getDocs, doc, getDoc, addDoc } from 'firebase/firestore';
import { db } from '../config/db.js';


const productCollection = collection(db, "productos");


export const getAllProducts = async () => {
  try {
    const productList = await getDocs(productCollection);
    const products = [];
    productList.forEach((doc) => products.push({ id: doc.id, ...doc.data() }));

    return products;
  } catch (error) {
    throw new Error("Error", error.message);
  }
};

export const getProductById = async (id) => {
  try {
    const productDoc = doc(productCollection, id);
    const product = await getDoc(productDoc);
    if (!product.exists()) {
      return null;
    }
    return { id: product.id, ...product.data() };
  } catch (error) {   
    throw new Error("Error", error.message);
  }
};

export const storeProducto = async (product) => {
  try {
    const docRef = await addDoc(productCollection, product);
    return {
      id: docRef.id,
      ...product,
    };
  } catch (error) {
    throw new Error("Error", error.message);
  }
};