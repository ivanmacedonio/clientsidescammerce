import { create } from 'zustand';
import { getAxiosInstance } from '../services/api';
import { toast } from 'react-toastify';

export const useAuthStore = create((set) => ({
  isLoading: false,
  userAuthInfo: {},
  login: async (body, shop_id) => {
    const client = getAxiosInstance(shop_id);
    set({ isLoading: true });
    try {
      const response = await client.post(
        `${import.meta.env.VITE_BASE_URL}/login`,
        body,
        {
          headers: { 'Shop-Id': shop_id, 'Content-Type': 'application/json' },
        },
      );
      set({
        isLoading: false,
        userAuthInfo: {
          email: body.email,
          token: response?.data?.access_token,
        },
      });
      toast.success('Inicio de sesión exitoso');
      return { status: 200 };
    } catch (error) {
      set({ isLoading: false });
      toast.error('Email o contraseña inválidos');
      return { status: 400 };
    }
  },
  register: async (body, shop_id) => {
    const client = getAxiosInstance(shop_id);
    set({ isLoading: true });
    try {
      await client.post(`${import.meta.env.VITE_BASE_URL}/users`, body, {
        headers: { 'Shop-Id': shop_id, 'Content-Type': 'application/json' },
      });
      set({ isLoading: false });
      toast.success('Usuario creado exitosamente, redireccionando a Login');
      return { status: 200 };
    } catch (error) {
      set({ isLoading: false });
      toast.error(
        'Hubo un error al intentar crear el usuario. Consultar con un operador',
      );
      return { status: 400 };
    }
  },
}));
