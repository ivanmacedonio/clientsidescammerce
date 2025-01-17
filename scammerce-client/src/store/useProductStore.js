import { create } from 'zustand';
import { getAxiosInstance } from '../services/api';
import { toast } from 'react-toastify';
import { useShopStore } from './useShopStore';
import { useAuthStore } from './useAuthStore';

export const useProductStore = create((set, get) => ({
  isLoading: false,
  storagedProduct: [],
  products: [],

  getProducts: async () => {
    const client = getAxiosInstance();
    const { shop_id } = useShopStore.getState();

    try {
      set({ isLoading: true });
      if (get().products.length > 0) {
        return;
      }
      const response = await client.get(
        `${import.meta.env.VITE_BASE_URL}/products`,
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
