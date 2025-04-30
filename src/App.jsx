//IMPORTACIONES DE LOS PROVEEDORES
import { HistoryProvider } from './contexto/HistoryContext'
import { ModalInicial } from './contexto/ModalInicial';
//IMPORTACIONES COMPONENTES
import HistoryComponent from './componentes/HistoryComponent';
import './App.css'

function App() {
  

  return (
    <ModalInicial>
      <HistoryProvider>
        <HistoryComponent/>
      </HistoryProvider>

    </ModalInicial>
  )
}

export default App
