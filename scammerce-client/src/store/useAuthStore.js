import { create } from 'zustand';
import { getAxiosInstance } from '../services/api';
import { toast } from 'react-toastify';

export const useAuthStore = create((set) => ({
  isLoading: false,
  email: null,
  token: null,
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
        token: response?.data?.data?.access_token,
        email: body.email
      });
      toast.success('Inicio de sesión exitoso');
      return { status: 200 };
    } catch (error) {
      toast.error('Email o contraseña inválidos');
      return { status: 400 };
    } finally {
      set({ isLoading: false });
    }
  },
  register: async (body, shop_id) => {
    const body_cpy = { ...body };
    delete body_cpy['password_2'];

    const client = getAxiosInstance(shop_id);
    set({ isLoading: true });
    try {
      await client.post(`${import.meta.env.VITE_BASE_URL}/users`, body, {
        headers: { 'Shop-Id': shop_id, 'Content-Type': 'application/json' },
      });
      toast.success('Usuario creado exitosamente, redireccionando a Login');
      return { status: 200 };
    } catch (error) {
      toast.error(
        error.response?.data?.detail ||
          'Hubo un error al intentar crear el usuario. Consultar con un operador',
      );
      return { status: 400 };
    } finally {
      set({ isLoading: false });
    }
  },
}));
