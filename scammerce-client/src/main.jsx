import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Login } from './pages/Login.jsx';
import { Register } from './pages/Register.jsx';
import { Contact } from './pages/Contact.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { Layout } from './pages/Layout.jsx';
import { Checkout } from './pages/Checkout.jsx';
import { Detail } from './pages/Detail.jsx';
import { Shop } from './pages/Shop.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route
        path="/"
        element={
          <Layout>
            <App />
          </Layout>
        }
      />
      <Route
        path="/shop"
        element={
          <Layout>
            <Shop />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
      <Route
        path="/checkout"
        element={
          <Layout>
            <Checkout />
          </Layout>
        }
      />
      <Route
        path="/detail"
        element={
          <Layout>
            <Detail />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/register"
        element={
          <Layout>
            <Register />
          </Layout>
        }
      />
    </Routes>
  </BrowserRouter>,
);
