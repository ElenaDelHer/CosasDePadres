import { useContext, useState } from "react";
import { HistoryContext } from "../contexto/HistoryContext";


const HistoryComponent = () => {
  // Traigo las historias a través del contexto
  const { filterHistory } = useContext(HistoryContext);

  // Estado para manejar la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Número de historias por página

  const totalPages = Math.ceil(filterHistory.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filterHistory.slice(startIndex, endIndex);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="section-history-cards">
      <h1 className="title-section-history">Historias de padres</h1>

      <div className="history-cards">
        {currentItems.map((history) => (
          <div className="container-cards" key={history.id}>
            <div className="container-photo">
              <img src={history.imagen} alt="Historia" />
            </div>
            <div className="card-tema">
              <h3>{history.tematica}</h3>
              <p className="history-history">{history.historia}</p>
              <h5 className="history-autor">{history.autor}</h5>
            </div>
          </div>
        ))}
      </div>
    
    
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => goToPage(currentPage - 1)}>
              Anterior
            </button>
          </li>

          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i + 1} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
              <button className="page-link" onClick={() => goToPage(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}

          <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => goToPage(currentPage + 1)}>
              Siguiente
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default HistoryComponent;

