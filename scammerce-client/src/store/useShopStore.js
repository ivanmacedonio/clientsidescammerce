import { create } from 'zustand';
import { getAxiosInstance } from '../services/api';

export const useShopStore = create((set) => ({
  shop_id: null,
  isValid: null,
  isLoading: false,
  verifyShop: async (shop_id) => {
    set({ isLoading: true });
    try {
      const client = getAxiosInstance();
      const response = await client.get(
        `${import.meta.env.VITE_BASE_URL}/shops/${shop_id}`,
      );
      set({
        isValid: response?.status == 200,
        isLoading: false,
        shop_id: shop_id,
      });
    } catch (error) {
      console.log(error)
      set({ isValid: false, isLoading: false, shop_id: null });
    }
  },
}));
