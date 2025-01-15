import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Login } from './pages/Login.jsx';
import { Register } from './pages/Register.jsx';
import { Contact } from './pages/Contact.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Navigate,
} from 'react-router';
import { Layout } from './pages/Layout.jsx';
import { Checkout } from './pages/Checkout.jsx';
import { Detail } from './pages/Detail.jsx';
import { Shop } from './pages/Shop.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { useShopStore } from './store/useShopStore.js';
import { useEffect } from 'react';

const ROUTES = [
  { path: '/:shop_id/', component: <App /> },
  { path: '/:shop_id/shop', component: <Shop /> },
  { path: '/:shop_id/contact', component: <Contact /> },
  { path: '/:shop_id/checkout', component: <Checkout /> },
  { path: '/:shop_id/detail', component: <Detail /> },
  { path: '/:shop_id/login', component: <Login /> },
  { path: '/:shop_id/register', component: <Register /> },
];

const ProtectedRoute = ({ element }) => {
  const { shop_id } = useParams();
  const { verifyShop, isValid, isLoading } = useShopStore();

  useEffect(() => {
    const fetchStore = async () => {
      await verifyShop(shop_id);
    };
    fetchStore();
  }, [shop_id, verifyShop]);

  if (isValid == false && !isLoading) {
    return <Navigate to="/not-found" replace />;
  }
  return element;
};

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/not-found" element={<NotFound />} />
      {ROUTES.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <ProtectedRoute element={<Layout>{route.component}</Layout>} />
            }
          />
        );
      })}
    </Routes>
  </BrowserRouter>,
);
