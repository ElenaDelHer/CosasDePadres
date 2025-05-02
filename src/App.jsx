// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Proveedores
import { HistoryProvider } from './contexto/HistoryContext'

// Componentes
import ModalBootstrap from "./componentes/ModalBootstrap";
import HistoryComponent from './componentes/HistoryComponent';
import NavbarBootstrap from './componentes/NavbarBootstrap';
import FooterBootstrap from './componentes/FooterComponente';
import ContactForm from './componentes/ContactFormComponent';

// Páginas (pueden ser los mismos componentes si aún no los tienes separados)
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <NavbarBootstrap />
      <ModalBootstrap />
      <HistoryProvider>
        <Routes>
          <Route path="/" element={<HistoryComponent />} />
          <Route path="/historias" element={<HistoryComponent />} />
          <Route path="/contacto" element={<ContactForm />} />
        </Routes>
      </HistoryProvider>
      <FooterBootstrap />
    </BrowserRouter>
  );
}

export default App;

