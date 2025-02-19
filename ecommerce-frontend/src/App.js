import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./components/Cart"; // Importando diretamente o Cart
import CategoryPage from "./pages/CategoryPage"; // Nova página para categorias
import { CartProvider } from "./context/CartContext"; // Importa o contexto do carrinho
import ResponsiveFooter from "./components/ResponsiveFooter";
import Eu from "./components/Eu";
import Perfil from "./components/perfil"; // Usando o nome correto do arquivo
import Pagamento from "./components/pagamento"; // Corrigido o caminho


function App() {
  return (
    <CartProvider> {/* Envolvendo o app com o contexto do carrinho */}
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} /> {/* Usando o Cart diretamente */}
          <Route path="/category/:categoryName" element={<CategoryPage />} /> {/* Nova rota para categorias */}
          <Route path="/profile" element={<Eu />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/pagamento" element={<Pagamento />} />
        </Routes>
        <ResponsiveFooter />
      </Router>
    </CartProvider>
  );
}

export default App;
