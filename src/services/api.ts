import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Products
export const getProducts = () => api.get('/products');
export const getProductById = (id: string) => api.get(`/products/${id}`);

// Users
export const register = (userData: any) => api.post('/users/register', userData);
export const login = (credentials: any) => api.post('/users/login', credentials);

// Orders
export const createOrder = (orderData: any) => api.post('/orders', orderData);
export const getUserOrders = (userId: string) => api.get(`/orders/${userId}`);

export default api;