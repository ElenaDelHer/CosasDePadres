//IMPORTACIONES DE LOS PROVEEDORES
import { HistoryProvider } from './contexto/HistoryContext'
import ModalBootstrap from "./componentes/ModalBootstrap";
//IMPORTACIONES COMPONENTES
import HistoryComponent from './componentes/HistoryComponent';
import NavbarBootstrap from './componentes/NavbarBootstrap';
import './App.css'

function App() {
  

  return (
    <>
    <NavbarBootstrap/>
    <ModalBootstrap />
   
      <HistoryProvider>
        <HistoryComponent/>
      </HistoryProvider>
  </>

   
  )
}

export default App
