import { create } from 'zustand';
import { getAxiosInstance } from '../services/api';
import { toast } from 'react-toastify';
import { useShopStore } from './useShopStore';

export const useProductStore = create((set, get) => ({
  isLoading: false,
  storagedProduct: [],
  categories: [],
  products: [],

  getProducts: async (name) => {
    const client = getAxiosInstance();
    const { shop_id } = useShopStore.getState();
    const path = !!name ? `/products?name=${name}` : "/products"
    try {
      set({ isLoading: true });
      if (get().products.length > 0 && !name) {
        return;
      }
      const response = await client.get(
        `${import.meta.env.VITE_BASE_URL}${path}`,
        {
          headers: {
            'Shop-Id': shop_id,
            'Content-Type': 'application/json',
          },
        },
      );
      set({
        products: response?.data?.data,
      });
    } catch (error) {
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },

  getProductById: async (id) => {
    if (get().storagedProduct.id === id) {
      return get().storagedProduct;
    }
    const client = getAxiosInstance();
    const { shop_id } = useShopStore.getState();

    try {
      set({ isLoading: true });
      const response = await client.get(
        `${import.meta.env.VITE_BASE_URL}/products/${id}`,
        {
          headers: {
            'Shop-Id': shop_id,
            'Content-Type': 'application/json',
          },
        },
      );
      const data = response?.data?.data;
      if (response?.status < 300) {
        set({ storagedProduct: data });
      }
      return data;
    } catch (error) {
      console.error(error);
      return { status: 404 };
    } finally {
      set({ isLoading: false });
    }
  },

  getProductsByCat: async (category_id) => {
    const client = getAxiosInstance();
    set({ isLoading: true });

    try {
      const response = await client.get(
        `${import.meta.env.VITE_BASE_URL}/products/cat/${category_id}`,
      );
      set({products: response?.data?.data})
    } catch (error) {
      console.log(error);
    }
  },

  getCategories: async () => {
    const client = getAxiosInstance();
    set({ isLoading: true });

    if (get().categories.length > 0) {
      return get().categories;
    }

    try {
      const response = await client.get(
        `${import.meta.env.VITE_BASE_URL}/categories`,
      );
      set({ categories: response?.data?.data });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },

  executePayment: async (body) => {
    const client = getAxiosInstance();
    const { shop_id } = useShopStore.getState();
    try {
      set({ isLoading: true });
      const response = await client.post(
        `${import.meta.env.VITE_BASE_URL}/checkout`,
        body,
        {
          headers: {
            'Shop-Id': shop_id,
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(response);
      return { status: 200 };
    } catch (error) {
      console.error(error);
      return { status: 404 };
    } finally {
      set({ isLoading: false });
      toast.error(
        'Ocurrió un error al intentar realizar el pago, intente nuevamente con otro medio de pago',
      );
    }
  },
}));
